"use client";

import { cn } from "@/lib/utils";
import * as RadioGroupPrimitives from "@radix-ui/react-radio-group";
import React from "react";
import { Label } from "./label";

type RadioGroupProps = React.ComponentPropsWithRef<typeof RadioGroupPrimitives.Root>;

export const RadioGroup = ({ className, children, ...props }: RadioGroupProps) => {
  return (
    <RadioGroupPrimitives.Root className={cn("grid gap-3", className)} {...props}>
      {children}
    </RadioGroupPrimitives.Root>
  );
};

type RadioGroupItemProps = React.ComponentPropsWithRef<typeof RadioGroupPrimitives.Item>;

const RadioGroupItem = ({ className, ...props }: RadioGroupItemProps) => {
  return (
    <RadioGroupPrimitives.Item
      className={cn(
        "aspect-sqaure border-border size-4 rounded-full border shadow-sm outline-none",
        "data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-white",
        "disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitives.Indicator className="flex items-center justify-center">
        <svg
          width="6"
          height="6"
          viewBox="0 0 6 6"
          fill="currentcolor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="3" cy="3" r="3" />
        </svg>
      </RadioGroupPrimitives.Indicator>
    </RadioGroupPrimitives.Item>
  );
};

type RadioGroupContainerProps = React.ComponentPropsWithRef<"div">;

const RadioGroupContainer = ({ className, children, ...props }: RadioGroupContainerProps) => {
  return (
    <div className={cn("flex items-center gap-2", className)} {...props}>
      {children}
    </div>
  );
};

const RadioGroupLabel = ({
  className,
  children,
  ...props
}: React.ComponentPropsWithRef<"label">) => {
  return (
    <Label className={className} {...props}>
      {children}
    </Label>
  );
};

RadioGroup.Item = RadioGroupItem;
RadioGroup.Container = RadioGroupContainer;
RadioGroup.Label = RadioGroupLabel;
