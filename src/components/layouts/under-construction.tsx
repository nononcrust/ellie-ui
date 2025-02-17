import { HammerIcon } from "lucide-react";

export const UnderConstruction = () => {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full border-5 border-neutral-100 dark:border-neutral-700">
      <HammerIcon className="text-neutral-300 dark:text-neutral-400" size={24} strokeWidth={2.5} />
    </div>
  );
};
