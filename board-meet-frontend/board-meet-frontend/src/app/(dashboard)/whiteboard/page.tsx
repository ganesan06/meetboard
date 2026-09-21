import type { Metadata } from 'next';
import { WhiteboardView } from '@/components/whiteboard/WhiteboardView';

export const metadata: Metadata = { title: 'Whiteboard' };

export default function WhiteboardPage() {
  return <WhiteboardView />;
}
