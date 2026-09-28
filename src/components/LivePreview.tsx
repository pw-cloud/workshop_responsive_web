import { useId, useMemo, useState } from 'react';

interface Props {
  html: string;
  css?: string;
  title?: string;
  height?: number;
  resizable?: boolean;
  fullDocument?: boolean;
}

export function buildSrcDoc(html: string, css = '') {
  return `<!DOCTYPE html><html lang="de"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><style>${css}</style></head><body>${html}</body></html>`;
}

export function LivePreview({ html, css = '', title, height = 240, resizable = false }: Props) {
  const [width, setWidth] = useState(resizable ? 420 : 0);
  const id = useId();
  const srcDoc = useMemo(() => buildSrcDoc(html, css), [html, css]);

  const label =
    width === 0
      ? 'Volle Breite'
      : width < 600
        ? `${width}px – Smartphone`
        : width < 900
          ? `${width}px – Tablet`
          : `${width}px – Desktop`;

  return (
    <div className="my-6 overflow-hidden rounded-xl border-2 border-indigo-200 bg-white shadow-sm hc-border">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-indigo-200 bg-indigo-50 px-4 py-2 hc-border">
        <span className="text-sm font-semibold text-indigo-900 hc-text">🔍 Live-Vorschau{title ? `: ${title}` : ''}</span>
        {resizable && (
          <div className="flex flex-wrap items-center gap-3">
            <label htmlFor={id} className="text-sm font-medium text-indigo-900 hc-text">
              Bildschirmbreite: <span className="font-bold tabular-nums">{label}</span>
            </label>
            <input
              id={id}
              type="range"
              min={320}
              max={1200}
              step={10}
              value={width || 1200}
              onChange={(e) => setWidth(Number(e.target.value))}
              className="w-40 accent-indigo-700 sm:w-56"
              aria-valuetext={label}
            />
            <div className="flex gap-1" role="group" aria-label="Voreinstellungen">
              {[
                ['📱', 375, 'Smartphone 375px'],
                ['📟', 768, 'Tablet 768px'],
                ['🖥️', 1200, 'Desktop 1200px'],
              ].map(([icon, w, t]) => (
                <button
                  key={w}
                  type="button"
                  title={String(t)}
                  aria-label={String(t)}
                  onClick={() => setWidth(Number(w))}
                  className={`rounded-md border px-2 py-1 text-sm ${width === w ? 'border-indigo-700 bg-indigo-700 text-white' : 'border-indigo-300 bg-white hover:bg-indigo-100'}`}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="overflow-x-auto bg-slate-200 p-3" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '14px 14px' }}>
        <iframe
          title={title ? `Vorschau: ${title}` : 'Live-Vorschau'}
          srcDoc={srcDoc}
          sandbox="allow-same-origin"
          className="mx-auto block rounded-md border border-slate-300 bg-white shadow"
          style={{ height, width: resizable && width ? `${width}px` : '100%', maxWidth: '100%', transition: 'width 0.15s ease' }}
        />
      </div>
    </div>
  );
}
