'use client';

import {
  ChevronDown,
  Hand,
  Image as ImageIcon,
  Maximize,
  MousePointer2,
  Redo2,
  Square,
  Undo2,
  ZoomIn,
  ZoomOut,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { PEN_COLORS, useWhiteboardStore } from '@/store/whiteboardStore';
import type { WhiteboardTool } from '@/types';

const TOOLS: { id: WhiteboardTool; label: string; icon: LucideIcon }[] = [
  { id: 'hand', label: 'Pan', icon: Hand },
  { id: 'select', label: 'Select', icon: MousePointer2 },
  { id: 'shape', label: 'Shape', icon: Square },
  { id: 'image', label: 'Image', icon: ImageIcon },
];

const iconButton =
  'flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-slate-100';

function Divider() {
  return <span aria-hidden className="mx-1 hidden h-6 w-px bg-slate-200 sm:block" />;
}

export function BoardToolbar() {
  const { tool, setTool, color, setColor, zoom, zoomIn, zoomOut } = useWhiteboardStore();

  const enterFullscreen = () => {
    document.getElementById('board-canvas')?.requestFullscreen?.()?.catch(() => undefined);
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 p-3">
      <div className="flex flex-wrap items-center gap-1">
        <button
          type="button"
          className="flex h-9 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-sm font-medium text-ink hover:bg-slate-50"
        >
          Project Plan
          <ChevronDown className="h-4 w-4 text-slate-500" aria-hidden />
        </button>

        <Divider />

        <button type="button" aria-label="Undo" disabled className={cn(iconButton, 'text-slate-300 hover:bg-transparent')}>
          <Undo2 className="h-4 w-4" />
        </button>
        <button type="button" aria-label="Redo" disabled className={cn(iconButton, 'text-slate-300 hover:bg-transparent')}>
          <Redo2 className="h-4 w-4" />
        </button>

        <Divider />

        <div role="group" aria-label="Tools" className="flex items-center gap-1">
          {TOOLS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              aria-label={label}
              aria-pressed={tool === id}
              onClick={() => setTool(id)}
              className={cn(iconButton, tool === id && 'bg-slate-200/70 text-ink hover:bg-slate-200/70')}
            >
              <Icon className="h-4 w-4" />
            </button>
          ))}
        </div>

        <Divider />

        <div role="group" aria-label="Pen color" className="flex items-center gap-2 px-1">
          {PEN_COLORS.map((c) => (
            <button
              key={c}
              type="button"
              aria-label={`Pen color ${c}`}
              aria-pressed={color === c}
              onClick={() => setColor(c)}
              className={cn(
                'h-5 w-5 rounded-full transition-shadow',
                color === c && 'ring-2 ring-blue-500 ring-offset-2 ring-offset-white',
              )}
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center gap-1">
        <button type="button" aria-label="Zoom out" onClick={zoomOut} className={iconButton}>
          <ZoomOut className="h-4 w-4" />
        </button>
        <span className="w-12 text-center text-sm font-medium tabular-nums text-ink" aria-live="polite">
          {Math.round(zoom * 100)}%
        </span>
        <button type="button" aria-label="Zoom in" onClick={zoomIn} className={iconButton}>
          <ZoomIn className="h-4 w-4" />
        </button>
        <button type="button" aria-label="Full screen" onClick={enterFullscreen} className={iconButton}>
          <Maximize className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
