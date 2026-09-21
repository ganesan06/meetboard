'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Clock, File, FileBarChart, FileText, Gem, Home, SquarePen, Cloud } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { storageUsage } from '@/services/api';
import { cn } from '@/lib/utils';

const NAV = [
  { href: '/home', label: 'Home', icon: Home },
  { href: '/whiteboard', label: 'Whiteboard', icon: SquarePen },
  { href: '/reports', label: 'Reports', icon: FileBarChart },
  { href: '/meetings', label: 'Meetings', icon: FileText },
  { href: '/files', label: 'Files', icon: File },
  { href: '/history', label: 'History', icon: Clock },
] as const;

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-full flex-col border-r border-slate-200/70 bg-white px-3 py-5">
      <div className="px-2">
        <Logo />
      </div>

      <nav aria-label="Main" className="mt-7 flex flex-col gap-1">
        {NAV.map(({ href, label, icon: Icon }) => {
          const active = pathname === href || pathname.startsWith(`${href}/`);
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? 'page' : undefined}
              className={cn(
                'flex items-center gap-3 rounded-xl px-3 py-2.5 text-[15px] transition-colors',
                active
                  ? 'bg-blue-50 font-semibold text-blue-600'
                  : 'font-medium text-slate-700 hover:bg-slate-50',
              )}
            >
              <Icon className="h-5 w-5" aria-hidden />
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto px-1">
        <p className="text-xs font-medium text-slate-500">Storage</p>
        <div className="mt-2 flex items-center gap-2.5">
          <Cloud className="h-6 w-6 shrink-0 fill-blue-500 text-blue-500" aria-hidden />
          <div className="min-w-0 flex-1">
            <ProgressBar value={storageUsage.usedGb} max={storageUsage.totalGb} label="Storage used" />
            <p className="mt-1.5 text-xs text-slate-500">
              {storageUsage.usedGb} GB of {storageUsage.totalGb} GB
            </p>
          </div>
        </div>
        <button
          type="button"
          className="mt-4 flex w-full items-center gap-2.5 rounded-xl bg-blue-50 px-3 py-2.5 text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-100"
        >
          <Gem className="h-4 w-4" aria-hidden />
          Upgrade
        </button>
      </div>
    </aside>
  );
}
