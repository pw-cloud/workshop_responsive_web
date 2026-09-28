import { useMemo, useState } from 'react';
import { troubleshooting } from '../data/troubleshooting';

export function TroubleshootingPage() {
  const [q, setQ] = useState('');
  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return troubleshooting;
    return troubleshooting
      .map((c) => ({
        ...c,
        items: c.items.filter(
          (i) => i.problem.toLowerCase().includes(s) || i.causes.some((x) => x.toLowerCase().includes(s)) || i.fixes.some((x) => x.toLowerCase().includes(s)),
        ),
      }))
      .filter((c) => c.items.length > 0);
  }, [q]);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <h1 className="mb-2 text-3xl font-extrabold text-slate-900 hc-text">🔧 Fehlerbehebungs-Guide</h1>
      <p className="mb-6 max-w-[70ch] text-lg text-slate-700 hc-text">
        Etwas funktioniert nicht wie erwartet? Hier finden Sie die häufigsten Probleme mit Ursachen und Lösungen. Klicken Sie auf ein Problem, um die Details aufzuklappen.
      </p>

      <div className="mb-6 rounded-2xl border-2 border-indigo-200 bg-indigo-50 p-5 hc-border">
        <h2 className="mb-2 text-lg font-bold text-indigo-950 hc-text">Immer zuerst prüfen</h2>
        <ol className="list-decimal space-y-1 pl-6 text-indigo-950 hc-text">
          <li>
            Datei gespeichert? (<kbd className="rounded border border-indigo-300 bg-white px-1.5 text-sm">Strg</kbd> + <kbd className="rounded border border-indigo-300 bg-white px-1.5 text-sm">S</kbd>)
          </li>
          <li>
            Seite ohne Cache neu geladen? (<kbd className="rounded border border-indigo-300 bg-white px-1.5 text-sm">Strg</kbd> + <kbd className="rounded border border-indigo-300 bg-white px-1.5 text-sm">Umschalt</kbd> +{' '}
            <kbd className="rounded border border-indigo-300 bg-white px-1.5 text-sm">R</kbd>)
          </li>
          <li>Letzte Änderung rückgängig gemacht – funktioniert es dann wieder?</li>
          <li>
            Entwicklerwerkzeuge (<kbd className="rounded border border-indigo-300 bg-white px-1.5 text-sm">F12</kbd>) → Konsole: rote Fehlermeldungen?
          </li>
        </ol>
      </div>

      <div className="mb-6">
        <label htmlFor="fehler-suche" className="mb-1 block font-semibold text-slate-800 hc-text">
          Problem suchen
        </label>
        <input
          id="fehler-suche"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="z. B. Scrollbalken, Bild, Media Query …"
          className="w-full rounded-xl border-2 border-slate-300 px-4 py-3 text-lg"
        />
      </div>

      {filtered.map((cat) => (
        <section key={cat.category} aria-labelledby={`cat-${cat.category}`} className="mb-8">
          <h2 id={`cat-${cat.category}`} className="mb-3 text-2xl font-bold text-slate-900 hc-text">
            {cat.category}
          </h2>
          <div className="space-y-3">
            {cat.items.map((item) => (
              <details key={item.problem} className="group rounded-2xl border-2 border-slate-200 bg-white hc-border">
                <summary className="flex cursor-pointer list-none items-center gap-3 p-4 text-lg font-semibold text-slate-900 hover:bg-slate-50 focus-visible:outline-indigo-700 hc-text [&::-webkit-details-marker]:hidden">
                  <span aria-hidden="true" className="text-indigo-600 transition-transform group-open:rotate-90">
                    ▸
                  </span>
                  {item.problem}
                </summary>
                <div className="grid gap-4 border-t border-slate-200 p-4 md:grid-cols-2 hc-border">
                  <div>
                    <h3 className="mb-1 font-bold text-amber-800 hc-text">Mögliche Ursachen</h3>
                    <ul className="list-disc space-y-1 pl-5 text-slate-800 hc-text">
                      {item.causes.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-1 font-bold text-emerald-800 hc-text">Lösungen</h3>
                    <ul className="list-disc space-y-1 pl-5 text-slate-800 hc-text">
                      {item.fixes.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>
                  {item.code && (
                    <pre className="code-scroll overflow-x-auto rounded-xl bg-slate-900 p-4 font-mono text-[0.9rem] text-slate-100 md:col-span-2">
                      <code>{item.code}</code>
                    </pre>
                  )}
                </div>
              </details>
            ))}
          </div>
        </section>
      ))}
      {filtered.length === 0 && <p className="text-slate-700 hc-text">Nichts gefunden. Versuchen Sie einen anderen Suchbegriff.</p>}
    </div>
  );
}
