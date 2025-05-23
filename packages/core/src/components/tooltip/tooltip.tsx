"use client";

import { Tooltip as TooltipPrimitives } from "radix-ui";
import { tv, VariantProps } from "tailwind-variants";
import { cn } from "../../lib/utils";

type TooltipProps = VariantProps<typeof tooltipVariants> & {
  className?: string;
  side?: TooltipPrimitives.TooltipContentProps["side"];
  content: React.ReactNode;
  children: React.ReactNode;
  delayDuration?: number;
};

const tooltipVariants = tv({
  base: cn(
    "relative z-50 rounded-[0.5rem] text-xs px-[0.625rem] py-[0.375rem] font-semibold",
    "animate-in fade-in-0 zoom-in-95",
    "data-[side=top]:slide-in-from-bottom-2",
    "data-[side=bottom]:slide-in-from-top-2",
    "data-[side=left]:slide-in-from-right-2",
    "data-[side=right]:slide-in-from-left-2",
  ),
  variants: {
    variant: {
      default: "bg-neutral text-background",
      outlined: "border border-border bg-background shadow-xs text-main",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const Tooltip = ({
  className,
  variant,
  content,
  side = "top",
  delayDuration = 0,
  children,
}: TooltipProps) => {
  return (
    <TooltipPrimitives.Provider delayDuration={delayDuration}>
      <TooltipPrimitives.Root>
        <TooltipPrimitives.Trigger asChild>{children}</TooltipPrimitives.Trigger>
        <TooltipPrimitives.Portal>
          <TooltipPrimitives.Content
            side={side}
            sideOffset={4}
            className={cn(tooltipVariants({ variant, className }))}
          >
            {content}
          </TooltipPrimitives.Content>
        </TooltipPrimitives.Portal>
      </TooltipPrimitives.Root>
    </TooltipPrimitives.Provider>
  );
};

export { Tooltip };
