import { cn } from "@/lib/utils";
import React from "react";
import { tv, VariantProps } from "tailwind-variants";

const skeletonVariant = tv({
  base: "bg-background-100 animate-pulse",
  variants: {
    shape: {
      rounded: "rounded-[0.5rem]",
      circle: "rounded-full",
      text: "rounded-[0.125rem]",
    },
  },
  defaultVariants: {
    shape: "rounded",
  },
});

type SkeletonProps = React.ComponentPropsWithRef<"div"> &
  VariantProps<typeof skeletonVariant> & {
    width: number;
    height: number;
  };

const Skeleton = ({ shape, className, width, height, style, ...props }: SkeletonProps) => {
  return (
    <div
      className={cn(skeletonVariant({ shape }), className)}
      style={{
        width,
        height,
        ...style,
      }}
      {...props}
    />
  );
};

export { Skeleton };
