"use client";

import { Tabs as TabsPrimitives } from "radix-ui";
import { tv, VariantProps } from "tailwind-variants";
import { createContextFactory } from "../../lib/context";
import { cn } from "../../lib/utils";

const chipTabsVariants = tv({
  base: cn(
    "inline-flex items-center justify-center rounded-full border border-transparent font-medium transition-colors whitespace-nowrap",
    "hover:bg-background-hover",
    "disabled:pointer-events-none disabled:opacity-50",
    "data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:hover:bg-primary-dark",
  ),
  variants: {
    size: {
      medium: "h-9 px-3.5 text-sm",
      large: "h-10 px-4",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

type ChipTabsProps = Omit<TabsPrimitives.TabsProps, "onChange" | "onValueChange"> & {
  onChange?: (value: string) => void;
};

const ChipTabs = ({ className, children, onChange, ...props }: ChipTabsProps) => {
  return (
    <TabsPrimitives.Root className={cn("w-full", className)} onValueChange={onChange} {...props}>
      {children}
    </TabsPrimitives.Root>
  );
};

type ChipTabsListProps = React.ComponentPropsWithRef<typeof TabsPrimitives.List> &
  VariantProps<typeof chipTabsVariants>;

const ChipTabsList = ({ className, children, size, ...props }: ChipTabsListProps) => {
  return (
    <ChipTabsListContext value={{ size }}>
      <TabsPrimitives.List
        className={cn("bg-background inline-flex items-center gap-1", className)}
        {...props}
      >
        {children}
      </TabsPrimitives.List>
    </ChipTabsListContext>
  );
};

type ChipTabsTriggerProps = React.ComponentPropsWithRef<typeof TabsPrimitives.Trigger>;

const ChipTabsTrigger = ({ className, children, ...props }: ChipTabsTriggerProps) => {
  const { size } = useChipTabsListContext();

  return (
    <TabsPrimitives.Trigger className={cn(chipTabsVariants({ size, className }))} {...props}>
      {children}
    </TabsPrimitives.Trigger>
  );
};

type ChipTabsContentProps = React.ComponentPropsWithRef<typeof TabsPrimitives.Content>;

const ChipTabsContent = ({ className, children, ...props }: ChipTabsContentProps) => {
  return (
    <TabsPrimitives.Content tabIndex={-1} className={className} {...props}>
      {children}
    </TabsPrimitives.Content>
  );
};

type ChipTabsListContextValue = {
  size: VariantProps<typeof chipTabsVariants>["size"];
};

const [ChipTabsListContext, useChipTabsListContext] =
  createContextFactory<ChipTabsListContextValue>("ChipTabsList");

ChipTabs.List = ChipTabsList;
ChipTabs.Trigger = ChipTabsTrigger;
ChipTabs.Content = ChipTabsContent;

export { ChipTabs };
