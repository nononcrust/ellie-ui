"use client";

import { ThemeProvider } from "@/components/theme/theme-provider";
import { Toaster } from "@ellie-ui/core";
import { RootProvider } from "fumadocs-ui/provider/next";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <RootProvider>
      <ThemeProvider>
        {children}
        <Toaster />
      </ThemeProvider>
    </RootProvider>
  );
};
