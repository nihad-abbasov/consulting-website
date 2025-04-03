'use client';

import { useFormContext } from 'react-hook-form';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface InputProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

export function Input({ name, label, type = 'text', placeholder, required, className = '' }: InputProps) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const { register, formState: { errors } } = useFormContext();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <label htmlFor={name} className={`block text-sm font-medium mb-2 ${
        resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'
      }`}>
        {label}
      </label>
      <input
        {...register(name)}
        type={type}
        id={name}
        placeholder={placeholder}
        required={required}
        className={`w-full px-4 py-2 rounded-lg border ${
          resolvedTheme === 'dark'
            ? 'bg-gray-700 border-gray-600 text-white'
            : 'bg-white border-gray-300 text-gray-900'
        } ${className}`}
      />
      {errors[name] && (
        <p className="mt-1 text-sm text-red-500">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
} 