"use client";

import { CheckIcon } from "lucide-react";
import { DropdownMenu as DropdownMenuPrimitives } from "radix-ui";
import { cn } from "../../lib/utils";
import { checkboxVariants } from "../checkbox";

type DropdownMenuProps = Omit<DropdownMenuPrimitives.DropdownMenuProps, "open"> & {
  isOpen?: boolean;
};

const DropdownMenu = ({ children, isOpen, ...props }: DropdownMenuProps) => {
  return (
    <DropdownMenuPrimitives.Root open={isOpen} {...props}>
      {children}
    </DropdownMenuPrimitives.Root>
  );
};

type DropdownMenuContentProps = React.ComponentPropsWithRef<typeof DropdownMenuPrimitives.Content>;

const DropdownMenuContent = ({
  className,
  sideOffset = 4,
  children,
  ...props
}: DropdownMenuContentProps) => {
  return (
    <DropdownMenuPrimitives.Portal>
      <DropdownMenuPrimitives.Content
        className={cn(
          "border-border bg-background text-main z-50 min-w-40 overflow-hidden rounded-md border py-1 shadow-lg",
          "animate-in fade-in-0",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className,
        )}
        sideOffset={sideOffset}
        {...props}
      >
        {children}
      </DropdownMenuPrimitives.Content>
    </DropdownMenuPrimitives.Portal>
  );
};

type DropdownMenuItemProps = React.ComponentPropsWithRef<typeof DropdownMenuPrimitives.Item>;

const DropdownMenuItem = ({ className, children, ...props }: DropdownMenuItemProps) => {
  return (
    <DropdownMenuPrimitives.Item
      className={cn(
        "text-main outline-hidden relative flex cursor-pointer select-none items-center gap-2 px-3 py-2 text-sm font-medium",
        "focus:bg-background-hover",
        "data-disabled:pointer-events-none data-disabled:opacity-50",
        "[&_svg]:shrink-0",
        className,
      )}
      {...props}
    >
      {children}
    </DropdownMenuPrimitives.Item>
  );
};

type DropdownMenuLabelProps = React.ComponentPropsWithRef<typeof DropdownMenuPrimitives.Label>;

const DropdownMenuLabel = ({ className, children, ...props }: DropdownMenuLabelProps) => {
  return (
    <DropdownMenuPrimitives.Label
      className={cn("text-subtle px-2 py-1.5 text-xs font-medium", className)}
      {...props}
    >
      {children}
    </DropdownMenuPrimitives.Label>
  );
};

type DropdownMenuSeparatorProps = React.ComponentPropsWithRef<
  typeof DropdownMenuPrimitives.Separator
>;

const DropdownMenuSeparator = ({ className, ...props }: DropdownMenuSeparatorProps) => {
  return (
    <DropdownMenuPrimitives.Separator
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props}
    />
  );
};

type DropdownMenuCheckboxItemProps = React.ComponentPropsWithRef<
  typeof DropdownMenuPrimitives.CheckboxItem
>;

const DropdownMenuCheckboxItem = ({
  className,
  children,
  ...props
}: DropdownMenuCheckboxItemProps) => {
  return (
    <DropdownMenuPrimitives.CheckboxItem
      className={cn(
        "text-main outline-hidden relative flex cursor-pointer select-none items-center gap-2 px-3 py-2 text-sm font-medium",
        "focus:bg-background-hover",
        "data-disabled:pointer-events-none data-disabled:opacity-50",
        "[&_svg]:shrink-0",
        className,
      )}
      {...props}
    >
      {children}
      <DropdownMenuPrimitives.ItemIndicator
        forceMount
        className={cn(
          "group ml-3 flex items-center justify-center",
          checkboxVariants({ size: "medium" }).root(),
        )}
      >
        <CheckIcon
          className={cn(
            "invisible group-data-[state=checked]:visible",
            checkboxVariants({ size: "medium" }).icon(),
          )}
        />
      </DropdownMenuPrimitives.ItemIndicator>
    </DropdownMenuPrimitives.CheckboxItem>
  );
};

DropdownMenu.Trigger = DropdownMenuPrimitives.Trigger;
DropdownMenu.Group = DropdownMenuPrimitives.Group;
DropdownMenu.Content = DropdownMenuContent;
DropdownMenu.Item = DropdownMenuItem;
DropdownMenu.Label = DropdownMenuLabel;
DropdownMenu.Separator = DropdownMenuSeparator;
DropdownMenu.CheckboxItem = DropdownMenuCheckboxItem;

export { DropdownMenu };
