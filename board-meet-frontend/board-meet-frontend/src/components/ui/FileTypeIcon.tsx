import { FileSpreadsheet, FileText, type LucideIcon } from 'lucide-react';
import type { FileKind } from '@/types';

const KINDS: Record<FileKind, { tile: string; chip: string; icon: LucideIcon }> = {
  pdf: { tile: 'bg-red-50', chip: 'bg-red-500', icon: FileText },
  xlsx: { tile: 'bg-emerald-50', chip: 'bg-emerald-600', icon: FileSpreadsheet },
  whiteboard: { tile: 'bg-blue-50', chip: 'bg-blue-600', icon: FileText },
};

export function FileTypeIcon({ kind }: { kind: FileKind }) {
  const { tile, chip, icon: Icon } = KINDS[kind];
  return (
    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${tile}`}>
      <span className={`flex h-6 w-6 items-center justify-center rounded-md ${chip}`}>
        <Icon className="h-4 w-4 text-white" aria-hidden />
      </span>
    </span>
  );
}
