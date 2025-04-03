"use client";

import { FormProvider as HookFormProvider, FieldValues } from "react-hook-form";
import type { UseFormReturn } from "react-hook-form";

interface FormProviderProps<T extends FieldValues> {
  methods: UseFormReturn<T>;
  onSubmit: (data: T) => void;
  children: React.ReactNode;
}

export function FormProvider<T extends FieldValues>({
  methods,
  onSubmit,
  children,
}: FormProviderProps<T>) {
  return (
    <HookFormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
        {children}
      </form>
    </HookFormProvider>
  );
}
