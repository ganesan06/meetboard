'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { NotificationButton, UserMenu } from '@/components/layout/Topbar';
import { useReportStore } from '@/store/reportStore';
import type { ReportHistoryItem } from '@/types';
import { ConfigureStep } from './ConfigureStep';
import { DataSourcesPanel } from './DataSourcesPanel';
import { GenerateStep } from './GenerateStep';
import { ReportHistory } from './ReportHistory';
import { ReviewStep } from './ReviewStep';
import { SelectDataStep } from './SelectDataStep';
import { Stepper } from './Stepper';

export function ReportWizard({ history }: { history: ReportHistoryItem[] }) {
  const router = useRouter();
  const step = useReportStore((s) => s.step);
  const reset = useReportStore((s) => s.reset);

  // Start fresh every time the page is opened.
  useEffect(() => reset, [reset]);

  const cancel = () => {
    reset();
    router.push('/home');
  };

  const subtitle =
    step >= 3 ? 'Get insights from your data and generate reports.' : 'Turn your data into clear insights.';

  return (
    <div className="mx-auto w-full max-w-[1200px] px-5 py-6 sm:px-8">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-[26px] font-bold tracking-tight text-ink">Create Report</h1>
          <p className="mt-1 text-[15px] text-slate-500">{subtitle}</p>
        </div>
        <div className="flex items-center gap-3">
          <NotificationButton />
          <UserMenu />
        </div>
      </header>

      <div className="mt-6">
        <Stepper current={step} />
      </div>

      <div className="mt-6">
        {step === 1 ? <SelectDataStep onCancel={cancel} /> : null}
        {step === 2 ? <ConfigureStep /> : null}
        {step >= 3 ? (
          <div className="grid gap-4 xl:grid-cols-[250px_minmax(0,1fr)_260px]">
            <DataSourcesPanel editable={step === 3} />
            {step === 3 ? <GenerateStep /> : <ReviewStep />}
            <ReportHistory items={history} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
