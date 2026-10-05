import Link from 'next/link';
import { Sparkles, Video, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 pt-16 pb-20 sm:pt-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
            <Sparkles className="h-3.5 w-3.5" /> Instant Topic Discovery & Curation
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            Learn Smarter. <br />
            <span className="text-indigo-600">Build Your Future.</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Enter any school or engineering topic. Timora’s AI delivers instant concept breakdowns,
            hand-picked YouTube lessons, and trusted reference material in seconds.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-4">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-indigo-500"
            >
              Start Studying Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="mx-auto mt-20 max-w-6xl grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
              <Video className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">Curated Video Lectures</h3>
            <p className="mt-2 text-sm text-slate-600">
              Direct links to high-yield YouTube explainers matching your academic syllabus.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
              <BookOpen className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">Verified Study Material</h3>
            <p className="mt-2 text-sm text-slate-600">
              Instant access to core summaries, official documentation, and reference notes.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
              <CheckCircle className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">Concept Checkpoints</h3>
            <p className="mt-2 text-sm text-slate-600">
              Get an automated breakdown of key formulas and topics needed for exam readiness.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}