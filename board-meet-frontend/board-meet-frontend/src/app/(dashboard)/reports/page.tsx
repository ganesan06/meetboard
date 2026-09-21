import type { Metadata } from 'next';
import { ReportWizard } from '@/components/reports/ReportWizard';
import { getReportHistory } from '@/services/api';

export const metadata: Metadata = { title: 'Reports' };

export default async function ReportsPage() {
  const history = await getReportHistory();
  return <ReportWizard history={history} />;
}
