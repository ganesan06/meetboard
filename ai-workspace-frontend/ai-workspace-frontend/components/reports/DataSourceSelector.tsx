"use client";

import { Check } from "lucide-react";
import { DATA_SOURCES } from "@/lib/constants";
import type { DataSourceId } from "@/lib/types";
import clsx from "clsx";

interface DataSourceSelectorProps {
  selected: DataSourceId[];
  onToggle: (id: DataSourceId) => void;
}

/**
 * "Select where I get data from" panel. Multiple sources can be selected
 * at once — the report generator merges results from each. A selected
 * source turns the accent color, matching the wireframe's
 * "if I select it, look green" note.
 */
export function DataSourceSelector({
  selected,
  onToggle,
}: DataSourceSelectorProps) {
  return (
    <div className="rounded-lg border border-border bg-surface p-4">
      <p className="mb-3 text-xs font-medium text-ink-muted">
        Select where I get data from
      </p>
      <div className="flex flex-col gap-2">
        {DATA_SOURCES.map((source) => {
          const isSelected = selected.includes(source.id);
          return (
            <button
              key={source.id}
              type="button"
              onClick={() => onToggle(source.id)}
              aria-pressed={isSelected}
              title={source.description}
              className={clsx(
                "flex items-center justify-between rounded-md border px-3 py-2 text-left text-sm transition-colors",
                isSelected
                  ? "border-accent-border bg-accent-soft text-ink"
                  : "border-border bg-canvas text-ink-muted hover:text-ink",
              )}
            >
              {source.label}
              {isSelected && <Check className="h-3.5 w-3.5 text-accent" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
