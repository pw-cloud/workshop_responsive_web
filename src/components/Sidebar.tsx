import { modules } from '../data/course';

interface Props {
  currentLessonId?: string;
  completed: Set<string>;
  onNavigate: (lessonId: string) => void;
  open: boolean;
  onClose: () => void;
}

export function Sidebar({ currentLessonId, completed, onNavigate, open, onClose }: Props) {
  return (
    <>
      {open && <div className="fixed inset-0 z-30 bg-black/40 lg:hidden" onClick={onClose} aria-hidden="true" />}
      <nav
        id="kursnavigation"
        aria-label="Kursübersicht"
        className={`fixed inset-y-0 left-0 z-40 w-80 max-w-[85vw] overflow-y-auto border-r border-slate-200 bg-white pb-8 shadow-xl transition-transform lg:sticky lg:top-(--header-h) lg:bottom-auto lg:z-0 lg:h-[calc(100vh-var(--header-h))] lg:w-80 lg:translate-x-0 lg:shadow-none hc-border ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-200 p-4 lg:hidden hc-border">
          <span className="font-bold text-slate-900 hc-text">Kursinhalt</span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100"
            aria-label="Kursübersicht schließen"
          >
            ✕ Schließen
          </button>
        </div>
        <ol className="p-3">
          {modules.map((m) => {
            const doneCount = m.lessons.filter((l) => completed.has(l.id)).length;
            const isCurrentModule = m.lessons.some((l) => l.id === currentLessonId);
            return (
              <li key={m.id} className="mb-2">
                <details open={isCurrentModule} className="group rounded-lg">
                  <summary className="flex cursor-pointer list-none items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-slate-100 focus-visible:outline-indigo-700 [&::-webkit-details-marker]:hidden">
                    <span aria-hidden="true" className="text-xl">
                      {m.icon}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500 hc-text">Modul {m.number}</span>
                      <span className="block font-semibold leading-tight text-slate-900 hc-text">{m.title}</span>
                    </span>
                    <span
                      className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-bold ${doneCount === m.lessons.length ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'}`}
                      aria-label={`${doneCount} von ${m.lessons.length} Lektionen erledigt`}
                    >
                      {doneCount}/{m.lessons.length}
                    </span>
                    <span aria-hidden="true" className="text-slate-400 transition-transform group-open:rotate-90">
                      ▸
                    </span>
                  </summary>
                  <ol className="mt-1 ml-4 border-l-2 border-slate-200 pl-2 hc-border">
                    {m.lessons.map((l, idx) => {
                      const isCurrent = l.id === currentLessonId;
                      const done = completed.has(l.id);
                      return (
                        <li key={l.id}>
                          <button
                            type="button"
                            onClick={() => {
                              onNavigate(l.id);
                              onClose();
                            }}
                            aria-current={isCurrent ? 'page' : undefined}
                            className={`flex w-full items-start gap-2 rounded-lg px-3 py-2.5 text-left text-[0.95rem] leading-snug hover:bg-indigo-50 focus-visible:outline-indigo-700 ${
                              isCurrent ? 'bg-indigo-100 font-semibold text-indigo-900' : 'text-slate-700'
                            } hc-text`}
                          >
                            <span
                              aria-hidden="true"
                              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs ${done ? 'bg-emerald-600 text-white' : 'border-2 border-slate-300 text-slate-500'}`}
                            >
                              {done ? '✓' : idx + 1}
                            </span>
                            <span>
                              {l.title}
                              {done && <span className="sr-only"> (erledigt)</span>}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ol>
                </details>
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
