'use client';

import { useEffect, useState } from 'react';

/**
 * Returns the current date on the client only.
 * It is `null` during server render / first paint, which avoids hydration
 * mismatches from the server and browser living in different time zones.
 */
export function useNow(): Date | null {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
  }, []);

  return now;
}
