import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AccountMenu } from "./AccountMenu";

interface TopBarProps {
  title: string;
  backHref?: string;
}

/**
 * Page header: optional back navigation on the left, page title in the
 * middle, account menu pinned right. Every page composes this the same
 * way so navigation stays predictable.
 */
export function TopBar({ title, backHref }: TopBarProps) {
  return (
    <div className="mb-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        {backHref && (
          <Link
            href={backHref}
            className="flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-ink-muted hover:text-ink hover:bg-surface-raised transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back
          </Link>
        )}
        <h1 className="text-lg font-semibold text-ink">{title}</h1>
      </div>
      <AccountMenu />
    </div>
  );
}
