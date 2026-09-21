import { Button } from '@/components/ui/Button';

export function HelpCard() {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-blue-100 bg-blue-50/70 p-5">
      <div>
        <h2 className="text-[15px] font-semibold text-ink">Need help?</h2>
        <p className="mt-1 text-[13px] leading-snug text-slate-500">
          Check documentation or ask for support.
        </p>
      </div>
      <Button variant="tint" className="shrink-0">
        Get Help
      </Button>
    </div>
  );
}
