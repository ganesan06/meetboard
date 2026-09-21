import type { ReportSource } from '@/types';

export const REPORT_STEPS = ['Select Data', 'Configure', 'Generate', 'Review'] as const;

export const REPORT_SOURCES: ReportSource[] = [
  {
    id: 'outlook',
    name: 'Outlook (Email)',
    shortName: 'Outlook',
    description: 'Import from your mailbox (search specific emails or folders)',
  },
  {
    id: 'onedrive',
    name: 'OneDrive',
    shortName: 'OneDrive',
    description: 'Import files and folders (select specific folders)',
  },
  {
    id: 'whiteboard',
    name: 'Whiteboard',
    shortName: 'Whiteboard',
    description: 'Include whiteboard notes',
  },
];

export const GENERATION_STEPS = [
  'Fetching data from selected sources',
  'Analyzing content',
  'Finding key insights',
  'Generating charts and summary',
  'Finalizing report...',
] as const;

export const REPORT_TYPE_LABELS = {
  daily: 'Daily summary',
  weekly: 'Weekly summary',
  monthly: 'Monthly report',
} as const;

export const REPORT_RANGE_LABELS = {
  today: 'Today',
  '7d': 'Last 7 days',
  '30d': 'Last 30 days',
} as const;
