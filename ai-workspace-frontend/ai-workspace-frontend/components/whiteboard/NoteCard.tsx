"use client";

import type { WhiteboardNote } from "@/lib/types";

interface NoteCardProps {
  note: WhiteboardNote;
  onChange: (id: string, body: string) => void;
}

/**
 * A single note tile on the board. Deliberately plain-text for now —
 * swap the textarea for a rich-text editor if the product needs it later,
 * the WhiteboardNote type already supports it.
 */
export function NoteCard({ note, onChange }: NoteCardProps) {
  return (
    <div className="flex h-32 flex-col rounded-lg border border-border bg-surface p-3">
      <span className="mb-1 text-xs font-medium text-ink-muted">
        {note.title}
      </span>
      <textarea
        value={note.body}
        onChange={(event) => onChange(note.id, event.target.value)}
        placeholder="Start typing…"
        className="flex-1 resize-none bg-transparent text-sm text-ink placeholder:text-ink-faint focus:outline-none"
      />
    </div>
  );
}
