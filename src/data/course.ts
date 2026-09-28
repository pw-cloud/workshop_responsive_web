import type { Module, Lesson } from '../types';
import { modules1 } from './modules1';
import { modules2 } from './modules2';
import { modules3 } from './modules3';

export const modules: Module[] = [...modules1, ...modules2, ...modules3];

export const allLessons: { lesson: Lesson; module: Module }[] = modules.flatMap((m) =>
  m.lessons.map((lesson) => ({ lesson, module: m })),
);

export const totalLessons = allLessons.length;
export const totalMinutes = allLessons.reduce((sum, { lesson }) => sum + lesson.duration, 0);

export function findLesson(id: string) {
  return allLessons.find((l) => l.lesson.id === id);
}

export function getAdjacent(id: string) {
  const idx = allLessons.findIndex((l) => l.lesson.id === id);
  return {
    prev: idx > 0 ? allLessons[idx - 1] : undefined,
    next: idx >= 0 && idx < allLessons.length - 1 ? allLessons[idx + 1] : undefined,
  };
}
