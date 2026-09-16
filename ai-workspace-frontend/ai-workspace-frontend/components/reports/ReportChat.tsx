"use client";

import { useState } from "react";
import { ArrowUp } from "lucide-react";
import type { ReportMessage } from "@/lib/types";
import clsx from "clsx";

interface ReportChatProps {
  messages: ReportMessage[];
  onSend: (content: string) => void;
  disabled?: boolean;
  disabledReason?: string;
}

/**
 * The "ask what report you want" thread. Disabled until at least one
 * data source is selected, so the request always has somewhere to pull
 * data from.
 */
export function ReportChat({
  messages,
  onSend,
  disabled,
  disabledReason,
}: ReportChatProps) {
  const [value, setValue] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const trimmed = value.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setValue("");
  }

  return (
    <div className="flex flex-1 flex-col gap-3">
      <form onSubmit={handleSubmit} className="flex flex-col gap-1">
        <div className="flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-3">
          <input
            value={value}
            onChange={(event) => setValue(event.target.value)}
            placeholder="Ask what report you want from…"
            aria-label="Ask what report you want"
            disabled={disabled}
            className="flex-1 bg-transparent text-sm text-ink placeholder:text-ink-faint focus:outline-none disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={disabled || !value.trim()}
            aria-label="Send"
            className="rounded-md bg-accent p-1.5 text-canvas disabled:opacity-30"
          >
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
        {disabled && disabledReason && (
          <p className="px-1 text-xs text-ink-faint">{disabledReason}</p>
        )}
      </form>

      <div className="flex flex-col gap-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={clsx(
              "max-w-2xl rounded-lg border px-4 py-3 text-sm leading-relaxed",
              message.role === "user"
                ? "self-end border-accent-border bg-accent-soft text-ink"
                : "self-start border-border bg-surface text-ink-muted",
            )}
          >
            {message.content}
          </div>
        ))}
      </div>
    </div>
  );
}
