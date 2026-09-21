import type { Metadata } from 'next';
import { FileList } from '@/components/files/FileList';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card } from '@/components/ui/Card';
import { getRecentItems } from '@/services/api';

export const metadata: Metadata = { title: 'History' };

export default async function HistoryPage() {
  const items = await getRecentItems();
  return (
    <div className="mx-auto w-full max-w-[1200px] px-5 py-6 sm:px-8">
      <PageHeader title="History" subtitle="Everything you've opened or created recently." />
      <Card className="mt-6 p-5">
        <FileList items={items} />
      </Card>
    </div>
  );
}
