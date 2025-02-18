import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { buttonVariant } from "./button";

export type IconButtonProps = React.ComponentPropsWithRef<"button"> &
  VariantProps<typeof iconButtonVariants> & {
    ["aria-label"]: string;
    asChild?: boolean;
  };

const iconButtonVariants = cva(
  cn(
    "inline-flex justify-center items-center rounded-[8px] border border-transparent whitespace-nowrap transition-colors",
    "disabled:opacity-50 disabled:pointer-events-none",
  ),
  {
    variants: {
      variant: buttonVariant,
      size: {
        xsmall: "size-7 text-xs",
        small: "size-8 text-sm",
        medium: "size-9 text-base",
        large: "size-10 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  },
);

export const IconButton = ({
  className,
  children,
  variant,
  size,
  asChild = false,
  disabled = false,
  "aria-label": ariaLabel,
  ...props
}: IconButtonProps) => {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className={cn(iconButtonVariants({ size, variant, className }))}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </Component>
  );
};
