import type { AvatarTone } from '@/types';
import { cn } from '@/lib/utils';

const TONES: Record<AvatarTone, string> = {
  amber: 'bg-amber-200 text-amber-900',
  slate: 'bg-slate-300 text-slate-800',
  blue: 'bg-blue-600 text-white',
};

interface AvatarProps {
  initials: string;
  tone?: AvatarTone;
  className?: string;
}

export function Avatar({ initials, tone = 'blue', className }: AvatarProps) {
  return (
    <span
      aria-hidden
      className={cn(
        'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold',
        TONES[tone],
        className,
      )}
    >
      {initials}
    </span>
  );
}
