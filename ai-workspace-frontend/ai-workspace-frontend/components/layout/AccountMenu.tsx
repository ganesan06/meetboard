"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, LogOut, Settings, User } from "lucide-react";

interface AccountMenuProps {
  name?: string;
  email?: string;
}

/**
 * Account menu, top-right on every page.
 * Backed by whatever auth context wraps the app (see app/layout.tsx).
 */
export function AccountMenu({
  name = "Account",
  email = "you@company.com",
}: AccountMenuProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-ink hover:bg-surface-raised transition-colors"
      >
        <User className="h-3.5 w-3.5 text-ink-muted" />
        {name}
        <ChevronDown className="h-3.5 w-3.5 text-ink-muted" />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 z-20 mt-2 w-56 rounded-md border border-border bg-surface-raised p-1 shadow-lg shadow-black/40"
        >
          <div className="px-3 py-2 text-xs text-ink-muted">{email}</div>
          <div className="my-1 h-px bg-border-subtle" />
          <MenuItem icon={<Settings className="h-4 w-4" />} label="Settings" />
          <MenuItem icon={<LogOut className="h-4 w-4" />} label="Sign out" />
        </div>
      )}
    </div>
  );
}

function MenuItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button
      type="button"
      role="menuitem"
      className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm text-ink hover:bg-surface"
    >
      {icon}
      {label}
    </button>
  );
}
