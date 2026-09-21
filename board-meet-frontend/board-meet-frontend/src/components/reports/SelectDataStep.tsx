'use client';

import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { REPORT_SOURCES } from '@/lib/report-config';
import { cn } from '@/lib/utils';
import { useReportStore } from '@/store/reportStore';
import { SourceIcon } from './SourceIcons';

export function SelectDataStep({ onCancel }: { onCancel: () => void }) {
  const sources = useReportStore((s) => s.sources);
  const toggleSource = useReportStore((s) => s.toggleSource);
  const goTo = useReportStore((s) => s.goTo);

  return (
    <>
      <Card className="p-6">
        <h2 className="text-lg font-semibold text-ink">Select where to get data from</h2>
        <p className="mt-0.5 text-sm text-slate-500">Choose one or more sources</p>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {REPORT_SOURCES.map((source) => {
            const selected = sources.includes(source.id);
            return (
              <button
                key={source.id}
                type="button"
                role="checkbox"
                aria-checked={selected}
                onClick={() => toggleSource(source.id)}
                className={cn(
                  'relative flex flex-col items-start rounded-xl border-2 p-5 text-left transition-colors',
                  selected
                    ? 'border-blue-300 bg-blue-50/60'
                    : 'border-slate-200 bg-white hover:border-slate-300',
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    'absolute right-3.5 top-3.5 flex h-5 w-5 items-center justify-center rounded-md border',
                    selected ? 'border-blue-600 bg-blue-600 text-white' : 'border-slate-300 bg-white',
                  )}
                >
                  {selected ? <Check className="h-3.5 w-3.5" strokeWidth={3} /> : null}
                </span>
                <SourceIcon id={source.id} />
                <span className="mt-4 text-[15px] font-semibold text-ink">{source.name}</span>
                <span className="mt-1 text-[13px] leading-snug text-slate-500">{source.description}</span>
              </button>
            );
          })}
        </div>
      </Card>

      <div className="mt-6 flex items-center justify-between">
        <Button variant="secondary" size="lg" onClick={onCancel}>
          Cancel
        </Button>
        <Button size="lg" disabled={sources.length === 0} onClick={() => goTo(2)}>
          Next
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Button>
      </div>
    </>
  );
}
