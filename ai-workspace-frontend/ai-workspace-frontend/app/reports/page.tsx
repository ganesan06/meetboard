"use client";

import { useMemo, useState } from "react";
import { TopBar } from "@/components/layout/TopBar";
import { DataSourceSelector } from "@/components/reports/DataSourceSelector";
import { ReportChat } from "@/components/reports/ReportChat";
import { DownloadsHistory } from "@/components/reports/DownloadsHistory";
import { SEED_DOWNLOADS } from "@/lib/constants";
import type { DataSourceId, ReportMessage } from "@/lib/types";

export default function ReportsPage() {
  const [selectedSources, setSelectedSources] = useState<DataSourceId[]>([]);
  const [messages, setMessages] = useState<ReportMessage[]>([]);

  const hasSource = selectedSources.length > 0;

  function toggleSource(id: DataSourceId) {
    setSelectedSources((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id],
    );
  }

  function handleSend(content: string) {
    const userMessage: ReportMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content,
      createdAt: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, userMessage]);

    // TODO: replace with a real call to POST /reports, passing
    // selectedSources + content. The backend resolves sources via
    // Microsoft Graph, generates the report, and returns a summary
    // plus a download link saved to OneDrive's Reports/ folder.
    const placeholder: ReportMessage = {
      id: crypto.randomUUID(),
      role: "assistant",
      content: "You asked report",
      createdAt: new Date().toISOString(),
    };
    setTimeout(() => setMessages((prev) => [...prev, placeholder]), 300);
  }

  const disabledReason = useMemo(
    () =>
      hasSource
        ? undefined
        : "Select at least one data source above to ask for a report.",
    [hasSource],
  );

  return (
    <div>
      <TopBar title="Report" backHref="/" />

      <div className="flex gap-6">
        <div className="w-64 shrink-0">
          <DataSourceSelector
            selected={selectedSources}
            onToggle={toggleSource}
          />
        </div>

        <ReportChat
          messages={messages}
          onSend={handleSend}
          disabled={!hasSource}
          disabledReason={disabledReason}
        />

        <DownloadsHistory items={SEED_DOWNLOADS} />
      </div>
    </div>
  );
}
