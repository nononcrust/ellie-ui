import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
import React from "react";

type SearchInputProps = React.ComponentPropsWithRef<"input">;

export const SearchInput = ({ className, ...props }: SearchInputProps) => {
  return (
    <div className={cn("relative h-fit w-full", className)}>
      <input
        className="bg-background-100 placeholder:text-placeholder h-[40px] w-full rounded-xl px-4 pr-10 text-[14px] font-medium outline-hidden"
        {...props}
      />
      <button aria-label="검색" className="text-sub absolute top-1/2 right-4 -translate-y-1/2">
        <SearchIcon size={16} />
      </button>
    </div>
  );
};
