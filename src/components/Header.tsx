import { useEffect, useRef } from 'react';
import type { Page } from '../App';

interface Props {
  page: Page;
  onNavigate: (page: Page) => void;
  fontLevel: number;
  onFontLevel: (n: number) => void;
  highContrast: boolean;
  onHighContrast: (v: boolean) => void;
  onToggleSidebar: () => void;
  progress: { done: number; total: number };
}

const navItems: { page: Page; label: string }[] = [
  { page: 'home', label: 'Start' },
  { page: 'lesson', label: 'Lektionen' },
  { page: 'playground', label: 'Übungsplatz' },
  { page: 'trouble', label: 'Fehlerbehebung' },
  { page: 'glossary', label: 'Glossar' },
  { page: 'checklist', label: 'Checkliste' },
];

export function Header({ page, onNavigate, fontLevel, onFontLevel, highContrast, onHighContrast, onToggleSidebar, progress }: Props) {
  const pct = Math.round((progress.done / progress.total) * 100);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => document.documentElement.style.setProperty('--header-h', `${el.offsetHeight}px`);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <header ref={ref} className="sticky top-0 z-20 border-b-2 border-slate-200 bg-white/95 backdrop-blur hc-bg hc-border">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 px-4 py-3 sm:px-6">
        {page === 'lesson' && (
          <button
            type="button"
            onClick={onToggleSidebar}
            className="rounded-lg border-2 border-slate-300 px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100 lg:hidden"
            aria-controls="kursnavigation"
            aria-label="Kursübersicht öffnen"
          >
            ☰ Kursinhalt
          </button>
        )}
        <button type="button" onClick={() => onNavigate('home')} className="flex items-center gap-2 rounded-lg text-left focus-visible:outline-indigo-700">
          <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-700 text-xl text-white">
            ⌂
          </span>
          <span className="leading-tight">
            <span className="block text-base font-extrabold text-slate-900 hc-text">Meine erste responsive Website</span>
            <span className="block text-xs text-slate-500 hc-text">Der Einsteigerkurs</span>
          </span>
        </button>

        <nav aria-label="Hauptnavigation" className="order-3 w-full lg:order-none lg:ml-4 lg:w-auto lg:flex-1">
          <ul className="flex flex-wrap gap-1">
            {navItems.map((n) => (
              <li key={n.page}>
                <button
                  type="button"
                  onClick={() => onNavigate(n.page)}
                  aria-current={page === n.page ? 'page' : undefined}
                  className={`rounded-lg px-3 py-2 text-[0.95rem] font-semibold hover:bg-indigo-50 focus-visible:outline-indigo-700 ${
                    page === n.page ? 'bg-indigo-100 text-indigo-900 underline decoration-2 underline-offset-4' : 'text-slate-700'
                  } hc-text`}
                >
                  {n.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2" role="group" aria-label="Anzeige-Einstellungen">
          <span className="hidden text-sm text-slate-600 sm:inline hc-text" aria-hidden="true">
            Schrift:
          </span>
          <button
            type="button"
            onClick={() => onFontLevel(Math.max(0, fontLevel - 1))}
            disabled={fontLevel === 0}
            className="h-10 w-10 rounded-lg border-2 border-slate-300 text-sm font-bold text-slate-800 hover:bg-slate-100 disabled:opacity-40"
            aria-label="Schrift verkleinern"
          >
            A−
          </button>
          <button
            type="button"
            onClick={() => onFontLevel(Math.min(3, fontLevel + 1))}
            disabled={fontLevel === 3}
            className="h-10 w-10 rounded-lg border-2 border-slate-300 text-lg font-bold text-slate-800 hover:bg-slate-100 disabled:opacity-40"
            aria-label="Schrift vergrößern"
          >
            A+
          </button>
          <button
            type="button"
            onClick={() => onHighContrast(!highContrast)}
            aria-pressed={highContrast}
            className={`h-10 rounded-lg border-2 px-3 text-sm font-bold ${highContrast ? 'border-black bg-black text-white' : 'border-slate-300 text-slate-800 hover:bg-slate-100'}`}
            aria-label="Hohen Kontrast umschalten"
            title="Hoher Kontrast"
          >
            ◐
          </button>
        </div>
      </div>
      <div className="h-1.5 w-full bg-slate-200" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label={`Kursfortschritt: ${pct} Prozent`}>
        <div className="h-full bg-emerald-500 transition-all" style={{ width: `${pct}%` }} />
      </div>
    </header>
  );
}
