import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface NavCardProps {
  href: string;
  label: string;
  description: string;
  icon: LucideIcon;
}

/**
 * Large tappable destination card on the home page (Whiteboard, Reports).
 * Kept content-driven so adding a third destination later is a one-line change.
 */
export function NavCard({ href, label, description, icon: Icon }: NavCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-40 flex-col justify-between rounded-lg border border-border bg-surface p-5 transition-colors hover:border-accent-border hover:bg-surface-raised"
    >
      <Icon className="h-6 w-6 text-ink-muted transition-colors group-hover:text-accent" />
      <div>
        <div className="text-base font-medium text-ink">{label}</div>
        <p className="mt-1 text-sm text-ink-muted">{description}</p>
      </div>
    </Link>
  );
}
