import { Download, FileText } from "lucide-react";
import type { DownloadHistoryItem } from "@/lib/types";

interface DownloadsHistoryProps {
  items: DownloadHistoryItem[];
}

/**
 * Right-hand rail listing previously generated reports, pulled from
 * OneDrive's Reports/ folder. Empty state guides the user to act,
 * rather than showing a blank panel.
 */
export function DownloadsHistory({ items }: DownloadsHistoryProps) {
  return (
    <aside className="flex w-56 shrink-0 flex-col rounded-lg border border-border bg-surface p-4">
      <div className="mb-3 flex items-center gap-2 text-xs font-medium text-ink-muted">
        <Download className="h-3.5 w-3.5" />
        History
      </div>

      {items.length === 0 ? (
        <p className="text-xs text-ink-faint">
          Reports you generate will show up here for re-download.
        </p>
      ) : (
        <ul className="flex flex-col gap-2">
          {items.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className="flex w-full items-start gap-2 rounded-md px-2 py-1.5 text-left text-xs text-ink-muted hover:bg-surface-raised hover:text-ink"
              >
                <FileText className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                <span className="truncate">{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
