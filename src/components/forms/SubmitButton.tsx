'use client';

import { useFormContext } from 'react-hook-form';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface SubmitButtonProps {
  label: string;
  className?: string;
}

export function SubmitButton({ label, className = '' }: SubmitButtonProps) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const { formState: { isSubmitting } } = useFormContext();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={`w-full px-6 py-3 rounded-lg font-semibold ${
        resolvedTheme === 'dark'
          ? 'bg-blue-600 hover:bg-blue-700 text-white'
          : 'bg-blue-600 hover:bg-blue-700 text-white'
      } ${className}`}
    >
      {isSubmitting ? 'Submitting...' : label}
    </button>
  );
} 