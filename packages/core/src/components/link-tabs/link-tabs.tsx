"use client";

import { Slot } from "radix-ui";
import { VariantProps } from "tailwind-variants";
import { createContextFactory } from "../../lib/context";
import { cn } from "../../lib/utils";
import { tabsVariants } from "../tabs";

type LinkTabsProps = React.ComponentPropsWithRef<"div"> &
  VariantProps<typeof tabsVariants> & {
    fullWidth?: boolean;
  };

const LinkTabs = ({ className, children, fullWidth = false, size, ...props }: LinkTabsProps) => {
  return (
    <LinkTabsContext value={{ fullWidth, size }}>
      <div
        className={cn(
          "border-border bg-background inline-flex items-center justify-center border-b",
          fullWidth && "w-full",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </LinkTabsContext>
  );
};

type LinkTabsTriggerProps = React.ComponentPropsWithRef<typeof Slot.Root> & {
  active?: boolean;
};

const LinkTabsTrigger = ({
  className,
  children,
  active = false,
  ...props
}: LinkTabsTriggerProps) => {
  const { fullWidth, size } = useLinkTabsContext();

  return (
    <Slot.Root
      className={cn(
        tabsVariants({ size, className }),
        fullWidth && "w-full",
        !active && "hover:text-sub",
        active &&
          "after:bg-main text-main border-main after:absolute after:inset-x-0 after:bottom-0 after:h-[0.125rem]",
      )}
      aria-current={active ? "page" : undefined}
      {...props}
    >
      {children}
    </Slot.Root>
  );
};

type LinkTabsContextValue = {
  fullWidth: boolean;
  size: VariantProps<typeof tabsVariants>["size"];
};

const [LinkTabsContext, useLinkTabsContext] =
  createContextFactory<LinkTabsContextValue>("LinkTabs");

LinkTabs.Trigger = LinkTabsTrigger;

export { LinkTabs };
