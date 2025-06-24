"use client";

import { Menu as DropdownMenuBase } from "@base-ui-components/react/menu";
import { CheckIcon } from "lucide-react";
import { tv, VariantProps } from "tailwind-variants";
import { cn } from "../../lib/utils";
import { checkboxVariants } from "../checkbox";

type DropdownMenuProps = React.ComponentProps<typeof DropdownMenuBase.Root>;

const DropdownMenu = ({ children, ...props }: DropdownMenuProps) => {
  return <DropdownMenuBase.Root {...props}>{children}</DropdownMenuBase.Root>;
};

type DropdownMenuContentProps = React.ComponentPropsWithRef<typeof DropdownMenuBase.Popup>;

const DropdownMenuContent = ({ className, children, ...props }: DropdownMenuContentProps) => {
  return (
    <DropdownMenuBase.Portal>
      <DropdownMenuBase.Backdrop />
      <DropdownMenuBase.Positioner className="outline-hidden" sideOffset={4}>
        <DropdownMenuBase.Popup
          className={cn(
            "border-border bg-background text-main z-50 min-w-40 rounded-md border py-1 shadow-lg",
            "animate-in fade-in-0",
            "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            className,
          )}
          {...props}
        >
          {children}
        </DropdownMenuBase.Popup>
      </DropdownMenuBase.Positioner>
    </DropdownMenuBase.Portal>
  );
};

const dropdownMenuItemVariants = tv({
  base: cn(
    "outline-hidden relative flex cursor-pointer select-none items-center gap-2 px-3 py-2 text-sm font-medium",
    "focus:bg-background-hover",
    "data-disabled:pointer-events-none data-disabled:opacity-50",
    "[&_svg]:shrink-0",
  ),
  variants: {
    variant: {
      default: "text-main",
      danger: "text-error",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type DropdownMenuItemProps = React.ComponentPropsWithRef<typeof DropdownMenuBase.Item> &
  VariantProps<typeof dropdownMenuItemVariants>;

const DropdownMenuItem = ({ className, children, variant, ...props }: DropdownMenuItemProps) => {
  return (
    <DropdownMenuBase.Item
      className={cn(dropdownMenuItemVariants({ variant }), className)}
      {...props}
    >
      {children}
    </DropdownMenuBase.Item>
  );
};

type DropdownMenuGroupLabelProps = React.ComponentPropsWithRef<typeof DropdownMenuBase.GroupLabel>;

const DropdownMenuGroupLabel = ({ className, children, ...props }: DropdownMenuGroupLabelProps) => {
  return (
    <DropdownMenuBase.GroupLabel
      className={cn("text-subtle px-3 py-1.5 text-xs font-medium", className)}
      {...props}
    >
      {children}
    </DropdownMenuBase.GroupLabel>
  );
};

type DropdownMenuSeparatorProps = React.ComponentPropsWithRef<typeof DropdownMenuBase.Separator>;

const DropdownMenuSeparator = ({ className, ...props }: DropdownMenuSeparatorProps) => {
  return (
    <DropdownMenuBase.Separator className={cn("bg-border -mx-1 my-1 h-px", className)} {...props} />
  );
};

type DropdownMenuCheckboxItemProps = React.ComponentPropsWithRef<
  typeof DropdownMenuBase.CheckboxItem
>;

const DropdownMenuCheckboxItem = ({
  className,
  children,
  ...props
}: DropdownMenuCheckboxItemProps) => {
  return (
    <DropdownMenuBase.CheckboxItem
      className={cn(dropdownMenuItemVariants({ variant: "default" }), className)}
      {...props}
    >
      {children}
      <DropdownMenuBase.CheckboxItemIndicator
        keepMounted
        className={cn(
          "group ml-3 flex items-center justify-center",
          checkboxVariants({ size: "medium" }).root(),
        )}
      >
        <CheckIcon
          className={cn("group-data-unchecked:hidden", checkboxVariants({ size: "medium" }).icon())}
        />
      </DropdownMenuBase.CheckboxItemIndicator>
    </DropdownMenuBase.CheckboxItem>
  );
};

DropdownMenu.Trigger = DropdownMenuBase.Trigger;
DropdownMenu.Group = DropdownMenuBase.Group;
DropdownMenu.Content = DropdownMenuContent;
DropdownMenu.Item = DropdownMenuItem;
DropdownMenu.GroupLabel = DropdownMenuGroupLabel;
DropdownMenu.Separator = DropdownMenuSeparator;
DropdownMenu.CheckboxItem = DropdownMenuCheckboxItem;

export { DropdownMenu };
