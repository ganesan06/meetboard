'use client';

import { useRef } from 'react';
import { Bell, ChevronDown, Search } from 'lucide-react';
import { Avatar } from '@/components/ui/Avatar';
import { useSearchShortcut } from '@/hooks/useSearchShortcut';

export function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);
  useSearchShortcut(inputRef);

  return (
    <div className="relative w-full max-w-[520px]">
      <Search
        className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
        aria-hidden
      />
      <input
        ref={inputRef}
        type="search"
        aria-label="Search notes, meetings, and reports"
        placeholder="Search notes, meetings, reports..."
        className="h-11 w-full rounded-xl border border-slate-200/80 bg-slate-100/70 pl-10 pr-16 text-sm text-ink outline-none transition-colors placeholder:text-slate-500 focus:border-blue-400 focus:bg-white"
      />
      <kbd className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-md border border-slate-200 bg-white px-1.5 py-0.5 text-[11px] font-medium text-slate-500 sm:block">
        Ctrl K
      </kbd>
    </div>
  );
}

export function NotificationButton() {
  return (
    <button
      type="button"
      aria-label="Notifications"
      className="flex h-10 w-10 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-white hover:shadow-card"
    >
      <Bell className="h-5 w-5" />
    </button>
  );
}

export function UserMenu() {
  return (
    <button
      type="button"
      aria-label="Account menu"
      className="flex items-center gap-2.5 rounded-full border border-slate-200/80 bg-white py-1.5 pl-1.5 pr-3.5 text-sm font-medium text-ink shadow-sm transition-colors hover:bg-slate-50"
    >
      <Avatar initials="G" className="h-8 w-8" />
      <span className="hidden sm:inline">Ganesan</span>
      <ChevronDown className="h-4 w-4 text-slate-500" aria-hidden />
    </button>
  );
}
