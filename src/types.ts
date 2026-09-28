export type Block =
  | { type: 'h'; text: string }
  | { type: 'p'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'steps'; title?: string; items: string[] }
  | { type: 'code'; lang: 'html' | 'css' | 'text'; code: string; title?: string }
  | { type: 'tip'; kind?: 'tip' | 'warning' | 'info' | 'a11y'; title?: string; text: string }
  | { type: 'preview'; title?: string; html: string; css?: string; height?: number; resizable?: boolean }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'compare'; left: { title: string; code: string }; right: { title: string; code: string } };

export interface QuizQuestion {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export interface Exercise {
  title: string;
  intro: string;
  tasks: string[];
  starterHtml?: string;
  starterCss?: string;
  solutionHtml?: string;
  solutionCss?: string;
}

export interface Lesson {
  id: string;
  title: string;
  duration: number; // Minuten
  goals: string[];
  blocks: Block[];
  exercise?: Exercise;
  quiz?: QuizQuestion[];
  summary: string[];
}

export interface Module {
  id: string;
  number: number;
  title: string;
  description: string;
  icon: string;
  lessons: Lesson[];
}

export interface GlossaryEntry {
  term: string;
  definition: string;
  example?: string;
}

export interface TroubleItem {
  problem: string;
  causes: string[];
  fixes: string[];
  code?: string;
}
