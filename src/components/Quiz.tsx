import { useState } from 'react';
import type { QuizQuestion } from '../types';

export function Quiz({ questions, lessonId }: { questions: QuizQuestion[]; lessonId: string }) {
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const correct = Object.entries(answers).filter(([qi, a]) => questions[Number(qi)].answer === a).length;
  const done = Object.keys(answers).length === questions.length;

  return (
    <section aria-labelledby={`${lessonId}-quiz`} className="my-10 rounded-2xl border-2 border-slate-200 bg-white p-6 hc-border">
      <h3 id={`${lessonId}-quiz`} className="mb-1 text-2xl font-bold text-slate-900 hc-text">
        ✅ Kurz geprüft
      </h3>
      <p className="mb-6 text-slate-600 hc-text">Wählen Sie eine Antwort. Sie erhalten sofort eine Erklärung – Fehler sind hier ausdrücklich erlaubt.</p>
      <div className="space-y-8">
        {questions.map((q, qi) => {
          const chosen = answers[qi];
          const answered = chosen !== undefined;
          return (
            <fieldset key={qi} className="rounded-xl border border-slate-200 p-4 hc-border">
              <legend className="px-2 text-lg font-semibold text-slate-900 hc-text">
                Frage {qi + 1}: {q.question}
              </legend>
              <div className="mt-2 space-y-2">
                {q.options.map((opt, oi) => {
                  const isChosen = chosen === oi;
                  const isCorrect = q.answer === oi;
                  let cls = 'border-slate-300 bg-white hover:bg-slate-50';
                  if (answered && isCorrect) cls = 'border-emerald-600 bg-emerald-50';
                  else if (answered && isChosen && !isCorrect) cls = 'border-red-500 bg-red-50';
                  return (
                    <label key={oi} className={`flex cursor-pointer items-start gap-3 rounded-lg border-2 p-3 ${cls} hc-border`}>
                      <input
                        type="radio"
                        name={`${lessonId}-q${qi}`}
                        value={oi}
                        checked={isChosen}
                        disabled={answered}
                        onChange={() => setAnswers((a) => ({ ...a, [qi]: oi }))}
                        className="mt-1 h-5 w-5 accent-indigo-700"
                      />
                      <span className="text-slate-800 hc-text">
                        {opt}
                        {answered && isCorrect && <span className="ml-2 font-semibold text-emerald-700"> ✓ Richtig</span>}
                        {answered && isChosen && !isCorrect && <span className="ml-2 font-semibold text-red-700"> ✗ Leider nicht</span>}
                      </span>
                    </label>
                  );
                })}
              </div>
              {answered && (
                <p role="status" className="mt-3 rounded-lg bg-slate-100 p-3 text-slate-800 hc-text">
                  <strong>Erklärung:</strong> {q.explanation}
                </p>
              )}
            </fieldset>
          );
        })}
      </div>
      {done && (
        <p role="status" className="mt-6 rounded-xl bg-indigo-50 p-4 text-lg font-semibold text-indigo-900 hc-text">
          Ergebnis: {correct} von {questions.length} richtig.{' '}
          {correct === questions.length ? 'Ausgezeichnet! 🎉' : 'Schauen Sie sich die Erklärungen in Ruhe an – dann sitzt es.'}
          <button
            type="button"
            onClick={() => setAnswers({})}
            className="ml-4 rounded-lg border-2 border-indigo-700 px-3 py-1 text-base font-medium text-indigo-800 hover:bg-indigo-100"
          >
            Noch einmal
          </button>
        </p>
      )}
    </section>
  );
}
