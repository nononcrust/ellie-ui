import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const skeletonVariant = cva("bg-background-100 animate-pulse", {
  variants: {
    variant: {
      rounded: "rounded-[8px]",
      circle: "rounded-full",
      text: "rounded-[2px]",
    },
  },
  defaultVariants: {
    variant: "rounded",
  },
});

type SkeletonProps = React.ComponentPropsWithRef<"div"> & VariantProps<typeof skeletonVariant>;

export const Skeleton = ({ variant, className, ...props }: SkeletonProps) => {
  return <div className={cn(skeletonVariant({ variant }), className)} {...props} />;
};
