"use client";

import { IconButton } from "@ellie-ui/core";
import { MoonIcon, SunIcon } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { ClientOnly } from "../layouts/client-only";

export const ThemeToggleButton = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="size-8">
      <ClientOnly>
        <IconButton
          variant="ghost"
          size="small"
          aria-label="테마 변경"
          onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
        >
          {resolvedTheme === "light" ? (
            <SunIcon className="size-[1.125rem]" />
          ) : (
            <MoonIcon className="size-[1.125rem]" />
          )}
        </IconButton>
      </ClientOnly>
    </motion.div>
  );
};
