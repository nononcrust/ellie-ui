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
            "flex h-9 w-full items-center justify-between gap-2 rounded-[8px] border border-border bg-background px-3 text-start text-[14px] font-semibold text-main shadow-sm outline-none",
            "data-[placeholder]:text-placeholder",
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
            <ChevronDownIcon size={16} strokeWidth={2} className="shrink-0 text-sub" />
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
          "relative z-50 min-w-[8rem] max-w-[calc(100vw-12px)] overflow-hidden rounded-lg border border-border bg-background text-main shadow-lg",
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
      className={cn("px-2 py-1.5 text-xs font-medium text-subtle", className)}
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
        "focus:bg-background-hover focus:text-main",
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
    <SelectPrimitives.Separator className={cn("-mx-1 my-1 h-px bg-border", className)} {...props}>
      {children}
    </SelectPrimitives.Separator>
  );
};

export const Select = Object.assign(SelectImpl, {
  Group: SelectPrimitives.Group,
  Content: SelectContent,
  Label: SelectLabel,
  Item: SelectItem,
  Separator: SelectSeparator,
});
