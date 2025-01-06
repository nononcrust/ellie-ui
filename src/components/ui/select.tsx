"use client";

import { cn } from "@/lib/utils";
import * as SelectPrimitives from "@radix-ui/react-select";
import { ChevronDownIcon } from "lucide-react";
import React from "react";

type SelectProps = Omit<
  React.ComponentPropsWithRef<typeof SelectPrimitives.Trigger>,
  "onChange"
> & {
  value?: string;
  onChange?: (value: string) => void;
  defaultValue?: string;
  placeholder?: string;
};

export const Select = ({
  value,
  onChange,
  className,
  children,
  placeholder,
  defaultValue,
  ["aria-invalid"]: ariaInvalid,
  ...props
}: SelectProps) => {
  return (
    <SelectPrimitives.Root value={value} onValueChange={onChange} defaultValue={defaultValue}>
      <SelectPrimitives.Trigger
        className={cn(
          "border-border text-main flex h-9 w-full items-center justify-between gap-2 rounded-[8px] border bg-background px-3 text-start text-[14px] font-semibold shadow-sm outline-none",
          "data-[placeholder]:text-placeholder",
          "[&>span]:min-w-0",
          "hover:bg-background-hover",
          "disable-focus-ring focus-visible:focus-input-ring",
          "disabled:pointer-events-none disabled:opacity-50",
          ariaInvalid && "focus-visible:focus-input-ring-error border-error",
          className,
        )}
        aria-invalid={ariaInvalid}
        {...props}
      >
        <span className="truncate">
          <SelectPrimitives.Value placeholder={placeholder} />
        </span>
        <SelectPrimitives.Icon asChild>
          <ChevronDownIcon size={16} strokeWidth={2} className="text-sub shrink-0" />
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
          "border-border text-main relative z-50 min-w-[8rem] max-w-[calc(100vw-12px)] overflow-hidden rounded-lg border bg-background shadow-lg",
          "[&_[role=group]]:py-1",
          "max-h-[var(--radix-select-content-available-height)]",
          position === "popper" &&
            cn(
              "w-full min-w-[var(--radix-select-trigger-width)] data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
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
      className={cn("text-subtle px-2 py-1.5 text-xs font-medium", className)}
      {...props}
    >
      {children}
    </SelectPrimitives.Label>
  );
};

type SelectItemProps = React.ComponentPropsWithRef<typeof SelectPrimitives.Item>;

const SelectItem = ({ className, children, ...props }: SelectItemProps) => {
  return (
    <SelectPrimitives.Item
      className={cn(
        "relative flex w-full cursor-pointer select-none items-center rounded-md px-2 py-1.5 text-sm font-medium outline-none",
        "focus:text-main focus:bg-background-hover",
        "data-[state=checked]:font-bold data-[state=checked]:text-primary",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className,
      )}
      {...props}
    >
      <SelectPrimitives.ItemText>{children}</SelectPrimitives.ItemText>
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
Select.Content = SelectContent;
Select.Label = SelectLabel;
Select.Item = SelectItem;
Select.Separator = SelectSeparator;
