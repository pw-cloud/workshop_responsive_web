import type { Module } from '../types';

const projektHtml = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gartenfreunde Musterstadt e. V.</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <a href="#inhalt" class="skip-link">Zum Inhalt springen</a>

  <header class="kopf">
    <div class="container kopf-innen">
      <a href="index.html" class="logo">🌿 Gartenfreunde Musterstadt</a>
      <details class="menue">
        <summary aria-label="Menü öffnen oder schließen">☰ Menü</summary>
        <nav aria-label="Hauptnavigation">
          <ul>
            <li><a href="index.html" aria-current="page">Start</a></li>
            <li><a href="#ueber-uns">Über uns</a></li>
            <li><a href="#termine">Termine</a></li>
            <li><a href="#kontakt">Kontakt</a></li>
          </ul>
        </nav>
      </details>
    </div>
  </header>

  <main id="inhalt">
    <section class="hero">
      <div class="container">
        <h1>Gemeinsam gärtnern – seit 1998</h1>
        <p class="untertitel">Ein Verein für alle, die gerne die Hände in die Erde stecken.</p>
        <a href="#kontakt" class="button">Mitglied werden</a>
      </div>
    </section>

    <section id="ueber-uns" class="abschnitt">
      <div class="container zweispaltig">
        <div>
          <h2>Über uns</h2>
          <p>Wir sind rund 80 Hobbygärtnerinnen und -gärtner aus Musterstadt und Umgebung. Bei uns tauschen Anfänger und alte Hasen Wissen, Samen und Setzlinge – und feiern einmal im Jahr ein großes Gartenfest.</p>
          <p>Jeden ersten Samstag im Monat treffen wir uns um 10 Uhr im Vereinsgarten am Blumenweg.</p>
        </div>
        <img src="https://picsum.photos/id/1080/800/600" alt="Hochbeete mit Gemüse im Vereinsgarten">
      </div>
    </section>

    <section id="termine" class="abschnitt abschnitt-grau">
      <div class="container">
        <h2>Nächste Termine</h2>
        <div class="karten">
          <article class="karte">
            <h3>Pflanzentauschbörse</h3>
            <p><time datetime="2024-04-12">12. April</time>, 10–14 Uhr</p>
            <p>Bringen Sie Ableger mit und nehmen Sie neue Schätze mit nach Hause.</p>
          </article>
          <article class="karte">
            <h3>Vortrag: Bienenfreundlicher Garten</h3>
            <p><time datetime="2024-05-08">8. Mai</time>, 19 Uhr</p>
            <p>Imker Hans Berger erklärt, welche Pflanzen Bienen wirklich helfen.</p>
          </article>
          <article class="karte">
            <h3>Sommerfest</h3>
            <p><time datetime="2024-07-20">20. Juli</time>, ab 15 Uhr</p>
            <p>Mit Kuchenbuffet, Kinderprogramm und Tombola. Gäste willkommen!</p>
          </article>
        </div>
      </div>
    </section>

    <section id="kontakt" class="abschnitt">
      <div class="container">
        <h2>Kontakt</h2>
        <form class="formular">
          <div class="feld">
            <label for="name">Ihr Name</label>
            <input type="text" id="name" name="name" autocomplete="name" required>
          </div>
          <div class="feld">
            <label for="email">Ihre E-Mail-Adresse</label>
            <input type="email" id="email" name="email" autocomplete="email" required>
          </div>
          <div class="feld">
            <label for="nachricht">Ihre Nachricht</label>
            <textarea id="nachricht" name="nachricht" rows="5" required></textarea>
          </div>
          <button type="submit" class="button">Nachricht senden</button>
        </form>
      </div>
    </section>
  </main>

  <footer class="fuss">
    <div class="container">
      <p>Gartenfreunde Musterstadt e. V. · Blumenweg 7 · 12345 Musterstadt</p>
      <p><a href="impressum.html">Impressum</a> · <a href="datenschutz.html">Datenschutz</a></p>
    </div>
  </footer>
</body>
</html>`;

const projektCssBasis = `/* ===== 1. Grundeinstellungen ===== */
* { box-sizing: border-box; }

html { font-size: 100%; }

body {
  margin: 0;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: 1.125rem;
  line-height: 1.6;
  color: #1f2937;
  background: #ffffff;
}

img { max-width: 100%; height: auto; display: block; }

h1, h2, h3 { line-height: 1.2; margin: 0 0 0.5em; overflow-wrap: break-word; }
h1 { font-size: clamp(1.9rem, 5vw, 3rem); }
h2 { font-size: clamp(1.5rem, 3.5vw, 2.25rem); }
h3 { font-size: 1.25rem; }
p { margin: 0 0 1rem; max-width: 65ch; hyphens: auto; }

