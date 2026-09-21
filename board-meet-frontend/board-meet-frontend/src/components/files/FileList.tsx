import { MoreHorizontal } from 'lucide-react';
import { FileTypeIcon } from '@/components/ui/FileTypeIcon';
import type { RecentItem } from '@/types';

export function FileList({ items }: { items: RecentItem[] }) {
  return (
    <ul className="divide-y divide-slate-100">
      {items.map((item) => (
        <li key={item.id} className="flex items-center gap-3.5 py-3">
          <FileTypeIcon kind={item.kind} />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-ink">{item.name}</p>
            <p className="mt-0.5 text-xs text-slate-500">
              {item.category} · {item.updated}
            </p>
          </div>
          <button
            type="button"
            aria-label={`More options for ${item.name}`}
            className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
          >
            <MoreHorizontal className="h-5 w-5" />
          </button>
        </li>
      ))}
    </ul>
  );
}
