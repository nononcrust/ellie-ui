import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";

const chipButtonVariants = cva(
  "inline-flex h-9 items-center justify-center gap-1.5 rounded-full border border-transparent px-3.5 text-sm font-medium",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white",
        primaryLow: "border-primary bg-primary-lighter text-primary",
        secondary: "bg-secondary",
      },
      size: {
        small: "",
        medium: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  },
);

type ChipButtonProps = React.ComponentPropsWithRef<"button"> &
  VariantProps<typeof chipButtonVariants> & {
    asChild?: boolean;
  };

export const ChipButton = ({
  className,
  asChild = false,
  variant,
  size,
  children,
  ...props
}: ChipButtonProps) => {
  const Component = asChild ? Slot : "button";

  return (
    <Component className={cn(chipButtonVariants({ variant, size, className }))} {...props}>
      {children}
    </Component>
  );
};
