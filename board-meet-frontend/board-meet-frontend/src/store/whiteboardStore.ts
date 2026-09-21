import { create } from 'zustand';
import type { BoardComment, WhiteboardTool } from '@/types';

export const PEN_COLORS = ['#0F172A', '#2563EB', '#22C55E', '#FACC15', '#EF4444'] as const;

const MIN_ZOOM = 0.5;
const MAX_ZOOM = 2;
const ZOOM_STEP = 0.1;

interface WhiteboardState {
  tool: WhiteboardTool;
  color: string;
  zoom: number;
  tab: 'comments' | 'copilot';
  comments: BoardComment[];
  setTool: (tool: WhiteboardTool) => void;
  setColor: (color: string) => void;
  zoomIn: () => void;
  zoomOut: () => void;
  setTab: (tab: 'comments' | 'copilot') => void;
  addComment: (text: string, time: string) => void;
}

const round = (n: number) => Math.round(n * 100) / 100;

export const useWhiteboardStore = create<WhiteboardState>()((set) => ({
  tool: 'hand',
  color: PEN_COLORS[0],
  zoom: 1,
  tab: 'comments',
  comments: [
    {
      id: 'c1',
      author: 'Vignesh',
      initials: 'V',
      tone: 'amber',
      time: '10:24 AM',
      text: '@Ganesan Can we add timeline here?',
    },
    { id: 'c2', author: 'Srinath', initials: 'S', tone: 'slate', time: '10:28 AM', text: 'Looks good! 👍' },
    { id: 'c3', author: 'You', initials: 'G', tone: 'blue', time: '10:30 AM', text: 'Updated the next steps.' },
  ],
  setTool: (tool) => set({ tool }),
  setColor: (color) => set({ color }),
  zoomIn: () => set((s) => ({ zoom: Math.min(MAX_ZOOM, round(s.zoom + ZOOM_STEP)) })),
  zoomOut: () => set((s) => ({ zoom: Math.max(MIN_ZOOM, round(s.zoom - ZOOM_STEP)) })),
  setTab: (tab) => set({ tab }),
  addComment: (text, time) =>
    set((s) => ({
      comments: [
        ...s.comments,
        { id: `c${s.comments.length + 1}-${time}`, author: 'You', initials: 'G', tone: 'blue', time, text },
      ],
    })),
}));
