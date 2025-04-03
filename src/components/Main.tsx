'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface MainProps {
  children: React.ReactNode;
}

export function Main({ children }: MainProps) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className={`flex-grow py-16 ${
      resolvedTheme === 'dark' 
        ? 'bg-gray-900 text-white' 
        : 'bg-white text-gray-900'
    }`}>
      {children}
    </main>
  );
} 