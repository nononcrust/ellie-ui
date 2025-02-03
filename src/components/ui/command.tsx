"use client";

import { cn } from "@/lib/utils";
import { Command as CommandPrimitives } from "cmdk";
import { SearchIcon } from "lucide-react";
import React from "react";

type CommandProps = React.ComponentPropsWithoutRef<typeof CommandPrimitives>;

const CommandImpl = React.forwardRef<React.ComponentRef<typeof CommandPrimitives>, CommandProps>(
  ({ className, ...props }, ref) => (
    <CommandPrimitives
      ref={ref}
      className={cn(
        "flex h-full w-full flex-col overflow-hidden rounded-lg bg-background",
        className,
      )}
      {...props}
    />
  ),
);
CommandImpl.displayName = CommandPrimitives.displayName;

type CommandInputProps = React.ComponentPropsWithoutRef<typeof CommandPrimitives.Input>;

const CommandInput = React.forwardRef<
  React.ComponentRef<typeof CommandPrimitives.Input>,
  CommandInputProps
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b border-border px-3" cmdk-input-wrapper="">
    <SearchIcon size={18} strokeWidth={2} className="mr-2 text-placeholder" />
    <CommandPrimitives.Input
      ref={ref}
      className={cn(
        "flex h-10 w-full rounded-lg bg-transparent py-3 text-sm outline-hidden placeholder:text-placeholder",
        "disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      {...props}
    />
  </div>
));
CommandInput.displayName = CommandPrimitives.Input.displayName;

type CommandListProps = React.ComponentPropsWithoutRef<typeof CommandPrimitives.List>;

const CommandList = React.forwardRef<
  React.ComponentRef<typeof CommandPrimitives.List>,
  CommandListProps
>(({ className, children, ...props }, ref) => (
  <CommandPrimitives.List
    ref={ref}
    className={cn("max-h-80 overflow-y-auto overflow-x-hidden p-1", className)}
    {...props}
  >
    {children}
  </CommandPrimitives.List>
));
CommandList.displayName = CommandPrimitives.List.displayName;

type CommandEmptyProps = React.ComponentPropsWithoutRef<typeof CommandPrimitives.Empty>;

const CommandEmpty = React.forwardRef<
  React.ComponentRef<typeof CommandPrimitives.Empty>,
  CommandEmptyProps
>((props, ref) => (
  <CommandPrimitives.Empty
    ref={ref}
    className="py-6 text-center text-sm font-medium text-subtle"
    {...props}
  />
));
CommandEmpty.displayName = CommandPrimitives.Empty.displayName;

type CommandItemProps = React.ComponentPropsWithoutRef<typeof CommandPrimitives.Item>;

const CommandItem = React.forwardRef<
  React.ComponentRef<typeof CommandPrimitives.Item>,
  CommandItemProps
>(({ className, ...props }, ref) => (
  <CommandPrimitives.Item
    ref={ref}
    className={cn(
      "relative flex cursor-pointer select-none items-center gap-3 rounded-md px-2 py-1.5 text-sm font-medium outline-hidden",
      "data-[selected=true]:bg-background-100",
      "data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
      "[&_svg]:pointer-events-none [&_svg]:shrink-0",
      className,
    )}
    {...props}
  />
));
CommandItem.displayName = CommandPrimitives.Item.displayName;

export const Command = Object.assign(CommandImpl, {
  Input: CommandInput,
  List: CommandList,
  Empty: CommandEmpty,
  Item: CommandItem,
  Loading: CommandPrimitives.Loading,
});
