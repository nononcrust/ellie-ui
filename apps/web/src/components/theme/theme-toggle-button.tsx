import { IconButton } from "@ellie-ui/core";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { ClientOnly } from "../layouts/client-only";

export const ThemeToggleButton = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <ClientOnly>
      <IconButton
        variant="ghost"
        size="small"
        aria-label="테마 변경"
        onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      >
        {resolvedTheme === "light" ? <SunIcon size={18} /> : <MoonIcon size={18} />}
      </IconButton>
    </ClientOnly>
  );
};
