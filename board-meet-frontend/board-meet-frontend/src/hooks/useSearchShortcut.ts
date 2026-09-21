'use client';

import { useEffect, type RefObject } from 'react';

/** Focuses the given input when the user presses Ctrl/⌘ + K. */
export function useSearchShortcut(ref: RefObject<HTMLInputElement>) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        ref.current?.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [ref]);
}
