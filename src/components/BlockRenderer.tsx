import type { Block } from '../types';
import { RichText } from './RichText';
import { CodeBlock } from './CodeBlock';
import { LivePreview } from './LivePreview';

const tipStyles = {
  tip: { bg: 'bg-emerald-50 border-emerald-400', icon: '💡', label: 'Tipp', text: 'text-emerald-950' },
  warning: { bg: 'bg-amber-50 border-amber-400', icon: '⚠️', label: 'Achtung', text: 'text-amber-950' },
  info: { bg: 'bg-sky-50 border-sky-400', icon: 'ℹ️', label: 'Gut zu wissen', text: 'text-sky-950' },
  a11y: { bg: 'bg-violet-50 border-violet-400', icon: '♿', label: 'Barrierefreiheit', text: 'text-violet-950' },
};

export function BlockRenderer({ block }: { block: Block }) {
  switch (block.type) {
    case 'h':
      return (
        <h3 className="mt-10 mb-3 text-2xl font-bold text-slate-900 hc-text first:mt-0">
          <RichText text={block.text} />
        </h3>
      );
    case 'p':
      return (
        <p className="mb-4 max-w-[70ch] text-slate-800 hc-text">
          <RichText text={block.text} />
        </p>
      );
    case 'list':
      return (
        <ul className="mb-5 max-w-[70ch] list-disc space-y-2 pl-6 text-slate-800 marker:text-indigo-600 hc-text">
          {block.items.map((it, i) => (
            <li key={i}>
              <RichText text={it} />
            </li>
          ))}
        </ul>
      );
    case 'steps':
      return (
        <div className="my-6 rounded-xl border-2 border-indigo-200 bg-indigo-50/50 p-5 hc-border">
          <p className="mb-3 font-bold text-indigo-900 hc-text">📋 {block.title ?? 'Schritt für Schritt'}</p>
          <ol className="space-y-3">
            {block.items.map((it, i) => (
              <li key={i} className="flex gap-3">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-700 text-sm font-bold text-white"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <span className="pt-0.5 text-slate-800 hc-text">
                  <span className="sr-only">Schritt {i + 1}: </span>
                  <RichText text={it} />
                </span>
              </li>
            ))}
          </ol>
        </div>
      );
    case 'code':
      return <CodeBlock code={block.code} lang={block.lang} title={block.title} />;
    case 'tip': {
      const s = tipStyles[block.kind ?? 'tip'];
      return (
        <aside className={`my-6 max-w-[75ch] rounded-xl border-l-8 border ${s.bg} p-5 hc-border`} role="note">
          <p className={`mb-1 font-bold ${s.text} hc-text`}>
            <span aria-hidden="true">{s.icon} </span>
            {block.title ?? s.label}
          </p>
          <p className={`${s.text} hc-text`}>
            <RichText text={block.text} />
          </p>
        </aside>
      );
    }
    case 'preview':
      return <LivePreview html={block.html} css={block.css} title={block.title} height={block.height} resizable={block.resizable} />;
    case 'table':
      return (
        <div className="my-6 overflow-x-auto rounded-xl border border-slate-300 hc-border">
          <table className="w-full min-w-[480px] border-collapse text-left">
            <thead>
              <tr className="bg-slate-100">
                {block.headers.map((h, i) => (
                  <th key={i} scope="col" className="border-b-2 border-slate-300 px-4 py-3 font-bold text-slate-900 hc-text">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className="odd:bg-white even:bg-slate-50">
                  {row.map((cell, ci) => (
                    <td key={ci} className="border-b border-slate-200 px-4 py-3 align-top text-slate-800 hc-text">
                      <RichText text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'compare':
      return (
        <div className="my-6 grid gap-4 lg:grid-cols-2">
          {[block.left, block.right].map((side, i) => (
            <div key={i} className="min-w-0">
              <p className="mb-1 font-semibold text-slate-800 hc-text">{side.title}</p>
              <pre className="code-scroll overflow-x-auto rounded-xl border border-slate-700 bg-slate-900 p-4 text-[0.95rem] leading-relaxed text-slate-100">
                <code>{side.code}</code>
              </pre>
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
}
