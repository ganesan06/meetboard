import { Check } from 'lucide-react';
import { REPORT_STEPS } from '@/lib/report-config';
import { cn } from '@/lib/utils';
import type { ReportStep } from '@/types';

export function Stepper({ current }: { current: ReportStep }) {
  return (
    <div aria-label="Report progress" className="flex items-center gap-3 overflow-x-auto pb-1">
      {REPORT_STEPS.map((label, index) => {
        const number = index + 1;
        const done = number < current;
        const active = number === current;

        return (
          <div key={label} className="flex min-w-0 flex-1 items-center gap-3 last:flex-none">
            <div className="flex shrink-0 items-center gap-2.5" aria-current={active ? 'step' : undefined}>
              <span
                className={cn(
                  'flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold',
                  done || active ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600',
                )}
              >
                {done ? <Check className="h-4 w-4" aria-hidden /> : number}
              </span>
              <span
                className={cn(
                  'text-sm',
                  active ? 'font-semibold text-blue-600' : 'font-medium',
                  !active && (done ? 'text-slate-700' : 'text-slate-500'),
                )}
              >
                {label}
                {done ? <span className="sr-only"> (completed)</span> : null}
              </span>
            </div>
            {index < REPORT_STEPS.length - 1 ? (
              <span
                aria-hidden
                className={cn('h-px min-w-6 flex-1', number < current ? 'bg-blue-600' : 'bg-slate-200')}
              />
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
