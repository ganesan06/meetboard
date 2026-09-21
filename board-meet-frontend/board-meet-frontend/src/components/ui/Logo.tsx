import { cn } from '@/lib/utils';

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden className={cn('h-10 w-10', className)}>
      <rect width="40" height="40" rx="10" fill="#2563EB" />
      <rect x="9" y="9" width="22" height="17" rx="3.5" fill="#fff" />
      <circle cx="16" cy="17" r="2" fill="#2563EB" />
      <circle cx="24" cy="17" r="2" fill="#2563EB" />
      <path d="M15 31h10" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <LogoMark />
      <span className="text-xl font-bold tracking-tight text-ink">Board Meet</span>
    </div>
  );
}
