import type { Metadata } from 'next';
import { ActionCards } from '@/components/home/ActionCards';
import { Greeting } from '@/components/home/Greeting';
import { HelpCard } from '@/components/home/HelpCard';
import { QuickActions } from '@/components/home/QuickActions';
import { RecentItems } from '@/components/home/RecentItems';
import { NotificationButton, SearchBar, UserMenu } from '@/components/layout/Topbar';
import { getRecentItems } from '@/services/api';

export const metadata: Metadata = { title: 'Home' };

export default async function HomePage() {
  const recentItems = await getRecentItems();

  return (
    <div className="mx-auto w-full max-w-[1200px] px-5 py-6 sm:px-8">
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0 flex-1">
          <SearchBar />
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <NotificationButton />
          <UserMenu />
        </div>
      </div>

      <Greeting name="Ganesan" />
      <ActionCards />

      <div className="mt-6 grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <RecentItems items={recentItems} />
        <div className="flex flex-col gap-4">
          <QuickActions />
          <HelpCard />
        </div>
      </div>
    </div>
  );
}
