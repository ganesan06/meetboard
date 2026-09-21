import { create } from 'zustand';
import { GENERATION_STEPS } from '@/lib/report-config';
import type { ReportConfig, ReportSourceId, ReportStep } from '@/types';

interface ReportState {
  step: ReportStep;
  sources: ReportSourceId[];
  config: ReportConfig;
  /** How many generation steps have finished (0 → GENERATION_STEPS.length). */
  progress: number;
  toggleSource: (id: ReportSourceId) => void;
  setConfig: (patch: Partial<ReportConfig>) => void;
  goTo: (step: ReportStep) => void;
  advanceProgress: () => void;
  reset: () => void;
}

const initialState = {
  step: 1 as ReportStep,
  sources: ['outlook', 'onedrive', 'whiteboard'] as ReportSourceId[],
  config: {
    name: 'Daily shift report',
    type: 'daily',
    range: 'today',
    includeCharts: true,
  } as ReportConfig,
  progress: 0,
};

export const useReportStore = create<ReportState>()((set) => ({
  ...initialState,
  toggleSource: (id) =>
    set((state) => ({
      sources: state.sources.includes(id)
        ? state.sources.filter((s) => s !== id)
        : [...state.sources, id],
    })),
  setConfig: (patch) => set((state) => ({ config: { ...state.config, ...patch } })),
  goTo: (step) => set((state) => ({ step, progress: step === 3 ? 0 : state.progress })),
  advanceProgress: () =>
    set((state) => ({ progress: Math.min(state.progress + 1, GENERATION_STEPS.length) })),
  reset: () => set({ ...initialState }),
}));
