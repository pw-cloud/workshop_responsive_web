import { useMemo, useState } from 'react';
import { glossary } from '../data/glossary';

export function GlossaryPage() {
  const [q, setQ] = useState('');
  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    return glossary.filter((g) => !s || g.term.toLowerCase().includes(s) || g.definition.toLowerCase().includes(s));
  }, [q]);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <h1 className="mb-2 text-3xl font-extrabold text-slate-900 hc-text">📚 Glossar</h1>
      <p className="mb-6 max-w-[70ch] text-lg text-slate-700 hc-text">Alle Fachbegriffe des Kurses – kurz erklärt, alphabetisch sortiert. Nutzen Sie die Suche, wenn Sie ein Wort nachschlagen möchten.</p>
      <div className="mb-6">
        <label htmlFor="glossar-suche" className="mb-1 block font-semibold text-slate-800 hc-text">
          Begriff suchen
        </label>
        <input
          id="glossar-suche"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="z. B. Flexbox, rem, Viewport …"
          className="w-full rounded-xl border-2 border-slate-300 px-4 py-3 text-lg"
        />
        <p className="mt-1 text-sm text-slate-600 hc-text" role="status">
          {filtered.length} von {glossary.length} Begriffen
        </p>
      </div>
      <dl className="space-y-4">
        {filtered.map((g) => (
          <div key={g.term} className="rounded-2xl border-2 border-slate-200 bg-white p-5 hc-border">
            <dt className="text-xl font-bold text-indigo-900 hc-text">{g.term}</dt>
            <dd className="mt-1 text-slate-800 hc-text">
              {g.definition}
              {g.example && (
                <code className="mt-2 block w-fit max-w-full overflow-x-auto rounded-lg bg-slate-900 px-3 py-2 font-mono text-[0.9rem] text-slate-100">{g.example}</code>
              )}
            </dd>
          </div>
        ))}
        {filtered.length === 0 && <p className="text-slate-700 hc-text">Kein Begriff gefunden. Versuchen Sie eine andere Schreibweise.</p>}
      </dl>
    </div>
  );
}
