import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
import React from "react";

type SearchInputProps = React.ComponentPropsWithRef<"input">;

export const SearchInput = ({ className, ...props }: SearchInputProps) => {
  return (
    <div className={cn("relative h-fit w-full", className)}>
      <input
        className="bg-background-100 placeholder:text-placeholder outline-hidden h-12 w-full rounded-lg px-4 pr-12 text-[0.9375rem] font-medium"
        {...props}
      />
      <button aria-label="검색" className="text-sub absolute right-4 top-1/2 -translate-y-1/2">
        <SearchIcon className="size-5" />
      </button>
    </div>
  );
};
