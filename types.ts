export interface StudyResource {
  type: 'youtube' | 'pdf' | 'article' | 'book';
  title: string;
  url: string;
  source: string;
  description: string;
}

export interface AIStudyResponse {
  summary: string;
  keyConcepts: string[];
  resources: StudyResource[];
}