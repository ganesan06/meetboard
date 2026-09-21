'use client';

import { Plus, Share2 } from 'lucide-react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { BoardCanvas } from './BoardCanvas';
import { BoardToolbar } from './BoardToolbar';
import { CommentsPanel } from './CommentsPanel';

export function WhiteboardView() {
  return (
    <div className="mx-auto w-full max-w-[1320px] px-5 py-6 sm:px-8">
      <PageHeader
        title="Whiteboard"
        subtitle="Capture ideas, plan meetings, and collaborate visually."
        actions={
          <>
            <Button variant="secondary">
              <Share2 className="h-4 w-4" aria-hidden />
              Share
            </Button>
            <Button>
              <Plus className="h-4 w-4" aria-hidden />
              New Board
            </Button>
          </>
        }
      />

      <div className="mt-5 grid gap-4 xl:grid-cols-[minmax(0,1fr)_340px]">
        <Card className="flex min-h-[600px] flex-col overflow-hidden">
          <BoardToolbar />
          <BoardCanvas />
        </Card>
        <CommentsPanel />
      </div>
    </div>
  );
}
