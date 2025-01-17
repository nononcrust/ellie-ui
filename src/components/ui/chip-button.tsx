import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

const DEFAULT_VARIANT = "primaryLow";

type ChipButtonVariant = "primary" | "primaryLow";

type ChipButtonProps = React.ComponentPropsWithRef<"button"> & {
  asChild?: boolean;
  active?: boolean;
  variant?: ChipButtonVariant;
};

export const ChipButton = ({
  className,
  asChild = false,
  active = false,
  variant = DEFAULT_VARIANT,
  children,
  ...props
}: ChipButtonProps) => {
  const Component = asChild ? Slot : "button";

  const variantStyle = {
    primary: "bg-primary text-white",
    primaryLow: "border-primary bg-primary-lighter text-primary",
  };

  return (
    <Component
      className={cn(
        "inline-flex h-9 items-center justify-center gap-1.5 rounded-full border border-transparent bg-background-100 px-3.5 text-sm font-medium",
        active && variantStyle[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
