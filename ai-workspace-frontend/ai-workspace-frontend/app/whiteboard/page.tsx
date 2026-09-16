"use client";

import { useState } from "react";
import { AccountMenu } from "@/components/layout/AccountMenu";
import { DateNav } from "@/components/whiteboard/DateNav";
import { NoteCard } from "@/components/whiteboard/NoteCard";
import { AiPromptBar } from "@/components/whiteboard/AiPromptBar";
import { useWhiteboardNotes } from "@/hooks/useWhiteboardNotes";
import type { WhiteboardDay } from "@/lib/types";
import Link from "next/link";
import { ArrowLeft, Pin } from "lucide-react";

export default function WhiteboardPage() {
  const [day, setDay] = useState<WhiteboardDay>("today");
  const { notes, updateNote } = useWhiteboardNotes();

  function handleAskAi(prompt: string) {
    // TODO: send to the AI orchestrator (/chat) with whiteboard context attached.
    console.log("Ask AI:", prompt);
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-ink-muted hover:text-ink hover:bg-surface-raised"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back
          </Link>
          <DateNav day={day} onChange={setDay} />
        </div>
        <AccountMenu />
      </div>

      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-base font-medium capitalize text-ink">
          {day} whiteboard
        </h1>
        <button
          type="button"
          className="flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-ink-muted hover:text-ink hover:bg-surface-raised"
        >
          <Pin className="h-3.5 w-3.5" />
          Important note
        </button>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} onChange={updateNote} />
        ))}
      </div>

      <AiPromptBar onSubmit={handleAskAi} />
    </div>
  );
}
