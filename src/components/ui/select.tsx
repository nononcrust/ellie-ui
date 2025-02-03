"use client";

import { cn } from "@/lib/utils";
import * as SelectPrimitives from "@radix-ui/react-select";
import { ChevronDownIcon } from "lucide-react";
import React from "react";

type SelectProps = Omit<
  React.ComponentPropsWithoutRef<typeof SelectPrimitives.Trigger>,
  "onChange"
> & {
  value?: string;
  onChange?: (value: string) => void;
  defaultValue?: string;
  placeholder?: string;
};

const SelectImpl = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitives.Trigger>,
  SelectProps
>(
  (
    {
      value,
      onChange,
      className,
      children,
      placeholder,
      defaultValue,
      ["aria-invalid"]: ariaInvalid,
      ...props
    },
    ref,
  ) => {
    return (
      <SelectPrimitives.Root value={value} onValueChange={onChange} defaultValue={defaultValue}>
        <SelectPrimitives.Trigger
          ref={ref}
          className={cn(
            "border-border bg-background text-main flex h-9 w-full items-center justify-between gap-2 rounded-[8px] border px-3 text-start text-[14px] font-medium shadow-xs outline-hidden",
            "data-placeholder:text-placeholder",
            "[&>span]:min-w-0",
            "placeholder-placeholder",
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
  },
);
SelectImpl.displayName = SelectPrimitives.Root.displayName;

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
          "border-border bg-background text-main relative z-50 max-w-[calc(100vw-12px)] min-w-[8rem] overflow-hidden rounded-lg border shadow-lg",
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
      className={cn("text-subtle px-2 py-1.5 text-xs font-medium", className)}
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
        "relative flex w-full cursor-pointer items-center rounded-md px-2 py-1.5 text-sm font-medium outline-hidden select-none",
        "focus:bg-background-hover focus:text-main",
        "data-[state=checked]:text-primary data-[state=checked]:font-semibold",
        "data-disabled:pointer-events-none data-disabled:opacity-50",
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

export const Select = Object.assign(SelectImpl, {
  Group: SelectPrimitives.Group,
  Content: SelectContent,
  Label: SelectLabel,
  Option: SelectOption,
  Separator: SelectSeparator,
});
