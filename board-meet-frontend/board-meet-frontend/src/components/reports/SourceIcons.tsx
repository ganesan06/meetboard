import { Cloud, Presentation } from 'lucide-react';
import type { ReportSourceId } from '@/types';

function OutlookIcon({ size }: { size: number }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} aria-hidden>
      <rect x="16" y="8" width="30" height="32" rx="4" fill="#0A64C8" />
      <path d="M20 18l11 8 11-8" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <rect x="2" y="14" width="24" height="24" rx="4" fill="#1490DF" />
      <circle cx="14" cy="26" r="6" stroke="#fff" strokeWidth="3" fill="none" />
    </svg>
  );
}

export function SourceIcon({ id, size = 44 }: { id: ReportSourceId; size?: number }) {
  if (id === 'outlook') return <OutlookIcon size={size} />;
  if (id === 'onedrive') {
    return <Cloud width={size} height={size} className="fill-blue-500 text-blue-500" aria-hidden />;
  }
  return <Presentation width={size} height={size} strokeWidth={1.6} className="text-slate-800" aria-hidden />;
}
