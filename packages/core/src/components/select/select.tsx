"use client";

import { CheckIcon, ChevronDownIcon } from "lucide-react";
import { Select as SelectPrimitives } from "radix-ui";
import React from "react";
import { cn } from "../../lib/utils";

export const selectStyle = {
  base: cn(
    "border-border bg-background relative text-main flex h-10 w-full items-center justify-between rounded-md border pl-3 pr-9 text-start text-sm font-medium shadow-xs outline-hidden",
    "data-placeholder:text-placeholder",
    "[&>span]:min-w-0",
    "placeholder-placeholder",
    "focus-visible:focus-input-ring",
    "disabled:pointer-events-none disabled:opacity-50 disabled:bg-background-100",
  ),
  invalid: "focus-visible:focus-input-ring-error border-error",
};

type SelectChevronDownIconProps = {
  className?: string;
};

export const SelectChevronDownIcon = ({ className }: SelectChevronDownIconProps) => {
  return (
    <ChevronDownIcon
      strokeWidth={2}
      className={cn(
        "text-sub size-4.5 pointer-events-none absolute right-3 top-1/2 shrink-0 -translate-y-1/2",
        className,
      )}
    />
  );
};

type SelectProps = React.ComponentPropsWithRef<typeof SelectPrimitives.Trigger> & {
  value?: string;
  onValueChange?: (value: string) => void;
  defaultValue?: string;
  placeholder?: string;
};

const Select = ({
  value,
  onValueChange,
  className,
  children,
  placeholder,
  defaultValue,
  "aria-invalid": ariaInvalid,
  ...props
}: SelectProps) => {
  return (
    <SelectPrimitives.Root value={value} onValueChange={onValueChange} defaultValue={defaultValue}>
      <SelectPrimitives.Trigger
        className={cn(selectStyle.base, ariaInvalid && selectStyle.invalid, className)}
        aria-invalid={ariaInvalid}
        {...props}
      >
        <span className="truncate">
          <SelectPrimitives.Value placeholder={placeholder} />
        </span>
        <SelectPrimitives.Icon asChild>
          <SelectChevronDownIcon />
        </SelectPrimitives.Icon>
      </SelectPrimitives.Trigger>
      <SelectContent>{children}</SelectContent>
    </SelectPrimitives.Root>
  );
};

type SelectContentProps = React.ComponentPropsWithRef<typeof SelectPrimitives.Content>;

const SelectContent = ({
  className,
  children,
  position = "popper",
  ...props
}: SelectContentProps) => {
  return (
    <SelectPrimitives.Portal>
      <SelectPrimitives.Content
        className={cn(
          "border-border bg-background text-main relative z-50 min-w-[8rem] max-w-[calc(100vw-12px)] overflow-hidden rounded-md border shadow-lg",
          "[&_[role=group]]:py-1",
          "max-h-[var(--radix-select-content-available-height)]",
          position === "popper" &&
            cn(
              "w-full min-w-[var(--radix-select-trigger-width)] data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
              "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
              "animate-in fade-in-0",
            ),
          className,
        )}
        position={position}
        {...props}
      >
        <SelectPrimitives.Viewport
          className={cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)]")}
        >
          {children}
        </SelectPrimitives.Viewport>
      </SelectPrimitives.Content>
    </SelectPrimitives.Portal>
  );
};

type SelectLabelProps = React.ComponentPropsWithRef<typeof SelectPrimitives.Label>;

const SelectLabel = ({ className, children, ...props }: SelectLabelProps) => {
  return (
    <SelectPrimitives.Label
      className={cn("text-subtle px-3 py-1.5 text-xs font-medium", className)}
      {...props}
    >
      {children}
    </SelectPrimitives.Label>
  );
};

type SelectOptionProps = React.ComponentPropsWithRef<typeof SelectPrimitives.Item>;

const SelectOption = ({ className, children, ...props }: SelectOptionProps) => {
  return (
    <SelectPrimitives.Item
      className={cn(
        "outline-hidden relative flex w-full cursor-pointer select-none items-center rounded-[0.375rem] py-2 pl-3 pr-8 text-sm font-medium",
        "focus:bg-background-hover focus:text-main",
        "data-[state=checked]:text-primary data-[state=checked]:font-semibold",
        "data-disabled:pointer-events-none data-disabled:opacity-50",

        className,
      )}
      {...props}
    >
      <SelectPrimitives.ItemText>{children}</SelectPrimitives.ItemText>
      <SelectPrimitives.ItemIndicator className="bg-primary size-4.5 absolute right-3 flex items-center justify-center rounded-full text-white">
        <CheckIcon className="stroke-3 size-3" />
      </SelectPrimitives.ItemIndicator>
    </SelectPrimitives.Item>
  );
};

type SelectSeparatorProps = React.ComponentPropsWithRef<typeof SelectPrimitives.Separator>;

const SelectSeparator = ({ className, children, ...props }: SelectSeparatorProps) => {
  return (
    <SelectPrimitives.Separator className={cn("bg-border -mx-1 my-1 h-px", className)} {...props}>
      {children}
    </SelectPrimitives.Separator>
  );
};

Select.Group = SelectPrimitives.Group;
Select.Label = SelectLabel;
Select.Option = SelectOption;
Select.Separator = SelectSeparator;

export { Select };
