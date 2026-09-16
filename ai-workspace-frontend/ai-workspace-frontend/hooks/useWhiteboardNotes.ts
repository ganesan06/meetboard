"use client";

import { useCallback, useState } from "react";
import { SEED_NOTES } from "@/lib/constants";
import type { WhiteboardNote } from "@/lib/types";

/**
 * Owns note state for the whiteboard. Persistence is stubbed for now —
 * wire `persist` to `PUT /whiteboard/:day` (saved to OneDrive by the
 * backend) once the API is available.
 */
export function useWhiteboardNotes(initial: WhiteboardNote[] = SEED_NOTES) {
  const [notes, setNotes] = useState<WhiteboardNote[]>(initial);

  const updateNote = useCallback((id: string, body: string) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? { ...note, body, updatedAt: new Date().toISOString() }
          : note,
      ),
    );
  }, []);

  const persist = useCallback(async () => {
    // TODO: POST to the backend once /whiteboard is implemented.
    // await fetch("/api/whiteboard", { method: "PUT", body: JSON.stringify(notes) });
  }, []);

  return { notes, updateNote, persist };
}