a { color: #166534; text-underline-offset: 3px; }
a:focus-visible, button:focus-visible, summary:focus-visible,
input:focus-visible, textarea:focus-visible {
  outline: 3px solid #f59e0b;
  outline-offset: 3px;
}

/* ===== 2. Hilfsklassen ===== */
.container {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1rem;
}

.skip-link {
  position: absolute;
  left: -9999px;
  background: #14532d;
  color: white;
  padding: 0.75rem 1rem;
}
.skip-link:focus { left: 1rem; top: 1rem; z-index: 10; }

.button {
  display: inline-block;
  background: #15803d;
  color: white;
  padding: 0.85rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
}
.button:hover { background: #166534; }

/* ===== 3. Kopf & Navigation (Mobile) ===== */
.kopf { background: #14532d; color: white; }
.kopf-innen {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}
.logo { color: white; font-weight: 700; font-size: 1.2rem; text-decoration: none; }

.menue summary {
  list-style: none;
  cursor: pointer;
  color: white;
  border: 2px solid white;
  border-radius: 6px;
  padding: 0.5rem 0.9rem;
}
.menue summary::-webkit-details-marker { display: none; }
.menue:not([open]) nav { display: none; }
.menue nav { width: 100%; }
.menue ul { list-style: none; padding: 0; margin: 0.75rem 0 0; }
.menue a {
  display: block;
  color: white;
  text-decoration: none;
  padding: 0.9rem 0.5rem;
  border-top: 1px solid rgba(255,255,255,0.25);
}
.menue a:hover, .menue a:focus-visible { background: #166534; }
.menue a[aria-current="page"] { font-weight: 700; text-decoration: underline; }

/* ===== 4. Inhalte (Mobile) ===== */
.hero {
  background: #dcfce7;
  padding: 3rem 0;
  text-align: center;
}
.hero p { margin-left: auto; margin-right: auto; }
.untertitel { font-size: 1.25rem; margin-bottom: 1.5rem; }

.abschnitt { padding: 3rem 0; }
.abschnitt-grau { background: #f8fafc; }

.zweispaltig { display: grid; gap: 2rem; }
.zweispaltig img { border-radius: 10px; }

.karten { display: grid; gap: 1.5rem; }
.karte {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 1.5rem;
}
.karte time { font-weight: 600; color: #166534; }

.formular { display: grid; gap: 1.25rem; max-width: 600px; }
.feld { display: grid; gap: 0.4rem; }
label { font-weight: 600; }
input, textarea {
  font: inherit;
  padding: 0.75rem;
  border: 2px solid #94a3b8;
  border-radius: 6px;
  width: 100%;
}

.fuss {
  background: #1f2937;
  color: #e5e7eb;
  padding: 2rem 0;
  text-align: center;
}
.fuss a { color: white; }
.fuss p { max-width: none; }`;

const projektCssMedia = `
/* ===== 5. Ab 700px: Tablet ===== */
@media (min-width: 700px) {
  .karten { grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); }
  .zweispaltig { grid-template-columns: 1fr 1fr; align-items: center; }
  .hero { padding: 5rem 0; }
}

/* ===== 6. Ab 900px: Desktop – Menü als Leiste ===== */
@media (min-width: 900px) {
  .menue summary { display: none; }
  .menue nav { display: block !important; width: auto; }
  .menue ul { display: flex; gap: 0.25rem; margin: 0; }
  .menue a { border: none; padding: 0.6rem 1rem; border-radius: 6px; }
  .abschnitt { padding: 4rem 0; }
}

/* ===== 7. Weniger Bewegung, wenn gewünscht ===== */
@media (prefers-reduced-motion: reduce) {
  * { transition: none !important; animation: none !important; }
}`;

export const projektCss = projektCssBasis + '\n' + projektCssMedia;
export const projektHtmlBody = projektHtml
  .replace(/^[\s\S]*<body>/, '')
  .replace(/<\/body>[\s\S]*$/, '')
  .trim();

export const modules3: Module[] = [
  {
    id: 'm9',
    number: 9,
    title: 'Barrierefreiheit in der Praxis',
    description: 'Eine Website für alle: Wer Barrieren abbaut, macht die Seite für jeden besser – und erfüllt zunehmend gesetzliche Pflichten.',
    icon: '♿',
    lessons: [
      {
        id: 'm9-l1',
        title: 'Warum Barrierefreiheit alle betrifft',
        duration: 15,
        goals: ['Verstehen, wer von Barrierefreiheit profitiert', 'Die vier Grundprinzipien kennen', 'Rechtliche Grundlagen in Deutschland einordnen'],
        blocks: [
          { type: 'h', text: 'Mehr Menschen, als Sie denken' },
          { type: 'p', text: 'Wenn wir „Barrierefreiheit“ hören, denken viele an blinde Menschen. Das greift zu kurz. Rund 10 % der Bevölkerung haben eine anerkannte Behinderung, aber deutlich mehr Menschen profitieren von barrierefreien Websites:' },
          {
            type: 'list',
            items: [
              '**Menschen mit nachlassender Sehkraft** – ab Mitte 40 nahezu jeder. Sie brauchen große Schrift und hohen Kontrast.',
              '**Menschen mit Farbfehlsichtigkeit** – etwa 8 % aller Männer. Rot-grün-Unterschiede sehen sie nicht.',
              '**Menschen mit motorischen Einschränkungen** – Arthritis, Parkinson, Zittern. Kleine Knöpfe sind für sie eine Qual.',
              '**Menschen mit Lernschwierigkeiten oder Konzentrationsstörungen** – klare Sprache und Struktur helfen.',
              '**Situative Einschränkungen**: Sonnenlicht auf dem Handy, ein gebrochener Arm, ein schreiendes Baby auf dem Arm, eine laute Umgebung ohne Kopfhörer.',
              '**Ältere Geräte und langsames Internet** – eine schlanke, robuste Seite funktioniert überall.',
            ],
          },
          { type: 'p', text: 'Kurz: Barrierefreiheit ist kein Nischenthema, sondern **Qualität**. Was für Menschen mit Einschränkungen notwendig ist, ist für alle anderen angenehm.' },
          { type: 'h', text: 'Die vier Prinzipien (WCAG)' },
          { type: 'p', text: 'Der internationale Standard heißt WCAG (Web Content Accessibility Guidelines). Er beruht auf vier Prinzipien, die sich leicht merken lassen:' },
          {
            type: 'table',
            headers: ['Prinzip', 'Frage', 'Beispiele'],
            rows: [
              ['**Wahrnehmbar**', 'Kann jeder die Inhalte erfassen?', 'Alt-Texte, Kontrast, Untertitel, skalierbare Schrift'],
              ['**Bedienbar**', 'Kann jeder die Seite bedienen?', 'Tastaturbedienung, große Klickflächen, genug Zeit, keine blinkenden Elemente'],
              ['**Verständlich**', 'Versteht jeder Inhalt und Bedienung?', 'Klare Sprache, vorhersehbare Navigation, hilfreiche Fehlermeldungen'],
              ['**Robust**', 'Funktioniert es mit allen Techniken?', 'Sauberes HTML, semantische Elemente, keine Abhängigkeit von einem Browser'],
            ],
          },
          { type: 'h', text: 'Rechtliche Situation' },
          { type: 'p', text: 'In Deutschland gilt seit Juni 2025 das **Barrierefreiheitsstärkungsgesetz (BFSG)**. Es verpflichtet viele Unternehmen, die Produkte oder Dienstleistungen online an Verbraucher verkaufen, zu barrierefreien Websites. Kleinstunternehmen (unter 10 Mitarbeitende und unter 2 Mio. € Umsatz) sind bei Dienstleistungen ausgenommen; für öffentliche Stellen gelten schon länger strengere Regeln (BITV 2.0). Private Vereins- und Hobbyseiten sind nicht verpflichtet – aber Sie haben in diesem Kurs gesehen, wie wenig Aufwand es ist, es trotzdem richtig zu machen.' },
          { type: 'tip', kind: 'info', title: 'Die gute Nachricht', text: 'Wenn Sie den Regeln dieses Kurses gefolgt sind – semantisches HTML, Alt-Texte, rem-Einheiten, Kontrast, sichtbarer Fokus, Zoom nicht blockieren – haben Sie den Großteil schon erledigt. Barrierefreiheit ist kein Zusatzmodul, sondern die Konsequenz aus sauberem Handwerk.' },
        ],
        quiz: [
          {
            question: 'Welcher Anteil der Männer hat eine Rot-Grün-Sehschwäche?',
            options: ['Unter 1 %', 'Etwa 8 %', 'Etwa 25 %', 'Etwa 50 %'],
            answer: 1,
            explanation: 'Rund 8 % der Männer und 0,5 % der Frauen. Deshalb: Informationen nie allein durch Farbe vermitteln.',
          },
          {
            question: 'Welches ist KEINES der vier WCAG-Prinzipien?',
            options: ['Wahrnehmbar', 'Bedienbar', 'Schnell', 'Robust'],
            answer: 2,
            explanation: 'Die vier Prinzipien sind: wahrnehmbar, bedienbar, verständlich, robust.',
          },
        ],
        summary: [
          'Barrierefreiheit nützt weit mehr Menschen als nur denen mit Behinderung.',
          'Vier Prinzipien: wahrnehmbar, bedienbar, verständlich, robust.',
          'BFSG seit 2025 – für viele Unternehmen Pflicht, für alle sinnvoll.',
        ],
      },
      {
        id: 'm9-l2',
        title: 'Praxis: Formulare, Tastatur, Farbe und Sprache',
        duration: 35,
        goals: ['Barrierefreie Formulare bauen', 'Die eigene Seite per Tastatur testen', 'Farben und Sprache prüfen'],
        blocks: [
          { type: 'h', text: 'Formulare: Jedes Feld braucht ein Label' },
          { type: 'p', text: 'Ein Kontaktformular gehört auf fast jede Website. Der häufigste Fehler: Der Beschriftungstext steht zwar sichtbar daneben, ist aber technisch nicht mit dem Feld verbunden. Screenreader sagen dann nur „Eingabefeld“ – und niemand weiß, was hineingehört. Die Verbindung schafft `<label for="...">` mit passender `id`:' },
          {
            type: 'code',
            lang: 'html',
            code: `<!-- ❌ Falsch: Text nicht mit Feld verbunden -->
<p>Ihr Name</p>
<input type="text">

<!-- ✅ Richtig: label for = input id -->
<label for="name">Ihr Name</label>
<input type="text" id="name" name="name" autocomplete="name" required>

<!-- ✅ Auch richtig: Feld INS Label packen -->
<label>
  Ihre E-Mail
  <input type="email" name="email" autocomplete="email" required>
</label>`,
          },
          {
            type: 'list',
            items: [
              '`type="email"`, `type="tel"`: Handys blenden die passende Tastatur ein (mit @ oder Ziffernblock).',
              '`autocomplete="name"` / `"email"` / `"tel"`: Der Browser füllt bekannte Daten vor – enorme Erleichterung für Menschen mit motorischen Einschränkungen.',
              '`required`: Pflichtfeld – der Browser prüft vor dem Absenden.',
              '**Kein Platzhaltertext als Ersatz für Label**: `placeholder="Name"` verschwindet beim Tippen und hat meist zu wenig Kontrast.',
            ],
          },
          { type: 'code', lang: 'css', title: 'Formularfelder gestalten', code: `input, textarea, select {
  font: inherit;               /* gleiche Schrift wie der Rest – Standard ist winzig */
  padding: 0.75rem;
  border: 2px solid #64748b;   /* deutlich sichtbarer Rand */
  border-radius: 6px;
  width: 100%;
  min-height: 44px;
}
label { display: block; font-weight: 600; margin-bottom: 0.4rem; }` },
          { type: 'h', text: 'Der Tastatur-Test' },
          { type: 'p', text: 'Der wichtigste Barrierefreiheits-Test kostet nichts und dauert zwei Minuten. Legen Sie die Maus weg:' },
          {
            type: 'steps',
            items: [
              'Öffnen Sie Ihre Seite und drücken Sie die **Tab-Taste**. Der Fokus springt zum ersten Link oder Knopf.',
              'Drücken Sie weiter Tab. Können Sie **jeden** Link, Knopf und jedes Formularfeld erreichen? **Sehen** Sie immer, wo Sie gerade sind?',
              'Ist die Reihenfolge logisch (von oben nach unten, links nach rechts)?',
              'Drücken Sie **Enter** auf einem Link – öffnet er sich? **Leertaste** auf einem Knopf oder dem Menü – reagiert er?',
              'Mit **Umschalt + Tab** geht es rückwärts.',
              'Kommen Sie irgendwo nicht mehr weg („Tastaturfalle“)? Das ist ein schwerer Fehler.',
            ],
          },
          { type: 'tip', kind: 'a11y', title: 'Der Sprunglink', text: 'Tastaturnutzer müssen sich sonst auf jeder Seite durch die komplette Navigation tabben. Ein „Skip-Link“ als erstes Element im body löst das. Er ist unsichtbar, bis er per Tab fokussiert wird – dann springt man mit Enter direkt zu `<main id="inhalt">`.' },
          {
            type: 'compare',
            left: { title: 'HTML (erstes Element im body)', code: `<a href="#inhalt" class="skip-link">
  Zum Inhalt springen
</a>
...
<main id="inhalt">` },
            right: { title: 'CSS', code: `.skip-link {
  position: absolute;
  left: -9999px;
  background: #14532d;
  color: white;
  padding: 0.75rem 1rem;
}
.skip-link:focus {
  left: 1rem;
  top: 1rem;
}` },
          },
          { type: 'h', text: 'Farbe: Nie die einzige Information' },
          { type: 'p', text: 'Wenn Pflichtfelder nur rot markiert sind, Links nur blau statt unterstrichen, Fehler nur durch roten Rand angezeigt werden – dann bleiben farbfehlsichtige Menschen außen vor. Die Regel: **Farbe plus etwas anderes** – ein Symbol, ein Text, eine Unterstreichung, eine Form.' },
          {
            type: 'compare',
            left: { title: '❌ Nur Farbe', code: `<input class="fehler">
<style>
.fehler { border-color: red; }
</style>` },
            right: { title: '✅ Farbe + Text + Symbol', code: `<input class="fehler"
  aria-describedby="email-fehler">
<p id="email-fehler" class="fehlertext">
  ⚠ Bitte geben Sie eine gültige
  E-Mail-Adresse ein.
</p>` },
          },
          { type: 'h', text: 'Kontrast messen' },
          { type: 'p', text: 'Die Anforderung: Text braucht ein Kontrastverhältnis von mindestens **4,5 : 1** zum Hintergrund (große Überschriften ab 24px: 3 : 1). Das lässt sich nicht schätzen, nur messen:' },
          {
            type: 'list',
            items: [
              '**WebAIM Contrast Checker** (webaim.org/resources/contrastchecker): Zwei Farbcodes eingeben, Ergebnis ablesen.',
              '**Firefox**: Rechtsklick → Untersuchen → im Stil-Bereich auf das Farbquadrat neben `color` klicken – Firefox zeigt das Kontrastverhältnis direkt an.',
              '**Chrome**: Gleicher Weg über das Farbfeld im Elements-Panel.',
            ],
          },
          {
            type: 'table',
            headers: ['Kombination', 'Verhältnis', 'Bewertung'],
            rows: [
              ['#222222 auf #ffffff', '15,9 : 1', '✅ Ausgezeichnet'],
              ['#1d4ed8 auf #ffffff', '6,3 : 1', '✅ Gut'],
              ['#767676 auf #ffffff', '4,5 : 1', '⚠ Gerade so'],
              ['#999999 auf #ffffff', '2,8 : 1', '❌ Zu schwach'],
              ['#ffffff auf #f59e0b (Orange)', '2,2 : 1', '❌ Zu schwach – beliebter Fehler bei Buttons!'],
            ],
          },
          { type: 'h', text: 'Verständliche Sprache' },
          {
            type: 'list',
            items: [
              'Kurze Sätze. Ein Gedanke pro Satz.',
              'Fachbegriffe erklären oder vermeiden.',
              'Aktiv statt passiv: „Melden Sie sich an“ statt „Eine Anmeldung kann vorgenommen werden“.',
              'Überschriften, die den Inhalt zusammenfassen – Besucher überfliegen, sie lesen nicht.',
              'Abkürzungen beim ersten Auftreten ausschreiben.',
            ],
          },
          { type: 'h', text: 'Automatische Prüfwerkzeuge' },
          { type: 'p', text: 'Sie finden etwa 30–40 % aller Probleme automatisch – den Rest nur Sie mit dem Tastatur-Test. Trotzdem sehr nützlich:' },
          {
            type: 'list',
            items: [
              '**Lighthouse** (in Chrome eingebaut): F12 → Reiter „Lighthouse“ → „Accessibility“ ankreuzen → Analyse starten.',
              '**WAVE** (wave.webaim.org): URL eingeben oder als Browser-Erweiterung – zeigt Probleme direkt auf der Seite an.',
              '**Firefox Barrierefreiheits-Inspektor**: F12 → Reiter „Barrierefreiheit“ → „Auf Probleme prüfen“.',
            ],
          },
        ],
        exercise: {
          title: 'Übung: Formular reparieren',
          intro: 'Dieses Formular hat fünf Barrierefreiheitsfehler. Finden und beheben Sie sie.',
          tasks: [
            'Verbinden Sie jede Beschriftung per label/for mit dem Feld (id vergeben).',
            'Ersetzen Sie die Platzhalter durch echte Labels.',
            'Nutzen Sie type="email" und autocomplete.',
            'Vergrößern Sie Felder und Knopf auf mindestens 44px Höhe und übernehmen Sie die Schrift mit font: inherit.',
            'Machen Sie den Absende-Knopf zu einem echten <button> mit ausreichend Kontrast (kein Weiß auf Hellgrau!).',
          ],
          starterHtml: `<form>
  <p>Name</p>
  <input type="text" placeholder="Name">
  <input type="text" placeholder="E-Mail">
  <p>Nachricht</p>
  <textarea rows="4"></textarea>
  <div class="knopf">Senden</div>
</form>`,
          starterCss: `body { font-family: system-ui, sans-serif; padding: 16px; margin: 0; }
form { display: grid; gap: 8px; max-width: 480px; }
input, textarea { padding: 4px; border: 1px solid #ddd; }
.knopf { background: #e5e7eb; color: white; padding: 6px; text-align: center; width: 80px; }`,
          solutionHtml: `<form>
  <div class="feld">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" autocomplete="name" required>
  </div>
  <div class="feld">
    <label for="email">E-Mail-Adresse</label>
    <input type="email" id="email" name="email" autocomplete="email" required>
  </div>
  <div class="feld">
    <label for="nachricht">Nachricht</label>
    <textarea id="nachricht" name="nachricht" rows="4" required></textarea>
  </div>
  <button type="submit" class="knopf">Nachricht senden</button>
</form>`,
          solutionCss: `body { font-family: system-ui, sans-serif; padding: 16px; margin: 0; font-size: 1.125rem; }
form { display: grid; gap: 1.25rem; max-width: 480px; }
.feld { display: grid; gap: 0.4rem; }
label { font-weight: 600; }
input, textarea { font: inherit; padding: 0.75rem; border: 2px solid #64748b; border-radius: 6px; width: 100%; min-height: 44px; }
.knopf { font: inherit; font-weight: 600; background: #1d4ed8; color: white; padding: 0.85rem 1.5rem; border: none; border-radius: 6px; cursor: pointer; min-height: 44px; justify-self: start; }
.knopf:hover { background: #1e3a8a; }
input:focus-visible, textarea:focus-visible, .knopf:focus-visible { outline: 3px solid #f59e0b; outline-offset: 2px; }`,
        },
        quiz: [
          {
            question: 'Wie verbindet man eine Beschriftung technisch mit einem Eingabefeld?',
            options: ['Indem sie direkt daneben steht', 'Mit <label for="id"> und passender id am Feld', 'Mit placeholder', 'Mit einer Tabelle'],
            answer: 1,
            explanation: 'Nur label/for (oder das Feld innerhalb des label) schafft die programmatische Verbindung, die Screenreader brauchen.',
          },
          {
            question: 'Welches Kontrastverhältnis braucht normaler Text mindestens?',
            options: ['2 : 1', '3 : 1', '4,5 : 1', '10 : 1'],
            answer: 2,
            explanation: 'WCAG-Stufe AA verlangt 4,5:1 für normalen Text und 3:1 für große Überschriften.',
          },
          {
            question: 'Was testet der „Tastatur-Test“?',
            options: ['Ob die Tastatur funktioniert', 'Ob alle Bedienelemente ohne Maus erreichbar und sichtbar fokussiert sind', 'Die Tippgeschwindigkeit', 'Ob Tastenkürzel definiert sind'],
            answer: 1,
            explanation: 'Mit Tab durch die Seite: Alles erreichbar? Fokus immer sichtbar? Keine Falle? Das deckt viele Probleme auf, die Werkzeuge übersehen.',
          },
        ],
        summary: [
          'Jedes Formularfeld: label for + id, passender type, autocomplete, font: inherit, 44px hoch.',
          'Tastatur-Test: Maus weglegen, mit Tab durch die Seite.',
          'Skip-Link als erstes Element im body.',
          'Farbe nie als einzige Information. Kontrast ≥ 4,5:1 messen, nicht schätzen.',
          'Lighthouse oder WAVE als automatische Ergänzung.',
        ],
      },
    ],
  },
  {
    id: 'm10',
    number: 10,
    title: 'Projekt: Ihre erste responsive Website',
    description: 'Jetzt fügen wir alles zusammen. Schritt für Schritt entsteht eine vollständige Vereinswebsite – von der Planung bis zum letzten Breakpoint.',
    icon: '🏗️',
    lessons: [
      {
        id: 'm10-l1',
        title: 'Schritt 1: Planen und skizzieren',
        duration: 20,
        goals: ['Inhalte vor dem Code festlegen', 'Eine einfache Skizze für Handy und Monitor anfertigen', 'Die Dateistruktur anlegen'],
        blocks: [
          { type: 'h', text: 'Erst denken, dann tippen' },
          { type: 'p', text: 'Der häufigste Anfängerfehler ist, sofort loszucoden. Zehn Minuten Planung sparen Stunden Umbau. Wir bauen in diesem Modul die Website der fiktiven „Gartenfreunde Musterstadt“. Sie können jederzeit Ihre eigenen Inhalte einsetzen – ein Chor, eine Ferienwohnung, ein Handwerksbetrieb, eine Familienchronik. Die Struktur bleibt dieselbe.' },
          { type: 'h', text: 'Schritt 1: Was soll auf die Seite?' },
          { type: 'p', text: 'Schreiben Sie alle Inhalte auf Papier oder in eine Textdatei. Für eine einseitige Website (eine sogenannte „One-Pager“) sind das typischerweise:' },
          {
            type: 'table',
            headers: ['Bereich', 'Inhalt', 'HTML-Element'],
            rows: [
              ['Kopfzeile', 'Name/Logo, Navigation', '`<header>`, `<nav>`'],
              ['Hero (Blickfang)', 'Überschrift, ein Satz, ein Knopf', '`<section class="hero">`'],
              ['Über uns', 'Zwei Absätze und ein Foto', '`<section id="ueber-uns">`'],
              ['Termine', 'Drei Karten mit Datum und Beschreibung', '`<section id="termine">` mit `<article>`s'],
              ['Kontakt', 'Formular mit Name, E-Mail, Nachricht', '`<section id="kontakt">` mit `<form>`'],
              ['Fußzeile', 'Adresse, Impressum, Datenschutz', '`<footer>`'],
            ],
          },
          { type: 'tip', kind: 'warning', title: 'Impressum und Datenschutz', text: 'In Deutschland brauchen fast alle Websites – auch Vereins- und viele private Seiten – ein Impressum und eine Datenschutzerklärung. Kostenlose Generatoren gibt es z. B. bei e-recht24.de. Das ist kein Kursthema, aber vergessen Sie es nicht!' },
          { type: 'h', text: 'Schritt 2: Skizzieren' },
          { type: 'p', text: 'Zeichnen Sie mit Stift und Papier zwei grobe Skizzen: eine für das Handy (schmal, alles untereinander) und eine für den Monitor (breit, mit Spalten). Kästen und Striche reichen völlig – das nennt man „Wireframe“.' },
          {
            type: 'preview',
            title: 'So ungefähr sollten Ihre Skizzen aussehen',
            height: 380,
            html: `<div class="skizzen">
  <div class="skizze handy">
    <p class="titel">📱 Handy</p>
    <div class="kasten kopf">Logo &nbsp; ☰</div>
    <div class="kasten hero">Hero<br><small>Überschrift + Knopf</small></div>
    <div class="kasten">Über uns – Text</div>
    <div class="kasten bild">Foto</div>
    <div class="kasten">Termin 1</div>
    <div class="kasten">Termin 2</div>
    <div class="kasten">Termin 3</div>
    <div class="kasten">Kontaktformular</div>
    <div class="kasten fuss">Footer</div>
  </div>
  <div class="skizze desktop">
    <p class="titel">🖥️ Monitor</p>
    <div class="kasten kopf">Logo <span>Start · Über uns · Termine · Kontakt</span></div>
    <div class="kasten hero">Hero – Überschrift + Knopf</div>
    <div class="reihe"><div class="kasten">Über uns – Text</div><div class="kasten bild">Foto</div></div>
    <div class="reihe"><div class="kasten">Termin 1</div><div class="kasten">Termin 2</div><div class="kasten">Termin 3</div></div>
    <div class="kasten">Kontaktformular</div>
    <div class="kasten fuss">Footer</div>
  </div>
</div>`,
            css: `body { font-family: sans-serif; margin: 0; padding: 12px; background: #fafaf9; }
.skizzen { display: flex; gap: 20px; align-items: flex-start; }
.skizze { border: 2px solid #78716c; border-radius: 12px; padding: 8px; background: white; }
.handy { width: 140px; flex-shrink: 0; }
.desktop { flex: 1; min-width: 0; }
.titel { margin: 0 0 6px; font-size: 12px; font-weight: bold; text-align: center; }
.kasten { border: 1.5px dashed #57534e; padding: 6px; margin-bottom: 4px; font-size: 10px; text-align: center; border-radius: 3px; background: #f5f5f4; flex: 1; }
.kopf { display: flex; justify-content: space-between; background: #d6d3d1; }
.hero { padding: 14px 6px; background: #e7e5e4; }
.bild { background: repeating-linear-gradient(45deg, #e7e5e4, #e7e5e4 4px, #fafaf9 4px, #fafaf9 8px); }
.fuss { background: #d6d3d1; }
.reihe { display: flex; gap: 4px; margin-bottom: 4px; }
.reihe .kasten { margin-bottom: 0; }
small { font-size: 8px; }`,
          },
          { type: 'h', text: 'Schritt 3: Dateien anlegen' },
          {
            type: 'code',
            lang: 'text',
            code: `gartenfreunde/
├── index.html
├── style.css
└── bilder/
    └── hochbeete.jpg   (ein Foto, ca. 1200px breit, unter 300 KB)`,
          },
          { type: 'p', text: 'Wenn Sie kein eigenes Foto haben, verwenden wir für die Übung ein Platzhalterbild aus dem Internet. Für Ihre echte Seite nutzen Sie eigene Fotos oder kostenlose Bilder von Seiten wie unsplash.com oder pexels.com (Lizenz beachten!).' },
          { type: 'h', text: 'Schritt 4: Farbpalette festlegen' },
          { type: 'p', text: 'Drei Farben reichen: eine **Hauptfarbe** (für Kopfzeile, Knöpfe), eine **helle Hintergrundfarbe** (für Abschnitte) und eine **Textfarbe**. Für die Gartenfreunde nehmen wir Grün:' },
          {
            type: 'table',
            headers: ['Rolle', 'Farbe', 'Code'],
            rows: [
              ['Hauptfarbe dunkel', 'Tannengrün', '`#14532d`'],
              ['Hauptfarbe (Knöpfe)', 'Grün', '`#15803d`'],
              ['Hell (Hero, Karten)', 'Mintgrün', '`#dcfce7`'],
              ['Hintergrund grau', 'Fast weiß', '`#f8fafc`'],
              ['Text', 'Dunkelgrau', '`#1f2937`'],
              ['Fokusrahmen', 'Bernstein', '`#f59e0b`'],
            ],
          },
          { type: 'tip', kind: 'tip', title: 'Farbpaletten finden', text: 'Werkzeuge wie coolors.co oder die Tailwind-Farbpalette (tailwindcss.com/docs/colors) bieten harmonische, kontrastgeprüfte Farbreihen. Wählen Sie eine Farbfamilie und nutzen Sie daraus helle und dunkle Töne.' },
        ],
        exercise: {
          title: 'Übung: Ihr eigenes Projekt planen',
          intro: 'Planen Sie auf Papier Ihre eigene Website – oder übernehmen Sie das Gartenfreunde-Beispiel.',
          tasks: [
            'Schreiben Sie die 5–6 Bereiche Ihrer Seite auf und notieren Sie zu jedem den Inhalt in Stichworten.',
            'Zeichnen Sie eine Handy- und eine Monitor-Skizze.',
            'Wählen Sie drei Farben und prüfen Sie den Kontrast von Textfarbe auf Hintergrund.',
            'Legen Sie den Projektordner mit index.html, style.css und bilder/ an.',
          ],
        },
        summary: [
          'Inhalte zuerst auflisten, dann skizzieren (Handy + Monitor), dann Dateien anlegen.',
          'Drei Farben reichen – Kontrast prüfen.',
          'Impressum und Datenschutz nicht vergessen.',
        ],
      },
      {
        id: 'm10-l2',
        title: 'Schritt 2: Das HTML schreiben',
        duration: 40,
        goals: ['Die vollständige HTML-Struktur der Projektseite erstellen', 'Alle Barrierefreiheits-Grundlagen einbauen', 'Die Seite ungestylt im Browser prüfen'],
        blocks: [
          { type: 'h', text: 'Das komplette HTML' },
          { type: 'p', text: 'Hier ist die vollständige Datei. Tippen Sie sie Abschnitt für Abschnitt ab und speichern Sie zwischendurch. Danach gehen wir die Besonderheiten durch.' },
          { type: 'code', lang: 'html', title: 'index.html', code: projektHtml },
          { type: 'h', text: 'Was hier alles drinsteckt' },
          {
            type: 'list',
            items: [
              '**Skip-Link** als erstes Element im body – springt zu `<main id="inhalt">`.',
              '**Ein Container pro Abschnitt** (`class="container"`) begrenzt später die Breite und zentriert.',
              '**Navigation mit details/summary** wie in Modul 8, `aria-label` und `aria-current="page"`.',
              '**Sprungmarken**: Die Menü-Links zeigen auf `#ueber-uns`, `#termine`, `#kontakt` – die IDs der Abschnitte. Ein Klick scrollt dorthin.',
              '**Ein h1**, dann h2 pro Abschnitt, h3 für die Karten – saubere Hierarchie.',
              '**`<time datetime="...">`** macht Datumsangaben maschinenlesbar (Kalender, Suchmaschinen).',
              '**Formular** mit label/for, passenden Typen, autocomplete und einem echten `<button>`.',
              '**Alt-Text** am Foto beschreibt den Inhalt.',
            ],
          },
          { type: 'h', text: 'Jetzt im Browser ansehen' },
          { type: 'p', text: 'Öffnen Sie die Datei. Sie sehen eine schlichte, unformatierte Seite – schwarze Schrift auf weißem Grund, alles untereinander. **Das ist gut so!** Genau das ist die „Mobile First“-Basis. Bevor wir CSS schreiben, prüfen wir die Struktur:' },
          {
            type: 'steps',
            title: 'Struktur-Check',
            items: [
              'Ist die Reihenfolge der Inhalte sinnvoll, auch ohne Gestaltung?',
              'Klicken Sie auf „Termine“ im Menü – springt die Seite zum Termine-Abschnitt?',
              'Drücken Sie Tab: Erscheint als erstes „Zum Inhalt springen“? Erreichen Sie alle Links und Felder?',
              'Klappt das `<details>`-Menü auf und zu?',
              'Prüfen Sie unter **validator.w3.org** (Datei hochladen), ob das HTML fehlerfrei ist.',
            ],
          },
          { type: 'tip', kind: 'info', title: 'Warum das Menü noch offen ist', text: 'Ohne CSS zeigt `<details>` seinen Inhalt nur nach Klick. Auf dem Monitor wird die Media Query es später dauerhaft öffnen. Alles in Ordnung.' },
          {
            type: 'preview',
            title: 'So sieht die Seite jetzt aus (ohne CSS) – funktional, aber schmucklos',
            height: 400,
            html: projektHtmlBody,
            css: '',
          },
        ],
        exercise: {
          title: 'Übung: HTML abtippen und prüfen',
          intro: 'Erstellen Sie die index.html in Ihrem Projektordner.',
          tasks: [
            'Tippen Sie das HTML ab. Ersetzen Sie Texte und Namen gern durch Ihre eigenen.',
            'Führen Sie den Struktur-Check durch (Sprungmarken, Tab-Taste, Menü).',
            'Validieren Sie die Datei bei validator.w3.org. Beheben Sie Fehler – typisch: vergessene schließende Tags.',
          ],
        },
        summary: [
          'Struktur zuerst – die ungestylte Seite ist die Mobile-First-Basis.',
          'Skip-Link, semantische Bereiche, Überschriften-Hierarchie, Formular mit Labels.',
          'Immer validieren, bevor CSS dazukommt.',
        ],
      },
      {
        id: 'm10-l3',
        title: 'Schritt 3: CSS – Mobile zuerst',
        duration: 45,
        goals: ['Die Basis-Styles für alle Geräte schreiben', 'Die CSS-Datei sinnvoll gliedern', 'Die mobile Ansicht fertigstellen'],
        blocks: [
          { type: 'h', text: 'Gliederung der CSS-Datei' },
          { type: 'p', text: 'Eine gut gegliederte CSS-Datei ist in sechs Monaten noch verständlich. Wir arbeiten in dieser Reihenfolge – jede Sektion mit einem Kommentar überschrieben:' },
          {
            type: 'list',
            items: [
              '**1. Grundeinstellungen**: box-sizing, body, Schrift, Bilder, Überschriften, Fokus.',
              '**2. Hilfsklassen**: container, skip-link, button.',
              '**3. Kopf & Navigation** (mobil).',
              '**4. Inhalte** (mobil): hero, abschnitte, karten, formular, fuß.',
              '**5.–6. Media Queries** für größere Bildschirme – kommen in der nächsten Lektion.',
              '**7. prefers-reduced-motion**.',
            ],
          },
          { type: 'h', text: 'Der komplette mobile Teil' },
          { type: 'p', text: 'Alles, was Sie hier sehen, kennen Sie aus den vorherigen Modulen. Tippen Sie es Sektion für Sektion ab und laden Sie den Browser (in schmaler Ansicht!) nach jeder Sektion neu – so sehen Sie, was jede Regel bewirkt.' },
          { type: 'code', lang: 'css', title: 'style.css – Teil 1: Basis (mobil)', code: projektCssBasis },
          { type: 'h', text: 'Wichtige Stellen erklärt' },
          {
            type: 'table',
            headers: ['Regel', 'Was sie tut', 'Modul'],
            rows: [
              ['`* { box-sizing: border-box; }`', 'Breiten sind berechenbar', '3'],
              ['`html { font-size: 100%; }`', 'Nutzereinstellungen respektieren', '8'],
              ['`img { max-width: 100%; ... }`', 'Bilder brechen nie aus', '4'],
              ['`h1 { font-size: clamp(...) }`', 'Flüssige Überschriften ohne Media Query', '4'],
              ['`p { max-width: 65ch; hyphens: auto; }`', 'Lesbare Zeilen, deutsche Trennung', '8'],
              ['`:focus-visible { outline: ... }`', 'Sichtbarer Tastaturfokus überall', '3, 9'],
              ['`.container { max-width: 1100px; margin: 0 auto; }`', 'Zentrierter, begrenzter Inhalt', '4'],
              ['`.menue:not([open]) nav { display: none; }`', 'Aufklapp-Menü ohne JavaScript', '8'],
              ['`.zweispaltig`, `.karten { display: grid; gap }`', 'Noch einspaltig – Spalten kommen per Media Query', '7'],
              ['`input { font: inherit; min-height: 44px }`', 'Große, lesbare Formularfelder', '9'],
            ],
          },
          { type: 'h', text: 'Prüfen in der mobilen Ansicht' },
          {
            type: 'steps',
            items: [
              'F12 → Geräte-Symbol → Breite 375px einstellen.',
              'Scrollen Sie die ganze Seite durch. Gibt es einen horizontalen Scrollbalken? Dann bricht irgendetwas aus (meist ein Bild oder ein zu langes Wort).',
              'Klappt das Menü auf und zu? Sind die Menüpunkte groß genug zum Tippen?',
              'Ist der Text angenehm groß? Der Knopf gut treffbar?',
              'Tab-Test: Ist der bernsteinfarbene Fokusrahmen überall sichtbar?',
            ],
          },
          {
            type: 'preview',
            title: 'Die mobile Ansicht – so sollte es jetzt aussehen (Regler schmal lassen)',
            height: 480,
            resizable: true,
            html: projektHtmlBody,
            css: projektCssBasis,
          },
          { type: 'tip', kind: 'tip', title: 'Wenn etwas nicht klappt', text: 'Prüfen Sie zuerst: (1) Ist `<link rel="stylesheet" href="style.css">` im head? (2) Stimmen die Klassennamen in HTML und CSS exakt überein (Groß-/Kleinschreibung!)? (3) Fehlt irgendwo ein Semikolon oder eine geschweifte Klammer? Modul 11 zeigt, wie Sie das systematisch finden.' },
        ],
        exercise: {
          title: 'Übung: Mobile Ansicht fertigstellen',
          intro: 'Schreiben Sie Teil 1 der style.css und prüfen Sie die mobile Ansicht.',
          tasks: [
            'Tippen Sie das CSS Sektion für Sektion ab und beobachten Sie die Veränderungen.',
            'Passen Sie die Farben an Ihre eigene Palette an (alle Grüntöne ersetzen).',
            'Führen Sie die fünf Prüfschritte in der 375px-Ansicht durch.',
            'Experiment: Ändern Sie `.hero { text-align: center }` in `left` – was gefällt Ihnen besser?',
          ],
        },
        summary: [
          'CSS in kommentierte Sektionen gliedern.',
          'Basis-Regeln gelten für alle Geräte – noch ohne Spalten.',
          'Nach jeder Sektion speichern, neu laden, prüfen.',
          'Mobile Ansicht muss ohne horizontalen Scrollbalken auskommen.',
        ],
      },
      {
        id: 'm10-l4',
        title: 'Schritt 4: Größere Bildschirme ergänzen',
        duration: 30,
        goals: ['Zwei Breakpoints hinzufügen', 'Karten, Zweispalter und Navigation für Tablet und Desktop anpassen', 'Die fertige Website in allen Breiten testen'],
        blocks: [
          { type: 'h', text: 'Nur noch wenige Zeilen' },
          { type: 'p', text: 'Das Schöne an Mobile First: Der Großteil der Arbeit ist getan. Für größere Bildschirme ergänzen wir **unten** in der CSS-Datei zwei Media Queries – zusammen kaum 20 Zeilen.' },
          { type: 'code', lang: 'css', title: 'style.css – Teil 2: Media Queries (ans Ende anhängen)', code: projektCssMedia },
          { type: 'h', text: 'Was passiert bei welchem Breakpoint?' },
          {
            type: 'table',
            headers: ['Breite', 'Termine-Karten', 'Über uns', 'Navigation', 'Abstände'],
            rows: [
              ['bis 699px', '1 Spalte', 'Text über Bild', 'Menü-Knopf', 'normal'],
              ['700–899px', 'auto-fit (2–3 Spalten)', 'Text neben Bild', 'Menü-Knopf', 'Hero höher'],
              ['ab 900px', 'auto-fit (3 Spalten)', 'Text neben Bild', 'Leiste', 'großzügiger'],
            ],
          },
          { type: 'p', text: 'Beachten Sie: Die Karten nutzen `auto-fit` – sie entscheiden also selbst, ob zwei oder drei nebeneinander passen. Der Breakpoint bei 700px schaltet nur von „immer eine Spalte“ auf „so viele wie passen“ um. Das verhindert, dass auf einem 400px-Handy zwei viel zu schmale Karten nebeneinander stehen.' },
          {
            type: 'preview',
            title: '🎉 Die fertige Website – ziehen Sie den Regler von ganz links nach ganz rechts',
            height: 520,
            resizable: true,
            html: projektHtmlBody,
            css: projektCss,
          },
          { type: 'h', text: 'Der finale Test' },
          {
            type: 'steps',
            items: [
              '**Alle Breiten**: Ziehen Sie das Fenster langsam von 320px bis 1600px. Beobachten Sie jeden Übergang. Nichts darf springen, überlappen oder abgeschnitten werden.',
              '**Zoom**: Drücken Sie Strg + Plus mehrmals bis 200 %. Bleibt alles lesbar und bedienbar? (Dank rem sollte die Seite einfach in die mobile Ansicht wechseln.)',
              '**Tastatur**: Kompletter Tab-Durchlauf. Skip-Link, Menü, Knopf, Formular.',
              '**Echtes Handy**: Wenn möglich, öffnen Sie die Seite auf Ihrem Smartphone (dazu in Modul 12 mehr). Der Emulator ist gut, aber das echte Gerät ist besser.',
              '**Lighthouse**: F12 → Lighthouse → alle Kategorien → Analyse. Ziel: Accessibility über 90.',
              '**Validator**: HTML bei validator.w3.org, CSS bei jigsaw.w3.org/css-validator prüfen.',
            ],
          },
          { type: 'tip', kind: 'info', title: 'Herzlichen Glückwunsch!', text: 'Sie haben eine vollständige, responsive, barrierefreie Website gebaut – von Hand, ohne Baukasten, mit Verständnis für jede Zeile. Das können die meisten Menschen nicht. In den letzten beiden Modulen lernen Sie noch, Fehler systematisch zu finden und die Seite zu veröffentlichen.' },
          { type: 'h', text: 'Ideen zum Weiterbauen' },
          {
            type: 'list',
            items: [
              'Weitere Seiten anlegen (termine.html, galerie.html) und in der Navigation verlinken. Der Kopf- und Fußbereich wird kopiert.',
              'Eine Bildergalerie mit `grid auto-fit` und `aspect-ratio` (Modul 7).',
              'Ein Hero-Hintergrundbild mit halbtransparenter Fläche unter dem Text (Modul 4).',
              'Sanfte Hover-Effekte auf den Karten: `transition: transform 0.2s; :hover { transform: translateY(-4px); }` – die prefers-reduced-motion-Regel schaltet sie bei Bedarf ab.',
              'Das Formular funktionsfähig machen: Dienste wie Formspree oder Netlify Forms nehmen die Nachrichten entgegen, ohne dass Sie programmieren müssen.',
            ],
          },
        ],
        exercise: {
          title: 'Übung: Fertigstellen und testen',
          intro: 'Vervollständigen Sie Ihre Website und führen Sie alle Tests durch.',
          tasks: [
            'Hängen Sie die Media Queries ans Ende Ihrer style.css.',
            'Führen Sie alle sechs Schritte des finalen Tests durch und notieren Sie Probleme.',
            'Passen Sie mindestens einen Breakpoint an Ihren Inhalt an (z. B. wenn Ihre Karten längere Texte haben).',
            'Setzen Sie eine Idee aus „Weiterbauen“ um.',
          ],
        },
        summary: [
          'Zwei Media Queries (700px, 900px) ergänzen Spalten und die Menüleiste.',
          'auto-fit-Karten passen sich selbstständig an.',
          'Finaler Test: alle Breiten, 200 % Zoom, Tastatur, echtes Gerät, Lighthouse, Validator.',
        ],
      },
    ],
  },
  {
    id: 'm11',
    number: 11,
    title: 'Testen & Fehlerbehebung',
    description: 'Etwas funktioniert nicht? Hier lernen Sie, Fehler systematisch zu finden – mit den Werkzeugen, die jeder Browser eingebaut hat.',
    icon: '🔍',
    lessons: [
      {
        id: 'm11-l1',
        title: 'Die Entwicklerwerkzeuge des Browsers',
        duration: 30,
        goals: ['Elemente inspizieren und CSS live ändern', 'Das Box-Modell eines Elements ablesen', 'Herausfinden, warum eine Regel nicht greift'],
        blocks: [
          { type: 'h', text: 'Ihr Röntgengerät' },
          { type: 'p', text: 'Jeder Browser hat professionelle Entwicklerwerkzeuge (DevTools) eingebaut. Sie zeigen Ihnen für jedes Element auf der Seite, welches HTML dahintersteckt, welche CSS-Regeln greifen – und welche nicht. Und Sie können CSS **direkt im Browser ändern** und sofort das Ergebnis sehen, ohne die Datei zu speichern. Ideal zum Ausprobieren.' },
          {
            type: 'steps',
            title: 'Ein Element untersuchen',
            items: [
              '**Rechtsklick** auf ein beliebiges Element Ihrer Seite → **„Untersuchen“** (Chrome) bzw. **„Element untersuchen“** (Firefox).',
              'Die DevTools öffnen sich, meist unten oder rechts. Links sehen Sie das HTML, das angeklickte Element ist markiert.',
              'Rechts daneben stehen die **CSS-Regeln**, die auf dieses Element wirken – oben die spezifischsten. Jede Regel zeigt, aus welcher Datei und Zeile sie stammt.',
              'Fahren Sie mit der Maus über Elemente im HTML-Baum – auf der Seite werden sie farbig hervorgehoben (blau = Inhalt, grün = Padding, orange = Margin).',
              'Klicken Sie auf einen CSS-Wert (z. B. `16px`) und ändern Sie ihn. Die Seite reagiert sofort. Mit den Pfeiltasten hoch/runter zählen Sie Zahlenwerte durch.',
              'Klicken Sie auf das Kästchen vor einer Eigenschaft, um sie testweise auszuschalten.',
            ],
          },
          { type: 'tip', kind: 'warning', title: 'Änderungen sind flüchtig', text: 'Alles, was Sie in den DevTools ändern, ist beim nächsten Neuladen weg. Wenn Ihnen ein Wert gefällt, übertragen Sie ihn in Ihre style.css.' },
          { type: 'h', text: 'Durchgestrichene Regeln lesen' },
          { type: 'p', text: 'Sehen Sie im CSS-Bereich eine **durchgestrichene** Eigenschaft? Das bedeutet: Diese Regel trifft zu, wird aber von einer anderen, spezifischeren oder späteren Regel überschrieben. Die gewinnende Regel steht weiter oben. Das ist die Antwort auf die häufigste Frage überhaupt: „Warum wirkt mein CSS nicht?“' },
          {
            type: 'table',
            headers: ['Symptom in den DevTools', 'Bedeutung', 'Lösung'],
            rows: [
              ['Regel ist durchgestrichen', 'Andere Regel überschreibt sie', 'Spezifischeren Selektor nutzen oder Regel weiter unten platzieren'],
              ['Regel erscheint gar nicht', 'Selektor trifft nicht zu', 'Klassenname im HTML und CSS vergleichen (Tippfehler? Punkt vergessen?)'],
              ['Gelbes Warndreieck neben dem Wert', 'Wert ungültig', 'Schreibweise prüfen (z. B. `1.5 rem` mit Leerzeichen ist falsch)'],
              ['Keine einzige eigene Regel sichtbar', 'CSS-Datei nicht geladen', '`<link>` prüfen, Reiter „Netzwerk“/„Konsole“ auf 404-Fehler prüfen'],
            ],
          },
          { type: 'h', text: 'Das Box-Modell ablesen' },
          { type: 'p', text: 'Im CSS-Bereich ganz unten (Chrome) bzw. im Reiter „Layout“ (Firefox) sehen Sie eine Grafik des Box-Modells mit den tatsächlichen Werten für margin, border, padding und Inhaltsgröße. Damit klären Sie in Sekunden, warum ein Element breiter ist als gedacht.' },
          { type: 'h', text: 'Die Konsole' },
          { type: 'p', text: 'Der Reiter **„Konsole“** zeigt Fehlermeldungen. Für reine HTML/CSS-Seiten meist nur eines relevant: **„404 Not Found“** – eine Datei wurde nicht gefunden. Dann stimmt ein Pfad nicht (CSS-Datei, Bild). Prüfen Sie Schreibweise, Groß-/Kleinschreibung und Ordner.' },
          { type: 'h', text: 'Der Geräte-Modus' },
          {
            type: 'list',
            items: [
              'Umschalten mit **Strg + Umschalt + M** (Mac: Cmd + Umschalt + M).',
              'Oben Breite frei eingeben oder ein Gerät wählen.',
              'Chrome zeigt bei aktivierter Media-Query-Leiste farbige Balken für Ihre Breakpoints.',
              'Drehen-Symbol simuliert Querformat.',
              'Firefox: **„Touch-Simulation“** aktivieren, um Hover-Effekte wie auf einem Touchscreen zu prüfen.',
            ],
          },
          { type: 'tip', kind: 'tip', title: 'Überlauf-Detektiv', text: 'Horizontaler Scrollbalken, aber Sie finden den Übeltäter nicht? Fügen Sie testweise ganz oben ins CSS `* { outline: 1px solid red; }` ein. Jede Box bekommt einen roten Rand – das ausbrechende Element ist sofort sichtbar. Danach wieder entfernen!' },
        ],
        exercise: {
          title: 'Übung: DevTools-Führerschein',
          intro: 'Öffnen Sie Ihre Projektseite und üben Sie mit den Entwicklerwerkzeugen.',
          tasks: [
            'Untersuchen Sie eine Termin-Karte. Lesen Sie im Box-Modell ab: Wie viel Padding hat sie?',
            'Ändern Sie live die Hintergrundfarbe des Hero-Bereichs. Probieren Sie drei Farben, ohne die Datei zu speichern.',
            'Schalten Sie bei `.container` die Eigenschaft `max-width` aus. Was passiert bei großer Fensterbreite?',
            'Wechseln Sie in den Geräte-Modus und prüfen Sie die Seite bei 320px, 768px und 1024px.',
            'Bauen Sie absichtlich einen Fehler ein (Klassenname im HTML ändern) und finden Sie ihn mit den DevTools.',
          ],
        },
        quiz: [
          {
            question: 'Was bedeutet eine durchgestrichene CSS-Eigenschaft in den DevTools?',
            options: ['Die Eigenschaft ist veraltet', 'Sie wird von einer anderen Regel überschrieben', 'Es liegt ein Tippfehler vor', 'Die Datei wurde nicht geladen'],
            answer: 1,
            explanation: 'Durchgestrichen heißt: trifft zu, verliert aber gegen eine spezifischere oder später definierte Regel.',
          },
          {
            question: 'Was bedeutet „404“ in der Konsole?',
            options: ['CSS-Syntaxfehler', 'Eine Datei wurde unter dem angegebenen Pfad nicht gefunden', 'Die Seite ist zu langsam', 'JavaScript-Fehler'],
            answer: 1,
            explanation: '404 = Not Found. Prüfen Sie Dateiname, Pfad und Groß-/Kleinschreibung.',
          },
        ],
        summary: [
          'Rechtsklick → Untersuchen zeigt HTML und wirksames CSS jedes Elements.',
          'Durchgestrichen = überschrieben. Nicht vorhanden = Selektor trifft nicht.',
          'CSS live ändern zum Ausprobieren – dann in die Datei übernehmen.',
          'Konsole zeigt 404-Fehler für falsche Pfade.',
        ],
      },
      {
        id: 'm11-l2',
        title: 'Die häufigsten Fehler – und wie Sie sie beheben',
        duration: 30,
        goals: ['Typische Fehlerbilder erkennen', 'Eine systematische Vorgehensweise bei Problemen haben', 'Wissen, wann man Hilfe holt und wie man richtig fragt'],
        blocks: [
          { type: 'h', text: 'Systematisch statt panisch' },
          { type: 'p', text: 'Wenn etwas nicht funktioniert, ist der Impuls, wahllos Dinge zu ändern. Das macht es meist schlimmer. Gehen Sie stattdessen in dieser Reihenfolge vor:' },
          {
            type: 'steps',
            items: [
              '**Speichern und neu laden.** Klingt banal, ist aber die Ursache Nummer eins. Strg + S, dann F5. Bei hartnäckigen Fällen: Strg + Umschalt + R (lädt ohne Zwischenspeicher).',
              '**Was genau ist das Problem?** Formulieren Sie es in einem Satz: „Die Karten stehen ab 700px nicht nebeneinander.“ Nicht: „Nichts geht.“',
              '**Seit wann?** Was haben Sie zuletzt geändert? Machen Sie es rückgängig (Strg + Z) – funktioniert es dann wieder? Dann steckt der Fehler in dieser Änderung.',
              '**Eingrenzen.** Kommentieren Sie die Hälfte des CSS aus. Fehler weg? Dann steckt er in dieser Hälfte. Wiederholen, bis Sie ihn haben.',
              '**DevTools.** Element untersuchen: Greift die Regel? Ist sie durchgestrichen? Stimmt der Klassenname?',
              '**Validieren.** validator.w3.org für HTML, jigsaw.w3.org/css-validator für CSS. Ein einziges vergessenes `}` kann alles danach lahmlegen.',
            ],
          },
          { type: 'h', text: 'Die Top 12 der Anfängerfehler' },
          {
            type: 'table',
            headers: ['Symptom', 'Wahrscheinliche Ursache', 'Lösung'],
            rows: [
              ['Gar kein CSS wirkt', '`<link>` fehlt oder Pfad falsch', '`<link rel="stylesheet" href="style.css">` im head; Dateiname exakt prüfen'],
              ['Eine bestimmte Regel wirkt nicht', 'Tippfehler im Klassennamen; Punkt vor Klasse vergessen; Semikolon in der Zeile darüber fehlt', 'Namen vergleichen; `.` prüfen; Semikolons ergänzen'],
              ['Alles nach einer bestimmten Stelle wirkt nicht', 'Geschweifte Klammer `}` fehlt oder Kommentar nicht geschlossen `*/`', 'Klammern zählen – VS Code markiert die zugehörige Klammer, wenn Sie eine anklicken'],
              ['Media Query wirkt nicht', 'Steht ÜBER der Basisregel; Viewport-Meta fehlt; `}` der Query fehlt', 'Nach unten verschieben; Meta-Zeile prüfen; doppelte Klammer'],
              ['Handy zeigt Seite winzig', 'Viewport-Meta fehlt', 'Zeile in den head'],
              ['Horizontaler Scrollbalken auf dem Handy', 'Feste Breite in px; Bild ohne max-width; langes Wort; `width: 100vw` bei vorhandenem Scrollbalken', '`* { outline: 1px solid red }` zum Finden; max-width; overflow-wrap'],
              ['Umlaute als Zeichensalat (Ã¤)', '`<meta charset="UTF-8">` fehlt oder Datei falsch gespeichert', 'Meta-Zeile; in VS Code unten rechts Kodierung „UTF-8“ wählen'],
              ['Bild wird nicht angezeigt', 'Pfad falsch; Groß-/Kleinschreibung; Dateiendung (.JPG vs .jpg)', 'Konsole → 404 prüfen; Pfad relativ zur HTML-Datei'],
              ['Box breiter als erwartet', 'Padding wird zu width addiert', '`* { box-sizing: border-box; }`'],
              ['Text ragt aus Box heraus', 'Langes Wort ohne Umbruchmöglichkeit (URL, zusammengesetztes Wort)', '`overflow-wrap: break-word; hyphens: auto;`'],
              ['Elemente nicht nebeneinander', 'display: flex auf dem falschen Element (Kind statt Eltern)', 'flex auf den CONTAINER setzen'],
              ['margin: 0 auto zentriert nicht', 'Element hat keine begrenzte Breite oder ist inline', '`max-width` setzen und `display: block`'],
            ],
          },
          { type: 'h', text: 'Fehlermeldungen richtig lesen' },
          { type: 'p', text: 'Der HTML-Validator gibt Zeilennummern an. Der Fehler liegt aber oft **vor** dieser Zeile – z. B. meldet er in Zeile 40 ein „unerwartetes schließendes Tag“, weil in Zeile 25 ein öffnendes Tag fehlt. Suchen Sie also rückwärts. Und: Beheben Sie immer den **ersten** Fehler zuerst – viele Folgefehler verschwinden dann von selbst.' },
          { type: 'h', text: 'Cross-Browser-Test' },
          { type: 'p', text: 'Moderne Browser sind sich sehr einig – die Zeiten, in denen jede Seite in jedem Browser anders aussah, sind vorbei. Trotzdem: Testen Sie in **mindestens zwei** Browsern (z. B. Firefox und Chrome) und, falls möglich, in Safari (iPhone/Mac), da Safari gelegentlich eigene Wege geht. Unter caniuse.com sehen Sie, welche CSS-Funktion in welchem Browser funktioniert – alle in diesem Kurs verwendeten sind überall unterstützt.' },
          { type: 'h', text: 'Richtig um Hilfe fragen' },
          { type: 'p', text: 'Irgendwann kommen Sie allein nicht weiter. Das ist normal. Damit andere helfen können, brauchen sie:' },
          {
            type: 'list',
            items: [
              '**Was Sie erwarten** und **was stattdessen passiert** – beides konkret.',
              '**Den relevanten Code** – nicht die ganze Datei, sondern die betroffenen Zeilen HTML und CSS.',
              '**Was Sie schon probiert haben.**',
              '**Browser und Gerät.**',
              'Idealerweise ein **Minimalbeispiel**: Reduzieren Sie das Problem auf so wenig Code wie möglich. Erstaunlich oft finden Sie beim Reduzieren den Fehler selbst.',
            ],
          },
          { type: 'tip', kind: 'info', title: 'Der Fehlerbehebungs-Guide', text: 'Im Hauptmenü dieses Kurses finden Sie den **Fehlerbehebungs-Guide** mit noch mehr Problemen, Ursachen und Lösungen – zum schnellen Nachschlagen, wenn es klemmt.' },
        ],
        exercise: {
          title: 'Übung: Fehlersuche',
          intro: 'Dieses Beispiel enthält vier Fehler. Die Karten sollten ab 500px nebeneinander stehen, blau sein und einen Rahmen haben. Finden und beheben Sie alle Fehler.',
          tasks: [
            'Fehler 1: Eine Regel wirkt wegen eines Tippfehlers nicht.',
            'Fehler 2: Ein Semikolon fehlt.',
            'Fehler 3: Die Media Query steht an der falschen Stelle.',
            'Fehler 4: Eine geschweifte Klammer fehlt.',
            'Tipp: Gehen Sie von oben nach unten und prüfen Sie jede Zeile einzeln.',
          ],
          starterHtml: `<div class="karten">
  <div class="karte">Eins</div>
  <div class="karte">Zwei</div>
  <div class="karte">Drei</div>
</div>`,
          starterCss: `body { font-family: sans-serif; padding: 16px; margin: 0; }

@media (min-width: 500px) {
  .karten { flex-direction: row; }
}

.karten {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.Karte {
  background: #dbeafe
  border: 2px solid #1d4ed8;
  padding: 16px;
  flex: 1;

.karte:hover {
  background: #bfdbfe;
}`, 
          solutionCss: `body { font-family: sans-serif; padding: 16px; margin: 0; }

.karten {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.karte {
  background: #dbeafe;
  border: 2px solid #1d4ed8;
  padding: 16px;
  flex: 1;
}

.karte:hover {
  background: #bfdbfe;
}

@media (min-width: 500px) {
  .karten { flex-direction: row; }
}`,
        },
        quiz: [
          {
            question: 'Was sollten Sie bei einem Problem als ALLERERSTES tun?',
            options: ['Den Code neu schreiben', 'Speichern und die Seite neu laden', 'Den Browser wechseln', 'Im Forum fragen'],
            answer: 1,
            explanation: 'Nicht gespeichert oder nicht neu geladen ist die häufigste „Fehlerursache“ überhaupt.',
          },
          {
            question: 'Der Validator meldet einen Fehler in Zeile 40. Wo suchen Sie zuerst?',
            options: ['Nur in Zeile 40', 'In Zeile 40 und davor – die Ursache liegt oft weiter oben', 'Nach Zeile 40', 'In der CSS-Datei'],
            answer: 1,
            explanation: 'Fehler wie fehlende schließende Tags werden oft erst später erkannt. Rückwärts suchen und den ersten Fehler zuerst beheben.',
          },
        ],
        summary: [
          'Reihenfolge: Speichern/Neu laden → Problem benennen → letzte Änderung rückgängig → eingrenzen → DevTools → validieren.',
          'Die meisten Fehler: fehlendes Semikolon, fehlende Klammer, Tippfehler im Klassennamen, falscher Pfad, Media Query zu weit oben.',
          'Ersten Fehler zuerst beheben; Validator-Zeilennummern sind nur ungefähr.',
          'Hilfe holen mit Erwartung, Ergebnis, Code und Minimalbeispiel.',
        ],
      },
    ],
  },
  {
    id: 'm12',
    number: 12,
    title: 'Veröffentlichen & Weiterlernen',
    description: 'Ihre Website ins Internet bringen – kostenlos und in wenigen Minuten. Und: Wie geht es danach weiter?',
    icon: '🚀',
    lessons: [
      {
        id: 'm12-l1',
        title: 'Die Website ins Internet bringen',
        duration: 30,
        goals: ['Verstehen, was Hosting und Domain sind', 'Die Seite kostenlos veröffentlichen', 'Die Seite auf dem echten Smartphone testen'],
        blocks: [
          { type: 'h', text: 'Was bisher fehlt' },
          { type: 'p', text: 'Ihre Website liegt bisher nur auf Ihrem Computer. Damit andere sie sehen können, braucht sie zwei Dinge:' },
          {
            type: 'table',
            headers: ['Begriff', 'Vergleich', 'Bedeutung'],
            rows: [
              ['**Hosting** (Webspace)', 'Das Grundstück', 'Ein Computer (Server), der rund um die Uhr am Internet hängt und Ihre Dateien ausliefert.'],
              ['**Domain**', 'Die Adresse', 'Der Name, unter dem man Sie findet: gartenfreunde-musterstadt.de'],
            ],
          },
          { type: 'p', text: 'Für eine statische Website (nur HTML, CSS, Bilder – keine Datenbank) gibt es hervorragende **kostenlose** Hosting-Angebote. Eine eigene .de-Domain kostet etwa 5–15 € pro Jahr.' },
          { type: 'h', text: 'Weg 1: Netlify Drop – die einfachste Methode' },
          {
            type: 'steps',
            items: [
              'Öffnen Sie **app.netlify.com/drop** im Browser.',
              'Ziehen Sie Ihren kompletten Projektordner (der mit der index.html) per Maus in das markierte Feld.',
              'Nach wenigen Sekunden erhalten Sie eine Adresse wie `zufaelliger-name-123.netlify.app`. Ihre Seite ist online!',
              'Legen Sie ein kostenloses Konto an, um die Seite dauerhaft zu behalten und den Namen zu ändern (Site settings → Change site name).',
              'Für Aktualisierungen: Ordner erneut ins Feld ziehen (im Bereich „Deploys“ Ihrer Seite).',
            ],
          },
          { type: 'tip', kind: 'info', title: 'HTTPS inklusive', text: 'Netlify liefert Ihre Seite automatisch verschlüsselt aus (https://, das Schloss-Symbol im Browser). Das ist heute Pflicht – Browser warnen vor unverschlüsselten Seiten.' },
          { type: 'h', text: 'Weg 2: GitHub Pages – mit Versionsverwaltung' },
          { type: 'p', text: 'Etwas mehr Einrichtung, dafür haben Sie eine vollständige Historie aller Änderungen und können jederzeit zu einer früheren Version zurück. Für den Anfang genügt der Weg über die Weboberfläche:' },
          {
            type: 'steps',
            items: [
              'Kostenloses Konto bei **github.com** anlegen.',
              'Oben rechts „+“ → **New repository**. Name z. B. `gartenfreunde`, „Public“ wählen, erstellen.',
              '„uploading an existing file“ anklicken und alle Dateien Ihres Ordners hochladen (Ordnerstruktur bleibt beim Ziehen des ganzen Ordners erhalten). Unten „Commit changes“.',
              '**Settings → Pages** → unter „Branch“ `main` auswählen → Save.',
              'Nach ein bis zwei Minuten ist die Seite unter `ihrname.github.io/gartenfreunde` erreichbar.',
            ],
          },
          { type: 'h', text: 'Weg 3: Klassischer Webhoster' },
          { type: 'p', text: 'Anbieter wie IONOS, Strato, all-inkl oder Hetzner bieten Pakete mit Domain, Speicherplatz und E-Mail-Adressen (info@ihr-verein.de) ab etwa 1–5 € pro Monat. Die Dateien laden Sie per **FTP** hoch – ein Programm wie **FileZilla** (kostenlos) oder der Datei-Manager im Kundenbereich des Hosters. Die Zugangsdaten stehen in Ihrem Kundenkonto. Achten Sie darauf, dass `index.html` im Hauptverzeichnis (oft `htdocs` oder `public_html` genannt) landet.' },
          { type: 'h', text: 'Eigene Domain verbinden' },
          { type: 'p', text: 'Bei Netlify oder GitHub können Sie eine bei einem beliebigen Anbieter gekaufte Domain verbinden. Der Weg heißt „Custom Domain“ und besteht darin, beim Domain-Anbieter einen Eintrag (CNAME oder A-Record) zu setzen, den Ihnen Netlify/GitHub genau vorgibt. Beide haben ausführliche deutschsprachige Anleitungen. Rechnen Sie mit bis zu 24 Stunden, bis die Domain überall funktioniert.' },
          { type: 'h', text: 'Test auf dem echten Handy' },
          { type: 'p', text: 'Jetzt, wo Ihre Seite online ist, öffnen Sie sie auf Ihrem Smartphone – und bitten Sie Freunde und Familie darum. Fragen Sie ganz konkret:' },
          {
            type: 'list',
            items: [
              'Musst du irgendwo seitlich scrollen oder zoomen?',
              'Kannst du alles gut lesen, auch draußen?',
              'Findest du auf Anhieb die Termine / den Kontakt?',
              'Kannst du alle Knöpfe gut mit dem Daumen treffen?',
              'Lädt die Seite auch im Mobilfunknetz schnell?',
            ],
          },
          { type: 'tip', kind: 'tip', title: 'Testen vor dem Hochladen', text: 'Mit Live Server in VS Code können Sie die Seite auch vor dem Veröffentlichen auf dem Handy testen: Beide Geräte müssen im selben WLAN sein. Live Server zeigt unten rechts eine Adresse wie `127.0.0.1:5500` – ersetzen Sie `127.0.0.1` durch die IP-Adresse Ihres Computers (Windows: `ipconfig` in der Eingabeaufforderung; Mac: Systemeinstellungen → Netzwerk) und geben Sie sie im Handy-Browser ein.' },
          { type: 'h', text: 'Checkliste vor dem Livegang' },
          {
            type: 'list',
            items: [
              '☐ `<title>` auf jeder Seite aussagekräftig gefüllt',
              '☐ `<meta name="description" content="...">` mit 1–2 Sätzen für Suchmaschinen',
              '☐ Alle Bilder verkleinert (unter 300 KB) und mit alt-Text',
              '☐ Alle Links funktionieren (keine `#` oder leere href)',
              '☐ Impressum und Datenschutzerklärung vorhanden und verlinkt',
              '☐ HTML und CSS validiert',
              '☐ Lighthouse-Test: Accessibility ≥ 90',
              '☐ Auf zwei Browsern und einem echten Handy getestet',
              '☐ Ein Favicon (das kleine Symbol im Browser-Tab): 32×32 px PNG als `favicon.png` und `<link rel="icon" href="favicon.png">` im head',
            ],
          },
        ],
        exercise: {
          title: 'Übung: Livegang',
          intro: 'Veröffentlichen Sie Ihre Projektseite.',
          tasks: [
            'Arbeiten Sie die Checkliste ab.',
            'Veröffentlichen Sie die Seite über Netlify Drop oder GitHub Pages.',
            'Öffnen Sie die Adresse auf Ihrem Smartphone und führen Sie den Handy-Test durch.',
            'Bitten Sie zwei Personen um ehrliches Feedback und notieren Sie drei Verbesserungen.',
          ],
        },
        quiz: [
          {
            question: 'Was ist der Unterschied zwischen Hosting und Domain?',
            options: ['Kein Unterschied', 'Hosting = Speicherplatz/Server, Domain = die Adresse', 'Hosting ist kostenlos, Domain nicht', 'Domain = Server, Hosting = Adresse'],
            answer: 1,
            explanation: 'Hosting stellt den Server bereit, die Domain ist der Name, unter dem man ihn findet.',
          },
          {
            question: 'Welche Datei muss im Hauptverzeichnis liegen, damit die Startseite automatisch angezeigt wird?',
            options: ['start.html', 'home.html', 'index.html', 'main.html'],
            answer: 2,
            explanation: 'index.html ist die weltweite Konvention für die Startseite eines Verzeichnisses.',
          },
        ],
        summary: [
          'Hosting = Server, Domain = Adresse. Statische Seiten lassen sich kostenlos hosten.',
          'Netlify Drop: Ordner reinziehen, fertig. GitHub Pages: mit Versionshistorie.',
          'Vor dem Livegang: Checkliste, Validierung, echter Handy-Test.',
        ],
      },
      {
        id: 'm12-l2',
        title: 'Wie geht es weiter?',
        duration: 15,
        goals: ['Wissen, welche Themen als Nächstes sinnvoll sind', 'Gute Lernquellen kennen', 'Einen Plan für die eigene Weiterentwicklung haben'],
        blocks: [
          { type: 'h', text: 'Was Sie jetzt können' },
          { type: 'p', text: 'Halten Sie kurz inne. Sie haben gelernt, HTML zu strukturieren, mit CSS zu gestalten, Layouts mit Flexbox und Grid zu bauen, Media Queries einzusetzen, Barrieren zu vermeiden, Fehler zu finden und eine Website zu veröffentlichen. Das ist das solide Fundament, auf dem jede Webentwicklung aufbaut – auch die von Profis.' },
          { type: 'h', text: 'Sinnvolle nächste Schritte' },
          {
            type: 'table',
            headers: ['Thema', 'Wozu?', 'Aufwand'],
            rows: [
              ['**Mehrere Seiten & gemeinsame Bausteine**', 'Kopf- und Fußzeile nicht auf jeder Seite kopieren müssen', 'Klein – z. B. mit einem statischen Seitengenerator wie Eleventy (11ty)'],
              ['**CSS-Variablen**', 'Farben zentral definieren: `--hauptfarbe: #14532d;` und überall `var(--hauptfarbe)` nutzen', 'Klein – ein Nachmittag'],
              ['**Ein bisschen JavaScript**', 'Bildergalerie mit Vergrößerung, Formularprüfung, „Nach oben“-Knopf', 'Mittel – ein eigener Kurs'],
              ['**Responsive Bilder**', '`srcset` und `<picture>`: kleine Bilder fürs Handy, große für den Monitor – spart Datenvolumen', 'Klein'],
              ['**Container Queries**', 'Elemente reagieren auf die Breite ihres Containers statt des Bildschirms – moderne Ergänzung zu Media Queries', 'Klein bis mittel'],
              ['**Content-Management-System**', 'Wenn andere Vereinsmitglieder Texte ohne Code ändern sollen: WordPress oder einfachere Systeme wie Kirby', 'Mittel'],
              ['**Suchmaschinenoptimierung (SEO)**', 'Gefunden werden: sinnvolle Titel, Beschreibungen, Struktur – vieles haben Sie schon!', 'Klein'],
            ],
          },
          { type: 'h', text: 'Empfohlene Quellen' },
          {
            type: 'list',
            items: [
              '**MDN Web Docs** (developer.mozilla.org/de) – Nachschlagewerk für jedes HTML-Element und jede CSS-Eigenschaft. Verlässlich und größtenteils auf Deutsch.',
              '**SelfHTML-Wiki** (wiki.selfhtml.org) – deutschsprachig, mit Tutorials und Beispielen.',
              '**web.dev/learn** – kostenlose Kurse von Google zu CSS, HTML, Barrierefreiheit (englisch, aber sehr gut strukturiert).',
              '**Flexbox Froggy** und **Grid Garden** – spielerische Übungen zu Flexbox und Grid (auf Deutsch verfügbar).',
              '**Can I use** (caniuse.com) – welche Funktion läuft in welchem Browser.',
              '**Volkshochschulen** – bieten oft Aufbaukurse mit persönlicher Betreuung an.',
            ],
          },
          { type: 'h', text: 'Ein Wort zu Baukästen und KI' },
          { type: 'p', text: 'Website-Baukästen (Wix, Jimdo, Squarespace) und KI-Werkzeuge können schnelle Ergebnisse liefern. Nichts spricht dagegen, sie zu nutzen. Aber Sie haben jetzt etwas, das Baukasten-Nutzer nicht haben: **Sie verstehen, was darunter passiert.** Sie können erkennen, ob ein Baukasten-Ergebnis barrierefrei ist, ob es auf dem Handy funktioniert, ob der generierte Code sauber ist. Und Sie können eingreifen, wenn etwas nicht stimmt. Dieses Verständnis veraltet nicht.' },
          { type: 'h', text: 'Bleiben Sie dran' },
          {
            type: 'list',
            items: [
              'Bauen Sie eine zweite Website – für jemand anderen. Das zweite Projekt geht dreimal so schnell wie das erste.',
              'Schauen Sie sich bei Websites, die Ihnen gefallen, mit Rechtsklick → Untersuchen an, wie sie gebaut sind.',
              'Bauen Sie Ihre Seite in einem halben Jahr noch einmal an. Sie werden staunen, was Sie verbessern möchten.',
              'Helfen Sie anderen Einsteigern. Erklären ist die beste Art zu lernen.',
            ],
          },
          { type: 'tip', kind: 'info', title: 'Vielen Dank', text: 'Danke, dass Sie diesen Kurs durchgearbeitet haben. Es braucht Mut, in jedem Alter etwas Neues zu lernen – und Sie haben es getan. Wir wünschen Ihnen viel Freude mit Ihrer Website und allen, die noch folgen.' },
        ],
        summary: [
          'Sie haben das Fundament – alles Weitere baut darauf auf.',
          'Nächste Schritte: CSS-Variablen, responsive Bilder, etwas JavaScript, mehrere Seiten.',
          'MDN und SelfHTML als Nachschlagewerke.',
          'Das zweite Projekt geht viel schneller als das erste.',
        ],
      },
    ],
  },
];
