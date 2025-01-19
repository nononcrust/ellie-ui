import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
import React from "react";

type SearchInputProps = React.ComponentPropsWithRef<"input">;

export const SearchInput = ({ className, ...props }: SearchInputProps) => {
  return (
    <div className={cn("relative w-full", className)}>
      <input
        className="h-[48px] w-full rounded-xl bg-background-100 px-4 pr-4 text-[15px] font-medium outline-none placeholder:text-placeholder"
        {...props}
      />
      <button aria-label="검색" className="absolute right-4 top-1/2 -translate-y-1/2 text-sub">
        <SearchIcon size={20} />
      </button>
    </div>
  );
};
