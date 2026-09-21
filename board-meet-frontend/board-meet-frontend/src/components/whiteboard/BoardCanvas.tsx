'use client';

import { useWhiteboardStore } from '@/store/whiteboardStore';

const STAGE = { width: 780, height: 460 };

interface Note {
  id: string;
  title: string;
  items: string[];
  variant: 'list' | 'checklist';
  className: string;
  box: { x: number; y: number; w: number; h: number };
}

const NOTES: Note[] = [
  {
    id: 'goals',
    title: 'Goals',
    items: ['Improve efficiency', 'Launch new features', 'Enhance user experience'],
    variant: 'list',
    className: 'bg-yellow-100',
    box: { x: 10, y: 20, w: 200, h: 130 },
  },
  {
    id: 'tasks',
    title: 'Key Tasks',
    items: ['Data collection', 'Model development', 'Testing & feedback', 'Launch'],
    variant: 'checklist',
    className: 'bg-green-100',
    box: { x: 560, y: 20, w: 200, h: 140 },
  },
  {
    id: 'risks',
    title: 'Risks',
    items: ['Data quality', 'Timeline delays', 'Resource planning'],
    variant: 'list',
    className: 'bg-rose-100',
    box: { x: 10, y: 300, w: 200, h: 130 },
  },
  {
    id: 'next',
    title: 'Next Steps',
    items: ['Finalize scope', 'Assign owners', 'Set timeline'],
    variant: 'list',
    className: 'bg-violet-100',
    box: { x: 560, y: 300, w: 200, h: 130 },
  },
];

function StickyNote({ note }: { note: Note }) {
  const { x, y, w, h } = note.box;
  return (
    <div
      className={`absolute rounded-lg p-4 shadow-note ${note.className}`}
      style={{ left: x, top: y, width: w, height: h }}
    >
      <h3 className="text-sm font-semibold text-ink">{note.title}</h3>
      <ul className="mt-2 space-y-1.5 text-[11px] text-slate-700">
        {note.items.map((item) => (
          <li
            key={item}
            className={note.variant === 'checklist' ? 'flex items-center gap-2' : 'ml-3.5 list-disc'}
          >
            {note.variant === 'checklist' ? (
              <span aria-hidden className="h-3 w-3 shrink-0 rounded-[3px] border border-slate-500 bg-white" />
            ) : null}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function BoardCanvas() {
  const zoom = useWhiteboardStore((s) => s.zoom);

  return (
    <div id="board-canvas" className="relative min-h-[520px] flex-1 overflow-auto bg-white bg-dots">
      {/* Outer box takes the scaled size so scrolling works at any zoom. */}
      <div className="mx-auto p-4" style={{ width: STAGE.width * zoom + 32, height: STAGE.height * zoom + 32 }}>
        <div
          className="relative origin-top-left"
          style={{ width: STAGE.width, height: STAGE.height, transform: `scale(${zoom})` }}
        >
          <svg
            className="absolute inset-0"
            width={STAGE.width}
            height={STAGE.height}
            viewBox={`0 0 ${STAGE.width} ${STAGE.height}`}
            fill="none"
            aria-hidden
          >
            <defs>
              <marker
                id="arrowhead"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="7"
                markerHeight="7"
                orient="auto-start-reverse"
              >
                <path d="M1 1l8 4-8 4" stroke="#0F172A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </marker>
            </defs>
            <g stroke="#0F172A" strokeWidth="1.6" strokeLinecap="round">
              <path d="M110 152 C110 205 240 212 306 218" markerEnd="url(#arrowhead)" />
              <path d="M440 188 C452 120 500 92 556 88" markerEnd="url(#arrowhead)" />
              <path d="M110 298 C110 252 240 240 306 232" markerEnd="url(#arrowhead)" />
              <path
                d="M472 226 C540 226 640 240 656 296"
                markerStart="url(#arrowhead)"
                markerEnd="url(#arrowhead)"
              />
            </g>
          </svg>

          {NOTES.map((note) => (
            <StickyNote key={note.id} note={note} />
          ))}

          <div
            className="absolute flex items-center justify-center rounded-xl border-2 border-blue-300 bg-blue-200/70 text-center text-[15px] font-semibold leading-snug text-ink shadow-note"
            style={{ left: 310, top: 190, width: 162, height: 62 }}
          >
            Project Plan
            <br />
            Q4 2026
          </div>
        </div>
      </div>
    </div>
  );
}
