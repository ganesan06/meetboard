import { LayoutGrid, FileBarChart } from "lucide-react";
import { AccountMenu } from "@/components/layout/AccountMenu";
import { NavCard } from "@/components/home/NavCard";
import { APP_NAME } from "@/lib/constants";

export default function HomePage() {
  return (
    <div>
      <div className="mb-10 flex items-center justify-between">
        <h1 className="text-lg font-semibold text-ink">{APP_NAME}</h1>
        <AccountMenu />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:max-w-xl">
        <NavCard
          href="/whiteboard"
          label="Whiteboard"
          description="Capture notes for today, and jump between days."
          icon={LayoutGrid}
        />
        <NavCard
          href="/reports"
          label="Report"
          description="Ask for a report, sourced from mail, OneDrive, or your notes."
          icon={FileBarChart}
        />
      </div>
    </div>
  );
}
