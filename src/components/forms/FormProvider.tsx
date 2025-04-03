'use client';

import { FormProvider as HookFormProvider, useFormContext } from 'react-hook-form';
import type { UseFormReturn } from 'react-hook-form';

interface FormProviderProps<T> {
  methods: UseFormReturn<T>;
  onSubmit: (data: T) => void;
  children: React.ReactNode;
}

export function FormProvider<T>({ methods, onSubmit, children }: FormProviderProps<T>) {
  return (
    <HookFormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
        {children}
      </form>
    </HookFormProvider>
  );
} 