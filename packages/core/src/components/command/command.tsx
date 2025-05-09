"use client";

import { cn } from "@/lib/utils";
import { Command as CommandPrimitives } from "cmdk";
import { SearchIcon } from "lucide-react";
import React from "react";

type CommandProps = React.ComponentPropsWithRef<typeof CommandPrimitives>;

const Command = ({ className, ...props }: CommandProps) => {
  return (
    <CommandPrimitives
      className={cn(
        "bg-background flex h-full w-full flex-col overflow-hidden rounded-lg",
        className,
      )}
      {...props}
    />
  );
};

type CommandInputProps = React.ComponentPropsWithRef<typeof CommandPrimitives.Input>;

const CommandInput = ({ className, ...props }: CommandInputProps) => {
  return (
    <div className="border-border flex items-center border-b px-3" cmdk-input-wrapper="">
      <SearchIcon strokeWidth={2} className="text-placeholder mr-2 size-[1.125rem]" />
      <CommandPrimitives.Input
        className={cn(
          "placeholder:text-placeholder outline-hidden flex h-10 w-full rounded-lg bg-transparent py-3 text-sm",
          "disabled:pointer-events-none disabled:opacity-50",
          className,
        )}
        {...props}
      />
    </div>
  );
};

type CommandListProps = React.ComponentPropsWithRef<typeof CommandPrimitives.List>;

const CommandList = ({ className, children, ...props }: CommandListProps) => {
  return (
    <CommandPrimitives.List
      className={cn("max-h-80 overflow-y-auto overflow-x-hidden p-1", className)}
      {...props}
    >
      {children}
    </CommandPrimitives.List>
  );
};

type CommandEmptyProps = React.ComponentPropsWithRef<typeof CommandPrimitives.Empty>;

const CommandEmpty = (props: CommandEmptyProps) => {
  return (
    <CommandPrimitives.Empty
      className="text-subtle py-6 text-center text-sm font-medium"
      {...props}
    />
  );
};

type CommandItemProps = React.ComponentPropsWithoutRef<typeof CommandPrimitives.Item>;

const CommandItem = ({ className, ...props }: CommandItemProps) => {
  return (
    <CommandPrimitives.Item
      className={cn(
        "outline-hidden relative flex cursor-pointer select-none items-center gap-3 rounded-[0.5rem] px-2 py-1.5 text-sm font-medium",
        "data-[selected=true]:bg-background-100",
        "data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0",
        className,
      )}
      {...props}
    />
  );
};

Command.Input = CommandInput;
Command.List = CommandList;
Command.Empty = CommandEmpty;
Command.Item = CommandItem;
Command.Loading = CommandPrimitives.Loading;

export { Command };
