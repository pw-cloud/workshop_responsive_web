import { useEffect } from 'react';
import type { Lesson, Module } from '../types';
import { getAdjacent } from '../data/course';
import { BlockRenderer } from './BlockRenderer';
import { Quiz } from './Quiz';
import { CodeEditor } from './CodeEditor';
import { RichText } from './RichText';

interface Props {
  lesson: Lesson;
  module: Module;
  completed: boolean;
  onToggleComplete: () => void;
  onNavigate: (lessonId: string) => void;
}

export function LessonView({ lesson, module, completed, onToggleComplete, onNavigate }: Props) {
  const { prev, next } = getAdjacent(lesson.id);
  const lessonIndex = module.lessons.findIndex((l) => l.id === lesson.id) + 1;

  useEffect(() => {
    window.scrollTo({ top: 0 });
    document.title = `${lesson.title} – Kurs: Responsive Websites`;
  }, [lesson.id, lesson.title]);

  const ex = lesson.exercise;
  const hasEditor = ex && (ex.starterHtml !== undefined || ex.starterCss !== undefined);

  return (
    <article className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Kopf */}
      <header className="mb-8 border-b-2 border-slate-200 pb-6 hc-border">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-indigo-700 hc-text">
          Modul {module.number}: {module.title} · Lektion {lessonIndex} von {module.lessons.length}
        </p>
        <h2 className="mb-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl hc-text">{lesson.title}</h2>
        <div className="flex flex-wrap items-center gap-4 text-slate-600 hc-text">
          <span>⏱️ ca. {lesson.duration} Minuten</span>
          {completed && <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800">✓ Erledigt</span>}
        </div>
      </header>

      {/* Lernziele */}
      <section aria-labelledby="ziele" className="mb-8 rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-6 hc-border">
        <h3 id="ziele" className="mb-3 text-xl font-bold text-emerald-900 hc-text">
          🎯 Das lernen Sie in dieser Lektion
        </h3>
        <ul className="space-y-2">
          {lesson.goals.map((g, i) => (
            <li key={i} className="flex gap-3 text-emerald-950 hc-text">
              <span aria-hidden="true" className="text-emerald-600">
                ✔
              </span>
              {g}
            </li>
          ))}
        </ul>
      </section>

      {/* Inhalt */}
      <div className="prose-course">
        {lesson.blocks.map((b, i) => (
          <BlockRenderer key={i} block={b} />
        ))}
      </div>

      {/* Übung */}
      {ex && (
        <section aria-labelledby="uebung" className="my-10 rounded-2xl border-2 border-amber-300 bg-amber-50 p-6 hc-border">
          <h3 id="uebung" className="mb-2 text-2xl font-bold text-amber-950 hc-text">
            ✍️ {ex.title}
          </h3>
          <p className="mb-4 text-amber-950 hc-text">
            <RichText text={ex.intro} />
          </p>
          <ol className="mb-4 list-decimal space-y-2 pl-6 text-amber-950 marker:font-bold hc-text">
            {ex.tasks.map((t, i) => (
              <li key={i}>
                <RichText text={t} />
              </li>
            ))}
          </ol>
          {hasEditor ? (
            <>
              <p className="mb-2 text-sm text-amber-900 hc-text">
                Sie können direkt hier arbeiten. Ihre Eingaben werden im Browser gespeichert. Mit „Lösung anzeigen“ vergleichen Sie Ihr Ergebnis.
              </p>
              <CodeEditor
                initialHtml={ex.starterHtml ?? ''}
                initialCss={ex.starterCss ?? ''}
                solutionHtml={ex.solutionHtml}
                solutionCss={ex.solutionCss}
                storageKey={`ex-${lesson.id}`}
              />
            </>
          ) : (
            <p className="text-sm text-amber-900 hc-text">Diese Übung führen Sie auf Ihrem eigenen Computer durch.</p>
          )}
        </section>
      )}

      {/* Quiz */}
      {lesson.quiz && lesson.quiz.length > 0 && <Quiz questions={lesson.quiz} lessonId={lesson.id} />}

      {/* Zusammenfassung */}
      <section aria-labelledby="zusammenfassung" className="my-10 rounded-2xl bg-slate-900 p-6 text-white">
        <h3 id="zusammenfassung" className="mb-3 text-2xl font-bold">
          📌 Das Wichtigste in Kürze
        </h3>
        <ul className="space-y-2">
          {lesson.summary.map((s, i) => (
            <li key={i} className="flex gap-3">
              <span aria-hidden="true" className="text-amber-400">
                ★
              </span>
              <span>
                <RichText text={s} />
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Abschluss & Navigation */}
      <div className="my-8 flex flex-col items-center gap-4 rounded-2xl border-2 border-indigo-200 bg-indigo-50 p-6 text-center hc-border">
        <p className="text-lg font-semibold text-indigo-950 hc-text">
          {completed ? 'Diese Lektion haben Sie abgeschlossen.' : 'Fertig mit dieser Lektion?'}
        </p>
        <button
          type="button"
          onClick={onToggleComplete}
          aria-pressed={completed}
          className={`rounded-xl px-6 py-3 text-lg font-bold shadow-md focus-visible:outline-amber-500 ${
            completed ? 'border-2 border-indigo-700 bg-white text-indigo-800 hover:bg-indigo-100' : 'bg-indigo-700 text-white hover:bg-indigo-800'
          }`}
        >
          {completed ? '↩ Als nicht erledigt markieren' : '✓ Lektion als erledigt markieren'}
        </button>
      </div>

      <nav aria-label="Lektionsnavigation" className="mt-8 grid gap-4 sm:grid-cols-2">
        {prev ? (
          <button
            type="button"
            onClick={() => onNavigate(prev.lesson.id)}
            className="rounded-xl border-2 border-slate-300 bg-white p-4 text-left hover:border-indigo-500 hover:bg-indigo-50 hc-border"
          >
            <span className="block text-sm text-slate-500 hc-text">← Vorherige Lektion</span>
            <span className="block font-semibold text-slate-900 hc-text">{prev.lesson.title}</span>
          </button>
        ) : (
          <div />
        )}
        {next ? (
          <button
            type="button"
            onClick={() => onNavigate(next.lesson.id)}
            className="rounded-xl border-2 border-indigo-600 bg-indigo-600 p-4 text-left text-white hover:bg-indigo-700 sm:text-right"
          >
            <span className="block text-sm text-indigo-100">Nächste Lektion →</span>
            <span className="block font-semibold">{next.lesson.title}</span>
          </button>
        ) : (
          <div className="rounded-xl border-2 border-emerald-500 bg-emerald-50 p-4 text-center text-emerald-900 sm:text-right hc-text">
            <span className="block font-bold">🎓 Sie haben den Kurs beendet!</span>
            <span className="block text-sm">Schauen Sie sich die Abschluss-Checkliste an.</span>
          </div>
        )}
      </nav>
    </article>
  );
}
