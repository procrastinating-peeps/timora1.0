import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { topic, educationLevel } = await req.json();

    if (!topic) {
      return NextResponse.json({ error: 'Topic is required' }, { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'OpenAI API key not configured' }, { status: 500 });
    }

    const systemPrompt = `You are Timora's Academic AI Assistant. 
The user is studying at level: ${educationLevel || 'Undergraduate'}.
Given a topic, provide:
1. A concise, clear academic overview.
2. 3-4 key subtopics/formulas to master.
3. 2-3 specific high-quality YouTube search video recommendations (build reliable YouTube search URLs: https://www.youtube.com/results?search_query=...).
4. 2-3 free authoritative articles, documentation, or study guides.

Return ONLY a valid JSON object matching this schema:
{
  "summary": "Short explanation of the topic",
  "keyConcepts": ["Concept 1", "Concept 2", "Concept 3"],
  "resources": [
    {
      "type": "youtube",
      "title": "Clear video title",
      "url": "https://www.youtube.com/results?search_query=...",
      "source": "Channel/Platform name",
      "description": "Why this video is helpful"
    },
    {
      "type": "article",
      "title": "Study Material Title",
      "url": "https://en.wikipedia.org/wiki/...",
      "source": "Resource source",
      "description": "Comprehensive reference notes"
    }
  ]
}`;

    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: `Topic: ${topic}` },
        ],
        response_format: { type: 'json_object' },
        temperature: 0.3,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      return NextResponse.json({ error: `OpenAI error: ${err}` }, { status: 502 });
    }

    const data = await res.json();
    const result = JSON.parse(data.choices[0].message.content);

    return NextResponse.json(result);
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Internal server error' }, { status: 500 });
  }
}