import { useState } from 'react';
import { CodeEditor } from './CodeEditor';
import { projektCss, projektHtmlBody } from '../data/modules3';

const templates = {
  leer: {
    name: 'Leere Seite',
    html: `<h1>Hallo Welt!</h1>
<p>Schreiben Sie hier Ihr HTML. Rechts sehen Sie sofort das Ergebnis.</p>`,
    css: `body {
  font-family: system-ui, sans-serif;
  padding: 1rem;
  line-height: 1.6;
}`,
  },
  karten: {
    name: 'Responsive Karten (Flexbox)',
    html: `<div class="karten">
  <article class="karte"><h2>Eins</h2><p>Ziehen Sie den Regler über der Vorschau.</p></article>
  <article class="karte"><h2>Zwei</h2><p>Die Karten ordnen sich selbst an.</p></article>
  <article class="karte"><h2>Drei</h2><p>Ganz ohne Media Query.</p></article>
</div>`,
    css: `body { font-family: system-ui, sans-serif; margin: 0; padding: 1rem; }
.karten { display: flex; flex-wrap: wrap; gap: 1rem; }
.karte {
  flex: 1 1 220px;
  background: #eff6ff;
  border: 2px solid #1d4ed8;
  border-radius: 10px;
  padding: 1rem;
}
h2 { margin-top: 0; }`,
  },
  grid: {
    name: 'Seitenlayout (Grid-Areas)',
    html: `<div class="seite">
  <header>Kopfzeile</header>
  <nav>Navigation</nav>
  <main>Hauptinhalt – probieren Sie, die Breite zu ändern.</main>
  <aside>Seitenleiste</aside>
  <footer>Fußzeile</footer>
</div>`,
    css: `body { font-family: system-ui, sans-serif; margin: 0; padding: 0.75rem; }
.seite {
  display: grid;
  gap: 0.75rem;
  grid-template-areas: "kopf" "navi" "inhalt" "seite" "fuss";
}
.seite > * { padding: 1rem; border-radius: 8px; color: white; font-weight: bold; }
header { grid-area: kopf; background: #1e3a8a; }
nav { grid-area: navi; background: #0e7490; }
main { grid-area: inhalt; background: #15803d; min-height: 120px; }
aside { grid-area: seite; background: #a16207; }
footer { grid-area: fuss; background: #374151; }

@media (min-width: 700px) {
  .seite {
    grid-template-columns: 1fr 220px;
    grid-template-areas:
      "kopf kopf"
      "navi navi"
      "inhalt seite"
      "fuss fuss";
  }
}`,
  },
  media: {
    name: 'Media Query üben',
    html: `<div class="box">Unter 600px bin ich gelb, ab 600px blau, ab 900px grün.</div>`,
    css: `body { font-family: system-ui, sans-serif; margin: 0; padding: 1rem; }
.box {
  padding: 2rem;
  border-radius: 10px;
  font-size: 1.25rem;
  font-weight: bold;
  background: #fef3c7;
}

@media (min-width: 600px) {
  .box { background: #dbeafe; }
}

@media (min-width: 900px) {
  .box { background: #dcfce7; }
}`,
  },
  projekt: {
    name: 'Abschlussprojekt (komplett)',
    html: projektHtmlBody,
    css: projektCss,
  },
};

type TplKey = keyof typeof templates;

export function Playground() {
  const [tpl, setTpl] = useState<TplKey>('leer');
  const [key, setKey] = useState(0);
  const current = templates[tpl];

  return (
    <div className="mx-auto max-w-[1600px] px-4 py-8 sm:px-6">
      <h1 className="mb-2 text-3xl font-extrabold text-slate-900 hc-text">🧪 Übungsplatz</h1>
      <p className="mb-6 max-w-[75ch] text-lg text-slate-700 hc-text">
        Hier können Sie jederzeit frei experimentieren. Links schreiben Sie HTML und CSS, rechts sehen Sie das Ergebnis. Mit dem Regler über der Vorschau simulieren Sie
        verschiedene Bildschirmbreiten. Nichts kann kaputtgehen – im Zweifel einfach „Zurücksetzen“.
      </p>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <label htmlFor="vorlage" className="font-semibold text-slate-800 hc-text">
          Vorlage laden:
        </label>
        <select
          id="vorlage"
          value={tpl}
          onChange={(e) => {
            setTpl(e.target.value as TplKey);
            setKey((k) => k + 1);
          }}
          className="rounded-lg border-2 border-slate-300 bg-white px-3 py-2 text-base"
        >
          {(Object.keys(templates) as TplKey[]).map((k) => (
            <option key={k} value={k}>
              {templates[k].name}
            </option>
          ))}
        </select>
        <span className="text-sm text-slate-600 hc-text">Ihre Änderungen an der jeweiligen Vorlage bleiben im Browser gespeichert.</span>
      </div>
      <CodeEditor key={`${tpl}-${key}`} initialHtml={current.html} initialCss={current.css} height={520} storageKey={`playground-${tpl}`} />
      <section className="mt-8 rounded-2xl border-2 border-slate-200 bg-white p-6 hc-border">
        <h2 className="mb-3 text-xl font-bold text-slate-900 hc-text">Ideen zum Ausprobieren</h2>
        <ul className="list-disc space-y-1 pl-6 text-slate-700 hc-text">
          <li>Ändern Sie in der Karten-Vorlage <code className="inline">flex: 1 1 220px</code> auf <code className="inline">1 1 400px</code>. Was passiert?</li>
          <li>Fügen Sie in der Media-Query-Vorlage einen vierten Breakpoint bei 1100px hinzu.</li>
          <li>Verschieben Sie in der Grid-Vorlage die Navigation nach links neben den Inhalt (drei Spalten).</li>
          <li>Laden Sie das Abschlussprojekt und ändern Sie die Farbpalette auf Blau- oder Rottöne.</li>
          <li>Testen Sie, was passiert, wenn Sie beim Projekt <code className="inline">max-width: 100%</code> bei <code className="inline">img</code> entfernen.</li>
        </ul>
      </section>
    </div>
  );
}
