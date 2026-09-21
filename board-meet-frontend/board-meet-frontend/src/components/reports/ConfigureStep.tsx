'use client';

import { ArrowLeft, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { fieldClass } from '@/components/ui/field';
import { REPORT_RANGE_LABELS, REPORT_TYPE_LABELS } from '@/lib/report-config';
import { useReportStore } from '@/store/reportStore';
import type { ReportRange, ReportType } from '@/types';

export function ConfigureStep() {
  const config = useReportStore((s) => s.config);
  const setConfig = useReportStore((s) => s.setConfig);
  const goTo = useReportStore((s) => s.goTo);

  return (
    <>
      <Card className="p-6">
        <h2 className="text-lg font-semibold text-ink">Configure your report</h2>
        <p className="mt-0.5 text-sm text-slate-500">Name it and choose what to include</p>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <div className="md:col-span-2">
            <label htmlFor="report-name" className="text-sm font-medium text-ink">
              Report name
            </label>
            <input
              id="report-name"
              value={config.name}
              onChange={(e) => setConfig({ name: e.target.value })}
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="report-type" className="text-sm font-medium text-ink">
              Report type
            </label>
            <select
              id="report-type"
              value={config.type}
              onChange={(e) => setConfig({ type: e.target.value as ReportType })}
              className={fieldClass}
            >
              {Object.entries(REPORT_TYPE_LABELS).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="report-range" className="text-sm font-medium text-ink">
              Date range
            </label>
            <select
              id="report-range"
              value={config.range}
              onChange={(e) => setConfig({ range: e.target.value as ReportRange })}
              className={fieldClass}
            >
              {Object.entries(REPORT_RANGE_LABELS).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          <label className="flex items-center gap-2.5 text-sm text-slate-700 md:col-span-2">
            <input
              type="checkbox"
              checked={config.includeCharts}
              onChange={(e) => setConfig({ includeCharts: e.target.checked })}
              className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
            />
            Include charts and summary
          </label>
        </div>
      </Card>

      <div className="mt-6 flex items-center justify-between">
        <Button variant="secondary" size="lg" onClick={() => goTo(1)}>
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Back
        </Button>
        <Button size="lg" disabled={!config.name.trim()} onClick={() => goTo(3)}>
          <Sparkles className="h-4 w-4" aria-hidden />
          Generate report
        </Button>
      </div>
    </>
  );
}
