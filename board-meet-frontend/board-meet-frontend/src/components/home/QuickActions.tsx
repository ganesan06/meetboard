import Link from 'next/link';
import { Calendar, ChevronRight, Cloud, FileText } from 'lucide-react';
import { Card } from '@/components/ui/Card';

const ACTIONS = [
  { href: '/whiteboard', label: 'Create new note', icon: FileText },
  { href: '/reports', label: "Generate today's report", icon: FileText },
  { href: '/meetings', label: 'Schedule a meeting', icon: Calendar },
  { href: '/files', label: 'Open OneDrive', icon: Cloud },
] as const;

export function QuickActions() {
  return (
    <Card className="p-5">
      <h2 className="text-lg font-semibold text-ink">Quick Actions</h2>
      <ul className="mt-3 flex flex-col gap-2">
        {ACTIONS.map(({ href, label, icon: Icon }) => (
          <li key={label}>
            <Link
              href={href}
              className="flex items-center gap-3 rounded-lg bg-slate-50 px-3 py-2.5 text-sm text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
            >
              <Icon className="h-5 w-5 shrink-0 text-blue-600" aria-hidden />
              <span className="flex-1">{label}</span>
              <ChevronRight className="h-4 w-4 text-slate-400" aria-hidden />
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  );
}
