import type { ReactNode } from 'react';
import { NotificationButton, UserMenu } from './Topbar';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  /** Replaces the default notifications + account controls. */
  actions?: ReactNode;
}

export function PageHeader({ title, subtitle, actions }: PageHeaderProps) {
  return (
    <header className="flex flex-wrap items-start justify-between gap-4">
      <div>
        <h1 className="text-[26px] font-bold tracking-tight text-ink">{title}</h1>
        <p className="mt-1 text-[15px] text-slate-500">{subtitle}</p>
      </div>
      <div className="flex items-center gap-3">
        {actions ?? (
          <>
            <NotificationButton />
            <UserMenu />
          </>
        )}
      </div>
    </header>
  );
}
