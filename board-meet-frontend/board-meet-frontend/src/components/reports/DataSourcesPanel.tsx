'use client';

import { CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { REPORT_SOURCES } from '@/lib/report-config';
import { useReportStore } from '@/store/reportStore';
import { SourceIcon } from './SourceIcons';

export function DataSourcesPanel({ editable }: { editable: boolean }) {
  const sources = useReportStore((s) => s.sources);
  const goTo = useReportStore((s) => s.goTo);

  return (
    <Card className="p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-[15px] font-semibold text-ink">Data Sources</h2>
        {editable ? (
          <button
            type="button"
            onClick={() => goTo(1)}
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            Edit
          </button>
        ) : null}
      </div>
      <ul className="mt-4 space-y-5">
        {REPORT_SOURCES.filter((s) => sources.includes(s.id)).map((source) => (
          <li key={source.id} className="flex items-center gap-3">
            <SourceIcon id={source.id} size={38} />
            <div>
              <p className="text-sm font-semibold text-ink">{source.shortName}</p>
              <p className="flex items-center gap-1 text-xs font-medium text-emerald-600">
                <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
                Connected
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
