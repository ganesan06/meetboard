import type { DataSource, DownloadHistoryItem, WhiteboardNote } from "./types";

export const APP_NAME = "AI Workspace";

export const DATA_SOURCES: DataSource[] = [
  {
    id: "mail",
    label: "Import from mail",
    description: "If they mentioned you, all the relevant data is pulled in.",
  },
  {
    id: "onedrive",
    label: "OneDrive",
    description: "Access your whole drive, or scope it to a specific folder.",
  },
  {
    id: "whiteboard",
    label: "Whiteboard",
    description: "Use notes you've already captured on your whiteboard.",
  },
];

// Seed data — replace with data fetched from the backend once wired up.
export const SEED_NOTES: WhiteboardNote[] = [
  {
    id: "note-1",
    title: "Notes",
    body: "",
    updatedAt: new Date().toISOString(),
  },
  {
    id: "note-2",
    title: "Notes",
    body: "",
    updatedAt: new Date().toISOString(),
  },
  {
    id: "note-3",
    title: "Notes",
    body: "",
    updatedAt: new Date().toISOString(),
  },
];

export const SEED_DOWNLOADS: DownloadHistoryItem[] = [];
