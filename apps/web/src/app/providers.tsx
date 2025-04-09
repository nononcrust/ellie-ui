"use client";

import { ThemeProvider } from "@/components/theme/theme-provider";
import { Toaster } from "@ellie-ui/core";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      {children}
      <Toaster />
    </ThemeProvider>
  );
};
