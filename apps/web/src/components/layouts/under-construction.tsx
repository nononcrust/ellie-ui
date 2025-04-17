import { HammerIcon } from "lucide-react";

export const UnderConstruction = () => {
  return (
    <div className="border-5 flex h-12 w-12 items-center justify-center rounded-full border-neutral-100 dark:border-neutral-700">
      <HammerIcon className="size-6 text-neutral-300 dark:text-neutral-400" strokeWidth={2.5} />
    </div>
  );
};
