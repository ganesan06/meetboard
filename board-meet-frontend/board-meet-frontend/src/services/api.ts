import type { RecentItem, ReportHistoryItem, StorageUsage } from '@/types';

/**
 * Mock data layer.
 *
 * Every function here is async on purpose: when your backend is ready, replace
 * the bodies with `fetch(`${process.env.NEXT_PUBLIC_API_URL}/...`)` calls and
 * nothing in the UI has to change.
 */

export const storageUsage: StorageUsage = { usedGb: 4.5, totalGb: 10 };

export async function getRecentItems(): Promise<RecentItem[]> {
  return [
    { id: '1', name: '2026-09-16-shift-report.pdf', kind: 'pdf', category: 'Report', updated: '2 hours ago' },
    { id: '2', name: 'Jobs.xlsx', kind: 'xlsx', category: 'Excel', updated: '4 hours ago' },
    { id: '3', name: '2026-09-17-meeting.json', kind: 'whiteboard', category: 'Whiteboard', updated: '6 hours ago' },
    { id: '4', name: 'Client-Analysis.pdf', kind: 'pdf', category: 'Report', updated: '1 day ago' },
  ];
}

export async function getReportHistory(): Promise<ReportHistoryItem[]> {
  return [
    { id: 'r1', title: "Today's shift report", when: 'Just now' },
    { id: 'r2', title: 'Weekly summary', when: 'Yesterday' },
    { id: 'r3', title: 'Job analysis', when: 'Sep 16, 2026' },
    { id: 'r4', title: 'Meeting summary', when: 'Sep 15, 2026' },
    { id: 'r5', title: 'Monthly report', when: 'Sep 10, 2026' },
  ];
}
