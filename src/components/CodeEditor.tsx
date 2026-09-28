import { useEffect, useId, useState } from 'react';
import { LivePreview } from './LivePreview';

interface Props {
  initialHtml: string;
  initialCss: string;
  solutionHtml?: string;
  solutionCss?: string;
  height?: number;
  storageKey?: string;
}

export function CodeEditor({ initialHtml, initialCss, solutionHtml, solutionCss, height = 320, storageKey }: Props) {
  const load = (k: string, fallback: string) => {
    if (!storageKey) return fallback;
    try {
      return localStorage.getItem(`${storageKey}-${k}`) ?? fallback;
    } catch {
      return fallback;
    }
  };
  const [html, setHtml] = useState(() => load('html', initialHtml));
  const [css, setCss] = useState(() => load('css', initialCss));
  const [applied, setApplied] = useState({ html, css });
  const [tab, setTab] = useState<'html' | 'css'>(initialCss || !initialHtml ? 'css' : 'html');
  const [autoRun, setAutoRun] = useState(true);
  const id = useId();

  useEffect(() => {
    if (!autoRun) return;
    const t = setTimeout(() => setApplied({ html, css }), 400);
    return () => clearTimeout(t);
  }, [html, css, autoRun]);

  useEffect(() => {
    if (!storageKey) return;
    try {
      localStorage.setItem(`${storageKey}-html`, html);
      localStorage.setItem(`${storageKey}-css`, css);
    } catch {
      /* ignorieren */
    }
  }, [html, css, storageKey]);

  const reset = () => {
    setHtml(initialHtml);
    setCss(initialCss);
    setApplied({ html: initialHtml, css: initialCss });
  };

  const showSolution = () => {
    const h = solutionHtml ?? initialHtml;
    const c = solutionCss ?? initialCss;
    setHtml(h);
    setCss(c);
    setApplied({ html: h, css: c });
  };

  const hasSolution = Boolean(solutionHtml || solutionCss);

  return (
    <div className="my-4 overflow-hidden rounded-xl border-2 border-slate-300 bg-white hc-border">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-300 bg-slate-100 px-3 py-2 hc-border">
        <div role="tablist" aria-label="Code-Bereiche" className="flex gap-1">
          {(['html', 'css'] as const).map((t) => (
            <button
              key={t}
              role="tab"
              id={`${id}-tab-${t}`}
              aria-selected={tab === t}
              aria-controls={`${id}-panel-${t}`}
              type="button"
              onClick={() => setTab(t)}
              className={`rounded-md px-4 py-2 text-sm font-bold uppercase ${tab === t ? 'bg-slate-800 text-white' : 'bg-white text-slate-700 hover:bg-slate-200'}`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <label className="flex items-center gap-2 text-sm text-slate-700 hc-text">
            <input type="checkbox" checked={autoRun} onChange={(e) => setAutoRun(e.target.checked)} className="h-4 w-4 accent-indigo-700" />
            Automatisch aktualisieren
          </label>
          {!autoRun && (
            <button
              type="button"
              onClick={() => setApplied({ html, css })}
              className="rounded-md bg-indigo-700 px-3 py-1.5 text-sm font-semibold text-white hover:bg-indigo-800"
            >
              ▶ Ausführen
            </button>
          )}
          <button type="button" onClick={reset} className="rounded-md border border-slate-400 bg-white px-3 py-1.5 text-sm font-medium text-slate-800 hover:bg-slate-50">
            Zurücksetzen
          </button>
          {hasSolution && (
            <button
              type="button"
              onClick={showSolution}
              className="rounded-md border border-emerald-700 bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-900 hover:bg-emerald-100"
            >
              Lösung anzeigen
            </button>
          )}
        </div>
      </div>
      <div className="grid lg:grid-cols-2">
        <div className="min-w-0 border-b border-slate-300 lg:border-b-0 lg:border-r hc-border">
          <div role="tabpanel" id={`${id}-panel-html`} aria-labelledby={`${id}-tab-html`} hidden={tab !== 'html'}>
            <label htmlFor={`${id}-html`} className="sr-only">
              HTML-Code
            </label>
            <textarea
              id={`${id}-html`}
              value={html}
              onChange={(e) => setHtml(e.target.value)}
              spellCheck={false}
              className="block h-80 w-full resize-y bg-slate-900 p-4 font-mono text-[0.95rem] leading-relaxed text-slate-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-400 focus-visible:ring-inset"
              style={{ minHeight: height }}
            />
          </div>
          <div role="tabpanel" id={`${id}-panel-css`} aria-labelledby={`${id}-tab-css`} hidden={tab !== 'css'}>
            <label htmlFor={`${id}-css`} className="sr-only">
              CSS-Code
            </label>
            <textarea
              id={`${id}-css`}
              value={css}
              onChange={(e) => setCss(e.target.value)}
              spellCheck={false}
              className="block h-80 w-full resize-y bg-slate-900 p-4 font-mono text-[0.95rem] leading-relaxed text-slate-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-400 focus-visible:ring-inset"
              style={{ minHeight: height }}
            />
          </div>
        </div>
        <div className="min-w-0 p-2 [&>div]:my-0">
          <LivePreview html={applied.html} css={applied.css} height={height} resizable />
        </div>
      </div>
    </div>
  );
}
