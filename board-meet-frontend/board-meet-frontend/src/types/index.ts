export type FileKind = 'pdf' | 'xlsx' | 'whiteboard';

export interface RecentItem {
  id: string;
  name: string;
  kind: FileKind;
  category: 'Report' | 'Excel' | 'Whiteboard';
  /** Human-readable, e.g. "2 hours ago" */
  updated: string;
}

export interface StorageUsage {
  usedGb: number;
  totalGb: number;
}

/* ---------- Reports ---------- */

export type ReportSourceId = 'outlook' | 'onedrive' | 'whiteboard';

export interface ReportSource {
  id: ReportSourceId;
  name: string;
  shortName: string;
  description: string;
}

export type ReportType = 'daily' | 'weekly' | 'monthly';
export type ReportRange = 'today' | '7d' | '30d';

export interface ReportConfig {
  name: string;
  type: ReportType;
  range: ReportRange;
  includeCharts: boolean;
}

export type ReportStep = 1 | 2 | 3 | 4;

export interface ReportHistoryItem {
  id: string;
  title: string;
  when: string;
}

/* ---------- Whiteboard ---------- */

export type WhiteboardTool = 'hand' | 'select' | 'shape' | 'image';

export type AvatarTone = 'amber' | 'slate' | 'blue';

export interface BoardComment {
  id: string;
  author: string;
  initials: string;
  tone: AvatarTone;
  time: string;
  text: string;
}
