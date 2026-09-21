'use client';

import { CheckCircle2, Download, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { REPORT_RANGE_LABELS, REPORT_SOURCES, REPORT_TYPE_LABELS } from '@/lib/report-config';
import { useReportStore } from '@/store/reportStore';

export function ReviewStep() {
  const config = useReportStore((s) => s.config);
  const sources = useReportStore((s) => s.sources);
  const reset = useReportStore((s) => s.reset);

  const usedSources = REPORT_SOURCES.filter((s) => sources.includes(s.id));

  return (
    <Card className="p-6">
      <div className="flex items-start gap-3">
        <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 fill-emerald-500 text-white" aria-hidden />
        <div>
          <h2 className="text-lg font-semibold text-ink">Your report is ready</h2>
          <p className="mt-0.5 text-sm text-slate-500">{config.name}</p>
        </div>
      </div>

      <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-3">
        <div>
          <dt className="text-slate-500">Type</dt>
          <dd className="mt-0.5 font-medium text-ink">{REPORT_TYPE_LABELS[config.type]}</dd>
        </div>
        <div>
          <dt className="text-slate-500">Date range</dt>
          <dd className="mt-0.5 font-medium text-ink">{REPORT_RANGE_LABELS[config.range]}</dd>
        </div>
        <div>
          <dt className="text-slate-500">Sources</dt>
          <dd className="mt-0.5 font-medium text-ink">{usedSources.map((s) => s.shortName).join(', ')}</dd>
        </div>
      </dl>

      <div className="mt-5 rounded-xl border border-dashed border-slate-200 bg-slate-50 p-5 text-sm text-slate-500">
        The generated summary and charts will appear here once the reports API is connected (see{' '}
        <code className="rounded bg-white px-1 py-0.5 text-xs text-slate-700">src/services/api.ts</code>).
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button>
          <Download className="h-4 w-4" aria-hidden />
          Download PDF
        </Button>
        <Button variant="secondary">
          <Share2 className="h-4 w-4" aria-hidden />
          Share
        </Button>
        <Button variant="ghost" onClick={reset}>
          Create another report
        </Button>
      </div>
    </Card>
  );
}
