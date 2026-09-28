import type { Module } from '../types';

export const modules1: Module[] = [
  {
    id: 'm1',
    number: 1,
    title: 'Willkommen & Vorbereitung',
    description: 'Was eine Website ausmacht, was „responsiv“ bedeutet und wie Sie Ihren Arbeitsplatz in wenigen Minuten einrichten.',
    icon: '👋',
    lessons: [
      {
        id: 'm1-l1',
        title: 'Was ist eine Website – und was heißt „responsiv“?',
        duration: 15,
        goals: [
          'Verstehen, aus welchen Bausteinen eine Website besteht',
          'Erklären können, was „responsives Design“ bedeutet',
          'Wissen, warum das heute unverzichtbar ist',
        ],
        blocks: [
          { type: 'h', text: 'Keine Sorge – Sie brauchen keine Vorkenntnisse' },
          { type: 'p', text: 'Herzlich willkommen! Dieser Kurs ist für Menschen gemacht, die noch nie eine Zeile Code geschrieben haben. Vielleicht möchten Sie eine Seite für Ihren Verein, Ihr kleines Geschäft, Ihr Hobby oder einfach aus Neugier bauen. Alles, was Sie brauchen, ist ein Computer, etwas Zeit und Geduld mit sich selbst. Wir gehen jeden Schritt gemeinsam.' },
          { type: 'h', text: 'Drei Bausteine jeder Website' },
          { type: 'p', text: 'Stellen Sie sich ein Haus vor. Jede Website besteht aus drei Schichten, die ähnlich zusammenarbeiten:' },
          {
            type: 'table',
            headers: ['Schicht', 'Vergleich', 'Aufgabe'],
            rows: [
              ['**HTML**', 'Das Mauerwerk', 'Legt fest, WAS auf der Seite steht: Überschriften, Texte, Bilder, Links.'],
              ['**CSS**', 'Farbe, Tapete, Möbel', 'Legt fest, WIE es aussieht: Farben, Schriften, Abstände, Anordnung.'],
              ['**JavaScript**', 'Die Elektrik', 'Macht Dinge interaktiv. Brauchen wir in diesem Kurs fast gar nicht!'],
            ],
          },
          { type: 'tip', kind: 'info', title: 'Gute Nachricht', text: 'Für eine vollständige responsive Website reichen HTML und CSS aus. Genau darauf konzentrieren wir uns.' },
          { type: 'h', text: 'Was bedeutet „responsiv“?' },
          { type: 'p', text: 'Das Wort kommt vom englischen „to respond“ – reagieren. Eine responsive Website **reagiert auf die Größe des Bildschirms**, auf dem sie angezeigt wird. Auf einem großen Monitor stehen vielleicht drei Spalten nebeneinander. Auf einem Smartphone rutschen dieselben Inhalte untereinander, die Schrift bleibt lesbar, und man muss nicht seitlich scrollen oder mit zwei Fingern zoomen.' },
          { type: 'p', text: 'Denken Sie an Wasser, das die Form seines Gefäßes annimmt. Genau so soll sich Ihre Website verhalten – egal ob das Gefäß ein Handy, ein Tablet oder ein Fernseher ist.' },
          {
            type: 'preview',
            title: 'Probieren Sie es aus: Ziehen Sie den Regler und beobachten Sie, wie sich die Karten anordnen.',
            resizable: true,
            height: 300,
            html: `<div class="karten">
  <div class="karte">Karte 1</div>
  <div class="karte">Karte 2</div>
  <div class="karte">Karte 3</div>
</div>
<p class="hinweis">Bei schmalem Bildschirm stehen die Karten untereinander – bei breitem nebeneinander.</p>`,
            css: `body { font-family: sans-serif; padding: 16px; margin: 0; }
.karten { display: flex; flex-wrap: wrap; gap: 12px; }
.karte { flex: 1 1 180px; background: #dbeafe; border: 2px solid #1d4ed8; border-radius: 8px; padding: 24px; text-align: center; font-size: 18px; font-weight: bold; color: #1e3a8a; }
.hinweis { color: #475569; margin-top: 16px; }`,
          },
          { type: 'h', text: 'Warum ist das so wichtig?' },
          {
            type: 'list',
            items: [
              'Mehr als die Hälfte aller Website-Besuche kommen heute von Smartphones.',
              'Suchmaschinen wie Google bewerten Seiten schlechter, die auf dem Handy nicht funktionieren.',
              'Menschen mit Sehbeeinträchtigung vergrößern häufig die Schrift – auch das ist eine Form von „anderer Bildschirmgröße“.',
              'Sie pflegen nur EINE Website statt einer Handy- und einer Computer-Version.',
            ],
          },
          { type: 'tip', kind: 'a11y', title: 'Barrierefreiheit von Anfang an', text: 'Responsives Design und Barrierefreiheit sind eng verwandt. Beide sorgen dafür, dass möglichst viele Menschen Ihre Inhalte nutzen können – unabhängig vom Gerät oder von körperlichen Einschränkungen. Wir behandeln das in jedem Modul mit.' },
        ],
        quiz: [
          {
            question: 'Welche Schicht legt fest, WIE eine Website aussieht (Farben, Schriften, Anordnung)?',
            options: ['HTML', 'CSS', 'JavaScript', 'Der Browser'],
            answer: 1,
            explanation: 'CSS (Cascading Style Sheets) ist für das Aussehen zuständig. HTML liefert die Inhalte und Struktur.',
          },
          {
            question: 'Was bedeutet „responsiv“ im Zusammenhang mit Websites?',
            options: [
              'Die Website antwortet auf E-Mails',
              'Die Website lädt besonders schnell',
              'Die Website passt sich der Bildschirmgröße an',
              'Die Website ist nur für Handys gemacht',
            ],
            answer: 2,
            explanation: 'Responsiv bedeutet, dass das Layout auf die verfügbare Bildschirmbreite reagiert und sich anpasst.',
          },
        ],
        summary: [
          'Websites bestehen aus HTML (Inhalt), CSS (Aussehen) und optional JavaScript (Interaktion).',
          'Responsiv = die Seite passt sich jeder Bildschirmgröße an.',
          'Für diesen Kurs reichen HTML und CSS völlig aus.',
        ],
      },
      {
        id: 'm1-l2',
        title: 'Ihr Arbeitsplatz: Browser, Editor und Projektordner',
        duration: 20,
        goals: [
          'Einen Text-Editor installieren und kennenlernen',
          'Einen Projektordner mit sinnvoller Struktur anlegen',
          'Eine Datei im Browser öffnen',
        ],
        blocks: [
          { type: 'h', text: 'Was Sie brauchen (alles kostenlos)' },
          {
            type: 'table',
            headers: ['Werkzeug', 'Empfehlung', 'Wofür?'],
            rows: [
              ['Browser', 'Firefox oder Google Chrome', 'Zeigt Ihre Website an und hilft bei der Fehlersuche.'],
              ['Text-Editor', 'Visual Studio Code (kurz: VS Code)', 'Hier schreiben Sie HTML und CSS. Farbige Hervorhebung hilft beim Lesen.'],
              ['Ein Ordner', 'z. B. „meine-website“ auf dem Schreibtisch', 'Hier liegen alle Dateien Ihrer Website.'],
            ],
          },
          { type: 'tip', kind: 'warning', title: 'Bitte kein Word!', text: 'Textverarbeitungsprogramme wie Word oder Pages fügen unsichtbare Formatierungen ein, die der Browser nicht versteht. Verwenden Sie immer einen reinen Text-Editor wie VS Code.' },
          { type: 'h', text: 'Schritt für Schritt: VS Code einrichten' },
          {
            type: 'steps',
            items: [
              'Öffnen Sie in Ihrem Browser die Seite **code.visualstudio.com** und klicken Sie auf den großen blauen Download-Knopf. Die Seite erkennt automatisch, ob Sie Windows, Mac oder Linux verwenden.',
              'Installieren Sie das Programm wie jedes andere auch (Doppelklick auf die heruntergeladene Datei, dann den Anweisungen folgen).',
              'Starten Sie VS Code. Sie sehen eine dunkle Oberfläche. Falls Ihnen das zu dunkel ist: Menü **Datei → Einstellungen → Design → Farbdesign** (auf dem Mac: **Code → Einstellungen**) und ein helles Design wählen.',
              'Optional, aber sehr empfehlenswert: Klicken Sie links auf das Symbol mit den vier Quadraten (Erweiterungen), suchen Sie nach **„German Language Pack“** und installieren Sie es. Nach einem Neustart ist VS Code auf Deutsch.',
              'Suchen Sie ebenfalls unter Erweiterungen nach **„Live Server“** und installieren Sie es. Damit aktualisiert sich Ihre Website im Browser automatisch, sobald Sie speichern.',
            ],
          },
          { type: 'tip', kind: 'tip', title: 'Schrift zu klein?', text: 'In VS Code können Sie mit **Strg + Plus** (Mac: **Cmd + Plus**) die gesamte Oberfläche vergrößern. Das gilt übrigens auch für jeden Browser!' },
          { type: 'h', text: 'Den Projektordner anlegen' },
          {
            type: 'steps',
            items: [
              'Erstellen Sie auf dem Schreibtisch einen neuen Ordner und nennen Sie ihn **meine-website** (klein geschrieben, ohne Leerzeichen – dazu gleich mehr).',
              'Öffnen Sie in VS Code das Menü **Datei → Ordner öffnen** und wählen Sie diesen Ordner aus.',
              'Links erscheint der „Explorer“ – die Dateiliste Ihres Projekts. Sie ist noch leer.',
              'Fahren Sie mit der Maus über den Ordnernamen und klicken Sie auf das Symbol **„Neue Datei“**. Nennen Sie die Datei **index.html**.',
              'Erstellen Sie auf dieselbe Weise einen Ordner **bilder** und eine Datei **style.css**.',
            ],
          },
          {
            type: 'code',
            lang: 'text',
            title: 'So sollte Ihr Ordner jetzt aussehen',
            code: `meine-website/
├── index.html      ← Ihre Startseite
├── style.css       ← Das Aussehen
└── bilder/         ← Fotos und Grafiken`,
          },
          { type: 'h', text: 'Regeln für Dateinamen' },
          {
            type: 'list',
            items: [
              '**Nur Kleinbuchstaben**: `kontakt.html` statt `Kontakt.HTML`. Viele Webserver unterscheiden Groß- und Kleinschreibung.',
              '**Keine Leerzeichen**: Verwenden Sie Bindestriche: `ueber-uns.html`.',
              '**Keine Umlaute oder ß**: `ue`, `ae`, `oe`, `ss` stattdessen.',
              '**index.html** ist immer die Startseite – dieser Name ist eine feste Konvention.',
            ],
          },
          { type: 'h', text: 'Der erste Test' },
          { type: 'p', text: 'Schreiben Sie in die Datei `index.html` einfach den Satz „Hallo Welt!“ und speichern Sie mit **Strg + S** (Mac: **Cmd + S**). Öffnen Sie dann den Ordner im Datei-Explorer und machen Sie einen Doppelklick auf `index.html`. Der Browser öffnet sich und zeigt Ihren Satz. Herzlichen Glückwunsch – Ihre erste Webseite!' },
          { type: 'tip', kind: 'tip', title: 'Live Server nutzen', text: 'Wenn Sie „Live Server“ installiert haben: Rechtsklick in die Datei → **„Open with Live Server“**. Ab jetzt aktualisiert sich der Browser bei jedem Speichern von selbst.' },
        ],
        exercise: {
          title: 'Übung: Arbeitsplatz einrichten',
          intro: 'Diese Übung machen Sie auf Ihrem eigenen Computer.',
          tasks: [
            'Installieren Sie VS Code und die Erweiterung „Live Server“.',
            'Legen Sie den Ordner „meine-website“ mit den Dateien index.html, style.css und dem Unterordner „bilder“ an.',
            'Schreiben Sie „Hallo Welt!“ in index.html und öffnen Sie die Datei im Browser.',
            'Ändern Sie den Text, speichern Sie und laden Sie die Browserseite neu (Taste F5). Sehen Sie die Änderung?',
          ],
        },
        summary: [
          'VS Code ist ein kostenloser Editor – bitte nie Word für Code verwenden.',
          'Dateinamen: klein, ohne Leerzeichen und Umlaute.',
          'index.html ist immer die Startseite.',
          'Speichern (Strg+S) und Browser neu laden (F5) – das machen Sie ab jetzt hundertmal.',
        ],
      },
      {
        id: 'm1-l3',
        title: 'So lernen Sie am besten',
        duration: 10,
        goals: ['Realistische Erwartungen entwickeln', 'Eine Lernroutine finden, die zu Ihnen passt', 'Wissen, wo Sie Hilfe bekommen'],
        blocks: [
          { type: 'h', text: 'Fehler sind Teil des Plans' },
          { type: 'p', text: 'Das Wichtigste vorweg: **Jeder, der Websites baut, macht ständig Fehler.** Profis unterscheiden sich von Anfängern nicht dadurch, dass sie keine Fehler machen – sondern dadurch, dass sie gelernt haben, sie schnell zu finden. Ein vergessenes Semikolon oder eine fehlende spitze Klammer sind völlig normal. Modul 11 widmet sich ganz der Fehlersuche.' },
          { type: 'h', text: 'Tipps für den Lernerfolg' },
          {
            type: 'list',
            items: [
              '**Tippen Sie den Code selbst ab**, statt ihn zu kopieren. Das fühlt sich langsamer an, prägt sich aber deutlich besser ein.',
              '**Verändern Sie die Beispiele.** Was passiert, wenn Sie eine Zahl verdoppeln? Eine Farbe ändern? Experimentieren ist die beste Lehrmethode.',
              '**Kurze, regelmäßige Einheiten** (z. B. 30 Minuten an drei Tagen) wirken besser als ein fünfstündiger Marathon.',
              '**Machen Sie Pausen**, wenn Sie feststecken. Erstaunlich oft sieht man den Fehler nach einem Kaffee sofort.',
              '**Führen Sie ein Lerntagebuch** – ein einfaches Textdokument, in das Sie neue Begriffe und „Aha-Momente“ notieren.',
            ],
          },
          { type: 'h', text: 'Wie dieser Kurs aufgebaut ist' },
          { type: 'p', text: 'Jede Lektion folgt demselben Muster: Zuerst die **Lernziele**, dann die **Erklärung** mit Beispielen, die Sie direkt im Browser ausprobieren können, danach eine **praktische Übung** und zum Schluss eine kurze **Wissensprüfung** sowie eine **Zusammenfassung**. Sie können Lektionen als „erledigt“ markieren – Ihr Fortschritt wird in Ihrem Browser gespeichert.' },
          { type: 'p', text: 'Die Module bauen aufeinander auf. Wenn Sie schon Vorkenntnisse haben, dürfen Sie natürlich springen. Als Einsteiger empfehlen wir aber die Reihenfolge einzuhalten.' },
          { type: 'tip', kind: 'info', title: 'Der Übungsplatz', text: 'Oben im Menü finden Sie den **Übungsplatz**. Dort können Sie jederzeit HTML und CSS eingeben und sehen sofort das Ergebnis – mit einem Regler, der verschiedene Bildschirmbreiten simuliert. Nutzen Sie ihn so oft Sie möchten.' },
          { type: 'h', text: 'Wo bekomme ich Hilfe?' },
          {
            type: 'list',
            items: [
              '**MDN Web Docs** (developer.mozilla.org/de) – das zuverlässigste Nachschlagewerk, größtenteils auf Deutsch.',
              '**SelfHTML** (wiki.selfhtml.org) – deutschsprachiges Wiki mit vielen Beispielen.',
              'Das **Glossar** und der **Fehlerbehebungs-Guide** in diesem Kurs.',
              'Fragen Sie andere Lernende – z. B. in Volkshochschul-Gruppen oder Foren. Es gibt keine dummen Fragen.',
            ],
          },
        ],
        summary: [
          'Fehler gehören dazu – die Fähigkeit, sie zu finden, ist die eigentliche Kompetenz.',
          'Selbst tippen, experimentieren, regelmäßig kurz üben.',
          'Der Übungsplatz und das Glossar stehen jederzeit bereit.',
        ],
      },
    ],
  },
  {
    id: 'm2',
    number: 2,
    title: 'HTML – Das Gerüst Ihrer Seite',
    description: 'Lernen Sie die Sprache, mit der Inhalte strukturiert werden: Überschriften, Absätze, Listen, Links, Bilder und Seitenbereiche.',
    icon: '🧱',
    lessons: [
      {
        id: 'm2-l1',
        title: 'Ihre erste richtige HTML-Seite',
        duration: 25,
        goals: ['Das Grundgerüst einer HTML-Datei verstehen', 'Wissen, was Tags und Elemente sind', 'Die Viewport-Zeile kennen – der erste Schritt zu „responsiv“'],
        blocks: [
          { type: 'h', text: 'Was ist ein Tag?' },
          { type: 'p', text: 'HTML besteht aus **Tags** (gesprochen „Tägs“) – kleinen Markierungen in spitzen Klammern. Die meisten kommen paarweise: ein öffnendes Tag `<p>` und ein schließendes Tag `</p>` mit Schrägstrich. Alles dazwischen ist der Inhalt. Zusammen nennt man das ein **Element**.' },
          { type: 'code', lang: 'html', title: 'Ein Absatz-Element', code: `<p>Dies ist ein Absatz. Das p steht für "paragraph".</p>` },
          { type: 'p', text: 'Sie können sich Tags wie Klammern in einem Text vorstellen: Sie sagen dem Browser, wo etwas anfängt und wo es aufhört – und was es ist.' },
          { type: 'h', text: 'Das Grundgerüst' },
          { type: 'p', text: 'Jede HTML-Seite beginnt mit demselben Gerüst. Tippen Sie es einmal ab, danach kopieren Sie es für jede neue Seite:' },
          {
            type: 'code',
            lang: 'html',
            title: 'index.html – das Grundgerüst',
            code: `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meine erste Website</title>
</head>
<body>

  <h1>Hallo Welt!</h1>
  <p>Das ist meine erste Website.</p>

</body>
</html>`,
          },
          { type: 'h', text: 'Zeile für Zeile erklärt' },
          {
            type: 'table',
            headers: ['Zeile', 'Bedeutung'],
            rows: [
              ['`<!DOCTYPE html>`', 'Sagt dem Browser: „Das ist modernes HTML.“ Immer die erste Zeile.'],
              ['`<html lang="de">`', 'Umschließt alles. `lang="de"` teilt Vorlesesoftware mit, dass der Text deutsch ist – wichtig für die Aussprache!'],
              ['`<head>`', 'Der „Kopf“: Informationen ÜBER die Seite, die man nicht sieht.'],
              ['`<meta charset="UTF-8">`', 'Sorgt dafür, dass Umlaute (ä, ö, ü, ß) richtig angezeigt werden.'],
              ['`<meta name="viewport" ...>`', '**Die wichtigste Zeile für responsive Design!** Ohne sie zeigen Handys die Seite winzig verkleinert an. Details in Modul 4.'],
              ['`<title>`', 'Der Text im Browser-Tab und in Suchergebnissen.'],
              ['`<body>`', 'Der „Körper“: Alles, was der Besucher tatsächlich sieht.'],
            ],
          },
          { type: 'tip', kind: 'a11y', title: 'Warum lang="de" wichtig ist', text: 'Blinde und sehbehinderte Menschen nutzen Bildschirmleseprogramme (Screenreader), die den Text vorlesen. Ohne Sprachangabe würde ein deutscher Text womöglich mit englischer Aussprache vorgelesen – kaum verständlich. Diese eine Zeile macht einen großen Unterschied.' },
          { type: 'h', text: 'Einrückung und Lesbarkeit' },
          { type: 'p', text: 'Die Leerzeichen am Zeilenanfang (Einrückung) sind für den Browser egal – aber für Sie enorm hilfreich. Rücken Sie verschachtelte Elemente ein, dann sehen Sie auf einen Blick, was wozu gehört. VS Code hilft dabei automatisch.' },
          { type: 'tip', kind: 'tip', title: 'VS Code-Trick', text: 'Tippen Sie in einer leeren HTML-Datei ein Ausrufezeichen `!` und drücken Sie die Tabulator-Taste. VS Code erzeugt das komplette Grundgerüst für Sie. Ändern Sie dann nur noch `lang="en"` in `lang="de"`.' },
          {
            type: 'preview',
            title: 'So sieht das Grundgerüst im Browser aus',
            height: 160,
            html: `<h1>Hallo Welt!</h1>
<p>Das ist meine erste Website.</p>`,
          },
        ],
        exercise: {
          title: 'Übung: Grundgerüst erstellen',
          intro: 'Arbeiten Sie in Ihrer Datei index.html oder direkt hier im Editor.',
          tasks: [
            'Tippen Sie das Grundgerüst ab (oder nutzen Sie den !-Trick in VS Code).',
            'Ändern Sie den `<title>` in einen Namen Ihrer Wahl, z. B. „Gartenfreunde Musterstadt“.',
            'Schreiben Sie in den `<body>` eine Überschrift mit Ihrem Namen und einen Absatz darüber, warum Sie diesen Kurs machen.',
            'Speichern Sie und schauen Sie sich das Ergebnis im Browser an. Steht Ihr Titel im Browser-Tab?',
          ],
          starterHtml: `<h1>Ihr Name</h1>
<p>Schreiben Sie hier, warum Sie diesen Kurs machen.</p>`,
        },
        quiz: [
          {
            question: 'Welche Zeile sorgt dafür, dass Umlaute korrekt angezeigt werden?',
            options: ['<!DOCTYPE html>', '<meta charset="UTF-8">', '<title>', '<html lang="de">'],
            answer: 1,
            explanation: 'UTF-8 ist eine Zeichenkodierung, die alle Sonderzeichen inklusive ä, ö, ü und ß abdeckt.',
          },
          {
            question: 'Was ist der Unterschied zwischen <head> und <body>?',
            options: [
              'Kein Unterschied, beide sind sichtbar',
              'Der head enthält Informationen über die Seite, der body den sichtbaren Inhalt',
              'Der head ist für Überschriften, der body für Absätze',
              'Der body ist optional',
            ],
            answer: 1,
            explanation: 'Der <head> enthält unsichtbare Metainformationen (Titel, Zeichensatz, Viewport), der <body> alles Sichtbare.',
          },
        ],
        summary: [
          'HTML-Elemente bestehen aus öffnendem Tag, Inhalt und schließendem Tag.',
          'Jede Seite hat ein festes Grundgerüst mit head und body.',
          'lang="de", charset UTF-8 und die Viewport-Zeile sind Pflicht.',
        ],
      },
      {
        id: 'm2-l2',
        title: 'Text strukturieren: Überschriften, Absätze, Listen und Links',
        duration: 30,
        goals: ['Überschriften-Hierarchie richtig einsetzen', 'Listen und Links erstellen', 'Verstehen, warum Struktur wichtiger ist als Aussehen'],
        blocks: [
          { type: 'h', text: 'Überschriften: h1 bis h6' },
          { type: 'p', text: 'HTML kennt sechs Überschriften-Ebenen. `<h1>` ist die Hauptüberschrift (wie ein Buchtitel), `<h2>` sind Kapitel, `<h3>` Unterkapitel und so weiter. Wichtig: Die Nummern beschreiben die **Bedeutung**, nicht die Größe! Wie groß eine Überschrift dargestellt wird, regeln wir später mit CSS.' },
          {
            type: 'code',
            lang: 'html',
            code: `<h1>Gartenfreunde Musterstadt</h1>

<h2>Über uns</h2>
<p>Wir sind ein Verein von Hobbygärtnern ...</p>

<h2>Unsere Termine</h2>
<h3>Frühjahr</h3>
<p>Pflanzentauschbörse am 12. April ...</p>
<h3>Sommer</h3>
<p>Gartenfest am 20. Juli ...</p>`,
          },
          {
            type: 'tip',
            kind: 'a11y',
            title: 'Regeln für Überschriften',
            text: 'Nur EINE h1 pro Seite. Keine Ebene überspringen (nicht von h2 direkt zu h4). Screenreader-Nutzer springen oft per Tastendruck von Überschrift zu Überschrift – eine saubere Struktur ist für sie wie ein Inhaltsverzeichnis.',
          },
          { type: 'h', text: 'Absätze und Zeilenumbrüche' },
          { type: 'p', text: 'Jeder Textabsatz kommt in ein `<p>`-Element. Der Browser ignoriert übrigens mehrfache Leerzeichen und Zeilenumbrüche in Ihrem Code – er bricht nur dort um, wo ein Element endet. Brauchen Sie einen erzwungenen Zeilenumbruch innerhalb eines Absatzes (etwa bei einer Adresse), nutzen Sie `<br>`. Das ist eines der wenigen Tags ohne schließendes Gegenstück.' },
          {
            type: 'code',
            lang: 'html',
            code: `<p>
  Gartenfreunde Musterstadt e. V.<br>
  Blumenweg 7<br>
  12345 Musterstadt
</p>`,
          },
          { type: 'h', text: 'Text hervorheben' },
          { type: 'p', text: 'Mit `<strong>` markieren Sie **wichtige** Wörter (fett dargestellt), mit `<em>` *betonte* Wörter (kursiv). Screenreader können diese Betonung hörbar machen.' },
          { type: 'h', text: 'Listen' },
          { type: 'p', text: 'Es gibt zwei Arten: **ungeordnete Listen** `<ul>` mit Aufzählungspunkten und **geordnete Listen** `<ol>` mit Nummern. Jeder Eintrag steht in einem `<li>` (list item).' },
          {
            type: 'compare',
            left: {
              title: 'Ungeordnet (Punkte)',
              code: `<ul>
  <li>Rosen</li>
  <li>Tulpen</li>
  <li>Lavendel</li>
</ul>`,
            },
            right: {
              title: 'Geordnet (Nummern)',
              code: `<ol>
  <li>Boden lockern</li>
  <li>Samen einlegen</li>
  <li>Gießen</li>
</ol>`,
            },
          },
          { type: 'h', text: 'Links – das Herz des Webs' },
          { type: 'p', text: 'Ein Link entsteht mit dem `<a>`-Element (anchor = Anker). Das Ziel steht im **Attribut** `href`. Attribute sind Zusatzinformationen im öffnenden Tag – Name, Gleichheitszeichen, Wert in Anführungszeichen.' },
          {
            type: 'code',
            lang: 'html',
            code: `<!-- Link zu einer anderen Website -->
<a href="https://www.wikipedia.de">Zur Wikipedia</a>

<!-- Link zu einer eigenen Seite im selben Ordner -->
<a href="kontakt.html">Kontakt</a>

<!-- Link, der eine E-Mail öffnet -->
<a href="mailto:info@beispiel.de">Schreiben Sie uns</a>`,
          },
          { type: 'tip', kind: 'a11y', title: 'Gute Linktexte', text: 'Schreiben Sie nie „hier klicken“. Der Linktext sollte auch ohne Zusammenhang verständlich sein: „Zum Veranstaltungskalender“ statt „hier“. Screenreader-Nutzer lassen sich oft alle Links einer Seite als Liste vorlesen.' },
          { type: 'tip', kind: 'info', title: 'Kommentare', text: 'Text zwischen `<!--` und `-->` ist ein Kommentar. Der Browser zeigt ihn nicht an – er dient nur Ihnen als Notiz.' },
          {
            type: 'preview',
            title: 'Alles zusammen im Browser',
            height: 360,
            html: `<h1>Gartenfreunde Musterstadt</h1>
<h2>Über uns</h2>
<p>Wir sind ein Verein von <strong>Hobbygärtnern</strong>, der sich seit 1998 trifft.</p>
<h2>Unsere Lieblingspflanzen</h2>
<ul>
  <li>Rosen</li>
  <li>Tulpen</li>
  <li>Lavendel</li>
</ul>
<h2>So säen Sie richtig</h2>
<ol>
  <li>Boden lockern</li>
  <li>Samen einlegen</li>
  <li>Gießen</li>
</ol>
<p><a href="#">Zum Veranstaltungskalender</a></p>`,
          },
        ],
        exercise: {
          title: 'Übung: Eine strukturierte Seite',
          intro: 'Bauen Sie eine kleine Seite zu einem Thema, das Sie mögen (Hobby, Reiseziel, Rezept …).',
          tasks: [
            'Eine h1-Hauptüberschrift und mindestens zwei h2-Abschnitte.',
            'Mindestens einen Absatz pro Abschnitt, mit einem fett hervorgehobenen Wort.',
            'Eine ungeordnete und eine geordnete Liste.',
            'Einen Link zu einer echten Website mit einem sprechenden Linktext.',
          ],
          starterHtml: `<h1>Mein Thema</h1>

<h2>Erster Abschnitt</h2>
<p>Text ...</p>

<h2>Zweiter Abschnitt</h2>
<ul>
  <li>Punkt 1</li>
</ul>`,
          solutionHtml: `<h1>Mein Lieblingsrezept: Apfelkuchen</h1>

<h2>Warum ich dieses Rezept liebe</h2>
<p>Dieser Kuchen stammt von meiner <strong>Großmutter</strong> und gelingt immer.</p>

<h2>Zutaten</h2>
<ul>
  <li>4 Äpfel</li>
  <li>200 g Mehl</li>
  <li>100 g Zucker</li>
</ul>

<h2>Zubereitung</h2>
<ol>
  <li>Äpfel schälen und schneiden</li>
  <li>Teig anrühren</li>
  <li>45 Minuten backen</li>
</ol>

<p>Mehr Rezepte gibt es bei <a href="https://www.chefkoch.de">Chefkoch</a>.</p>`,
        },
        quiz: [
          {
            question: 'Wie viele h1-Überschriften sollte eine Seite haben?',
            options: ['Beliebig viele', 'Genau eine', 'Mindestens drei', 'Keine, h2 reicht'],
            answer: 1,
            explanation: 'Eine h1 ist der Titel der Seite. Mehrere verwirren Screenreader-Nutzer und Suchmaschinen.',
          },
          {
            question: 'Welcher Linktext ist am besten?',
            options: ['hier klicken', 'Link', 'mehr', 'Zum Anmeldeformular für den Gartenkurs'],
            answer: 3,
            explanation: 'Ein Linktext sollte das Ziel beschreiben, auch wenn er ohne Kontext gelesen wird.',
          },
        ],
        summary: [
          'Überschriften h1–h6 beschreiben die Bedeutung, nicht die Größe.',
          'Absätze in <p>, Listen mit <ul>/<ol> und <li>.',
          'Links mit <a href="..."> und sprechendem Linktext.',
        ],
      },
      {
        id: 'm2-l3',
        title: 'Bilder und Seitenbereiche (semantisches HTML)',
        duration: 25,
        goals: ['Bilder korrekt einbinden – mit Alternativtext', 'Die Seite in sinnvolle Bereiche gliedern', 'Verstehen, was „semantisch“ bedeutet'],
        blocks: [
          { type: 'h', text: 'Bilder einfügen' },
          { type: 'p', text: 'Das `<img>`-Element bindet ein Bild ein. Es hat kein schließendes Tag. Zwei Attribute sind Pflicht: `src` (source = Quelle, also der Dateipfad) und `alt` (Alternativtext).' },
          {
            type: 'code',
            lang: 'html',
            code: `<img src="bilder/rosenbeet.jpg" alt="Rotes Rosenbeet vor dem Vereinsheim im Sommer">`,
          },
          { type: 'h', text: 'Der Alternativtext – kleiner Aufwand, große Wirkung' },
          { type: 'p', text: 'Der `alt`-Text beschreibt, was auf dem Bild zu sehen ist. Er wird angezeigt, wenn das Bild nicht lädt, und von Screenreadern vorgelesen. Stellen Sie sich vor, Sie beschreiben das Bild jemandem am Telefon – kurz und treffend.' },
          {
            type: 'table',
            headers: ['Situation', 'Alt-Text'],
            rows: [
              ['Foto mit Inhalt', '`alt="Vereinsmitglieder pflanzen einen Apfelbaum"`'],
              ['Logo mit Link', '`alt="Gartenfreunde Musterstadt – zur Startseite"`'],
              ['Reine Dekoration (Ornament, Trennlinie)', '`alt=""` (leer, aber vorhanden!) – Screenreader überspringen es dann.'],
            ],
          },
          { type: 'tip', kind: 'warning', title: 'Häufiger Fehler', text: 'Das `alt`-Attribut ganz wegzulassen ist ein Fehler. Screenreader lesen dann den Dateinamen vor: „IMG underscore zwei drei vier fünf punkt jpg“. Bei dekorativen Bildern schreiben Sie `alt=""`.' },
          { type: 'h', text: 'Bildformate und -größen' },
          {
            type: 'list',
            items: [
              '**JPG**: Fotos. Gute Qualität bei kleiner Dateigröße.',
              '**PNG**: Grafiken, Logos, Bilder mit transparentem Hintergrund.',
              '**SVG**: Symbole und Logos – bleiben in jeder Größe gestochen scharf.',
              '**WebP**: Modernes Format, noch kleiner als JPG. Alle aktuellen Browser unterstützen es.',
              'Verkleinern Sie Fotos vor dem Hochladen! Ein Handyfoto hat oft 4000 Pixel Breite und 5 MB. Für eine Website reichen meist 1200–1600 Pixel und unter 300 KB. Kostenlose Werkzeuge: squoosh.app im Browser oder die Vorschau-App auf dem Mac.',
            ],
          },
          { type: 'h', text: 'Die Seite in Bereiche gliedern' },
          { type: 'p', text: 'Bisher haben wir Inhalte einfach untereinander geschrieben. Echte Websites haben aber erkennbare Bereiche: eine Kopfzeile mit Logo, eine Navigation, den Hauptinhalt und eine Fußzeile. HTML bietet dafür eigene Elemente – man nennt sie **semantisch**, weil sie ihre Bedeutung im Namen tragen.' },
          {
            type: 'code',
            lang: 'html',
            title: 'Die typische Seitenstruktur',
            code: `<body>
  <header>
    <h1>Gartenfreunde Musterstadt</h1>
  </header>

  <nav aria-label="Hauptnavigation">
    <ul>
      <li><a href="index.html">Start</a></li>
      <li><a href="termine.html">Termine</a></li>
      <li><a href="kontakt.html">Kontakt</a></li>
    </ul>
  </nav>

  <main>
    <section>
      <h2>Willkommen</h2>
      <p>Schön, dass Sie da sind ...</p>
    </section>

    <section>
      <h2>Nächster Termin</h2>
      <article>
        <h3>Pflanzentauschbörse</h3>
        <p>Am 12. April ab 10 Uhr ...</p>
      </article>
    </section>
  </main>

  <footer>
    <p>© 2024 Gartenfreunde Musterstadt e. V.</p>
  </footer>
</body>`,
          },
          {
            type: 'table',
            headers: ['Element', 'Bedeutung', 'Wie oft?'],
            rows: [
              ['`<header>`', 'Kopfbereich mit Logo/Titel', 'Meist einmal'],
              ['`<nav>`', 'Navigation (Menü mit Links)', 'Ein- bis zweimal'],
              ['`<main>`', 'Der Hauptinhalt der Seite', 'Genau einmal!'],
              ['`<section>`', 'Ein thematischer Abschnitt, meist mit eigener Überschrift', 'Beliebig'],
              ['`<article>`', 'In sich geschlossener Inhalt (Beitrag, Termin, Produkt)', 'Beliebig'],
              ['`<aside>`', 'Randinformationen (Seitenleiste, Infokasten)', 'Nach Bedarf'],
              ['`<footer>`', 'Fußzeile mit Impressum, Kontakt, Copyright', 'Meist einmal'],
              ['`<div>`', 'Neutrale Box ohne Bedeutung – nur wenn nichts anderes passt', 'Sparsam'],
            ],
          },
          { type: 'tip', kind: 'a11y', title: 'Warum das für Barrierefreiheit zählt', text: 'Screenreader bieten Sprungmarken an: „Zum Hauptinhalt springen“, „Zur Navigation“. Das funktioniert nur, wenn Sie `<main>`, `<nav>` usw. verwenden – mit lauter `<div>`-Boxen geht das nicht. Auch Suchmaschinen verstehen Ihre Seite dadurch besser.' },
        ],
        exercise: {
          title: 'Übung: Seite gliedern',
          intro: 'Nehmen Sie Ihre Seite aus der letzten Übung und geben Sie ihr eine richtige Struktur.',
          tasks: [
            'Umschließen Sie die h1 mit einem <header>.',
            'Fügen Sie eine <nav> mit einer Liste aus drei Links ein (die Zielseiten dürfen noch nicht existieren).',
            'Packen Sie den Inhalt in <main> und gliedern Sie ihn in <section>-Abschnitte.',
            'Ergänzen Sie ein Bild mit sinnvollem alt-Text (im Editor hier können Sie eine Bild-URL aus dem Internet nutzen, z. B. https://picsum.photos/600/300).',
            'Schließen Sie mit einem <footer> ab.',
          ],
          starterHtml: `<header>
  <h1>Mein Thema</h1>
</header>
<nav aria-label="Hauptnavigation">
  <ul>
    <li><a href="index.html">Start</a></li>
  </ul>
</nav>
<main>
  <section>
    <h2>Abschnitt</h2>
    <img src="https://picsum.photos/600/300" alt="Beschreiben Sie das Bild">
  </section>
</main>
<footer>
  <p>© 2024</p>
</footer>`,
        },
        quiz: [
          {
            question: 'Ein rein dekoratives Zierbild soll eingebunden werden. Was ist richtig?',
            options: ['alt-Attribut weglassen', 'alt="Bild"', 'alt="" (leer)', 'alt="Dekoration.jpg"'],
            answer: 2,
            explanation: 'Ein leeres alt="" signalisiert Screenreadern: Dieses Bild kann übersprungen werden.',
          },
          {
            question: 'Wie oft darf <main> auf einer Seite vorkommen?',
            options: ['Beliebig oft', 'Genau einmal', 'Gar nicht, das ist veraltet', 'Einmal pro Abschnitt'],
            answer: 1,
            explanation: '<main> kennzeichnet den einen Hauptinhalt der Seite und kommt genau einmal vor.',
          },
        ],
        summary: [
          '<img> braucht immer src und alt. Dekorative Bilder: alt="".',
          'Fotos vor dem Einbinden verkleinern (max. ca. 1600 px, unter 300 KB).',
          'header, nav, main, section, article, footer geben der Seite Bedeutung.',
        ],
      },
    ],
  },
  {
    id: 'm3',
    number: 3,
    title: 'CSS – Das Aussehen gestalten',
    description: 'Farben, Schriften, Abstände: Mit CSS verwandeln Sie das nackte HTML-Gerüst in eine ansprechende Seite.',
    icon: '🎨',
    lessons: [
      {
        id: 'm3-l1',
        title: 'CSS einbinden und die ersten Regeln',
        duration: 25,
        goals: ['Eine CSS-Datei mit HTML verknüpfen', 'Den Aufbau einer CSS-Regel verstehen', 'Elemente über Typ, Klasse und ID ansprechen'],
        blocks: [
          { type: 'h', text: 'Die CSS-Datei verknüpfen' },
          { type: 'p', text: 'Wir schreiben unser CSS in die Datei `style.css` und sagen dem HTML, wo es sie findet. Dafür kommt eine Zeile in den `<head>`:' },
          { type: 'code', lang: 'html', code: `<head>
  ...
  <link rel="stylesheet" href="style.css">
</head>` },
          { type: 'tip', kind: 'warning', title: 'Häufigster Anfängerfehler', text: 'CSS wird nicht angewendet? In 9 von 10 Fällen stimmt der Pfad in `href` nicht oder die `<link>`-Zeile fehlt. Prüfen Sie, ob die Datei wirklich `style.css` heißt und im selben Ordner wie `index.html` liegt.' },
          { type: 'h', text: 'Aufbau einer CSS-Regel' },
          { type: 'code', lang: 'css', title: 'style.css', code: `h1 {
  color: darkgreen;
  font-size: 2.5rem;
}` },
          {
            type: 'list',
            items: [
              '`h1` ist der **Selektor** – er bestimmt, WELCHE Elemente gestaltet werden. Hier: alle h1-Überschriften.',
              'Zwischen den geschweiften Klammern `{ }` stehen die **Deklarationen**.',
              'Jede Deklaration besteht aus **Eigenschaft** (`color`), Doppelpunkt, **Wert** (`darkgreen`) und **Semikolon**.',
              'Das Semikolon am Ende jeder Zeile ist Pflicht – ein vergessenes Semikolon ist der häufigste CSS-Fehler überhaupt.',
            ],
          },
          { type: 'h', text: 'Drei Arten von Selektoren' },
          {
            type: 'compare',
            left: {
              title: 'HTML',
              code: `<h2>Termine</h2>
<p>Normaler Absatz</p>
<p class="hinweis">Wichtiger Hinweis</p>
<p class="hinweis">Noch ein Hinweis</p>
<div id="impressum">Impressum</div>`,
            },
            right: {
              title: 'CSS',
              code: `/* Typ-Selektor: alle h2 */
h2 {
  color: darkgreen;
}

/* Klassen-Selektor: Punkt + Name.
   Mehrfach verwendbar. */
.hinweis {
  background: lightyellow;
  font-weight: bold;
}

/* ID-Selektor: Raute + Name.
   Nur EINMAL pro Seite. */
#impressum {
  font-size: 0.9rem;
}`,
            },
          },
          { type: 'p', text: 'Merken Sie sich: **Klassen sind Ihr Alltagswerkzeug.** Sie können dieselbe Klasse beliebig vielen Elementen geben. IDs sind einmalig und werden seltener gebraucht. Der Klassenname ist frei wählbar – nutzen Sie sprechende deutsche oder englische Namen ohne Umlaute und Leerzeichen.' },
          {
            type: 'preview',
            title: 'Live-Beispiel',
            height: 220,
            html: `<h2>Termine</h2>
<p>Normaler Absatz</p>
<p class="hinweis">Wichtiger Hinweis</p>
<p class="hinweis">Noch ein Hinweis</p>
<div id="impressum">Impressum</div>`,
            css: `body { font-family: sans-serif; padding: 12px; }
h2 { color: darkgreen; }
.hinweis { background: lightyellow; font-weight: bold; padding: 6px; }
#impressum { font-size: 0.9rem; color: #555; margin-top: 12px; }`,
          },
          { type: 'h', text: 'Kommentare in CSS' },
          { type: 'p', text: 'In CSS schreibt man Kommentare zwischen `/*` und `*/`. Nutzen Sie sie großzügig, um Ihre Datei zu gliedern: „/* Kopfbereich */“, „/* Navigation */“ usw. In sechs Monaten werden Sie sich dafür danken.' },
          { type: 'h', text: 'Das „C“ in CSS: Kaskade' },
          { type: 'p', text: 'CSS heißt „Cascading Style Sheets“. Kaskade bedeutet: Wenn mehrere Regeln auf dasselbe Element zutreffen, gewinnt in der Regel die **spezifischere** (ID schlägt Klasse schlägt Typ) und bei Gleichstand die **später geschriebene**. Diese Regel wird in Modul 5 wichtig, wenn wir Media Queries schreiben – die müssen nämlich unten in der Datei stehen.' },
        ],
        exercise: {
          title: 'Übung: Erste Gestaltung',
          intro: 'Verknüpfen Sie Ihre style.css und gestalten Sie Ihre Seite.',
          tasks: [
            'Geben Sie allen h1 und h2 eine Farbe Ihrer Wahl (Farbnamen wie darkblue, darkred, teal funktionieren).',
            'Geben Sie dem body eine Schriftart: `font-family: Arial, sans-serif;`',
            'Erstellen Sie eine Klasse „wichtig“ mit gelbem Hintergrund und weisen Sie sie einem Absatz zu.',
            'Fügen Sie einen Kommentar über jeder Regel ein.',
          ],
          starterHtml: `<h1>Meine Seite</h1>
<p>Ein normaler Absatz.</p>
<p class="wichtig">Ein wichtiger Absatz.</p>
<h2>Abschnitt</h2>
<p>Noch ein Absatz.</p>`,
          starterCss: `/* Grundschrift */
body {
  font-family: Arial, sans-serif;
}

/* Ergänzen Sie hier Ihre Regeln */
`,
          solutionCss: `/* Grundschrift */
body {
  font-family: Arial, sans-serif;
}

/* Überschriften */
h1, h2 {
  color: darkblue;
}

/* Hervorhebung */
.wichtig {
  background: lightyellow;
  padding: 8px;
}`,
        },
        quiz: [
          {
            question: 'Wie sieht ein Klassen-Selektor in CSS aus?',
            options: ['#hinweis', '.hinweis', 'hinweis', '<hinweis>'],
            answer: 1,
            explanation: 'Klassen werden mit einem Punkt angesprochen, IDs mit einer Raute (#).',
          },
          {
            question: 'Was fehlt in dieser Regel? h1 { color: red }',
            options: ['Nichts, sie ist vollständig', 'Das Semikolon nach red', 'Ein Punkt vor h1', 'Anführungszeichen um red'],
            answer: 1,
            explanation: 'Bei einer einzelnen Deklaration funktioniert es zwar noch, aber gewöhnen Sie sich an, IMMER ein Semikolon zu setzen. Sonst bricht die nächste Zeile.',
          },
        ],
        summary: [
          'CSS mit <link rel="stylesheet" href="style.css"> im head einbinden.',
          'Regel = Selektor { eigenschaft: wert; }',
          'Typ (h1), Klasse (.name) und ID (#name) – Klassen sind das Alltagswerkzeug.',
        ],
      },
      {
        id: 'm3-l2',
        title: 'Farben, Schrift und das Box-Modell',
        duration: 35,
        goals: ['Farben auf drei Arten angeben', 'Schriftgröße, -art und Zeilenabstand einstellen', 'Das Box-Modell verstehen: Inhalt, Innenabstand, Rahmen, Außenabstand'],
        blocks: [
          { type: 'h', text: 'Farben angeben' },
          {
            type: 'table',
            headers: ['Schreibweise', 'Beispiel', 'Wann?'],
            rows: [
              ['Farbname', '`color: darkgreen;`', 'Zum schnellen Ausprobieren. Es gibt ca. 140 Namen.'],
              ['Hex-Code', '`color: #1a5c2e;`', 'Standard im Web. 6 Zeichen: je 2 für Rot, Grün, Blau. Farbwähler gibt es online (z. B. bei Google „color picker“ eingeben).'],
              ['RGB', '`color: rgb(26, 92, 46);`', 'Wie Hex, nur als Dezimalzahlen 0–255.'],
            ],
          },
          { type: 'p', text: 'Die zwei wichtigsten Farbeigenschaften: `color` für die Textfarbe und `background-color` (oder kurz `background`) für den Hintergrund.' },
          { type: 'tip', kind: 'a11y', title: 'Kontrast prüfen', text: 'Hellgrauer Text auf weißem Grund sieht „modern“ aus, ist aber für viele Menschen kaum lesbar – besonders bei nachlassender Sehkraft oder Sonnenlicht auf dem Handy. Faustregel: Textfarbe und Hintergrund müssen sich deutlich unterscheiden. Testen Sie mit dem kostenlosen „WebAIM Contrast Checker“ (webaim.org/resources/contrastchecker). Ziel: Kontrastverhältnis mindestens 4,5:1.' },
          { type: 'h', text: 'Schrift gestalten' },
          {
            type: 'code',
            lang: 'css',
            code: `body {
  font-family: Georgia, "Times New Roman", serif;  /* Liste: erste verfügbare wird genutzt */
  font-size: 1.125rem;     /* 18px – angenehm lesbar */
  line-height: 1.6;        /* Zeilenabstand: 1,6-fache Schriftgröße */
  color: #222222;          /* Fast schwarz, angenehmer als reines Schwarz */
}

h1 {
  font-size: 2.5rem;
  font-weight: bold;
}

p {
  max-width: 65ch;   /* Zeile höchstens ca. 65 Zeichen breit – ideal zum Lesen */
}`,
          },
          {
            type: 'list',
            items: [
              '`font-family`: Eine Liste von Schriften. Der Browser nimmt die erste, die auf dem Gerät installiert ist. Am Ende immer eine Gattung: `serif` (mit Serifen, wie Zeitungen), `sans-serif` (ohne Serifen, klar und modern) oder `monospace`.',
              '`font-size`: Wir nutzen `rem` statt `px` – warum, erklärt Modul 4. Merken Sie sich: `1rem` = Standardgröße des Browsers (meist 16px).',
              '`line-height`: Zeilenabstand. Werte zwischen 1,5 und 1,7 lesen sich am angenehmsten.',
              '`max-width: 65ch`: Begrenzt die Zeilenlänge auf ca. 65 Zeichen. Zu lange Zeilen ermüden die Augen.',
            ],
          },
          { type: 'h', text: 'Das Box-Modell – der Schlüssel zu allen Layouts' },
          { type: 'p', text: 'Jedes HTML-Element ist für den Browser eine rechteckige Box. Diese Box hat vier Schichten – von innen nach außen:' },
          {
            type: 'preview',
            title: 'Das Box-Modell (von außen nach innen: margin, border, padding, Inhalt)',
            height: 300,
            html: `<div class="margin">
  <span class="label">margin (Außenabstand)</span>
  <div class="border">
    <span class="label">border (Rahmen)</span>
    <div class="padding">
      <span class="label">padding (Innenabstand)</span>
      <div class="content">Inhalt (Text, Bild …)</div>
    </div>
  </div>
</div>`,
            css: `body { font-family: sans-serif; margin: 0; padding: 12px; }
.label { display: block; font-size: 13px; font-weight: bold; margin-bottom: 6px; }
.margin { background: #fde68a; padding: 24px; border: 2px dashed #b45309; }
.border { background: #fca5a5; padding: 24px; border: 2px dashed #b91c1c; }
.padding { background: #bbf7d0; padding: 24px; border: 2px dashed #15803d; }
.content { background: #bfdbfe; padding: 16px; text-align: center; font-weight: bold; border: 2px solid #1d4ed8; }`,
          },
          {
            type: 'table',
            headers: ['Schicht', 'Eigenschaft', 'Bedeutung'],
            rows: [
              ['Inhalt', '`width`, `height`', 'Der eigentliche Text oder das Bild.'],
              ['Innenabstand', '`padding`', 'Luft ZWISCHEN Inhalt und Rahmen. Hat die Hintergrundfarbe des Elements.'],
              ['Rahmen', '`border`', 'Die sichtbare Linie um die Box.'],
              ['Außenabstand', '`margin`', 'Luft AUSSERHALB des Rahmens, zum nächsten Element hin. Immer transparent.'],
            ],
          },
          {
            type: 'code',
            lang: 'css',
            title: 'Beispiel: Ein Infokasten',
            code: `.infokasten {
  background-color: #eff6ff;
  padding: 1.5rem;                /* alle vier Seiten */
  border: 2px solid #1d4ed8;      /* Dicke, Stil, Farbe */
  border-radius: 8px;             /* abgerundete Ecken */
  margin-top: 1rem;               /* nur oben */
  margin-bottom: 2rem;            /* nur unten */
}

/* Kurzschreibweise: oben/unten  links/rechts */
.kasten2 { padding: 1rem 2rem; }

/* Kurzschreibweise: oben rechts unten links (im Uhrzeigersinn) */
.kasten3 { margin: 0 auto 2rem 0; }`,
          },
          { type: 'tip', kind: 'tip', title: 'Der wichtigste CSS-Trick', text: 'Standardmäßig wird `padding` und `border` zur `width` DAZUgerechnet – eine Box mit `width: 100%` und `padding: 20px` ist dann breiter als ihr Elternelement und ragt heraus. Diese Zeile am Anfang jeder CSS-Datei behebt das ein für alle Mal: `* { box-sizing: border-box; }`. Damit ist die angegebene Breite die Gesamtbreite inklusive Padding und Rahmen.' },
          {
            type: 'code',
            lang: 'css',
            title: 'Der empfohlene Start jeder style.css',
            code: `/* Grundeinstellungen – immer ganz oben */
* {
  box-sizing: border-box;
}

body {
  margin: 0;               /* Browser-Standardabstand entfernen */
  font-family: system-ui, sans-serif;
  line-height: 1.6;
  color: #222;
}

img {
  max-width: 100%;         /* Bilder nie breiter als ihr Container – dazu mehr in Modul 4 */
  height: auto;
  display: block;
}`,
          },
        ],
        exercise: {
          title: 'Übung: Infokasten gestalten',
          intro: 'Gestalten Sie den Kasten mit dem Box-Modell.',
          tasks: [
            'Geben Sie .infokasten einen hellen Hintergrund, 1.5rem Innenabstand und einen 2px dicken Rahmen.',
            'Runden Sie die Ecken mit border-radius ab.',
            'Setzen Sie einen Außenabstand von 2rem nach unten.',
            'Ändern Sie die Schriftgröße des body auf 1.125rem und den Zeilenabstand auf 1.6.',
            'Experiment: Entfernen Sie `box-sizing: border-box` und beobachten Sie, was mit der Breite passiert.',
          ],
          starterHtml: `<h1>Vereinsnachrichten</h1>
<div class="infokasten">
  <h2>Hinweis</h2>
  <p>Das Gartenfest findet bei jedem Wetter statt.</p>
</div>
<p>Weiterer Text auf der Seite.</p>`,
          starterCss: `* { box-sizing: border-box; }
body {
  font-family: system-ui, sans-serif;
  padding: 16px;
}
.infokasten {
  width: 100%;
  /* Ihre Gestaltung hier */
}`,
          solutionCss: `* { box-sizing: border-box; }
body {
  font-family: system-ui, sans-serif;
  font-size: 1.125rem;
  line-height: 1.6;
  padding: 16px;
}
.infokasten {
  width: 100%;
  background-color: #eff6ff;
  padding: 1.5rem;
  border: 2px solid #1d4ed8;
  border-radius: 8px;
  margin-bottom: 2rem;
}`,
        },
        quiz: [
          {
            question: 'Welche Eigenschaft erzeugt Abstand ZWISCHEN dem Text und dem Rahmen einer Box?',
            options: ['margin', 'padding', 'border', 'gap'],
            answer: 1,
            explanation: 'padding ist der Innenabstand. margin ist der Außenabstand zum nächsten Element.',
          },
          {
            question: 'Was bewirkt `* { box-sizing: border-box; }`?',
            options: ['Alle Boxen bekommen einen Rahmen', 'Padding und Rahmen werden in die angegebene Breite eingerechnet', 'Alle Boxen werden quadratisch', 'Der Außenabstand wird entfernt'],
            answer: 1,
            explanation: 'Mit border-box ist width die Gesamtbreite inklusive Padding und Border – das macht Layouts viel berechenbarer.',
          },
        ],
        summary: [
          'Farben: Namen, Hex (#1a5c2e) oder rgb(). Auf ausreichenden Kontrast achten!',
          'Schrift: font-family, font-size in rem, line-height 1.5–1.7, max-width ca. 65ch.',
          'Box-Modell: Inhalt → padding → border → margin.',
          '`* { box-sizing: border-box; }` gehört an den Anfang jeder CSS-Datei.',
        ],
      },
      {
        id: 'm3-l3',
        title: 'Klassen kombinieren und Zustände gestalten',
        duration: 20,
        goals: ['Mehrere Klassen an einem Element nutzen', 'Verschachtelte Selektoren schreiben', 'Hover- und Fokus-Zustände gestalten'],
        blocks: [
          { type: 'h', text: 'Mehrere Klassen pro Element' },
          { type: 'p', text: 'Ein Element kann mehrere Klassen tragen – getrennt durch Leerzeichen. So kombinieren Sie wiederverwendbare Bausteine:' },
          {
            type: 'compare',
            left: {
              title: 'HTML',
              code: `<a href="#" class="button">Mehr erfahren</a>
<a href="#" class="button button-gross">Jetzt anmelden</a>`,
            },
            right: {
              title: 'CSS',
              code: `.button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: #1d4ed8;
  color: white;
  text-decoration: none;
  border-radius: 6px;
}
.button-gross {
  font-size: 1.25rem;
  padding: 1rem 2rem;
}`,
            },
          },
          { type: 'h', text: 'Verschachtelte Selektoren (Nachfahren)' },
          { type: 'p', text: 'Mit einem Leerzeichen zwischen zwei Selektoren sprechen Sie Elemente INNERHALB anderer an. `nav a` bedeutet: „alle Links innerhalb der Navigation“ – Links im Fließtext bleiben unberührt.' },
          {
            type: 'code',
            lang: 'css',
            code: `/* Nur Links in der Navigation */
nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

/* Nur Absätze im Footer */
footer p {
  font-size: 0.9rem;
}

/* Mehrere Selektoren mit Komma: dieselbe Regel für alle */
h1, h2, h3 {
  font-family: Georgia, serif;
  color: #14532d;
}`,
          },
          { type: 'h', text: 'Zustände: hover und focus' },
          { type: 'p', text: 'Mit sogenannten **Pseudoklassen** gestalten Sie Zustände. `:hover` gilt, wenn die Maus über dem Element schwebt. `:focus-visible` gilt, wenn das Element per Tastatur (Tab-Taste) angesteuert wird.' },
          {
            type: 'code',
            lang: 'css',
            code: `.button:hover {
  background: #1e3a8a;      /* dunkler bei Mausberührung */
}

.button:focus-visible {
  outline: 3px solid #f59e0b;  /* deutlicher Rahmen für Tastaturnutzer */
  outline-offset: 3px;
}`,
          },
          { type: 'tip', kind: 'a11y', title: 'Niemals outline: none!', text: 'In vielen Tutorials steht `outline: none`, um den „hässlichen“ Fokusrahmen zu entfernen. Tun Sie das nicht! Menschen, die keine Maus benutzen können (motorische Einschränkungen, Sehbehinderung), navigieren mit der Tab-Taste und sind auf diesen Rahmen angewiesen. Gestalten Sie ihn lieber schön, statt ihn zu entfernen.' },
          {
            type: 'preview',
            title: 'Probieren Sie: Maus darüber bewegen und mit der Tab-Taste durchschalten',
            height: 140,
            html: `<a href="#" class="button">Mehr erfahren</a>
<a href="#" class="button button-gross">Jetzt anmelden</a>`,
            css: `body { font-family: sans-serif; padding: 24px; display: flex; gap: 16px; flex-wrap: wrap; align-items: center; }
.button { display: inline-block; padding: 0.75rem 1.5rem; background: #1d4ed8; color: white; text-decoration: none; border-radius: 6px; }
.button-gross { font-size: 1.25rem; padding: 1rem 2rem; }
.button:hover { background: #1e3a8a; }
.button:focus-visible { outline: 3px solid #f59e0b; outline-offset: 3px; }`,
          },
          { type: 'tip', kind: 'tip', title: 'Große Klickflächen', text: 'Gerade auf dem Handy und für Menschen mit zittrigen Händen sind kleine Knöpfe frustrierend. Faustregel: Klickflächen mindestens 44 × 44 Pixel groß machen. Großzügiges `padding` erledigt das.' },
        ],
        exercise: {
          title: 'Übung: Navigation gestalten',
          intro: 'Gestalten Sie die Navigationsleiste mit verschachtelten Selektoren und Zuständen.',
          tasks: [
            'Geben Sie `nav` einen dunklen Hintergrund und `nav a` weiße Schrift ohne Unterstreichung.',
            'Entfernen Sie die Aufzählungspunkte der Liste: `nav ul { list-style: none; padding: 0; }`',
            'Geben Sie den Links ein padding von mindestens 0.75rem, damit sie gut klickbar sind.',
            'Gestalten Sie :hover (z. B. Unterstreichung) und :focus-visible (deutlicher Rahmen).',
          ],
          starterHtml: `<nav aria-label="Hauptnavigation">
  <ul>
    <li><a href="#">Start</a></li>
    <li><a href="#">Termine</a></li>
    <li><a href="#">Kontakt</a></li>
  </ul>
</nav>
<p>Ein Absatz mit einem <a href="#">normalen Link</a>, der nicht betroffen sein soll.</p>`,
          starterCss: `body { font-family: sans-serif; margin: 0; }
p { padding: 16px; }

nav {
  /* Ihre Gestaltung */
}`,
          solutionCss: `body { font-family: sans-serif; margin: 0; }
p { padding: 16px; }

nav { background: #14532d; }
nav ul { list-style: none; padding: 0; margin: 0; display: flex; flex-wrap: wrap; }
nav a {
  display: block;
  padding: 1rem 1.25rem;
  color: white;
  text-decoration: none;
  font-weight: bold;
}
nav a:hover { text-decoration: underline; background: #166534; }
nav a:focus-visible { outline: 3px solid #fbbf24; outline-offset: -3px; }`,
        },
        quiz: [
          {
            question: 'Was bedeutet der Selektor `nav a`?',
            options: ['Alle nav- und alle a-Elemente', 'Alle a-Elemente innerhalb eines nav', 'Ein nav mit der Klasse a', 'Das erste a nach einem nav'],
            answer: 1,
            explanation: 'Ein Leerzeichen zwischen Selektoren bedeutet „Nachfahre von“ – also Links innerhalb der Navigation.',
          },
          {
            question: 'Warum sollte man `outline: none` vermeiden?',
            options: ['Es ist veraltet', 'Tastaturnutzer sehen sonst nicht, wo sie sich befinden', 'Es verlangsamt die Seite', 'Es funktioniert nur in Firefox'],
            answer: 1,
            explanation: 'Der Fokusrahmen ist für Menschen ohne Maus die einzige Orientierung. Gestalten statt entfernen.',
          },
        ],
        summary: [
          'Mehrere Klassen: class="button button-gross".',
          'Verschachtelt: nav a = Links in der Navigation. Komma = mehrere Selektoren gleichzeitig.',
          ':hover für Maus, :focus-visible für Tastatur – nie outline: none.',
          'Klickflächen mindestens 44 × 44 px.',
        ],
      },
    ],
  },
  {
    id: 'm4',
    number: 4,
    title: 'Responsive Grundlagen',
    description: 'Viewport, flexible Einheiten und dehnbare Bilder – die drei Säulen, ohne die nichts responsiv wird.',
    icon: '📱',
    lessons: [
      {
        id: 'm4-l1',
        title: 'Der Viewport – warum Handys anders denken',
        duration: 20,
        goals: ['Verstehen, was der Viewport ist', 'Die Viewport-Meta-Zeile erklären können', 'Den Unterschied zwischen Pixeln auf dem Papier und CSS-Pixeln kennen'],
        blocks: [
          { type: 'h', text: 'Ein kleines Stück Geschichte' },
          { type: 'p', text: 'Als 2007 das erste iPhone erschien, waren fast alle Websites für Bildschirme mit etwa 1000 Pixel Breite gebaut. Um diese Seiten überhaupt anzeigen zu können, „taten“ die Handy-Browser so, als wären sie 980 Pixel breit, und verkleinerten die gesamte Seite. Das Ergebnis: winzige Schrift, ständiges Zoomen und seitliches Wischen. Diesen Notbehelf machen Handys **bis heute** – es sei denn, Sie sagen ihnen ausdrücklich, dass Ihre Seite damit umgehen kann.' },
          { type: 'h', text: 'Die Viewport-Zeile' },
          { type: 'code', lang: 'html', code: `<meta name="viewport" content="width=device-width, initial-scale=1.0">` },
          {
            type: 'list',
            items: [
              '**Viewport** = der sichtbare Bereich des Browserfensters.',
              '`width=device-width`: „Die Breite meiner Seite soll der echten Breite des Geräts entsprechen“ – nicht einem vorgetäuschten Wert.',
              '`initial-scale=1.0`: „Starte ohne Vergrößerung oder Verkleinerung.“',
            ],
          },
          { type: 'tip', kind: 'warning', title: 'Bitte nicht kopieren!', text: 'Im Internet kursieren Varianten mit `maximum-scale=1.0` oder `user-scalable=no`. Diese **verhindern das Zoomen** – eine der schlimmsten Barrieren für sehbehinderte Menschen. Verwenden Sie ausschließlich die Version oben.' },
          { type: 'h', text: 'CSS-Pixel sind keine Geräte-Pixel' },
          { type: 'p', text: 'Ein modernes Smartphone hat vielleicht 1170 × 2532 physische Bildpunkte. Trotzdem meldet es dem Browser eine Breite von nur 390 CSS-Pixeln. Warum? Weil die Bildpunkte so winzig sind, dass ein Buchstabe von 16 physischen Pixeln unlesbar wäre. Das Gerät fasst also je 3 × 3 physische Pixel zu einem CSS-Pixel zusammen. Für Sie bedeutet das: **Sie rechnen immer in CSS-Pixeln**, und die liegen bei Handys typischerweise zwischen 320 und 430.' },
          {
            type: 'table',
            headers: ['Gerät', 'Typische Breite in CSS-Pixeln'],
            rows: [
              ['Kleines Smartphone', '320 – 375'],
              ['Aktuelles Smartphone', '375 – 430'],
              ['Tablet hochkant', '768 – 834'],
              ['Tablet quer / kleines Notebook', '1024 – 1280'],
              ['Monitor', '1366 – 1920 und mehr'],
            ],
          },
          { type: 'p', text: 'Diese Zahlen müssen Sie nicht auswendig lernen. Wir werden in Modul 5 sehen, dass es klüger ist, sich am Inhalt zu orientieren als an Gerätemaßen.' },
          { type: 'h', text: 'Testen ohne Handy: die Geräte-Simulation' },
          {
            type: 'steps',
            items: [
              'Öffnen Sie Ihre Seite in Chrome oder Firefox.',
              'Drücken Sie **F12** (Mac: **Cmd + Alt + I**). Die Entwicklerwerkzeuge öffnen sich.',
              'Klicken Sie auf das Symbol mit Handy und Tablet (oder drücken Sie **Strg + Umschalt + M**).',
              'Oben können Sie nun ein Gerät auswählen oder die Breite frei per Ziehen verändern.',
              'Beobachten Sie Ihre Seite: Erscheint ein horizontaler Scrollbalken? Wird Text abgeschnitten? Das sind die Probleme, die wir in den nächsten Lektionen lösen.',
            ],
          },
          { type: 'tip', kind: 'info', title: 'Einfachster Test überhaupt', text: 'Ziehen Sie das Browserfenster einfach mit der Maus schmaler. Alles, was dabei kaputtgeht, geht auch auf dem Handy kaputt.' },
        ],
        quiz: [
          {
            question: 'Was passiert, wenn die Viewport-Meta-Zeile fehlt?',
            options: ['Die Seite lädt nicht', 'Handys zeigen die Seite verkleinert an, als wäre sie ca. 980px breit', 'Bilder werden nicht angezeigt', 'Nichts, sie ist optional'],
            answer: 1,
            explanation: 'Ohne die Zeile fallen Handy-Browser in den Kompatibilitätsmodus und verkleinern die Seite.',
          },
          {
            question: 'Warum sollte man `user-scalable=no` NICHT verwenden?',
            options: ['Es ist zu lang', 'Es verhindert das Zoomen und schließt sehbehinderte Menschen aus', 'Es funktioniert nur auf Android', 'Es macht die Seite langsamer'],
            answer: 1,
            explanation: 'Zoomen ist eine grundlegende Hilfsfunktion. Sie zu blockieren ist eine schwere Barriere.',
          },
        ],
        summary: [
          'Die Viewport-Zeile sagt dem Handy: „Nutze deine echte Breite.“',
          'Niemals das Zoomen verbieten.',
          'Sie rechnen in CSS-Pixeln: Handys ca. 320–430, Tablets ca. 768–1024.',
          'Testen: F12 → Geräte-Symbol, oder einfach das Fenster schmaler ziehen.',
        ],
      },
      {
        id: 'm4-l2',
        title: 'Flexible Einheiten: %, rem, em, vw',
        duration: 30,
        goals: ['Wissen, wann Pixel problematisch sind', 'Die Einheiten rem, em, % und vw sicher einsetzen', 'max-width und min-width für flexible Boxen nutzen'],
        blocks: [
          { type: 'h', text: 'Das Problem mit festen Pixeln' },
          { type: 'p', text: 'Wenn Sie schreiben `width: 960px`, dann ist die Box 960 Pixel breit – **immer**. Auf einem Handy mit 390 Pixeln ragt sie weit über den Rand hinaus. Feste Breiten sind der Hauptgrund, warum Websites auf Handys kaputt aussehen. Die Lösung: relative Einheiten, die sich am Umfeld orientieren.' },
          {
            type: 'compare',
            left: { title: '❌ Starr', code: `.inhalt {
  width: 960px;
}` },
            right: { title: '✅ Flexibel', code: `.inhalt {
  width: 100%;
  max-width: 960px;
}` },
          },
          { type: 'p', text: 'Die rechte Variante bedeutet: „Nimm den ganzen verfügbaren Platz – aber nie mehr als 960 Pixel.“ Auf dem Handy füllt die Box also den Bildschirm, auf dem Monitor bleibt sie angenehm begrenzt. Dieses Muster `width: 100%; max-width: ...px` ist eines der wichtigsten überhaupt.' },
          { type: 'h', text: 'Die Einheiten im Überblick' },
          {
            type: 'table',
            headers: ['Einheit', 'Bezieht sich auf', 'Typischer Einsatz'],
            rows: [
              ['`px`', 'Feste CSS-Pixel', 'Rahmenstärken (`border: 2px`), sehr kleine Details. Für Breiten und Schriftgrößen meiden.'],
              ['`%`', 'Das Elternelement', 'Breiten: `width: 50%` = halb so breit wie der Container.'],
              ['`rem`', 'Die Grundschriftgröße des Browsers (meist 16px)', '**Schriftgrößen, Abstände.** 1rem = 16px, 1.5rem = 24px. Respektiert die Browser-Einstellungen des Nutzers!'],
              ['`em`', 'Die Schriftgröße des aktuellen Elements', 'Abstände, die mit der Schrift mitwachsen sollen, z. B. `padding: 0.5em 1em` bei Buttons.'],
              ['`vw` / `vh`', 'Viewport-Breite / -Höhe in Prozent', '`100vw` = ganze Bildschirmbreite. `100vh` = ganze Höhe. Für Hero-Bereiche.'],
              ['`ch`', 'Breite des Zeichens „0“', 'Zeilenlänge begrenzen: `max-width: 65ch`.'],
            ],
          },
          { type: 'tip', kind: 'a11y', title: 'Warum rem so wichtig ist', text: 'Viele Menschen stellen in ihrem Browser eine größere Standardschrift ein (Einstellungen → Schriftgröße). Wenn Sie Schriftgrößen in `px` angeben, ignorieren Sie diese Einstellung – der Text bleibt klein. Mit `rem` wächst Ihre gesamte Seite mit. Das ist gelebte Barrierefreiheit. Gerade für die Zielgruppe 40+ ein echter Gewinn.' },
          {
            type: 'preview',
            title: 'Prozent in Aktion: Ziehen Sie den Regler',
            resizable: true,
            height: 220,
            html: `<div class="container">
  <div class="box a">50 %</div>
  <div class="box b">25 %</div>
  <div class="box c">25 %</div>
</div>
<p class="text">Die drei Boxen teilen sich immer die volle Breite – egal wie schmal das Fenster ist.</p>`,
            css: `body { font-family: sans-serif; margin: 0; padding: 16px; }
.container { display: flex; }
.box { padding: 24px 0; text-align: center; font-weight: bold; color: white; }
.a { width: 50%; background: #1d4ed8; }
.b { width: 25%; background: #2563eb; }
.c { width: 25%; background: #3b82f6; }
.text { color: #475569; }`,
          },
          { type: 'h', text: 'min-width, max-width und der Container' },
          { type: 'p', text: 'Fast jede Website hat einen zentrierten Inhaltsbereich, der auf großen Bildschirmen nicht endlos breit wird. So bauen Sie ihn:' },
          {
            type: 'code',
            lang: 'css',
            code: `.container {
  width: 100%;          /* voll auf kleinen Bildschirmen */
  max-width: 1100px;    /* Obergrenze auf großen */
  margin: 0 auto;       /* 0 oben/unten, automatisch links/rechts = zentriert */
  padding: 0 1rem;      /* etwas Luft zum Rand, damit Text nicht klebt */
}`,
          },
          { type: 'p', text: '`margin: 0 auto` ist der klassische Trick zum horizontalen Zentrieren einer Box mit begrenzter Breite. Der Browser verteilt den übrigen Platz gleichmäßig links und rechts.' },
          { type: 'h', text: 'Flüssige Schriftgrößen mit clamp()' },
          { type: 'p', text: 'Eine moderne Funktion, die drei Werte nimmt: Minimum, bevorzugter Wert, Maximum. Die Überschrift wächst dann sanft mit dem Bildschirm mit – ohne eine einzige Media Query:' },
          {
            type: 'code',
            lang: 'css',
            code: `h1 {
  /* mindestens 1.75rem, bevorzugt 5 % der Bildschirmbreite, höchstens 3.5rem */
  font-size: clamp(1.75rem, 5vw, 3.5rem);
}`,
          },
        ],
        exercise: {
          title: 'Übung: Von starr zu flexibel',
          intro: 'Diese Seite ist mit festen Pixeln gebaut und bricht auf schmalen Bildschirmen. Reparieren Sie sie.',
          tasks: [
            'Ziehen Sie zuerst den Regler nach links: Sehen Sie den horizontalen Scrollbalken?',
            'Ersetzen Sie `width: 800px` beim .container durch das Muster width: 100% + max-width.',
            'Ändern Sie alle Schriftgrößen von px in rem (16px = 1rem, 32px = 2rem, 20px = 1.25rem).',
            'Geben Sie der h1 eine flüssige Größe mit clamp().',
            'Prüfen Sie: Kein Scrollbalken mehr bei schmalem Fenster?',
          ],
          starterHtml: `<div class="container">
  <h1>Gartenfreunde Musterstadt</h1>
  <p>Ein Verein für alle, die gerne im Grünen sind. Wir treffen uns jeden ersten Samstag im Monat.</p>
</div>`,
          starterCss: `body { margin: 0; font-family: sans-serif; }
.container {
  width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: #f0fdf4;
}
h1 { font-size: 32px; }
p { font-size: 20px; }`,
          solutionCss: `* { box-sizing: border-box; }
body { margin: 0; font-family: sans-serif; }
.container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 1.25rem;
  background: #f0fdf4;
}
h1 { font-size: clamp(1.5rem, 5vw, 2.5rem); }
p { font-size: 1.25rem; }`,
        },
        quiz: [
          {
            question: 'Worauf bezieht sich die Einheit rem?',
            options: ['Auf das Elternelement', 'Auf die Bildschirmbreite', 'Auf die Grundschriftgröße des Browsers (Standard 16px)', 'Auf die Höhe des Elements'],
            answer: 2,
            explanation: 'rem = „root em“, bezogen auf die Schriftgröße des Wurzelelements html – die der Nutzer im Browser einstellen kann.',
          },
          {
            question: 'Welche Kombination erzeugt eine Box, die auf dem Handy den ganzen Bildschirm füllt, auf dem Monitor aber höchstens 1000px breit ist?',
            options: ['width: 1000px', 'width: 100%; max-width: 1000px', 'min-width: 1000px', 'width: 100vw'],
            answer: 1,
            explanation: 'width: 100% macht sie flexibel, max-width deckelt sie nach oben.',
          },
        ],
        summary: [
          'Feste px-Breiten sind der Hauptgrund für kaputte Handy-Layouts.',
          'Muster: width: 100%; max-width: ...px; margin: 0 auto;',
          'Schriftgrößen und Abstände in rem – respektiert Nutzereinstellungen.',
          'clamp(min, bevorzugt, max) für flüssige Größen.',
        ],
      },
      {
        id: 'm4-l3',
        title: 'Flexible Bilder und Mobile First',
        duration: 25,
        goals: ['Bilder daran hindern, aus dem Layout auszubrechen', 'Bildausschnitte mit object-fit steuern', 'Die Mobile-First-Denkweise verstehen'],
        blocks: [
          { type: 'h', text: 'Das Bilderproblem' },
          { type: 'p', text: 'Ein Bild hat eine natürliche Größe – etwa 1600 Pixel Breite. Ohne weitere Anweisung zeigt der Browser es genau so groß an, auch auf einem 390 Pixel breiten Handy. Es ragt weit über den Rand hinaus und erzeugt den gefürchteten horizontalen Scrollbalken. Zum Glück ist die Lösung ein Dreizeiler, den Sie ab jetzt in JEDE CSS-Datei schreiben:' },
          {
            type: 'code',
            lang: 'css',
            title: 'Die wichtigste Bildregel',
            code: `img {
  max-width: 100%;   /* nie breiter als der umgebende Container */
  height: auto;      /* Höhe passt sich proportional an – keine Verzerrung */
  display: block;    /* entfernt einen kleinen störenden Abstand unter dem Bild */
}`,
          },
          {
            type: 'preview',
            title: 'Ziehen Sie den Regler: Das linke Bild passt sich an, das rechte nicht',
            resizable: true,
            height: 260,
            html: `<div class="reihe">
  <div>
    <p><strong>Mit</strong> max-width: 100%</p>
    <img class="gut" src="https://picsum.photos/id/1015/600/300" alt="Berglandschaft mit Fluss">
  </div>
  <div>
    <p><strong>Ohne</strong> (bricht aus)</p>
    <img class="schlecht" src="https://picsum.photos/id/1015/600/300" alt="Berglandschaft mit Fluss">
  </div>
</div>`,
            css: `body { font-family: sans-serif; margin: 0; padding: 12px; }
.reihe { display: flex; gap: 16px; }
.reihe > div { width: 50%; min-width: 0; }
p { margin: 0 0 8px; font-size: 14px; }
.gut { max-width: 100%; height: auto; display: block; border: 3px solid #16a34a; }
.schlecht { width: 600px; height: 300px; display: block; border: 3px solid #dc2626; }`,
          },
          { type: 'h', text: 'Bildausschnitte steuern mit object-fit' },
          { type: 'p', text: 'Manchmal soll ein Bild eine feste Fläche füllen – etwa alle Karten in einer Reihe sollen gleich hohe Bilder haben. Mit `object-fit: cover` wird das Bild so skaliert, dass es die Fläche komplett füllt, und überstehende Ränder werden abgeschnitten (wie ein Passepartout):' },
          {
            type: 'code',
            lang: 'css',
            code: `.karte img {
  width: 100%;
  height: 200px;          /* feste Höhe für alle Karten */
  object-fit: cover;      /* füllen und zuschneiden statt verzerren */
}`,
          },
          { type: 'h', text: 'Hintergrundbilder' },
          { type: 'p', text: 'Für große Stimmungsbilder hinter Text (sogenannte „Hero“-Bereiche) eignen sich CSS-Hintergrundbilder:' },
          {
            type: 'code',
            lang: 'css',
            code: `.hero {
  background-image: url("bilder/garten.jpg");
  background-size: cover;        /* Fläche komplett füllen */
  background-position: center;   /* Bildmitte zeigen */
  min-height: 50vh;              /* mindestens halbe Bildschirmhöhe */
  padding: 3rem 1rem;
  color: white;
}`,
          },
          { type: 'tip', kind: 'a11y', title: 'Text auf Bildern', text: 'Text auf Fotos ist oft schwer lesbar. Legen Sie eine halbtransparente dunkle Fläche darunter: `background-color: rgba(0, 0, 0, 0.55)` auf einem Textcontainer im Hero-Bereich. Und: Hintergrundbilder haben keinen alt-Text – nutzen Sie sie nur für Dekoration, nie für wichtige Informationen.' },
          { type: 'h', text: 'Mobile First – die Denkweise' },
          { type: 'p', text: 'Es gibt zwei Wege, eine responsive Seite zu bauen. **Desktop First**: Man baut für den großen Bildschirm und versucht dann, alles auf das Handy zu quetschen. **Mobile First**: Man baut zuerst für das Handy und erweitert das Layout dann für größere Bildschirme.' },
          { type: 'p', text: 'Mobile First ist aus drei Gründen leichter:' },
          {
            type: 'list',
            items: [
              '**Das Handy-Layout ist das einfachste.** Alles steht untereinander – das macht HTML von allein, wenn Sie nichts anderes anordnen. Sie starten also fast ohne Layout-CSS.',
              '**Sie zwingen sich zu Prioritäten.** Auf 390 Pixeln ist kein Platz für Schnickschnack. Was dort wichtig ist, ist überall wichtig.',
              '**Größer werden ist leichter als kleiner werden.** Spalten hinzufügen ist einfach. Spalten auflösen und alles neu ordnen ist mühsam.',
            ],
          },
          { type: 'p', text: 'Konkret bedeutet das für Ihre CSS-Datei: Die Regeln ohne Media Query gelten fürs Handy. Danach kommen Media Queries mit `min-width`, die für größere Bildschirme Spalten und Abstände ergänzen. Genau das lernen Sie im nächsten Modul.' },
          {
            type: 'code',
            lang: 'css',
            title: 'So sieht Mobile First im Code aus (Vorschau auf Modul 5)',
            code: `/* 1. Basis: gilt für ALLE Geräte, insbesondere Handys */
.karten { display: grid; gap: 1rem; }

/* 2. Ab 700px Breite: zwei Spalten */
@media (min-width: 700px) {
  .karten { grid-template-columns: 1fr 1fr; }
}

/* 3. Ab 1100px Breite: drei Spalten */
@media (min-width: 1100px) {
  .karten { grid-template-columns: 1fr 1fr 1fr; }
}`,
          },
        ],
        exercise: {
          title: 'Übung: Bilder bändigen',
          intro: 'Diese Karten haben verschieden große Bilder und brechen aus. Bringen Sie sie in Form.',
          tasks: [
            'Fügen Sie die Bildregel (max-width: 100%; height: auto; display: block) hinzu.',
            'Geben Sie den Kartenbildern eine einheitliche Höhe von 160px mit object-fit: cover.',
            'Prüfen Sie mit dem Regler: Bleiben die Bilder auf jeder Breite im Rahmen?',
          ],
          starterHtml: `<div class="karten">
  <div class="karte">
    <img src="https://picsum.photos/id/1018/800/500" alt="Bergsee">
    <h3>Bergsee</h3>
  </div>
  <div class="karte">
    <img src="https://picsum.photos/id/1039/500/800" alt="Wasserfall im Wald">
    <h3>Wasserfall</h3>
  </div>
</div>`,
          starterCss: `body { font-family: sans-serif; margin: 0; padding: 16px; }
.karten { display: flex; gap: 16px; }
.karte { width: 50%; border: 1px solid #ccc; border-radius: 8px; overflow: hidden; }
.karte h3 { padding: 0 12px; }

/* Ihre Bildregeln hier */
`,
          solutionCss: `body { font-family: sans-serif; margin: 0; padding: 16px; }
.karten { display: flex; gap: 16px; }
.karte { width: 50%; border: 1px solid #ccc; border-radius: 8px; overflow: hidden; }
.karte h3 { padding: 0 12px; }

img { max-width: 100%; height: auto; display: block; }
.karte img { width: 100%; height: 160px; object-fit: cover; }`,
        },
        quiz: [
          {
            question: 'Was bewirkt `img { max-width: 100%; }`?',
            options: ['Das Bild wird immer auf volle Breite gestreckt', 'Das Bild wird nie breiter als sein Container', 'Das Bild wird zentriert', 'Das Bild wird auf 100 Pixel begrenzt'],
            answer: 1,
            explanation: 'max-width setzt eine Obergrenze. Kleinere Bilder bleiben klein, große schrumpfen auf Containerbreite.',
          },
          {
            question: 'Was bedeutet „Mobile First“?',
            options: ['Nur für Handys entwickeln', 'Zuerst das Handy-Layout bauen und für größere Bildschirme erweitern', 'Zuerst eine App bauen', 'Das Handy-Layout zuletzt machen'],
            answer: 1,
            explanation: 'Die Basis-Regeln gelten fürs Handy, Media Queries mit min-width ergänzen dann Spalten für größere Bildschirme.',
          },
        ],
        summary: [
          'img { max-width: 100%; height: auto; display: block; } gehört in jede CSS-Datei.',
          'object-fit: cover füllt feste Flächen ohne Verzerrung.',
          'Mobile First: Basis fürs Handy, dann mit min-width erweitern.',
        ],
      },
    ],
  },
];
