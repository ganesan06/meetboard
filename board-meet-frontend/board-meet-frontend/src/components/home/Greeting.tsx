'use client';

import { useNow } from '@/hooks/useNow';
import { formatToday, greetingFor } from '@/lib/utils';

export function Greeting({ name }: { name: string }) {
  const now = useNow();

  return (
    <section className="mt-8 flex flex-wrap items-start justify-between gap-4">
      <div>
        <h1 className="text-[28px] font-bold tracking-tight text-ink">
          {now ? greetingFor(now) : 'Welcome back'}, {name} <span aria-hidden>👋</span>
        </h1>
        <p className="mt-1.5 text-[15px] text-slate-500">
          Plan better meetings, capture ideas, and get insights – all in one place.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <span className="min-w-[8.5rem] text-right text-sm font-medium text-slate-600">
          {now ? formatToday(now) : ''}
        </span>
        <button
          type="button"
          className="rounded-lg bg-blue-100/80 px-3.5 py-2 text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-100"
        >
          Today
        </button>
      </div>
    </section>
  );
}
