'use client';

import { useState, type FormEvent } from 'react';
import { Send, Sparkles } from 'lucide-react';
import { Avatar } from '@/components/ui/Avatar';
import { Card } from '@/components/ui/Card';
import { cn, formatClock } from '@/lib/utils';
import { useWhiteboardStore } from '@/store/whiteboardStore';

function CommentText({ text }: { text: string }) {
  const parts = text.split(/(@\w+)/g);
  return (
    <p className="mt-0.5 text-sm text-slate-700">
      {parts.map((part, i) =>
        part.startsWith('@') ? (
          <span key={i} className="font-medium text-blue-600">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </p>
  );
}

export function CommentsPanel() {
  const { tab, setTab, comments, addComment } = useWhiteboardStore();
  const [draft, setDraft] = useState('');

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;
    addComment(text, formatClock(new Date()));
    setDraft('');
  };

  return (
    <Card className="flex min-h-[520px] flex-col overflow-hidden">
      <div role="tablist" aria-label="Board panel" className="flex border-b border-slate-200/80">
        {(
          [
            { id: 'comments', label: 'Comments' },
            { id: 'copilot', label: 'AI Copilot' },
          ] as const
        ).map(({ id, label }) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={tab === id}
            onClick={() => setTab(id)}
            className={cn(
              '-mb-px flex-1 border-b-2 px-4 py-3 text-[13px] font-medium transition-colors',
              tab === id
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-600 hover:text-ink',
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === 'comments' ? (
        <>
          <ul className="flex-1 space-y-5 overflow-y-auto p-4">
            {comments.map((comment) => (
              <li key={comment.id} className="flex gap-3">
                <Avatar initials={comment.initials} tone={comment.tone} className="h-9 w-9" />
                <div className="min-w-0">
                  <p className="text-[13px]">
                    <span className="font-semibold text-ink">{comment.author}</span>{' '}
                    <span className="text-xs text-slate-400">{comment.time}</span>
                  </p>
                  <CommentText text={comment.text} />
                </div>
              </li>
            ))}
          </ul>
          <form onSubmit={onSubmit} className="flex items-center gap-2 border-t border-slate-200/80 p-3">
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              aria-label="Add a comment"
              placeholder="Add a comment..."
              className="h-10 min-w-0 flex-1 rounded-lg border border-slate-200 px-3 text-sm text-ink outline-none placeholder:text-slate-400 focus:border-blue-500"
            />
            <button
              type="submit"
              aria-label="Send comment"
              disabled={!draft.trim()}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </>
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
            <Sparkles className="h-6 w-6" aria-hidden />
          </span>
          <h3 className="mt-4 text-base font-semibold text-ink">AI Copilot isn&apos;t connected yet</h3>
          <p className="mt-1 max-w-[16rem] text-sm text-slate-500">
            Once your backend is wired up, Copilot can summarize this board and suggest next steps.
          </p>
        </div>
      )}
    </Card>
  );
}
