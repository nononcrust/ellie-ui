import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { tv, VariantProps } from "tailwind-variants";
import { buttonVariant } from "./button";

const chipButtonVariants = tv({
  base: "inline-flex items-center justify-center rounded-full border border-transparent font-medium transition-colors",
  variants: {
    variant: buttonVariant,
    size: {
      xsmall: "h-7 gap-1 px-2.5 text-[12px]",
      small: "h-8 gap-1 px-3 text-[13px]",
      medium: "h-9 gap-1.5 px-3.5 text-sm",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

type ChipButtonProps = React.ComponentPropsWithRef<"button"> &
  VariantProps<typeof chipButtonVariants> & {
    asChild?: boolean;
  };

export const ChipButton = ({
  className,
  asChild = false,
  disabled,
  variant,
  size,
  children,
  ...props
}: ChipButtonProps) => {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      type={asChild ? undefined : "button"}
      className={cn(chipButtonVariants({ variant, size, className }))}
      disabled={disabled}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </Component>
  );
};
