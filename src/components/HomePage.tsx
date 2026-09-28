import { modules, totalLessons, totalMinutes } from '../data/course';
import type { Page } from '../App';

interface Props {
  completed: Set<string>;
  onNavigateLesson: (id: string) => void;
  onNavigatePage: (p: Page) => void;
  lastLessonId?: string;
}

export function HomePage({ completed, onNavigateLesson, onNavigatePage, lastLessonId }: Props) {
  const done = completed.size;
  const hours = Math.round((totalMinutes / 60) * 10) / 10;
  const nextLesson = modules.flatMap((m) => m.lessons).find((l) => !completed.has(l.id));

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="mb-12 grid items-center gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <p className="mb-3 inline-block rounded-full bg-indigo-100 px-4 py-1 text-sm font-bold text-indigo-800">Für Einsteigerinnen und Einsteiger · Keine Vorkenntnisse nötig</p>
          <h1 className="mb-5 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl hc-text">
            Ihre erste responsive Website – Schritt für Schritt, in Ruhe erklärt.
          </h1>
          <p className="mb-6 max-w-[60ch] text-xl text-slate-700 hc-text">
            Lernen Sie, wie eine Website entsteht, die auf dem Handy genauso gut funktioniert wie auf dem großen Bildschirm – mit verständlichen Erklärungen,
            Live-Beispielen zum Ausprobieren und einem echten Abschlussprojekt. Für alle, die es wirklich verstehen wollen.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onNavigateLesson(lastLessonId && done > 0 ? (nextLesson?.id ?? lastLessonId) : modules[0].lessons[0].id)}
              className="rounded-xl bg-indigo-700 px-7 py-4 text-lg font-bold text-white shadow-lg hover:bg-indigo-800 focus-visible:outline-amber-500"
            >
              {done > 0 ? '▶ Weiterlernen' : '▶ Kurs starten'}
            </button>
            <button
              type="button"
              onClick={() => onNavigatePage('playground')}
              className="rounded-xl border-2 border-indigo-700 bg-white px-7 py-4 text-lg font-bold text-indigo-800 hover:bg-indigo-50"
            >
              Übungsplatz öffnen
            </button>
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-lg hc-border">
            <h2 className="mb-4 text-lg font-bold text-slate-900 hc-text">Ihr Fortschritt</h2>
            <div className="mb-2 flex items-end justify-between">
              <span className="text-4xl font-extrabold text-indigo-700">{done}</span>
              <span className="text-slate-600 hc-text">von {totalLessons} Lektionen</span>
            </div>
            <div className="mb-5 h-3 w-full overflow-hidden rounded-full bg-slate-200" role="progressbar" aria-valuenow={done} aria-valuemin={0} aria-valuemax={totalLessons} aria-label="Erledigte Lektionen">
              <div className="h-full rounded-full bg-emerald-500" style={{ width: `${(done / totalLessons) * 100}%` }} />
            </div>
            <dl className="grid grid-cols-3 gap-3 text-center">
              <div className="rounded-xl bg-slate-50 p-3">
                <dt className="text-xs font-semibold uppercase text-slate-500 hc-text">Module</dt>
                <dd className="text-2xl font-bold text-slate-900 hc-text">{modules.length}</dd>
              </div>
              <div className="rounded-xl bg-slate-50 p-3">
                <dt className="text-xs font-semibold uppercase text-slate-500 hc-text">Lektionen</dt>
                <dd className="text-2xl font-bold text-slate-900 hc-text">{totalLessons}</dd>
              </div>
              <div className="rounded-xl bg-slate-50 p-3">
                <dt className="text-xs font-semibold uppercase text-slate-500 hc-text">Dauer</dt>
                <dd className="text-2xl font-bold text-slate-900 hc-text">~{hours} h</dd>
              </div>
            </dl>
            {nextLesson && done > 0 && (
              <p className="mt-4 text-sm text-slate-600 hc-text">
                Als Nächstes: <strong>{nextLesson.title}</strong>
              </p>
            )}
          </div>
        </div>
      </section>

      {/* So funktioniert der Kurs */}
      <section aria-labelledby="so-gehts" className="mb-12">
        <h2 id="so-gehts" className="mb-6 text-3xl font-bold text-slate-900 hc-text">
          So funktioniert dieser Kurs
        </h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            ['📖', 'Verständlich erklärt', 'Jeder Fachbegriff wird eingeführt, bevor er benutzt wird. Mit Vergleichen aus dem Alltag statt Fachchinesisch.'],
            ['🖱️', 'Sofort ausprobieren', 'Live-Beispiele mit Breiten-Regler zeigen direkt, wie sich eine Seite auf Handy, Tablet und Monitor verhält.'],
            ['🏗️', 'Ein echtes Projekt', 'Sie bauen eine komplette Vereinswebsite – vom leeren Ordner bis zur Veröffentlichung im Internet.'],
            ['♿', 'Barrierefrei von Anfang an', 'Große Schrift, Kontrast, Tastaturbedienung: Sie lernen es gleich richtig – und dieser Kurs macht es vor.'],
          ].map(([icon, title, text]) => (
            <div key={title} className="rounded-2xl border-2 border-slate-200 bg-white p-5 hc-border">
              <span aria-hidden="true" className="mb-3 block text-3xl">
                {icon}
              </span>
              <h3 className="mb-2 text-lg font-bold text-slate-900 hc-text">{title}</h3>
              <p className="text-slate-700 hc-text">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Module */}
      <section aria-labelledby="module">
        <h2 id="module" className="mb-2 text-3xl font-bold text-slate-900 hc-text">
          Der Kursaufbau
        </h2>
        <p className="mb-6 max-w-[70ch] text-slate-700 hc-text">
          Zwölf Module, die aufeinander aufbauen. Beginnen Sie oben und arbeiten Sie sich in Ihrem Tempo nach unten – Ihr Fortschritt wird in diesem Browser gespeichert.
        </p>
        <ol className="space-y-4">
          {modules.map((m) => {
            const mDone = m.lessons.filter((l) => completed.has(l.id)).length;
            const mMin = m.lessons.reduce((s, l) => s + l.duration, 0);
            return (
              <li key={m.id} className="rounded-2xl border-2 border-slate-200 bg-white p-5 shadow-sm hc-border sm:p-6">
                <div className="flex flex-wrap items-start gap-4">
                  <span aria-hidden="true" className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-3xl">
                    {m.icon}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold uppercase tracking-wide text-indigo-700 hc-text">
                      Modul {m.number} · {m.lessons.length} Lektionen · ca. {mMin} Min.
                    </p>
                    <h3 className="text-2xl font-bold text-slate-900 hc-text">{m.title}</h3>
                    <p className="mt-1 max-w-[70ch] text-slate-700 hc-text">{m.description}</p>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-bold ${mDone === m.lessons.length ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-700'}`}
                  >
                    {mDone === m.lessons.length ? '✓ Abgeschlossen' : `${mDone}/${m.lessons.length} erledigt`}
                  </span>
                </div>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {m.lessons.map((l, i) => (
                    <li key={l.id}>
                      <button
                        type="button"
                        onClick={() => onNavigateLesson(l.id)}
                        className="flex w-full items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 text-left hover:border-indigo-400 hover:bg-indigo-50 focus-visible:outline-indigo-700 hc-border"
                      >
                        <span
                          aria-hidden="true"
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold ${completed.has(l.id) ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'}`}
                        >
                          {completed.has(l.id) ? '✓' : i + 1}
                        </span>
                        <span className="flex-1 text-slate-800 hc-text">{l.title}</span>
                        <span className="shrink-0 text-sm text-slate-500 hc-text">{l.duration} Min.</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>
      </section>
    </div>
  );
}
