"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import type { WhiteboardDay } from "@/lib/types";

interface DateNavProps {
  day: WhiteboardDay;
  onChange: (day: WhiteboardDay) => void;
}

const ORDER: WhiteboardDay[] = ["yesterday", "today", "tomorrow"];

/**
 * Lets the user step between yesterday / today / tomorrow's board.
 * Mirrors the "filter" control in the wireframe, made explicit as two
 * directional buttons rather than a single ambiguous toggle.
 */
export function DateNav({ day, onChange }: DateNavProps) {
  const index = ORDER.indexOf(day);
  const canGoBack = index > 0;
  const canGoForward = index < ORDER.length - 1;

  return (
    <div className="flex items-center gap-1 text-sm text-ink-muted">
      <button
        type="button"
        aria-label="Previous day"
        disabled={!canGoBack}
        onClick={() => canGoBack && onChange(ORDER[index - 1])}
        className="rounded-md border border-border bg-surface p-1.5 hover:bg-surface-raised disabled:opacity-30 disabled:hover:bg-surface"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <span className="min-w-20 text-center capitalize text-ink">{day}</span>
      <button
        type="button"
        aria-label="Next day"
        disabled={!canGoForward}
        onClick={() => canGoForward && onChange(ORDER[index + 1])}
        className="rounded-md border border-border bg-surface p-1.5 hover:bg-surface-raised disabled:opacity-30 disabled:hover:bg-surface"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}
