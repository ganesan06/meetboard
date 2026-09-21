import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { FileList } from '@/components/files/FileList';
import type { RecentItem } from '@/types';

export function RecentItems({ items }: { items: RecentItem[] }) {
  return (
    <Card className="p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-ink">Recent Items</h2>
        <Link href="/history" className="text-sm font-medium text-blue-600 hover:underline">
          View all
        </Link>
      </div>
      <div className="mt-2">
        <FileList items={items} />
      </div>
    </Card>
  );
}
