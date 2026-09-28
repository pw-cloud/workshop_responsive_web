import type { TroubleItem } from '../types';

export const troubleshooting: { category: string; items: TroubleItem[] }[] = [
  {
    category: 'CSS wirkt nicht',
    items: [
      {
        problem: 'Gar keine meiner CSS-Regeln wird angewendet',
        causes: ['Die <link>-Zeile fehlt im <head>', 'Der Dateiname oder Pfad in href stimmt nicht', 'Die CSS-Datei liegt in einem anderen Ordner', 'Datei nicht gespeichert'],
        fixes: ['Prüfen: <link rel="stylesheet" href="style.css"> steht im head', 'Dateiname exakt vergleichen – Groß-/Kleinschreibung zählt', 'F12 → Konsole: Steht dort ein 404-Fehler?', 'Strg + S, dann Strg + Umschalt + R'],
        code: `<head>\n  <link rel="stylesheet" href="style.css">\n</head>`,
      },
      {
        problem: 'Eine einzelne Regel wirkt nicht',
        causes: ['Tippfehler im Klassennamen (HTML vs. CSS)', 'Punkt vor dem Klassennamen vergessen', 'Semikolon in der Zeile darüber fehlt', 'Eine spezifischere Regel überschreibt sie'],
        fixes: ['Klassennamen in HTML und CSS per Kopieren vergleichen', 'F12 → Element untersuchen: Erscheint die Regel? Ist sie durchgestrichen?', 'Alle Semikolons prüfen', 'Regel weiter nach unten verschieben oder Selektor spezifischer machen'],
      },
      {
        problem: 'Ab einer bestimmten Stelle wirkt nichts mehr',
        causes: ['Eine geschweifte Klammer } fehlt', 'Ein Kommentar wurde nicht geschlossen (*/ fehlt)'],
        fixes: ['In VS Code auf eine Klammer klicken – die zugehörige wird markiert. Öffnende und schließende zählen.', 'Nach /* suchen und prüfen, ob jedes ein */ hat', 'CSS-Validator nutzen: jigsaw.w3.org/css-validator'],
      },
      {
        problem: 'Meine Media Query wird ignoriert',
        causes: ['Sie steht ÜBER der Basisregel und wird überschrieben', 'Die Viewport-Meta-Zeile fehlt (Handy)', 'Klammer der Media Query nicht geschlossen', 'min-width und max-width verwechselt'],
        fixes: ['Media Queries ans Ende der Datei verschieben', 'Viewport-Zeile in den head', 'Doppelte schließende Klammer prüfen: } }', 'min-width = ab dieser Breite; max-width = bis zu dieser Breite'],
        code: `.box { width: 100%; }\n\n@media (min-width: 700px) {\n  .box { width: 50%; }\n}  /* ← diese Klammer wird oft vergessen */`,
      },
    ],
  },
  {
    category: 'Layout-Probleme',
    items: [
      {
        problem: 'Horizontaler Scrollbalken auf dem Handy',
        causes: ['Ein Element hat eine feste Breite in px', 'Ein Bild ohne max-width: 100%', 'Ein sehr langes Wort oder eine URL', 'width: 100vw plus Padding oder Rahmen', 'Negative margins'],
        fixes: ['Testweise * { outline: 1px solid red; } einfügen – das ausbrechende Element wird sichtbar', 'img { max-width: 100%; height: auto; }', 'overflow-wrap: break-word; hyphens: auto;', 'Statt 100vw lieber 100% verwenden', 'box-sizing: border-box sicherstellen'],
        code: `/* Notfall-Diagnose – danach entfernen! */\n* { outline: 1px solid red; }`,
      },
      {
        problem: 'Elemente stehen nicht nebeneinander',
        causes: ['display: flex auf dem Kind statt auf dem Elternelement', 'Die Kinder haben width: 100%', 'flex-direction: column ist noch aktiv (aus der mobilen Basis)'],
        fixes: ['display: flex auf den CONTAINER (das umschließende Element)', 'width der Kinder entfernen oder flex: 1 nutzen', 'In der Media Query flex-direction: row setzen'],
      },
      {
        problem: 'Box ist breiter als angegeben',
        causes: ['padding und border werden zur width addiert (Standardverhalten)'],
        fixes: ['* { box-sizing: border-box; } ganz oben in die CSS-Datei'],
      },
      {
        problem: 'margin: 0 auto zentriert nicht',
        causes: ['Element hat keine begrenzte Breite (nimmt schon 100 % ein)', 'Element ist inline (z. B. ein Link oder Bild)'],
        fixes: ['max-width oder width setzen', 'display: block hinzufügen'],
        code: `.container {\n  display: block;\n  max-width: 900px;\n  margin: 0 auto;\n}`,
      },
      {
        problem: 'Unerklärlicher Abstand unter einem Bild',
        causes: ['Bilder sind standardmäßig inline und sitzen auf der Schriftgrundlinie'],
        fixes: ['img { display: block; }'],
      },
      {
        problem: 'Karten in der letzten Zeile sind breiter als die anderen',
        causes: ['Flexbox mit flex-grow dehnt die letzten Elemente auf die volle Zeile'],
        fixes: ['max-width auf die Karte setzen', 'Oder CSS Grid mit repeat(auto-fit, minmax(...)) verwenden – hält Spalten gleich breit'],
      },
      {
        problem: 'Text ragt aus seiner Box heraus',
        causes: ['Langes Wort ohne Umbruchmöglichkeit', 'Feste Höhe (height) auf dem Container'],
        fixes: ['overflow-wrap: break-word; hyphens: auto; (lang="de" nötig)', 'height durch min-height ersetzen'],
      },
    ],
  },
  {
    category: 'Handy-spezifisch',
    items: [
      {
        problem: 'Seite erscheint auf dem Handy winzig verkleinert',
        causes: ['Die Viewport-Meta-Zeile fehlt'],
        fixes: ['In den head einfügen'],
        code: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`,
      },
      {
        problem: 'Handy zoomt beim Antippen eines Formularfelds',
        causes: ['Schriftgröße im Eingabefeld unter 16px (iOS zoomt dann automatisch)'],
        fixes: ['input, textarea, select { font-size: 1rem; } oder font: inherit bei mindestens 16px Grundschrift'],
      },
      {
        problem: 'Hover-Effekte bleiben auf dem Handy „hängen“',
        causes: ['Touchscreens haben kein echtes Hover; der Zustand bleibt nach dem Tippen bestehen'],
        fixes: ['Wichtige Informationen nie nur per Hover zeigen', 'Optional: @media (hover: hover) { .button:hover { ... } } – Hover-Stile nur für Geräte mit Maus'],
      },
      {
        problem: 'Knöpfe und Links schwer zu treffen',
        causes: ['Klickfläche zu klein'],
        fixes: ['Mindestens 44 × 44 px: padding erhöhen, display: block bei Links in Menüs', 'Genug Abstand (gap) zwischen benachbarten Bedienelementen'],
      },
    ],
  },
  {
    category: 'HTML & Inhalte',
    items: [
      {
        problem: 'Umlaute werden als Zeichensalat angezeigt (Ã¤, Ã¶)',
        causes: ['<meta charset="UTF-8"> fehlt', 'Datei wurde in einer anderen Kodierung gespeichert'],
        fixes: ['Meta-Zeile als erste Zeile im head', 'In VS Code unten rechts auf die Kodierung klicken → „Mit Kodierung speichern“ → UTF-8'],
      },
      {
        problem: 'Bild wird nicht angezeigt (kaputtes Bildsymbol)',
        causes: ['Pfad falsch', 'Groß-/Kleinschreibung (Bild.JPG vs bild.jpg)', 'Bild liegt in anderem Ordner', 'Leerzeichen oder Umlaute im Dateinamen'],
        fixes: ['F12 → Konsole: 404-Meldung zeigt den gesuchten Pfad', 'Pfad ist relativ zur HTML-Datei: bilder/foto.jpg', 'Dateien umbenennen: klein, ohne Leerzeichen/Umlaute'],
      },
      {
        problem: 'Link führt nirgendwo hin / Seite nicht gefunden',
        causes: ['Zieldatei existiert nicht oder heißt anders', 'href="#" als Platzhalter vergessen zu ersetzen'],
        fixes: ['Alle href prüfen', 'Externe Links mit https:// beginnen lassen'],
      },
      {
        problem: 'Layout „springt“ oder verschachtelt sich seltsam',
        causes: ['Schließendes Tag vergessen (z. B. </div>)', 'Tags falsch verschachtelt: <p><div></div></p> ist ungültig'],
        fixes: ['HTML-Validator: validator.w3.org', 'In VS Code auf ein Tag klicken – das Gegenstück wird markiert', 'Ersten gemeldeten Fehler zuerst beheben'],
      },
      {
        problem: 'Änderungen werden nicht sichtbar',
        causes: ['Nicht gespeichert', 'Browser zeigt alte Version aus dem Cache', 'Falsche Datei bearbeitet (z. B. Kopie auf dem Desktop)'],
        fixes: ['Strg + S', 'Strg + Umschalt + R (Neu laden ohne Cache)', 'Dateipfad in der Adresszeile mit dem Pfad in VS Code vergleichen'],
      },
    ],
  },
  {
    category: 'Barrierefreiheit',
    items: [
      {
        problem: 'Lighthouse meldet „Elemente haben keinen ausreichenden Kontrast“',
        causes: ['Textfarbe zu hell für den Hintergrund (typisch: Grau auf Weiß, Weiß auf Orange/Hellgrün)'],
        fixes: ['Text dunkler oder Hintergrund heller machen', 'Mit webaim.org/resources/contrastchecker prüfen: Ziel 4,5:1'],
      },
      {
        problem: 'Lighthouse meldet „Bilder haben keine alt-Attribute“',
        causes: ['alt fehlt komplett'],
        fixes: ['Beschreibenden alt-Text ergänzen', 'Bei rein dekorativen Bildern alt="" (leer)'],
      },
      {
        problem: 'Lighthouse meldet „Formularelemente haben keine zugeordneten Labels“',
        causes: ['Beschriftung steht daneben, ist aber nicht per for/id verbunden', 'Nur placeholder verwendet'],
        fixes: ['<label for="xyz"> mit <input id="xyz"> verbinden'],
        code: `<label for="email">E-Mail</label>\n<input type="email" id="email" name="email">`,
      },
      {
        problem: 'Beim Tab-Drücken sehe ich nicht, wo ich bin',
        causes: ['outline: none irgendwo im CSS', 'Fokusfarbe zu ähnlich zum Hintergrund'],
        fixes: ['Alle outline: none entfernen', 'Deutlichen Fokusstil definieren'],
        code: `:focus-visible {\n  outline: 3px solid #f59e0b;\n  outline-offset: 3px;\n}`,
      },
      {
        problem: 'Lighthouse meldet „Überschriften sind nicht in absteigender Reihenfolge“',
        causes: ['Eine Ebene wurde übersprungen (h2 → h4)', 'Überschriften nach Größe statt Bedeutung gewählt'],
        fixes: ['Hierarchie prüfen: h1 → h2 → h3, keine Ebene auslassen', 'Größe per CSS anpassen, nicht per Überschriftenebene'],
      },
    ],
  },
];
