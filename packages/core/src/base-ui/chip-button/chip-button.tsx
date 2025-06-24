import { useRender } from "@base-ui-components/react/use-render";
import { tv, VariantProps } from "tailwind-variants";
import { buttonVariant } from "../../components/button";
import { cn } from "../../lib/utils";

const chipButtonVariants = tv({
  base: "inline-flex items-center justify-center rounded-full border border-transparent font-medium transition-colors",
  variants: {
    variant: buttonVariant,
    size: {
      xsmall: "h-7 gap-1 px-2.5 text-xs",
      small: "h-8 gap-1 px-3 text-[0.8125rem]",
      medium: "h-9 gap-1.5 px-3.5 text-sm",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

type ChipButtonProps = useRender.ComponentProps<"button"> & VariantProps<typeof chipButtonVariants>;

const ChipButton = ({ className, render, disabled, variant, size, ...props }: ChipButtonProps) => {
  const defaultRender = <button />;

  return useRender({
    render: render ?? defaultRender,
    props: {
      className: cn(chipButtonVariants({ variant, size, className })),
      disabled,
      type: render ? undefined : "button",
      ...props,
    },
  });
};

export { ChipButton };
