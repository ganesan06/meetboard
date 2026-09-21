import Link from 'next/link';
import { ArrowRight, Pencil, Users } from 'lucide-react';
import type { ReactNode } from 'react';

type Tone = 'blue' | 'emerald' | 'violet' | 'amber';

// Full class names are written out so Tailwind can see them.
const TONES: Record<Tone, { card: string; arrow: string }> = {
  blue: {
    card: 'border-blue-100 bg-gradient-to-br from-blue-50 to-blue-100/50',
    arrow: 'bg-blue-100 text-blue-600 group-hover:bg-blue-200',
  },
  emerald: {
    card: 'border-emerald-100 bg-gradient-to-br from-emerald-50 to-emerald-100/50',
    arrow: 'bg-emerald-100 text-emerald-600 group-hover:bg-emerald-200',
  },
  violet: {
    card: 'border-violet-100 bg-gradient-to-br from-violet-50 to-violet-100/50',
    arrow: 'bg-violet-100 text-violet-600 group-hover:bg-violet-200',
  },
  amber: {
    card: 'border-amber-100 bg-gradient-to-br from-amber-50 to-amber-100/50',
    arrow: 'bg-amber-100 text-amber-600 group-hover:bg-amber-200',
  },
};

function WhiteboardGlyph() {
  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 shadow-sm">
      <Pencil className="h-6 w-6 text-white" aria-hidden />
    </span>
  );
}

function ReportGlyph() {
  return (
    <svg viewBox="0 0 40 48" className="h-12 w-10" aria-hidden>
      <path d="M6 2h20l10 10v30a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z" fill="#16A34A" />
      <path d="M26 2v6a4 4 0 0 0 4 4h6L26 2Z" fill="#86EFAC" />
      <path d="M11 22h18M11 29h18M11 36h11" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

function MeetingGlyph() {
  return <Users className="h-12 w-12 fill-violet-600 text-violet-600" strokeWidth={1.5} aria-hidden />;
}

function FolderGlyph() {
  return (
    <svg viewBox="0 0 48 40" className="h-11 w-12" aria-hidden>
      <path d="M4 8a4 4 0 0 1 4-4h10l5 5h17a4 4 0 0 1 4 4v3H4V8Z" fill="#F59E0B" />
      <rect x="2" y="14" width="44" height="22" rx="4" fill="#FBBF24" />
    </svg>
  );
}

interface CardConfig {
  href: string;
  title: string;
  description: string;
  tone: Tone;
  glyph: ReactNode;
}

const CARDS: CardConfig[] = [
  {
    href: '/whiteboard',
    title: 'New Whiteboard',
    description: 'Capture ideas visually',
    tone: 'blue',
    glyph: <WhiteboardGlyph />,
  },
  {
    href: '/reports',
    title: 'Create Report',
    description: 'Generate insights from your data',
    tone: 'emerald',
    glyph: <ReportGlyph />,
  },
  {
    href: '/meetings',
    title: 'Start Meeting',
    description: 'Plan and prepare',
    tone: 'violet',
    glyph: <MeetingGlyph />,
  },
  {
    href: '/files',
    title: 'Manage Files',
    description: 'View and organize',
    tone: 'amber',
    glyph: <FolderGlyph />,
  },
];

export function ActionCards() {
  return (
    <section aria-label="Get started" className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
      {CARDS.map(({ href, title, description, tone, glyph }) => (
        <Link
          key={href}
          href={href}
          className={`group flex min-h-[210px] flex-col items-center rounded-2xl border px-4 pb-5 pt-7 text-center shadow-card ${TONES[tone].card}`}
        >
          <span className="flex h-12 items-center justify-center">{glyph}</span>
          <span className="mt-4 text-[15px] font-semibold text-ink">{title}</span>
          <span className="mt-1 max-w-[12rem] text-[13px] leading-snug text-slate-500">{description}</span>
          <span
            className={`mt-auto flex h-10 w-10 items-center justify-center rounded-full transition-colors ${TONES[tone].arrow}`}
          >
            <ArrowRight className="h-4 w-4" aria-hidden />
          </span>
        </Link>
      ))}
    </section>
  );
}
