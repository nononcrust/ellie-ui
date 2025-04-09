import { cn } from "@/lib/utils";
import React from "react";
import { tv, VariantProps } from "tailwind-variants";

const skeletonVariant = tv({
  base: "bg-background-100 animate-pulse",
  variants: {
    shape: {
      rounded: "rounded-[8px]",
      circle: "rounded-full",
      text: "rounded-[2px]",
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

export const Skeleton = ({ shape, className, width, height, style, ...props }: SkeletonProps) => {
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
