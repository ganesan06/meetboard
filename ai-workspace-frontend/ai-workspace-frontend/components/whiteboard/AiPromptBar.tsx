"use client";

import { useState } from "react";
import { Sparkles, ArrowUp } from "lucide-react";

interface AiPromptBarProps {
  onSubmit: (prompt: string) => void;
}

/**
 * "Ask AI anything…" bar pinned to the bottom of the whiteboard.
 * Kept as a controlled input so the parent decides what happens with
 * the prompt (call the /chat endpoint, append to a thread, etc.).
 */
export function AiPromptBar({ onSubmit }: AiPromptBarProps) {
  const [value, setValue] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    onSubmit(trimmed);
    setValue("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-3"
    >
      <Sparkles className="h-4 w-4 shrink-0 text-ink-muted" />
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Ask AI anything…"
        aria-label="Ask AI anything"
        className="flex-1 bg-transparent text-sm text-ink placeholder:text-ink-faint focus:outline-none"
      />
      <button
        type="submit"
        disabled={!value.trim()}
        aria-label="Send"
        className="rounded-md bg-accent p-1.5 text-canvas disabled:opacity-30"
      >
        <ArrowUp className="h-3.5 w-3.5" />
      </button>
    </form>
  );
}
