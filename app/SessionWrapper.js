'use client';

import { SessionProvider } from 'next-auth/react';
import AnalyticsTracker from './components/AnalyticsTracker';

export default function SessionWrapper({ children }) {
  return (
    <SessionProvider>
      <AnalyticsTracker />
      {children}
    </SessionProvider>
  );
}
