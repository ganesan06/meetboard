import { FileText } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import type { ReportHistoryItem } from '@/types';

export function ReportHistory({ items }: { items: ReportHistoryItem[] }) {
  return (
    <Card className="p-5">
      <h2 className="text-[15px] font-semibold text-ink">History</h2>
      <ul className="mt-4 space-y-4">
        {items.map((item) => (
          <li key={item.id} className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <FileText className="h-[18px] w-[18px]" aria-hidden />
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-ink">{item.title}</p>
              <p className="text-xs text-slate-500">{item.when}</p>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
