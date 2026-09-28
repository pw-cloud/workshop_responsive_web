import { useLocalStorage } from '../hooks/useLocalStorage';

const groups: { title: string; items: string[] }[] = [
  {
    title: 'HTML-Grundlagen',
    items: [
      '<!DOCTYPE html> als erste Zeile',
      '<html lang="de">',
      '<meta charset="UTF-8"> im head',
      '<meta name="viewport" content="width=device-width, initial-scale=1.0"> – ohne user-scalable=no',
      'Aussagekräftiger <title> auf jeder Seite',
      'Genau eine <h1>, danach h2/h3 ohne Sprünge',
      'Semantische Bereiche: header, nav, main (einmal), footer',
      'Skip-Link als erstes Element im body',
    ],
  },
  {
    title: 'Responsive Verhalten',
    items: [
      'Kein horizontaler Scrollbalken bei 320px Breite',
      'Alle Breiten von 320px bis 1600px langsam durchgezogen – keine Sprünge oder Überlappungen',
      'img { max-width: 100%; height: auto; }',
      'Keine festen px-Breiten für Container – stattdessen width: 100% + max-width',
      'Schriftgrößen und Abstände in rem',
      'Media Queries stehen unterhalb der Basisregeln',
      'Seite funktioniert bei 200 % Browser-Zoom',
      'Auf mindestens einem echten Smartphone getestet',
    ],
  },
  {
    title: 'Barrierefreiheit',
    items: [
      'Jedes Bild hat einen alt-Text (dekorative: alt="")',
      'Kontrast Text/Hintergrund mindestens 4,5:1 gemessen',
      'Fließtext mindestens 16px, besser 18px; Zeilenabstand ≥ 1.5',
      'Kein outline: none – Fokus überall sichtbar',
      'Tastatur-Test: alle Links, Knöpfe, Felder per Tab erreichbar, Reihenfolge logisch',
      'Klickflächen mindestens 44 × 44 px',
      'Jedes Formularfeld hat ein verbundenes <label>',
      'Informationen nie nur durch Farbe vermittelt',
      'Links sind unterstrichen und haben sprechende Texte',
      'Navigation in <nav aria-label="…">, aktuelle Seite mit aria-current="page"',
      'Lighthouse Accessibility-Wert ≥ 90',
    ],
  },
  {
    title: 'Qualität & Veröffentlichung',
    items: [
      'HTML validiert (validator.w3.org) – keine Fehler',
      'CSS validiert (jigsaw.w3.org/css-validator)',
      'Bilder verkleinert (unter 300 KB, max. ca. 1600 px)',
      'Alle Links funktionieren, keine href="#" mehr',
      'In zwei verschiedenen Browsern getestet',
      'Impressum und Datenschutzerklärung vorhanden',
      'Favicon eingebunden',
      'Website veröffentlicht und unter HTTPS erreichbar',
    ],
  },
];

export function ChecklistPage() {
  const [checked, setChecked] = useLocalStorage<Record<string, boolean>>('kurs-checkliste', {});
  const all = groups.flatMap((g) => g.items);
  const done = all.filter((i) => checked[i]).length;

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <h1 className="mb-2 text-3xl font-extrabold text-slate-900 hc-text">☑️ Abschluss-Checkliste</h1>
      <p className="mb-4 max-w-[70ch] text-lg text-slate-700 hc-text">
        Gehen Sie diese Liste vor jeder Veröffentlichung durch. Ihre Häkchen werden im Browser gespeichert. Wenn alles abgehakt ist, können Sie stolz sein.
      </p>
      <div className="mb-8 rounded-2xl border-2 border-slate-200 bg-white p-5 hc-border">
        <div className="mb-2 flex justify-between font-semibold text-slate-800 hc-text">
          <span>
            {done} von {all.length} Punkten erledigt
          </span>
          <span>{Math.round((done / all.length) * 100)} %</span>
        </div>
        <div className="h-3 overflow-hidden rounded-full bg-slate-200" role="progressbar" aria-valuenow={done} aria-valuemin={0} aria-valuemax={all.length} aria-label="Checklisten-Fortschritt">
          <div className="h-full bg-emerald-500 transition-all" style={{ width: `${(done / all.length) * 100}%` }} />
        </div>
        {done === all.length && (
          <p role="status" className="mt-3 font-bold text-emerald-800">
            🎉 Alles erledigt – Ihre Website ist bereit für die Welt!
          </p>
        )}
        <button type="button" onClick={() => setChecked({})} className="mt-3 rounded-lg border-2 border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100">
          Alle Häkchen entfernen
        </button>
      </div>
      {groups.map((g) => (
        <fieldset key={g.title} className="mb-6 rounded-2xl border-2 border-slate-200 bg-white p-5 hc-border">
          <legend className="px-2 text-xl font-bold text-slate-900 hc-text">{g.title}</legend>
          <ul className="space-y-1">
            {g.items.map((item) => (
              <li key={item}>
                <label className="flex cursor-pointer items-start gap-3 rounded-lg p-2 hover:bg-slate-50">
                  <input
                    type="checkbox"
                    checked={Boolean(checked[item])}
                    onChange={(e) => setChecked((c) => ({ ...c, [item]: e.target.checked }))}
                    className="mt-1 h-5 w-5 shrink-0 accent-emerald-600"
                  />
                  <span className={`text-slate-800 hc-text ${checked[item] ? 'line-through opacity-60' : ''}`}>{item}</span>
                </label>
              </li>
            ))}
          </ul>
        </fieldset>
      ))}
    </div>
  );
}
