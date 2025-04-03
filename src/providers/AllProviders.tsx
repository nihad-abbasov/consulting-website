'use client';

import { ThemeProvider } from './ThemeProvider';

export function AllProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
} 