import type { Metadata } from 'next';
import { FileList } from '@/components/files/FileList';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card } from '@/components/ui/Card';
import { getRecentItems } from '@/services/api';

export const metadata: Metadata = { title: 'Files' };

export default async function FilesPage() {
  const items = await getRecentItems();
  return (
    <div className="mx-auto w-full max-w-[1200px] px-5 py-6 sm:px-8">
      <PageHeader title="Files" subtitle="View and organize your reports, spreadsheets, and boards." />
      <Card className="mt-6 p-5">
        <h2 className="text-lg font-semibold text-ink">All files</h2>
        <div className="mt-2">
          <FileList items={items} />
        </div>
      </Card>
    </div>
  );
}
