import { useState, type ReactNode } from 'react';

interface Props {
  code: string;
  lang: 'html' | 'css' | 'text';
  title?: string;
}

/** Sehr einfache Syntaxhervorhebung – rein zur besseren Lesbarkeit. */
function highlight(code: string, lang: Props['lang']): ReactNode[] {
  const out: ReactNode[] = [];
  let k = 0;
  if (lang === 'html') {
    const re = /(<!--[\s\S]*?-->)|(<\/?[a-zA-Z][^>]*>)/g;
    let last = 0;
    let m: RegExpExecArray | null;
    while ((m = re.exec(code)) !== null) {
      if (m.index > last) out.push(<span key={k++}>{code.slice(last, m.index)}</span>);
      if (m[1]) {
        out.push(<span key={k++} className="text-slate-400 italic">{m[1]}</span>);
      } else {
        const tag = m[2];
        const parts = tag.split(/(\s+[a-zA-Z-]+="[^"]*")/g);
        out.push(
          <span key={k++}>
            {parts.map((p, idx) =>
              /^\s+[a-zA-Z-]+="[^"]*"$/.test(p) ? (
                <span key={idx}>
                  <span className="text-amber-300">{p.split('=')[0]}</span>=
                  <span className="text-emerald-300">{p.slice(p.indexOf('=') + 1)}</span>
                </span>
              ) : (
                <span key={idx} className="text-sky-300">{p}</span>
              ),
            )}
          </span>,
        );
      }
      last = m.index + m[0].length;
    }
    if (last < code.length) out.push(<span key={k++}>{code.slice(last)}</span>);
    return out;
  }
  if (lang === 'css') {
    const re = /(\/\*[\s\S]*?\*\/)|(@media[^{]*)|([^{}\n;]+)(?=\s*\{)|([a-z-]+)(\s*:\s*)([^;{}]+)(;?)/g;
    let last = 0;
    let m: RegExpExecArray | null;
    while ((m = re.exec(code)) !== null) {
      if (m.index > last) out.push(<span key={k++}>{code.slice(last, m.index)}</span>);
      if (m[1]) out.push(<span key={k++} className="text-slate-400 italic">{m[1]}</span>);
      else if (m[2]) out.push(<span key={k++} className="text-fuchsia-300">{m[2]}</span>);
      else if (m[3]) out.push(<span key={k++} className="text-amber-300">{m[3]}</span>);
      else
        out.push(
          <span key={k++}>
            <span className="text-sky-300">{m[4]}</span>
            {m[5]}
            <span className="text-emerald-300">{m[6]}</span>
            {m[7]}
          </span>,
        );
      last = m.index + m[0].length;
    }
    if (last < code.length) out.push(<span key={k++}>{code.slice(last)}</span>);
    return out;
  }
  return [<span key={0}>{code}</span>];
}

export function CodeBlock({ code, lang, title }: Props) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignorieren */
    }
  };

  const label = lang === 'html' ? 'HTML' : lang === 'css' ? 'CSS' : 'Text';

  return (
    <figure className="my-6 overflow-hidden rounded-xl border border-slate-700 bg-slate-900 shadow-md">
      <figcaption className="flex items-center justify-between gap-3 border-b border-slate-700 bg-slate-800 px-4 py-2">
        <span className="text-sm font-medium text-slate-200">
          <span className="mr-2 rounded bg-slate-700 px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-slate-300">
            {label}
          </span>
          {title}
        </span>
        <button
          type="button"
          onClick={copy}
          className="rounded-md border border-slate-600 px-3 py-1.5 text-sm font-medium text-slate-100 hover:bg-slate-700 focus-visible:outline-amber-400"
          aria-live="polite"
        >
          {copied ? '✓ Kopiert' : 'Kopieren'}
        </button>
      </figcaption>
      <pre className="code-scroll overflow-x-auto p-4 text-[0.95rem] leading-relaxed text-slate-100">
        <code>{highlight(code, lang)}</code>
      </pre>
    </figure>
  );
}
