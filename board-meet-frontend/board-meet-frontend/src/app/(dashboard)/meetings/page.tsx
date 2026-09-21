import type { Metadata } from 'next';
import { Calendar } from 'lucide-react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card } from '@/components/ui/Card';
import { LinkButton } from '@/components/ui/Button';
import { EmptyState } from '@/components/ui/EmptyState';

export const metadata: Metadata = { title: 'Meetings' };

export default function MeetingsPage() {
  return (
    <div className="mx-auto w-full max-w-[1200px] px-5 py-6 sm:px-8">
      <PageHeader title="Meetings" subtitle="Plan and prepare for your next meeting." />
      <Card className="mt-6">
        <EmptyState
          icon={Calendar}
          title="No meetings yet"
          description="Meetings you plan will show up here. Start with a whiteboard to map out the agenda."
          action={<LinkButton href="/whiteboard">Open a whiteboard</LinkButton>}
        />
      </Card>
    </div>
  );
}
