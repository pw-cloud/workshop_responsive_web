import type { Module } from '../types';

export const modules2: Module[] = [
  {
    id: 'm5',
    number: 5,
    title: 'Media Queries – Regeln je nach Bildschirm',
    description: 'Mit Media Queries sagen Sie dem Browser: „Ab dieser Breite mach es anders.“ Das Kernwerkzeug für responsives Design.',
    icon: '📐',
    lessons: [
      {
        id: 'm5-l1',
        title: 'Ihre erste Media Query',
        duration: 30,
        goals: ['Den Aufbau einer Media Query verstehen', 'min-width korrekt einsetzen', 'Wissen, wo Media Queries in der Datei stehen müssen'],
        blocks: [
          { type: 'h', text: 'Was ist eine Media Query?' },
          { type: 'p', text: 'Eine Media Query (sprich: „Mihdia Kwiri“, deutsch etwa „Medienabfrage“) ist eine Bedingung um einen Block von CSS-Regeln. Die Regeln darin gelten **nur**, wenn die Bedingung erfüllt ist. Die häufigste Bedingung ist die Mindestbreite des Bildschirms.' },
          {
            type: 'code',
            lang: 'css',
            code: `/* Gilt immer (Basis, Mobile First) */
body {
  background-color: #fef3c7;   /* gelb auf kleinen Bildschirmen */
}

/* Gilt nur, wenn das Fenster mindestens 700px breit ist */
@media (min-width: 700px) {
  body {
    background-color: #dbeafe;   /* blau auf großen Bildschirmen */
  }
}`,
          },
          {
            type: 'list',
            items: [
              '`@media` leitet die Abfrage ein.',
              '`(min-width: 700px)` ist die Bedingung: „Mindestbreite 700 Pixel“ – also 700px **und breiter**.',
              'Die geschweifte Klammer danach öffnet einen Block, in dem ganz normale CSS-Regeln stehen – mit ihren eigenen geschweiften Klammern.',
              'Achten Sie auf die **doppelte schließende Klammer** am Ende: eine für die Regel, eine für die Media Query.',
            ],
          },
          {
            type: 'preview',
            title: 'Ziehen Sie den Regler über 700px – die Farbe wechselt',
            resizable: true,
            height: 160,
            html: `<p>Ziehen Sie den Regler. Unter 700px bin ich gelb, ab 700px blau.</p>
<p class="breite"></p>`,
            css: `body { font-family: sans-serif; padding: 24px; margin: 0; background: #fef3c7; transition: background 0.3s; }
p { font-size: 18px; font-weight: bold; }
@media (min-width: 700px) {
  body { background: #dbeafe; }
}`,
          },
          { type: 'h', text: 'Warum die Reihenfolge entscheidend ist' },
          { type: 'p', text: 'Erinnern Sie sich an die Kaskade aus Modul 3: Bei gleicher Spezifität gewinnt die **später geschriebene** Regel. Eine Media Query erhöht die Spezifität NICHT. Deshalb müssen Media Queries **unterhalb** der Basisregeln stehen, die sie überschreiben sollen. Stehen sie darüber, werden sie von den Basisregeln wieder überschrieben – und Sie wundern sich, warum nichts passiert.' },
          {
            type: 'compare',
            left: {
              title: '❌ Falsch – Query wird überschrieben',
              code: `@media (min-width: 700px) {
  .box { width: 50%; }
}

.box { width: 100%; }  /* gewinnt immer */`,
            },
            right: {
              title: '✅ Richtig – Basis zuerst, dann Query',
              code: `.box { width: 100%; }

@media (min-width: 700px) {
  .box { width: 50%; }  /* überschreibt ab 700px */
}`,
            },
          },
          { type: 'h', text: 'Ein praktisches Beispiel: Zwei Spalten ab Tablet-Breite' },
          {
            type: 'code',
            lang: 'css',
            code: `/* Basis: alles untereinander */
.zweispaltig {
  display: flex;
  flex-direction: column;   /* untereinander */
  gap: 1.5rem;
}

/* Ab 700px: nebeneinander */
@media (min-width: 700px) {
  .zweispaltig {
    flex-direction: row;    /* nebeneinander */
  }
  .zweispaltig > * {
    flex: 1;                /* beide Spalten gleich breit */
  }
}`,
          },
          {
            type: 'preview',
            title: 'Live: Zwei Spalten ab 700px',
            resizable: true,
            height: 260,
            html: `<div class="zweispaltig">
  <section>
    <h2>Über uns</h2>
    <p>Wir sind ein Verein von Hobbygärtnern und treffen uns jeden ersten Samstag im Monat.</p>
  </section>
  <section>
    <h2>Termine</h2>
    <p>Pflanzentauschbörse am 12. April, Gartenfest am 20. Juli.</p>
  </section>
</div>`,
            css: `body { font-family: sans-serif; padding: 16px; margin: 0; }
section { background: #f0fdf4; border: 2px solid #16a34a; border-radius: 8px; padding: 16px; }
h2 { margin-top: 0; }
.zweispaltig { display: flex; flex-direction: column; gap: 1.5rem; }
@media (min-width: 700px) {
  .zweispaltig { flex-direction: row; }
  .zweispaltig > * { flex: 1; }
}`,
          },
          { type: 'tip', kind: 'info', title: 'Was bedeutet das > * ?', text: '`.zweispaltig > *` heißt: „alle direkten Kinder von .zweispaltig“. Das Sternchen ist der Universal-Selektor (alles), das > bedeutet „direktes Kind“ (im Gegensatz zum Leerzeichen, das alle Nachfahren meint).' },
          { type: 'h', text: 'Weitere nützliche Abfragen' },
          {
            type: 'code',
            lang: 'css',
            code: `/* Nur für Bildschirme BIS 699px (selten nötig bei Mobile First) */
@media (max-width: 699px) { ... }

/* Nur zwischen 700 und 1099px */
@media (min-width: 700px) and (max-width: 1099px) { ... }

/* Nur beim Drucken – z. B. Navigation ausblenden */
@media print {
  nav { display: none; }
}

/* Nutzer bevorzugt weniger Bewegung (Barrierefreiheit!) */
@media (prefers-reduced-motion: reduce) {
  * { animation: none; transition: none; }
}`,
          },
        ],
        exercise: {
          title: 'Übung: Erste Media Query',
          intro: 'Machen Sie aus der einspaltigen Seite ab 750px eine zweispaltige mit Seitenleiste.',
          tasks: [
            'Schreiben Sie unten in der CSS-Datei eine Media Query für min-width: 750px.',
            'Setzen Sie darin .layout auf display: flex.',
            'Geben Sie main flex: 2 und aside flex: 1 (der Hauptinhalt wird doppelt so breit wie die Seitenleiste).',
            'Ziehen Sie den Regler hin und her und prüfen Sie den Umbruch.',
          ],
          starterHtml: `<div class="layout">
  <main>
    <h1>Hauptinhalt</h1>
    <p>Hier steht der wichtigste Text der Seite. Er soll auf großen Bildschirmen zwei Drittel der Breite einnehmen.</p>
  </main>
  <aside>
    <h2>Seitenleiste</h2>
    <p>Zusätzliche Informationen.</p>
  </aside>
</div>`,
          starterCss: `body { font-family: sans-serif; margin: 0; padding: 16px; }
main, aside { padding: 16px; border-radius: 8px; }
main { background: #eff6ff; }
aside { background: #fef9c3; margin-top: 16px; }

/* Ihre Media Query hier */
`,
          solutionCss: `body { font-family: sans-serif; margin: 0; padding: 16px; }
main, aside { padding: 16px; border-radius: 8px; }
main { background: #eff6ff; }
aside { background: #fef9c3; margin-top: 16px; }

@media (min-width: 750px) {
  .layout { display: flex; gap: 16px; }
  main { flex: 2; }
  aside { flex: 1; margin-top: 0; }
}`,
        },
        quiz: [
          {
            question: 'Für welche Bildschirme gilt @media (min-width: 700px)?',
            options: ['Nur genau 700px', 'Alle unter 700px', '700px und breiter', 'Nur Tablets'],
            answer: 2,
            explanation: 'min-width = Mindestbreite. Die Regeln gelten ab 700px aufwärts.',
          },
          {
            question: 'Wo sollten Media Queries mit min-width in der CSS-Datei stehen?',
            options: ['Ganz oben', 'Unterhalb der Basisregeln, die sie überschreiben', 'In einer separaten HTML-Datei', 'Die Reihenfolge ist egal'],
            answer: 1,
            explanation: 'Wegen der Kaskade gewinnt bei gleicher Spezifität die spätere Regel – Media Queries müssen also nach den Basisregeln kommen.',
          },
        ],
        summary: [
          '@media (min-width: 700px) { ... } – Regeln gelten ab 700px.',
          'Media Queries immer UNTER den Basisregeln platzieren.',
          'Auf die doppelte schließende Klammer achten.',
          'prefers-reduced-motion respektieren – manche Menschen vertragen keine Animationen.',
        ],
      },
      {
        id: 'm5-l2',
        title: 'Breakpoints sinnvoll wählen',
        duration: 20,
        goals: ['Verstehen, was ein Breakpoint ist', 'Breakpoints nach Inhalt statt nach Geräten setzen', 'Mit 2–3 Breakpoints auskommen'],
        blocks: [
          { type: 'h', text: 'Was ist ein Breakpoint?' },
          { type: 'p', text: 'Ein **Breakpoint** (Umbruchpunkt) ist die Breite, an der sich Ihr Layout ändert – etwa von einer auf zwei Spalten. Im Code ist das der Wert in Ihrer Media Query. Die Frage ist: Welche Werte wählt man?' },
          { type: 'h', text: 'Der alte Weg: Geräte-Breakpoints' },
          { type: 'p', text: 'Früher orientierte man sich an konkreten Geräten: „iPhone = 375px, iPad = 768px“. Das Problem: Es gibt heute hunderte Geräte mit hunderten Breiten, und nächstes Jahr wieder neue. Auf Geräte zu optimieren ist ein Wettlauf, den man nicht gewinnen kann.' },
          { type: 'h', text: 'Der bessere Weg: Inhalts-Breakpoints' },
          { type: 'p', text: 'Lassen Sie Ihren **Inhalt** entscheiden. Das Vorgehen ist einfach:' },
          {
            type: 'steps',
            items: [
              'Beginnen Sie mit dem schmalsten Fenster (ca. 320px). Alles steht untereinander.',
              'Ziehen Sie das Fenster langsam breiter.',
              'Irgendwann sieht es „falsch“ aus: Textzeilen werden zu lang, Karten zu breit, es entsteht ungenutzter Platz. **Genau dort** setzen Sie einen Breakpoint.',
              'Ziehen Sie weiter, bis es wieder unschön wird. Nächster Breakpoint.',
              'Meist reichen zwei bis drei Breakpoints für eine komplette Website.',
            ],
          },
          { type: 'h', text: 'Bewährte Ausgangswerte' },
          { type: 'p', text: 'Wenn Sie einen Startpunkt brauchen, haben sich diese Werte bewährt. Passen Sie sie an, wenn Ihr Inhalt es verlangt:' },
          {
            type: 'table',
            headers: ['Breakpoint', 'Typische Situation', 'Was ändert sich meist?'],
            rows: [
              ['Basis (kein Query)', 'Handys', 'Alles einspaltig, Navigation gestapelt oder als Menü-Knopf'],
              ['`min-width: 600px`', 'Große Handys quer, kleine Tablets', 'Zwei Karten nebeneinander, Navigation in einer Zeile'],
              ['`min-width: 900px`', 'Tablets quer, Notebooks', 'Seitenleiste erscheint neben dem Inhalt, drei Karten'],
              ['`min-width: 1200px`', 'Monitore', 'Maximale Containerbreite erreicht, größere Abstände'],
            ],
          },
          { type: 'tip', kind: 'tip', title: 'Weniger ist mehr', text: 'Jeder Breakpoint ist ein Zustand, den Sie testen und pflegen müssen. Zwei gut gewählte Breakpoints schlagen fünf schlecht gewählte. Und viele Layoutprobleme lösen sich ganz ohne Breakpoint – mit `flex-wrap` oder `grid auto-fit`, wie Sie in den nächsten Modulen sehen.' },
          { type: 'h', text: 'Breakpoints in em statt px?' },
          { type: 'p', text: 'Profis schreiben Breakpoints oft in `em`: `@media (min-width: 37.5em)` statt `600px` (600 ÷ 16 = 37,5). Vorteil: Wenn jemand seine Browserschrift vergrößert, springt das Layout früher auf die einspaltige Ansicht – der Text bekommt mehr Platz. Für den Anfang sind Pixel völlig in Ordnung; behalten Sie diese Verbesserung im Hinterkopf.' },
          { type: 'h', text: 'Testen Sie die Zwischenräume' },
          { type: 'p', text: 'Ein häufiger Fehler: Man testet bei 375px und bei 1400px, und beides sieht gut aus. Aber bei 650px ist das Layout kaputt. Ziehen Sie das Fenster deshalb immer **langsam von ganz schmal bis ganz breit** durch und beobachten Sie jeden Übergang.' },
          {
            type: 'preview',
            title: 'Drei Breakpoints in Aktion – ziehen Sie langsam von links nach rechts',
            resizable: true,
            height: 300,
            html: `<div class="anzeige">Basis (1 Spalte)</div>
<div class="karten">
  <div>1</div><div>2</div><div>3</div><div>4</div>
</div>`,
            css: `body { font-family: sans-serif; padding: 16px; margin: 0; }
.anzeige { background: #1e293b; color: white; padding: 10px 16px; border-radius: 6px; font-weight: bold; margin-bottom: 12px; }
.karten { display: grid; gap: 12px; grid-template-columns: 1fr; }
.karten div { background: #c7d2fe; border: 2px solid #4338ca; border-radius: 8px; padding: 32px; text-align: center; font-size: 24px; font-weight: bold; }
@media (min-width: 600px) {
  .karten { grid-template-columns: 1fr 1fr; }
  .anzeige::after { content: " → ab 600px: 2 Spalten"; }
}
@media (min-width: 900px) {
  .karten { grid-template-columns: repeat(4, 1fr); }
  .anzeige::after { content: " → ab 900px: 4 Spalten"; }
}`,
          },
        ],
        quiz: [
          {
            question: 'Wie sollten Breakpoints idealerweise gewählt werden?',
            options: ['Nach den Maßen aktueller iPhones', 'Dort, wo der Inhalt anfängt, unschön auszusehen', 'Immer bei 768px und 1024px', 'Möglichst viele, um alle Geräte abzudecken'],
            answer: 1,
            explanation: 'Inhaltsbasierte Breakpoints funktionieren auf jedem Gerät – auch auf denen, die es noch nicht gibt.',
          },
          {
            question: 'Wie viele Breakpoints braucht eine typische kleine Website?',
            options: ['Mindestens 8', '2 bis 3', 'Genau einen', 'Keinen'],
            answer: 1,
            explanation: 'Zwei bis drei gut gewählte Breakpoints reichen fast immer aus.',
          },
        ],
        summary: [
          'Breakpoint = Breite, an der sich das Layout ändert.',
          'Inhalt entscheidet, nicht das Gerät: Fenster ziehen, bis es unschön wird.',
          'Bewährte Startwerte: 600px, 900px, 1200px.',
          'Immer langsam durch alle Breiten ziehen – auch die Zwischenräume testen.',
        ],
      },
    ],
  },
  {
    id: 'm6',
    number: 6,
    title: 'Layout mit Flexbox',
    description: 'Flexbox ordnet Elemente in einer Reihe oder Spalte an und verteilt den Platz intelligent – perfekt für Navigationen, Karten und Kopfzeilen.',
    icon: '↔️',
    lessons: [
      {
        id: 'm6-l1',
        title: 'Flexbox-Grundlagen: Reihe, Spalte, Ausrichtung',
        duration: 35,
        goals: ['Einen Flex-Container erzeugen', 'Elemente horizontal und vertikal ausrichten', 'Den Unterschied zwischen justify-content und align-items verstehen'],
        blocks: [
          { type: 'h', text: 'Das Problem, das Flexbox löst' },
          { type: 'p', text: 'Standardmäßig stapelt der Browser Block-Elemente (div, p, section …) untereinander. Sobald Sie etwas **nebeneinander** haben wollen – Logo links, Menü rechts; drei Karten in einer Reihe; einen Text vertikal zentrieren – brauchen Sie ein Layoutwerkzeug. Jahrzehntelang war das mühsam. Flexbox macht es zu einem Zweizeiler.' },
          { type: 'h', text: 'Container und Kinder' },
          { type: 'p', text: 'Flexbox funktioniert mit zwei Ebenen: dem **Flex-Container** (das Elternelement, das `display: flex` bekommt) und den **Flex-Items** (seine direkten Kinder, die automatisch angeordnet werden).' },
          {
            type: 'compare',
            left: {
              title: 'HTML',
              code: `<div class="reihe">
  <div>Eins</div>
  <div>Zwei</div>
  <div>Drei</div>
</div>`,
            },
            right: {
              title: 'CSS',
              code: `.reihe {
  display: flex;   /* das ist alles! */
  gap: 1rem;       /* Abstand zwischen den Kindern */
}`,
            },
          },
          {
            type: 'preview',
            title: 'Vorher: untereinander. Nachher: display: flex',
            height: 200,
            html: `<p><strong>Ohne Flex:</strong></p>
<div class="ohne"><div>Eins</div><div>Zwei</div><div>Drei</div></div>
<p><strong>Mit display: flex:</strong></p>
<div class="mit"><div>Eins</div><div>Zwei</div><div>Drei</div></div>`,
            css: `body { font-family: sans-serif; padding: 12px; margin: 0; }
p { margin: 8px 0 4px; font-size: 14px; }
.ohne div, .mit div { background: #fbcfe8; border: 2px solid #be185d; padding: 8px 16px; border-radius: 6px; }
.ohne div { margin-bottom: 4px; }
.mit { display: flex; gap: 12px; }`,
          },
          { type: 'h', text: 'Richtung: Reihe oder Spalte' },
          { type: 'code', lang: 'css', code: `.container {
  display: flex;
  flex-direction: row;     /* Standard: nebeneinander (von links nach rechts) */
  /* flex-direction: column;   untereinander */
}` },
          { type: 'p', text: 'Das ist die Grundlage vieler responsiver Muster: **Auf dem Handy `column`, ab einem Breakpoint `row`.** Genau das haben Sie in Modul 5 schon gesehen.' },
          { type: 'h', text: 'Ausrichtung entlang der Hauptachse: justify-content' },
          { type: 'p', text: 'Die **Hauptachse** verläuft in Flex-Richtung – bei `row` also horizontal. `justify-content` verteilt die Kinder entlang dieser Achse:' },
          {
            type: 'preview',
            title: 'justify-content – die fünf wichtigsten Werte',
            height: 380,
            html: `<p>flex-start (Standard)</p><div class="c s"><div>A</div><div>B</div><div>C</div></div>
<p>center</p><div class="c ce"><div>A</div><div>B</div><div>C</div></div>
<p>flex-end</p><div class="c e"><div>A</div><div>B</div><div>C</div></div>
<p>space-between (Platz dazwischen)</p><div class="c sb"><div>A</div><div>B</div><div>C</div></div>
<p>space-around (Platz drumherum)</p><div class="c sa"><div>A</div><div>B</div><div>C</div></div>`,
            css: `body { font-family: sans-serif; padding: 12px; margin: 0; }
p { margin: 8px 0 2px; font-size: 13px; font-family: monospace; font-weight: bold; }
.c { display: flex; background: #f1f5f9; border: 1px dashed #94a3b8; padding: 4px; }
.c div { background: #a5b4fc; border: 2px solid #4338ca; padding: 4px 14px; border-radius: 4px; margin: 2px; }
.s { justify-content: flex-start; } .ce { justify-content: center; } .e { justify-content: flex-end; }
.sb { justify-content: space-between; } .sa { justify-content: space-around; }`,
          },
          { type: 'h', text: 'Ausrichtung quer dazu: align-items' },
          { type: 'p', text: 'Die **Querachse** steht senkrecht zur Hauptachse – bei `row` also vertikal. `align-items` richtet die Kinder auf dieser Achse aus. Das ist die Antwort auf die jahrzehntelange Frage „Wie zentriere ich etwas vertikal?“:' },
          {
            type: 'preview',
            title: 'align-items bei unterschiedlich hohen Kindern',
            height: 300,
            html: `<p>stretch (Standard: alle gleich hoch)</p><div class="c st"><div>A</div><div>B<br>zwei<br>Zeilen</div><div>C</div></div>
<p>center (vertikal mittig)</p><div class="c ce"><div>A</div><div>B<br>zwei<br>Zeilen</div><div>C</div></div>
<p>flex-start (oben bündig)</p><div class="c s"><div>A</div><div>B<br>zwei<br>Zeilen</div><div>C</div></div>`,
            css: `body { font-family: sans-serif; padding: 12px; margin: 0; }
p { margin: 8px 0 2px; font-size: 13px; font-family: monospace; font-weight: bold; }
.c { display: flex; gap: 8px; background: #f1f5f9; border: 1px dashed #94a3b8; padding: 4px; }
.c div { background: #86efac; border: 2px solid #15803d; padding: 4px 14px; border-radius: 4px; font-size: 13px; }
.st { align-items: stretch; } .ce { align-items: center; } .s { align-items: flex-start; }`,
          },
          {
            type: 'code',
            lang: 'css',
            title: 'Das berühmte perfekte Zentrieren',
            code: `.zentriert {
  display: flex;
  justify-content: center;   /* horizontal mittig */
  align-items: center;       /* vertikal mittig */
  min-height: 300px;
}`,
          },
          { type: 'h', text: 'Typische Kopfzeile: Logo links, Menü rechts' },
          {
            type: 'compare',
            left: {
              title: 'HTML',
              code: `<header class="kopf">
  <a href="#" class="logo">Gartenfreunde</a>
  <nav>
    <a href="#">Start</a>
    <a href="#">Termine</a>
    <a href="#">Kontakt</a>
  </nav>
</header>`,
            },
            right: {
              title: 'CSS',
              code: `.kopf {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
nav {
  display: flex;
  gap: 1.5rem;
}`,
            },
          },
          {
            type: 'preview',
            title: 'Ergebnis',
            height: 110,
            html: `<header class="kopf">
  <a href="#" class="logo">🌿 Gartenfreunde</a>
  <nav><a href="#">Start</a><a href="#">Termine</a><a href="#">Kontakt</a></nav>
</header>`,
            css: `body { font-family: sans-serif; margin: 0; }
.kopf { display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: #14532d; color: white; }
.logo { font-weight: bold; font-size: 1.25rem; color: white; text-decoration: none; }
nav { display: flex; gap: 1.5rem; }
nav a { color: white; text-decoration: none; padding: 0.5rem 0; }
nav a:hover { text-decoration: underline; }`,
          },
        ],
        exercise: {
          title: 'Übung: Kopfzeile und Zentrierung',
          intro: 'Bauen Sie eine Kopfzeile mit Flexbox und zentrieren Sie einen Willkommenstext.',
          tasks: [
            'Machen Sie .kopf zu einem Flex-Container mit Logo links und Navigation rechts (space-between) und vertikal zentriert.',
            'Machen Sie auch nav zu einem Flex-Container mit gap: 1rem.',
            'Zentrieren Sie den Text in .willkommen horizontal UND vertikal (min-height ist schon gesetzt).',
          ],
          starterHtml: `<header class="kopf">
  <span class="logo">Mein Verein</span>
  <nav>
    <a href="#">Start</a>
    <a href="#">Über uns</a>
    <a href="#">Kontakt</a>
  </nav>
</header>
<section class="willkommen">
  <h1>Herzlich willkommen!</h1>
</section>`,
          starterCss: `body { font-family: sans-serif; margin: 0; }
.kopf { background: #1e3a8a; color: white; padding: 1rem; }
.logo { font-weight: bold; font-size: 1.25rem; }
nav a { color: white; }
.willkommen { min-height: 200px; background: #eff6ff; }

/* Ihre Flex-Regeln hier */
`,
          solutionCss: `body { font-family: sans-serif; margin: 0; }
.kopf { background: #1e3a8a; color: white; padding: 1rem; display: flex; justify-content: space-between; align-items: center; }
.logo { font-weight: bold; font-size: 1.25rem; }
nav { display: flex; gap: 1rem; }
nav a { color: white; }
.willkommen { min-height: 200px; background: #eff6ff; display: flex; justify-content: center; align-items: center; }`,
        },
        quiz: [
          {
            question: 'Welche Eigenschaft verteilt Flex-Kinder entlang der Hauptachse (bei row: horizontal)?',
            options: ['align-items', 'justify-content', 'flex-direction', 'gap'],
            answer: 1,
            explanation: 'justify-content arbeitet auf der Hauptachse, align-items auf der Querachse.',
          },
          {
            question: 'Welches Element bekommt display: flex?',
            options: ['Jedes Kind einzeln', 'Das Elternelement (der Container)', 'Der body', 'Das erste Kind'],
            answer: 1,
            explanation: 'display: flex kommt auf den Container. Seine direkten Kinder werden automatisch zu Flex-Items.',
          },
        ],
        summary: [
          'display: flex auf den Container – Kinder ordnen sich nebeneinander an.',
          'flex-direction: row (nebeneinander) oder column (untereinander).',
          'justify-content = Hauptachse, align-items = Querachse.',
          'gap erzeugt Abstände zwischen den Kindern.',
        ],
      },
      {
        id: 'm6-l2',
        title: 'Umbrechende Karten mit flex-wrap und flex-basis',
        duration: 30,
        goals: ['Kinder automatisch umbrechen lassen', 'Mit flex: 1 1 250px responsive Karten ohne Media Query bauen', 'Die Kurzschreibweise flex verstehen'],
        blocks: [
          { type: 'h', text: 'Das Umbruch-Problem' },
          { type: 'p', text: 'Standardmäßig quetscht Flexbox alle Kinder in eine Zeile – auch wenn sie dann winzig werden. Mit `flex-wrap: wrap` erlauben Sie den Umbruch in die nächste Zeile, sobald der Platz nicht reicht.' },
          {
            type: 'compare',
            left: {
              title: '❌ nowrap (Standard): wird gequetscht',
              code: `.karten {
  display: flex;
  gap: 1rem;
}`,
            },
            right: {
              title: '✅ wrap: bricht um',
              code: `.karten {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}`,
            },
          },
          { type: 'h', text: 'Die Kurzschreibweise flex' },
          { type: 'p', text: 'Wie groß ein Kind sein darf, steuern drei Eigenschaften, die man meist gemeinsam als `flex` schreibt:' },
          {
            type: 'table',
            headers: ['Eigenschaft', 'Bedeutung', 'Typischer Wert'],
            rows: [
              ['`flex-grow`', 'Darf das Kind wachsen, um freien Platz zu füllen? (0 = nein, 1 = ja)', '1'],
              ['`flex-shrink`', 'Darf das Kind schrumpfen, wenn es eng wird?', '1'],
              ['`flex-basis`', 'Die Wunsch-Ausgangsgröße', '250px'],
            ],
          },
          { type: 'code', lang: 'css', code: `.karte {
  flex: 1 1 250px;
  /* grow shrink basis:
     "Starte bei 250px, wachse wenn Platz da ist, 
      schrumpfe notfalls – und brich um, wenn 250px nicht mehr passen." */
}` },
          { type: 'p', text: 'Das Zusammenspiel ist genial einfach: Der Browser prüft, wie viele 250px-Karten in eine Zeile passen. Bei 390px Handybreite ist es eine, bei 800px sind es drei, bei 1200px vier. Die Karten wachsen dann, um die Zeile exakt zu füllen. **Ganz ohne Media Query.**' },
          {
            type: 'preview',
            title: 'Ziehen Sie den Regler – die Karten ordnen sich selbst',
            resizable: true,
            height: 320,
            html: `<div class="karten">
  <article class="karte"><h3>Rosen</h3><p>Königin der Blumen. Braucht Sonne und guten Boden.</p></article>
  <article class="karte"><h3>Lavendel</h3><p>Duftet herrlich und lockt Bienen an.</p></article>
  <article class="karte"><h3>Tomaten</h3><p>Warm, sonnig und regelmäßig gießen.</p></article>
  <article class="karte"><h3>Kräuter</h3><p>Perfekt auch für den Balkon.</p></article>
</div>`,
            css: `body { font-family: sans-serif; margin: 0; padding: 12px; }
.karten { display: flex; flex-wrap: wrap; gap: 12px; }
.karte { flex: 1 1 200px; background: #fff7ed; border: 2px solid #ea580c; border-radius: 8px; padding: 12px; }
h3 { margin: 0 0 6px; color: #9a3412; } p { margin: 0; font-size: 14px; }`,
          },
          { type: 'tip', kind: 'warning', title: 'Die letzte Zeile wird breiter', text: 'Bei 4 Karten und 3 pro Zeile steht die vierte allein in der zweiten Zeile – und dehnt sich auf volle Breite. Manche finden das schön, manche nicht. Wenn Sie es nicht möchten, nutzen Sie CSS Grid (nächstes Modul), das die Spalten fest hält, oder setzen Sie `max-width` auf die Karte.' },
          { type: 'h', text: 'Weitere nützliche Muster' },
          {
            type: 'code',
            lang: 'css',
            title: 'Ein Element nach rechts schieben',
            code: `.kopf { display: flex; align-items: center; gap: 1rem; }
.kopf .anmelden {
  margin-left: auto;   /* schiebt sich selbst ganz nach rechts */
}`,
          },
          {
            type: 'code',
            lang: 'css',
            title: 'Footer immer am unteren Rand („sticky footer“)',
            code: `body {
  min-height: 100vh;         /* mindestens Bildschirmhöhe */
  display: flex;
  flex-direction: column;
}
main {
  flex: 1;                   /* nimmt allen übrigen Platz – drückt den Footer nach unten */
}`,
          },
          {
            type: 'code',
            lang: 'css',
            title: 'Reihenfolge auf dem Handy ändern',
            code: `/* Auf dem Handy: Bild ZUERST, dann Text – obwohl es im HTML andersherum steht */
.teaser { display: flex; flex-direction: column; }
.teaser img { order: -1; }

@media (min-width: 700px) {
  .teaser { flex-direction: row; }
  .teaser img { order: 0; }  /* wieder normale Reihenfolge */
}`,
          },
          { type: 'tip', kind: 'a11y', title: 'Vorsicht mit order', text: '`order` ändert nur die sichtbare Reihenfolge, nicht die im HTML. Tastatur- und Screenreader-Nutzer folgen der HTML-Reihenfolge. Setzen Sie `order` deshalb sparsam ein und nie für Navigationen oder Formulare – sonst springt der Fokus scheinbar wild hin und her.' },
        ],
        exercise: {
          title: 'Übung: Team-Karten',
          intro: 'Machen Sie aus der Liste responsive Karten, die ohne Media Query umbrechen.',
          tasks: [
            'Setzen Sie .team auf display: flex mit flex-wrap: wrap und gap: 1rem.',
            'Geben Sie jeder .person flex: 1 1 220px.',
            'Prüfen Sie mit dem Regler: eine Karte auf dem Handy, zwei bis drei auf dem Tablet, vier auf dem Monitor.',
            'Bonus: Begrenzen Sie .person mit max-width: 320px und beobachten Sie den Unterschied in der letzten Zeile.',
          ],
          starterHtml: `<div class="team">
  <div class="person"><h3>Anna Berger</h3><p>Vorsitzende</p></div>
  <div class="person"><h3>Karl Huber</h3><p>Kassenwart</p></div>
  <div class="person"><h3>Maria Klein</h3><p>Schriftführerin</p></div>
  <div class="person"><h3>Peter Wolf</h3><p>Beisitzer</p></div>
</div>`,
          starterCss: `body { font-family: sans-serif; margin: 0; padding: 16px; }
.person { background: #ecfeff; border: 2px solid #0e7490; border-radius: 8px; padding: 16px; text-align: center; }
.person h3 { margin: 0 0 4px; }
.person p { margin: 0; color: #155e75; }

/* Ihre Flex-Regeln */
`,
          solutionCss: `body { font-family: sans-serif; margin: 0; padding: 16px; }
.team { display: flex; flex-wrap: wrap; gap: 1rem; }
.person { flex: 1 1 220px; max-width: 320px; background: #ecfeff; border: 2px solid #0e7490; border-radius: 8px; padding: 16px; text-align: center; }
.person h3 { margin: 0 0 4px; }
.person p { margin: 0; color: #155e75; }`,
        },
        quiz: [
          {
            question: 'Was bedeutet flex: 1 1 250px?',
            options: ['Genau 250px breit, unveränderlich', 'Wachsen und schrumpfen erlaubt, Ausgangsbreite 250px', '250px Abstand zwischen den Elementen', 'Maximal 250px breit'],
            answer: 1,
            explanation: 'Die drei Werte stehen für grow, shrink und basis. Mit flex-wrap ergibt das umbrechende, sich selbst anordnende Karten.',
          },
          {
            question: 'Welche Eigenschaft erlaubt Flex-Kindern, in die nächste Zeile umzubrechen?',
            options: ['flex-direction: column', 'flex-wrap: wrap', 'overflow: wrap', 'justify-content: wrap'],
            answer: 1,
            explanation: 'flex-wrap: wrap erlaubt den Umbruch. Standard ist nowrap.',
          },
        ],
        summary: [
          'flex-wrap: wrap erlaubt Umbrüche.',
          'flex: 1 1 250px = Karten, die sich selbst anordnen – ohne Media Query.',
          'margin-left: auto schiebt ein Kind nach rechts.',
          'order nur sparsam nutzen – Tastaturreihenfolge bleibt wie im HTML.',
        ],
      },
    ],
  },
  {
    id: 'm7',
    number: 7,
    title: 'Layout mit CSS Grid',
    description: 'Grid ist das Werkzeug für zweidimensionale Layouts: Zeilen UND Spalten gleichzeitig. Ideal für ganze Seitenlayouts und Bildergalerien.',
    icon: '▦',
    lessons: [
      {
        id: 'm7-l1',
        title: 'Grid-Grundlagen und die fr-Einheit',
        duration: 30,
        goals: ['Ein Raster mit Spalten anlegen', 'Die Einheit fr und repeat() verstehen', 'Mit auto-fit responsive Galerien ohne Media Query bauen'],
        blocks: [
          { type: 'h', text: 'Flexbox oder Grid?' },
          { type: 'p', text: 'Beide sind großartig, und Sie werden beide nutzen – oft auf derselben Seite. Als Faustregel:' },
          {
            type: 'table',
            headers: ['', 'Flexbox', 'Grid'],
            rows: [
              ['Dimension', 'Eine Richtung (Reihe ODER Spalte)', 'Zwei Richtungen (Zeilen UND Spalten)'],
              ['Denkweise', 'Inhalt bestimmt die Größe', 'Raster bestimmt die Plätze'],
              ['Typisch für', 'Navigation, Kopfzeile, Button-Gruppen, Karten-Reihen', 'Seitenlayout, Galerien, Formulare, Dashboards'],
            ],
          },
          { type: 'h', text: 'Ein Raster anlegen' },
          {
            type: 'compare',
            left: {
              title: 'HTML',
              code: `<div class="galerie">
  <img src="1.jpg" alt="...">
  <img src="2.jpg" alt="...">
  <img src="3.jpg" alt="...">
  <img src="4.jpg" alt="...">
  <img src="5.jpg" alt="...">
  <img src="6.jpg" alt="...">
</div>`,
            },
            right: {
              title: 'CSS',
              code: `.galerie {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;  /* drei gleiche Spalten */
  gap: 1rem;
}`,
            },
          },
          { type: 'p', text: 'Das war\'s – sechs Bilder verteilen sich automatisch auf drei Spalten und zwei Zeilen. Die Zeilen müssen Sie nicht definieren; Grid legt sie nach Bedarf an.' },
          { type: 'h', text: 'Die Einheit fr' },
          { type: 'p', text: '`fr` steht für „fraction“ – Anteil. `1fr 1fr 1fr` heißt: drei gleich große Anteile. `2fr 1fr` heißt: die erste Spalte ist doppelt so breit wie die zweite. Der große Vorteil gegenüber Prozent: `gap` wird automatisch berücksichtigt, Sie müssen nichts rechnen.' },
          {
            type: 'code',
            lang: 'css',
            code: `/* Hauptinhalt + Seitenleiste: 2 zu 1 */
.layout { grid-template-columns: 2fr 1fr; }

/* Feste Seitenleiste 250px, Rest flexibel */
.layout { grid-template-columns: 250px 1fr; }

/* repeat() spart Tipparbeit: 4 gleiche Spalten */
.galerie { grid-template-columns: repeat(4, 1fr); }`,
          },
          { type: 'h', text: 'Der Zaubertrick: auto-fit + minmax' },
          { type: 'p', text: 'Jetzt kommt eine der elegantesten Zeilen in ganz CSS. Sie erzeugt ein Raster, das **selbst entscheidet**, wie viele Spalten passen:' },
          {
            type: 'code',
            lang: 'css',
            code: `.galerie {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}`,
          },
          { type: 'p', text: 'Auf Deutsch: „Erzeuge so viele Spalten wie hineinpassen (`auto-fit`), jede mindestens 220px und höchstens einen gleichen Anteil (`minmax(220px, 1fr)`).“ Auf dem Handy ergibt das eine Spalte, auf dem Tablet zwei bis drei, auf dem Monitor vier oder fünf. Ohne eine einzige Media Query. Anders als bei Flexbox bleiben dabei alle Spalten gleich breit – auch in der letzten Zeile.' },
          {
            type: 'preview',
            title: 'auto-fit in Aktion – Regler ziehen',
            resizable: true,
            height: 320,
            html: `<div class="galerie">
  <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div>
</div>`,
            css: `body { font-family: sans-serif; margin: 0; padding: 12px; }
.galerie { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; }
.galerie div { background: #ddd6fe; border: 2px solid #6d28d9; border-radius: 8px; aspect-ratio: 4 / 3; display: flex; align-items: center; justify-content: center; font-size: 28px; font-weight: bold; color: #4c1d95; }`,
          },
          { type: 'tip', kind: 'tip', title: 'aspect-ratio', text: 'Im Beispiel oben sorgt `aspect-ratio: 4 / 3` dafür, dass alle Kacheln dasselbe Seitenverhältnis haben – egal wie breit die Spalte wird. Sehr praktisch für Bildergalerien in Kombination mit `object-fit: cover`.' },
          { type: 'h', text: 'Ausrichtung im Grid' },
          { type: 'p', text: 'Die Ausrichtungseigenschaften kennen Sie schon von Flexbox: `justify-items` (horizontal in der Zelle), `align-items` (vertikal in der Zelle). Und `place-items: center` ist die Kurzform für beides – noch ein Weg, etwas perfekt zu zentrieren.' },
        ],
        exercise: {
          title: 'Übung: Bildergalerie',
          intro: 'Bauen Sie eine Galerie, die sich selbst anordnet.',
          tasks: [
            'Setzen Sie .galerie auf display: grid mit gap: 1rem.',
            'Nutzen Sie repeat(auto-fit, minmax(180px, 1fr)) für die Spalten.',
            'Geben Sie den Bildern width: 100%, aspect-ratio: 1 / 1 und object-fit: cover, damit alle quadratisch sind.',
            'Ziehen Sie den Regler: Wie viele Spalten entstehen bei welcher Breite?',
          ],
          starterHtml: `<div class="galerie">
  <img src="https://picsum.photos/id/1011/400/300" alt="Kanufahrer auf einem See">
  <img src="https://picsum.photos/id/1015/300/400" alt="Fluss im Gebirge">
  <img src="https://picsum.photos/id/1016/400/400" alt="Felsschlucht">
  <img src="https://picsum.photos/id/1018/400/250" alt="Bergsee mit Wald">
  <img src="https://picsum.photos/id/1019/350/400" alt="Küste bei Nebel">
  <img src="https://picsum.photos/id/1020/400/300" alt="Bär im Fluss">
</div>`,
          starterCss: `body { font-family: sans-serif; margin: 0; padding: 16px; }
img { display: block; border-radius: 8px; }

/* Ihre Grid-Regeln */
`,
          solutionCss: `body { font-family: sans-serif; margin: 0; padding: 16px; }
img { display: block; border-radius: 8px; width: 100%; aspect-ratio: 1 / 1; object-fit: cover; }
.galerie { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; }`,
        },
        quiz: [
          {
            question: 'Was erzeugt grid-template-columns: 2fr 1fr?',
            options: ['Zwei gleich breite Spalten', 'Eine Spalte doppelt so breit wie die andere', 'Drei Spalten', 'Zwei Zeilen'],
            answer: 1,
            explanation: 'fr verteilt Anteile: 2fr + 1fr = 3 Anteile, die erste Spalte bekommt zwei Drittel.',
          },
          {
            question: 'Was bewirkt repeat(auto-fit, minmax(220px, 1fr))?',
            options: ['Genau 220 Spalten', 'So viele Spalten wie passen, jede mindestens 220px', 'Eine Spalte mit 220px', 'Spalten nur ab 220px Bildschirmbreite'],
            answer: 1,
            explanation: 'Der Browser berechnet selbst, wie viele 220px-Spalten passen, und verteilt den Rest gleichmäßig.',
          },
        ],
        summary: [
          'display: grid + grid-template-columns definiert Spalten; Zeilen entstehen automatisch.',
          'fr = Anteil des verfügbaren Platzes, berücksichtigt gap automatisch.',
          'repeat(auto-fit, minmax(220px, 1fr)) = selbstanpassendes Raster ohne Media Query.',
        ],
      },
      {
        id: 'm7-l2',
        title: 'Ganze Seitenlayouts mit Grid-Areas',
        duration: 30,
        goals: ['Ein komplettes Seitenlayout mit benannten Bereichen bauen', 'Das Layout per Media Query umordnen', 'Verstehen, wann Grid-Areas die beste Wahl sind'],
        blocks: [
          { type: 'h', text: 'Layout wie auf Millimeterpapier' },
          { type: 'p', text: 'Grid-Areas erlauben Ihnen, ein Layout fast wie eine Skizze zu beschreiben. Sie geben jedem Bereich einen Namen und „malen“ dann mit diesen Namen das Raster. Das ist besonders lesbar und ideal, um das Layout je nach Bildschirmgröße komplett umzubauen.' },
          {
            type: 'code',
            lang: 'html',
            title: 'HTML – die üblichen Seitenbereiche',
            code: `<body class="seite">
  <header>Kopfzeile</header>
  <nav>Navigation</nav>
  <main>Hauptinhalt</main>
  <aside>Seitenleiste</aside>
  <footer>Fußzeile</footer>
</body>`,
          },
          {
            type: 'code',
            lang: 'css',
            title: 'CSS – Mobile First: alles untereinander',
            code: `.seite {
  display: grid;
  gap: 1rem;
  grid-template-areas:
    "kopf"
    "navi"
    "inhalt"
    "seite"
    "fuss";
}

/* Jedem Element seinen Bereich zuweisen */
header { grid-area: kopf; }
nav    { grid-area: navi; }
main   { grid-area: inhalt; }
aside  { grid-area: seite; }
footer { grid-area: fuss; }`,
          },
          {
            type: 'code',
            lang: 'css',
            title: 'Ab 900px: Klassisches Zwei-Spalten-Layout',
            code: `@media (min-width: 900px) {
  .seite {
    grid-template-columns: 1fr 300px;   /* Inhalt flexibel, Seitenleiste 300px */
    grid-template-areas:
      "kopf   kopf"
      "navi   navi"
      "inhalt seite"
      "fuss   fuss";
  }
}`,
          },
          { type: 'p', text: 'Lesen Sie die `grid-template-areas` wie ein Bild: Jede Zeichenkette in Anführungszeichen ist eine Zeile, jedes Wort eine Spalte. Steht derselbe Name in mehreren Zellen, erstreckt sich der Bereich darüber – so nimmt `kopf` die ganze Breite ein, während `inhalt` und `seite` sich eine Zeile teilen.' },
          {
            type: 'preview',
            title: 'Regler ziehen: Unter 700px gestapelt, darüber zweispaltig',
            resizable: true,
            height: 340,
            html: `<div class="seite">
  <header>header</header>
  <nav>nav</nav>
  <main>main – Hauptinhalt</main>
  <aside>aside</aside>
  <footer>footer</footer>
</div>`,
            css: `body { font-family: sans-serif; margin: 0; padding: 10px; }
.seite { display: grid; gap: 8px; grid-template-areas: "kopf" "navi" "inhalt" "seite" "fuss"; }
.seite > * { padding: 14px; border-radius: 6px; font-weight: bold; color: white; text-align: center; }
header { grid-area: kopf; background: #1e3a8a; }
nav { grid-area: navi; background: #0e7490; }
main { grid-area: inhalt; background: #15803d; min-height: 100px; }
aside { grid-area: seite; background: #a16207; }
footer { grid-area: fuss; background: #374151; }
@media (min-width: 700px) {
  .seite { grid-template-columns: 1fr 160px; grid-template-areas: "kopf kopf" "navi navi" "inhalt seite" "fuss fuss"; }
}`,
          },
          { type: 'tip', kind: 'a11y', title: 'Reihenfolge und Barrierefreiheit', text: 'Grid-Areas können Elemente visuell überall hinsetzen – aber Screenreader und Tab-Taste folgen weiterhin der HTML-Reihenfolge. Halten Sie deshalb die HTML-Reihenfolge logisch (Kopf → Navigation → Inhalt → Seitenleiste → Fuß) und nutzen Sie Areas nur für die visuelle Anordnung.' },
          { type: 'h', text: 'Einzelne Zellen überspannen' },
          { type: 'p', text: 'Manchmal soll in einer Galerie ein Bild größer sein als die anderen. Mit `grid-column: span 2` nimmt ein Element zwei Spalten ein:' },
          {
            type: 'code',
            lang: 'css',
            code: `.galerie { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }

.galerie .gross {
  grid-column: span 2;   /* zwei Spalten breit */
  grid-row: span 2;      /* zwei Zeilen hoch */
}`,
          },
          { type: 'h', text: 'Zusammenfassung: Ihr Layout-Werkzeugkasten' },
          {
            type: 'table',
            headers: ['Aufgabe', 'Werkzeug'],
            rows: [
              ['Logo links, Menü rechts', 'Flexbox + `justify-content: space-between`'],
              ['Etwas zentrieren', 'Flexbox oder Grid mit `place-items: center`'],
              ['Karten, die umbrechen', 'Flexbox `flex: 1 1 250px` + `flex-wrap` ODER Grid `auto-fit`'],
              ['Galerie mit gleichen Spalten', 'Grid `repeat(auto-fit, minmax(...))`'],
              ['Ganzes Seitenlayout', 'Grid mit `grid-template-areas`'],
              ['Inhaltsbreite begrenzen und zentrieren', '`max-width` + `margin: 0 auto`'],
            ],
          },
        ],
        exercise: {
          title: 'Übung: Seitenlayout mit Areas',
          intro: 'Bauen Sie das klassische Seitenlayout – gestapelt auf dem Handy, zweispaltig ab 800px.',
          tasks: [
            'Definieren Sie für .seite ein Grid mit grid-template-areas für die mobile Ansicht (alles untereinander).',
            'Weisen Sie header, nav, main, aside und footer ihre grid-area zu.',
            'Fügen Sie eine Media Query ab 800px hinzu: zwei Spalten (1fr 250px), main links, aside rechts, header/nav/footer über die volle Breite.',
            'Bonus: Setzen Sie die Navigation ab 800px LINKS neben den Inhalt statt darüber (Areas: "kopf kopf" / "navi inhalt" / "navi seite" / "fuss fuss" mit drei Spalten).',
          ],
          starterHtml: `<div class="seite">
  <header><h1>Gartenfreunde</h1></header>
  <nav>Start · Termine · Kontakt</nav>
  <main><h2>Willkommen</h2><p>Der Hauptinhalt der Seite mit viel Text und Bildern.</p></main>
  <aside><h3>Nächster Termin</h3><p>12. April, 10 Uhr</p></aside>
  <footer>© Gartenfreunde e. V.</footer>
</div>`,
          starterCss: `body { font-family: sans-serif; margin: 0; padding: 12px; }
.seite > * { padding: 16px; border-radius: 8px; }
header { background: #14532d; color: white; }
nav { background: #dcfce7; }
main { background: #f8fafc; border: 1px solid #cbd5e1; }
aside { background: #fef9c3; }
footer { background: #e2e8f0; text-align: center; }
h1, h2, h3 { margin-top: 0; }

/* Ihre Grid-Regeln */
`,
          solutionCss: `body { font-family: sans-serif; margin: 0; padding: 12px; }
.seite { display: grid; gap: 12px; grid-template-areas: "kopf" "navi" "inhalt" "seite" "fuss"; }
.seite > * { padding: 16px; border-radius: 8px; }
header { grid-area: kopf; background: #14532d; color: white; }
nav { grid-area: navi; background: #dcfce7; }
main { grid-area: inhalt; background: #f8fafc; border: 1px solid #cbd5e1; }
aside { grid-area: seite; background: #fef9c3; }
footer { grid-area: fuss; background: #e2e8f0; text-align: center; }
h1, h2, h3 { margin-top: 0; }

@media (min-width: 800px) {
  .seite {
    grid-template-columns: 1fr 250px;
    grid-template-areas: "kopf kopf" "navi navi" "inhalt seite" "fuss fuss";
  }
}`,
        },
        quiz: [
          {
            question: 'Wie wird ein Element einem benannten Grid-Bereich zugewiesen?',
            options: ['grid-name: kopf', 'grid-area: kopf', 'area: kopf', 'grid-position: kopf'],
            answer: 1,
            explanation: 'grid-area auf dem Kind verweist auf den Namen aus grid-template-areas des Containers.',
          },
          {
            question: 'Was passiert, wenn derselbe Bereichsname in zwei nebeneinanderliegenden Zellen steht?',
            options: ['Fehler – Namen müssen einmalig sein', 'Der Bereich erstreckt sich über beide Zellen', 'Das Element wird doppelt angezeigt', 'Nur die erste Zelle zählt'],
            answer: 1,
            explanation: 'Wiederholte Namen lassen einen Bereich mehrere Zellen überspannen – so nimmt die Kopfzeile die volle Breite ein.',
          },
        ],
        summary: [
          'grid-template-areas beschreibt das Layout wie eine Skizze.',
          'Kinder bekommen grid-area: name.',
          'Per Media Query einfach neue Areas definieren – das Layout ordnet sich komplett um.',
          'HTML-Reihenfolge logisch halten – Areas nur für die Optik.',
        ],
      },
    ],
  },
  {
    id: 'm8',
    number: 8,
    title: 'Navigation & Typografie',
    description: 'Ein Menü, das auf dem Handy und dem Monitor funktioniert – und Text, der überall gut lesbar ist.',
    icon: '🧭',
    lessons: [
      {
        id: 'm8-l1',
        title: 'Responsive Navigation ohne JavaScript',
        duration: 35,
        goals: ['Eine Navigation bauen, die auf dem Handy platzsparend ist', 'Das details/summary-Element als Menü-Knopf nutzen', 'Tastatur-Bedienbarkeit sicherstellen'],
        blocks: [
          { type: 'h', text: 'Das Navigations-Dilemma' },
          { type: 'p', text: 'Auf dem Monitor passen fünf Menüpunkte bequem in eine Zeile. Auf dem Handy nicht. Die verbreitete Lösung ist das „Hamburger-Menü“ – drei Striche, hinter denen sich das Menü verbirgt. Meist wird dafür JavaScript verwendet. Wir bauen es mit reinem HTML und CSS, denn HTML hat ein eingebautes Auf-/Zuklapp-Element: `<details>` mit `<summary>`.' },
          { type: 'h', text: 'Variante 1: Die einfachste Lösung – umbrechen lassen' },
          { type: 'p', text: 'Bei wenigen Menüpunkten (bis etwa vier) brauchen Sie gar kein Aufklapp-Menü. Lassen Sie die Links einfach umbrechen:' },
          {
            type: 'code',
            lang: 'css',
            code: `nav ul {
  display: flex;
  flex-wrap: wrap;        /* bricht bei Bedarf um */
  gap: 0.5rem 1.5rem;     /* Zeilenabstand 0.5, Spaltenabstand 1.5 */
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: center;
}
nav a {
  display: block;
  padding: 0.75rem 0.5rem;  /* große Klickfläche */
}`,
          },
          { type: 'p', text: 'Das ist ehrlich, robust und barrierefrei. Für viele Vereins- und Hobby-Seiten völlig ausreichend.' },
          { type: 'h', text: 'Variante 2: Aufklapp-Menü mit details/summary' },
          {
            type: 'code',
            lang: 'html',
            code: `<header class="kopf">
  <a href="index.html" class="logo">Gartenfreunde</a>

  <details class="menue">
    <summary aria-label="Menü öffnen oder schließen">☰ Menü</summary>
    <nav aria-label="Hauptnavigation">
      <ul>
        <li><a href="index.html">Start</a></li>
        <li><a href="termine.html">Termine</a></li>
        <li><a href="galerie.html">Galerie</a></li>
        <li><a href="kontakt.html">Kontakt</a></li>
      </ul>
    </nav>
  </details>
</header>`,
          },
          {
            type: 'code',
            lang: 'css',
            code: `/* Basis (Handy): Menü-Knopf sichtbar, Liste klappt auf */
.kopf {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #14532d;
}
.logo { color: white; font-weight: bold; text-decoration: none; font-size: 1.25rem; }

.menue summary {
  color: white;
  cursor: pointer;
  padding: 0.75rem 1rem;
  font-size: 1.1rem;
  list-style: none;              /* Standard-Dreieck entfernen */
  border: 2px solid white;
  border-radius: 6px;
}
.menue summary::-webkit-details-marker { display: none; }  /* Dreieck in Safari */

.menue nav {
  width: 100%;
}
.menue ul { list-style: none; padding: 0; margin: 0.5rem 0 0; }
.menue a {
  display: block;
  padding: 1rem;
  color: white;
  text-decoration: none;
  border-top: 1px solid rgba(255,255,255,0.2);
}
.menue a:hover, .menue a:focus-visible { background: #166534; }

/* Ab 800px: Knopf verstecken, Menü immer offen und in einer Zeile */
@media (min-width: 800px) {
  .menue summary { display: none; }
  .menue ul { display: flex; gap: 0.5rem; margin: 0; }
  .menue a { border: none; padding: 0.75rem 1rem; }
}`,
          },
          { type: 'tip', kind: 'info', title: 'Warum das ab 800px funktioniert', text: 'Ein `<details>`-Element zeigt seinen Inhalt nur, wenn es geöffnet ist – ODER wenn das `<summary>` versteckt ist? Nein: Der Inhalt bleibt technisch zugeklappt. Deshalb ergänzen wir eine kleine Regel: `.menue:not([open]) nav { display: none; }` für die mobile Basis und `.menue nav { display: block !important; }` in der Media Query. Im Live-Beispiel unten ist das bereits eingebaut.' },
          {
            type: 'preview',
            title: 'Live: Unter 700px als Aufklapp-Menü, darüber als Leiste',
            resizable: true,
            height: 300,
            html: `<header class="kopf">
  <a href="#" class="logo">🌿 Gartenfreunde</a>
  <details class="menue">
    <summary aria-label="Menü öffnen oder schließen">☰ Menü</summary>
    <nav aria-label="Hauptnavigation">
      <ul>
        <li><a href="#">Start</a></li>
        <li><a href="#">Termine</a></li>
        <li><a href="#">Galerie</a></li>
        <li><a href="#">Kontakt</a></li>
      </ul>
    </nav>
  </details>
</header>
<main><p>Klicken Sie auf „Menü“ (bei schmaler Ansicht) oder ziehen Sie den Regler nach rechts.</p></main>`,
            css: `body { font-family: sans-serif; margin: 0; }
main { padding: 16px; }
.kopf { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; padding: 12px 16px; background: #14532d; }
.logo { color: white; font-weight: bold; text-decoration: none; font-size: 1.15rem; }
.menue summary { color: white; cursor: pointer; padding: 8px 14px; list-style: none; border: 2px solid white; border-radius: 6px; }
.menue summary::-webkit-details-marker { display: none; }
.menue:not([open]) nav { display: none; }
.menue nav { width: 100%; }
.menue ul { list-style: none; padding: 0; margin: 8px 0 0; }
.menue a { display: block; padding: 12px; color: white; text-decoration: none; border-top: 1px solid rgba(255,255,255,0.25); }
.menue a:hover, .menue a:focus-visible { background: #166534; }
@media (min-width: 700px) {
  .menue summary { display: none; }
  .menue nav { display: block !important; width: auto; }
  .menue ul { display: flex; gap: 4px; margin: 0; }
  .menue a { border: none; padding: 8px 12px; border-radius: 4px; }
}`,
          },
          { type: 'h', text: 'Warum details/summary so gut ist' },
          {
            type: 'list',
            items: [
              '**Funktioniert ohne JavaScript** – auch wenn ein Skript einmal nicht lädt.',
              '**Tastaturbedienbar von Haus aus**: Mit Tab erreichen, mit Enter oder Leertaste öffnen.',
              '**Screenreader verstehen es**: Sie melden „aufgeklappt“ oder „zugeklappt“ automatisch.',
              '**Kein Zustand zu verwalten** – der Browser merkt sich, ob es offen ist.',
            ],
          },
          { type: 'tip', kind: 'a11y', title: 'Checkliste Navigation', text: 'Jede Navigation sollte: (1) in einem `<nav>` mit `aria-label` stehen, (2) eine Liste `<ul>` enthalten, (3) mindestens 44px hohe Klickflächen haben, (4) sichtbare Fokus-Zustände zeigen und (5) die aktuelle Seite kennzeichnen – z. B. mit `aria-current="page"` am Link und einer Unterstreichung.' },
          {
            type: 'code',
            lang: 'html',
            title: 'Aktuelle Seite kennzeichnen',
            code: `<li><a href="termine.html" aria-current="page">Termine</a></li>

<!-- und im CSS: -->
nav a[aria-current="page"] {
  text-decoration: underline;
  text-underline-offset: 6px;
  font-weight: bold;
}`,
          },
        ],
        exercise: {
          title: 'Übung: Ihr eigenes Menü',
          intro: 'Bauen Sie die einfache Umbruch-Navigation (Variante 1) und kennzeichnen Sie die aktuelle Seite.',
          tasks: [
            'Machen Sie die Liste zu einem Flex-Container mit flex-wrap und gap.',
            'Entfernen Sie Aufzählungspunkte und Standard-Abstände der Liste.',
            'Geben Sie den Links mindestens 0.75rem padding und einen sichtbaren :focus-visible-Zustand.',
            'Gestalten Sie den Link mit aria-current="page" unterstrichen und fett.',
          ],
          starterHtml: `<nav aria-label="Hauptnavigation">
  <ul>
    <li><a href="#" aria-current="page">Start</a></li>
    <li><a href="#">Über uns</a></li>
    <li><a href="#">Termine</a></li>
    <li><a href="#">Galerie</a></li>
    <li><a href="#">Kontakt</a></li>
  </ul>
</nav>`,
          starterCss: `body { font-family: sans-serif; margin: 0; }
nav { background: #1e3a8a; padding: 0.5rem 1rem; }
nav a { color: white; text-decoration: none; }

/* Ihre Regeln */
`,
          solutionCss: `body { font-family: sans-serif; margin: 0; }
nav { background: #1e3a8a; padding: 0.5rem 1rem; }
nav ul { display: flex; flex-wrap: wrap; gap: 0.25rem 1rem; list-style: none; padding: 0; margin: 0; }
nav a { display: block; color: white; text-decoration: none; padding: 0.75rem 0.5rem; border-radius: 4px; }
nav a:hover { background: #1d4ed8; }
nav a:focus-visible { outline: 3px solid #fbbf24; outline-offset: 2px; }
nav a[aria-current="page"] { text-decoration: underline; text-underline-offset: 6px; font-weight: bold; }`,
        },
        quiz: [
          {
            question: 'Welcher Vorteil hat details/summary gegenüber einem JavaScript-Menü?',
            options: ['Es sieht besser aus', 'Es ist ohne Skript tastatur- und screenreaderfähig', 'Es lädt Bilder schneller', 'Es funktioniert nur auf dem Handy'],
            answer: 1,
            explanation: 'Der Browser liefert Tastaturbedienung und Zustandsansage kostenlos mit.',
          },
          {
            question: 'Wie kennzeichnet man die aktuelle Seite in der Navigation barrierefrei?',
            options: ['Mit einer anderen Farbe allein', 'Mit aria-current="page" plus sichtbarer Hervorhebung', 'Indem man den Link entfernt', 'Mit class="aktiv" allein'],
            answer: 1,
            explanation: 'aria-current teilt es Screenreadern mit, die sichtbare Hervorhebung allen anderen. Farbe allein reicht nicht (Farbenblindheit).',
          },
        ],
        summary: [
          'Wenige Menüpunkte: einfach mit flex-wrap umbrechen lassen.',
          'Aufklapp-Menü: details/summary – ohne JavaScript, tastaturfähig.',
          'Immer <nav aria-label>, Liste, 44px Klickflächen, Fokus sichtbar.',
          'Aktuelle Seite mit aria-current="page" markieren.',
        ],
      },
      {
        id: 'm8-l2',
        title: 'Lesbare Typografie auf jedem Gerät',
        duration: 25,
        goals: ['Schriftgrößen wählen, die auf Handy und Monitor funktionieren', 'Zeilenlänge und -abstand optimieren', 'Eine typografische Grundausstattung als Vorlage haben'],
        blocks: [
          { type: 'h', text: 'Text ist 90 % jeder Website' },
          { type: 'p', text: 'Bilder und Layout fallen auf – aber gelesen wird Text. Gute Typografie bemerkt niemand; schlechte vertreibt Besucher in Sekunden. Gerade für Menschen über 40 (also die meisten von uns) ist Lesbarkeit kein Luxus: Ab etwa 45 lässt die Fähigkeit des Auges nach, auf Nahes scharfzustellen. Große, kontrastreiche Schrift mit luftigem Zeilenabstand ist deshalb keine Frage des Geschmacks, sondern der Rücksicht.' },
          { type: 'h', text: 'Die vier Regeln' },
          {
            type: 'table',
            headers: ['Regel', 'Wert', 'Warum'],
            rows: [
              ['**Grundschrift groß genug**', '`font-size: 1.125rem` (18px) für Fließtext, nie unter 1rem (16px)', '16px ist das Minimum, das Handys nicht automatisch vergrößern. 18px liest sich deutlich entspannter.'],
              ['**Zeilenabstand luftig**', '`line-height: 1.6` für Fließtext, `1.2` für Überschriften', 'Das Auge findet den Zeilenanfang leichter.'],
              ['**Zeilenlänge begrenzen**', '`max-width: 65ch` auf Textblöcken', '45–75 Zeichen pro Zeile sind optimal. Auf breiten Monitoren sonst 200 Zeichen – ermüdend.'],
              ['**Kontrast hoch**', 'Dunkles Grau (#222) auf Weiß, Verhältnis ≥ 4,5:1', 'Hellgrau auf Weiß ist bei Sonnenlicht oder Altersweitsichtigkeit unlesbar.'],
            ],
          },
          { type: 'h', text: 'Schriftgrößen-System mit rem' },
          { type: 'p', text: 'Statt willkürlicher Werte bauen Sie eine kleine Skala. Alles in `rem`, damit Nutzereinstellungen greifen:' },
          {
            type: 'code',
            lang: 'css',
            code: `html { font-size: 100%; }   /* = Browser-Standard, meist 16px. NICHT auf px setzen! */

body {
  font-size: 1.125rem;      /* 18px */
  line-height: 1.6;
}

h1 { font-size: 2.25rem;  line-height: 1.15; }   /* 36px */
h2 { font-size: 1.75rem;  line-height: 1.2;  }   /* 28px */
h3 { font-size: 1.375rem; line-height: 1.3;  }   /* 22px */
small, .klein { font-size: 0.9rem; }             /* nie kleiner als ~14px */

/* Auf großen Bildschirmen dürfen Überschriften wachsen */
@media (min-width: 900px) {
  h1 { font-size: 3rem; }
  h2 { font-size: 2.25rem; }
}`,
          },
          { type: 'p', text: 'Oder Sie nutzen `clamp()` aus Modul 4 und sparen sich die Media Query: `h1 { font-size: clamp(2rem, 4vw + 1rem, 3.5rem); }`' },
          { type: 'h', text: 'Schriftwahl' },
          {
            type: 'list',
            items: [
              '**Systemschriften** sind schnell und sehen vertraut aus: `font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;`',
              '**Serifenlos** (sans-serif) ist auf Bildschirmen meist besser lesbar als Serifenschrift – besonders in kleinen Größen.',
              '**Maximal zwei Schriften**: eine für Überschriften, eine für Text. Mehr wirkt unruhig.',
              '**Google Fonts** bietet kostenlose Schriften. Aber: Jede zusätzliche Schrift kostet Ladezeit, und aus Datenschutzgründen sollten Sie sie herunterladen und selbst hosten statt von Google-Servern zu laden.',
            ],
          },
          { type: 'h', text: 'Weitere Feinheiten' },
          {
            type: 'code',
            lang: 'css',
            code: `p {
  max-width: 65ch;
  margin-bottom: 1.25rem;
  hyphens: auto;            /* Silbentrennung – wichtig bei langen deutschen Wörtern! */
}

h1, h2, h3 {
  margin-top: 2em;          /* mehr Luft ÜBER der Überschrift als darunter */
  margin-bottom: 0.5em;
  overflow-wrap: break-word;  /* lange Wörter brechen statt auszubrechen */
}

a {
  color: #1d4ed8;
  text-decoration: underline;       /* Links immer unterstreichen – Farbe allein reicht nicht */
  text-underline-offset: 3px;
}`,
          },
          { type: 'tip', kind: 'a11y', title: 'Deutsche Wortungetüme', text: '„Donaudampfschifffahrtsgesellschaft“ passt in keine Handyspalte. Mit `hyphens: auto` trennt der Browser automatisch – vorausgesetzt, `lang="de"` steht im HTML-Tag (sonst kennt er die deutschen Trennregeln nicht). Noch ein Grund für diese Zeile aus Modul 2!' },
          {
            type: 'preview',
            title: 'Vergleich: schlechte vs. gute Typografie',
            height: 380,
            html: `<div class="vergleich">
  <div class="schlecht">
    <h2>Schlecht</h2>
    <p>Dieser Text ist zu klein, zu hellgrau und hat einen zu engen Zeilenabstand. Viele Menschen werden ihn nicht ohne Anstrengung lesen können, besonders auf dem Handy oder bei Sonnenlicht. Die Zeilen laufen außerdem ohne Begrenzung über die volle Breite.</p>
  </div>
  <div class="gut">
    <h2>Gut</h2>
    <p>Dieser Text hat 18 Pixel, dunkles Grau auf Weiß und einen Zeilenabstand von 1,6. Die Zeilenlänge ist begrenzt. Er lässt sich entspannt lesen – auf jedem Gerät und in jedem Alter.</p>
  </div>
</div>`,
            css: `body { margin: 0; padding: 12px; font-family: system-ui, sans-serif; }
.vergleich { display: grid; gap: 12px; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); }
.vergleich > div { padding: 16px; border-radius: 8px; border: 1px solid #ddd; }
h2 { margin: 0 0 8px; }
.schlecht h2 { color: #b91c1c; }
.schlecht p { font-size: 12px; line-height: 1.15; color: #aaa; margin: 0; }
.gut h2 { color: #15803d; }
.gut p { font-size: 18px; line-height: 1.6; color: #222; max-width: 60ch; margin: 0; }`,
          },
        ],
        exercise: {
          title: 'Übung: Typografie verbessern',
          intro: 'Dieser Text ist schlecht lesbar. Wenden Sie die vier Regeln an.',
          tasks: [
            'Erhöhen Sie die Grundschriftgröße auf 1.125rem und den Zeilenabstand auf 1.6.',
            'Ändern Sie die Textfarbe auf #222 (statt #999).',
            'Begrenzen Sie die Absatzbreite auf 65ch.',
            'Geben Sie h1 und h2 eine klare Größenskala in rem und mehr Abstand nach oben als nach unten.',
            'Aktivieren Sie Silbentrennung mit hyphens: auto.',
          ],
          starterHtml: `<article>
  <h1>Die Geschichte unseres Kleingartenvereins</h1>
  <p>Im Frühjahr 1998 trafen sich zwölf Gartenbegeisterte im Hinterzimmer der Dorfgaststätte, um einen Verein zu gründen. Die Idee: gemeinsam Wissen austauschen, Pflanzen tauschen und einmal im Jahr ein großes Fest feiern.</p>
  <h2>Die ersten Jahre</h2>
  <p>Schon im ersten Jahr wuchs die Mitgliederzahl auf vierzig. Die Pflanzentauschbörse wurde zur festen Institution, und das Gartenfest lockte bald Besucher aus den Nachbarorten an. Die Donaudampfschifffahrtsgesellschaftskapitänsmütze war übrigens nie Teil des Programms.</p>
</article>`,
          starterCss: `body { font-family: system-ui, sans-serif; margin: 0; padding: 16px; }
body { font-size: 13px; line-height: 1.1; color: #999; }
h1 { font-size: 18px; }
h2 { font-size: 15px; }

/* Verbessern Sie hier */
`,
          solutionCss: `body { font-family: system-ui, sans-serif; margin: 0; padding: 16px; }
body { font-size: 1.125rem; line-height: 1.6; color: #222; }
h1 { font-size: 2.25rem; line-height: 1.15; margin: 0 0 0.5em; }
h2 { font-size: 1.75rem; line-height: 1.2; margin: 2em 0 0.5em; }
p { max-width: 65ch; hyphens: auto; margin: 0 0 1.25rem; }`,
        },
        quiz: [
          {
            question: 'Welche Zeilenlänge ist für Fließtext optimal?',
            options: ['20–30 Zeichen', '45–75 Zeichen', '100–150 Zeichen', 'So breit wie der Bildschirm'],
            answer: 1,
            explanation: 'Bei 45–75 Zeichen findet das Auge den nächsten Zeilenanfang am leichtesten. max-width: 65ch setzt das um.',
          },
          {
            question: 'Warum sollte html { font-size: ... } nicht in px gesetzt werden?',
            options: ['px ist veraltet', 'Es überschreibt die Schriftgrößen-Einstellung des Nutzers im Browser', 'Es macht die Seite langsamer', 'Handys ignorieren px'],
            answer: 1,
            explanation: 'Mit html { font-size: 100% } (oder gar keiner Angabe) bleibt die Nutzereinstellung wirksam und alle rem-Werte skalieren mit.',
          },
        ],
        summary: [
          'Fließtext ≥ 1.125rem (18px), line-height 1.6, max-width 65ch, Kontrast ≥ 4,5:1.',
          'Alle Größen in rem – html nie auf px setzen.',
          'hyphens: auto + lang="de" für deutsche Silbentrennung.',
          'Links unterstreichen, nicht nur färben.',
        ],
      },
    ],
  },
];
