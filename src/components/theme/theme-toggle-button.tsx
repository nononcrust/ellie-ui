import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { ClientOnly } from "../layouts/client-only";
import { IconButton } from "../ui/icon-button";

export const ThemeToggleButton = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <ClientOnly>
      <IconButton
        variant="ghost"
        size="xsmall"
        aria-label="테마 변경"
        onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      >
        {resolvedTheme === "light" ? <SunIcon size={16} /> : <MoonIcon size={16} />}
      </IconButton>
    </ClientOnly>
  );
};
