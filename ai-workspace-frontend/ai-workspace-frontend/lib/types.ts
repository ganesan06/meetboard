/**
 * Domain types shared across the app.
 * Keep these in sync with the backend's Pydantic models / API contracts.
 */

export type DataSourceId = "mail" | "onedrive" | "whiteboard";

export interface DataSource {
  id: DataSourceId;
  label: string;
  description: string;
}

export interface WhiteboardNote {
  id: string;
  title: string;
  body: string;
  updatedAt: string; // ISO timestamp
}

export type WhiteboardDay = "yesterday" | "today" | "tomorrow";

export interface ReportMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  createdAt: string; // ISO timestamp
}

export interface DownloadHistoryItem {
  id: string;
  name: string;
  createdAt: string; // ISO timestamp
  format: "pdf" | "html" | "xlsx";
}
