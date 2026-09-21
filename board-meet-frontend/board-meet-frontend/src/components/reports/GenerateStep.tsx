'use client';

import { useEffect } from 'react';
import { CheckCircle2, Circle, Info, Loader2 } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { GENERATION_STEPS } from '@/lib/report-config';
import { cn } from '@/lib/utils';
import { useReportStore } from '@/store/reportStore';

export function GenerateStep() {
  const progress = useReportStore((s) => s.progress);
  const advanceProgress = useReportStore((s) => s.advanceProgress);
  const goTo = useReportStore((s) => s.goTo);

  // Simulated generation. Replace with a real job/polling call to your backend.
  useEffect(() => {
    if (progress >= GENERATION_STEPS.length) {
      const done = setTimeout(() => goTo(4), 900);
      return () => clearTimeout(done);
    }
    const next = setTimeout(advanceProgress, 1100);
    return () => clearTimeout(next);
  }, [progress, advanceProgress, goTo]);

  return (
    <Card className="p-5">
      <div className="rounded-xl bg-slate-50 px-5 py-6 text-center">
        <Loader2 className="mx-auto h-8 w-8 animate-spin text-blue-500 motion-reduce:animate-none" aria-hidden />
        <h2 className="mt-3 text-lg font-semibold text-ink">Generating your report...</h2>
        <p className="mx-auto mt-1 max-w-sm text-[13px] leading-snug text-slate-500">
          Analyzing your data, extracting insights and creating a detailed report with AI.
        </p>
      </div>

      <ul className="mt-5 space-y-3 px-1" aria-live="polite">
        {GENERATION_STEPS.map((label, index) => {
          const done = index < progress;
          const active = index === progress;
          return (
            <li key={label} className="flex items-center gap-3 text-sm">
              {done ? (
                <CheckCircle2 className="h-5 w-5 fill-emerald-500 text-white" aria-hidden />
              ) : active ? (
                <Loader2 className="h-5 w-5 animate-spin text-blue-500 motion-reduce:animate-none" aria-hidden />
              ) : (
                <Circle className="h-5 w-5 text-slate-300" aria-hidden />
              )}
              <span className={cn(done || active ? 'text-slate-700' : 'text-slate-400')}>
                {label}
                {done ? <span className="sr-only"> (done)</span> : null}
              </span>
            </li>
          );
        })}
      </ul>

      <div className="mt-6 flex items-start gap-3 rounded-xl bg-blue-50 p-4 text-[13px] leading-snug text-slate-600">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" aria-hidden />
        <p>You can keep working while we generate your report. We&apos;ll notify you when it&apos;s ready.</p>
      </div>
    </Card>
  );
}
