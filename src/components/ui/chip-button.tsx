import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

type ChipButtonProps = React.ComponentPropsWithRef<"button"> & {
  asChild?: boolean;
  active?: boolean;
};

export const ChipButton = ({
  className,
  asChild = false,
  active = false,
  children,
  ...props
}: ChipButtonProps) => {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className={cn(
        "inline-flex h-9 items-center justify-center gap-1.5 rounded-full border border-transparent bg-background-100 px-3.5 text-sm font-medium",
        active && "border-primary bg-primary-lighter text-primary",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
