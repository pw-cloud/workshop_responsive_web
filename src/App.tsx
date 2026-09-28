import { useEffect, useMemo, useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { HomePage } from './components/HomePage';
import { LessonView } from './components/LessonView';
import { Playground } from './components/Playground';
import { GlossaryPage } from './components/GlossaryPage';
import { TroubleshootingPage } from './components/TroubleshootingPage';
import { ChecklistPage } from './components/ChecklistPage';
import { findLesson, modules, totalLessons } from './data/course';
import { useLocalStorage } from './hooks/useLocalStorage';

export type Page = 'home' | 'lesson' | 'playground' | 'glossary' | 'trouble' | 'checklist';

const FONT_SIZES = ['16px', '18px', '20px', '23px'];

function readHash(): { page: Page; lessonId?: string } {
  const h = window.location.hash.replace(/^#\/?/, '');
  if (!h) return { page: 'home' };
  if (h.startsWith('lektion/')) return { page: 'lesson', lessonId: h.slice(8) };
  const pages: Page[] = ['home', 'playground', 'glossary', 'trouble', 'checklist'];
  return pages.includes(h as Page) ? { page: h as Page } : { page: 'home' };
}

export default function App() {
  const [route, setRoute] = useState(readHash);
  const [completedArr, setCompletedArr] = useLocalStorage<string[]>('kurs-erledigt', []);
  const [lastLessonId, setLastLessonId] = useLocalStorage<string | undefined>('kurs-letzte-lektion', undefined);
  const [fontLevel, setFontLevel] = useLocalStorage<number>('kurs-schrift', 1);
  const [highContrast, setHighContrast] = useLocalStorage<boolean>('kurs-kontrast', false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const completed = useMemo(() => new Set(completedArr), [completedArr]);

  useEffect(() => {
    const onHash = () => setRoute(readHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty('--base-font', FONT_SIZES[fontLevel] ?? '18px');
  }, [fontLevel]);

  useEffect(() => {
    document.documentElement.classList.toggle('high-contrast', highContrast);
  }, [highContrast]);

  useEffect(() => {
    if (route.page !== 'lesson') {
      window.scrollTo({ top: 0 });
      document.title = 'Meine erste responsive Website – Der Einsteigerkurs';
    }
  }, [route.page]);

  const goPage = (page: Page) => {
    setSidebarOpen(false);
    if (page === 'lesson') {
      const target = lastLessonId ?? modules[0].lessons[0].id;
      window.location.hash = `#/lektion/${target}`;
    } else {
      window.location.hash = page === 'home' ? '#/' : `#/${page}`;
    }
  };

  const goLesson = (id: string) => {
    setLastLessonId(id);
    window.location.hash = `#/lektion/${id}`;
  };

  const toggleComplete = (id: string) => {
    setCompletedArr((arr) => (arr.includes(id) ? arr.filter((x) => x !== id) : [...arr, id]));
  };

  const found = route.page === 'lesson' ? findLesson(route.lessonId ?? '') : undefined;

  useEffect(() => {
    if (found) setLastLessonId(found.lesson.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [found?.lesson.id]);

  // Fokus bei Seitenwechsel auf den Hauptinhalt setzen (Screenreader & Tastatur)
  useEffect(() => {
    const el = document.getElementById('hauptinhalt');
    el?.focus({ preventScroll: true });
  }, [route.page, route.lessonId]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 hc-bg">
      <a href="#hauptinhalt" className="skip-link">
        Zum Hauptinhalt springen
      </a>
      <Header
        page={route.page}
        onNavigate={goPage}
        fontLevel={fontLevel}
        onFontLevel={setFontLevel}
        highContrast={highContrast}
        onHighContrast={setHighContrast}
        onToggleSidebar={() => setSidebarOpen((o) => !o)}
        progress={{ done: completed.size, total: totalLessons }}
      />

      {route.page === 'lesson' ? (
        <div className="lg:flex">
          <Sidebar currentLessonId={found?.lesson.id} completed={completed} onNavigate={goLesson} open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          <main id="hauptinhalt" className="min-w-0 flex-1" tabIndex={-1}>
            {found ? (
              <LessonView
                key={found.lesson.id}
                lesson={found.lesson}
                module={found.module}
                completed={completed.has(found.lesson.id)}
                onToggleComplete={() => toggleComplete(found.lesson.id)}
                onNavigate={goLesson}
              />
            ) : (
              <div className="p-10 text-center">
                <p className="mb-4 text-xl">Diese Lektion wurde nicht gefunden.</p>
                <button type="button" onClick={() => goLesson(modules[0].lessons[0].id)} className="rounded-xl bg-indigo-700 px-5 py-3 font-bold text-white">
                  Zur ersten Lektion
                </button>
              </div>
            )}
          </main>
        </div>
      ) : (
        <main id="hauptinhalt" tabIndex={-1}>
          {route.page === 'home' && <HomePage completed={completed} onNavigateLesson={goLesson} onNavigatePage={goPage} lastLessonId={lastLessonId} />}
          {route.page === 'playground' && <Playground />}
          {route.page === 'glossary' && <GlossaryPage />}
          {route.page === 'trouble' && <TroubleshootingPage />}
          {route.page === 'checklist' && <ChecklistPage />}
        </main>
      )}

      <footer className="mt-12 border-t-2 border-slate-200 bg-white py-8 text-center text-slate-600 hc-bg hc-text hc-border">
        <p className="mx-auto max-w-[70ch] px-4">
          Dieser Kurs ist selbst nach den Prinzipien gebaut, die er vermittelt: responsiv, tastaturbedienbar, mit skalierbarer Schrift und hohem Kontrast. Ihr Fortschritt wird nur in
          diesem Browser gespeichert – es werden keine Daten übertragen.
        </p>
      </footer>
    </div>
  );
}
