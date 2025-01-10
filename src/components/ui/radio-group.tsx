"use client";

import { createContextFactory } from "@/lib/context";
import { cn } from "@/lib/utils";
import * as RadioGroupPrimitives from "@radix-ui/react-radio-group";
import React, { useId } from "react";
import { Label } from "./label";

type RadioGroupProps = React.ComponentPropsWithRef<typeof RadioGroupPrimitives.Root>;

export const RadioGroup = ({
  className,
  children,
  ["aria-invalid"]: ariaInvalid,
  ...props
}: RadioGroupProps) => {
  return (
    <RadioGroupContext value={{ ariaInvalid }}>
      <RadioGroupPrimitives.Root className={cn("grid gap-3", className)} {...props}>
        {children}
      </RadioGroupPrimitives.Root>
    </RadioGroupContext>
  );
};

type RadioGroupItemProps = React.ComponentPropsWithRef<typeof RadioGroupPrimitives.Item>;

const RadioGroupItem = ({ className, ...props }: RadioGroupItemProps) => {
  const id = useId();
  const { ariaInvalid } = useRadioGroupContext();

  return (
    <RadioGroupPrimitives.Item
      id={id}
      className={cn(
        "aspect-sqaure size-4 min-w-4 rounded-full border border-border shadow-sm outline-none",
        "data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-white",
        "disabled:pointer-events-none disabled:opacity-50",
        ariaInvalid && "focus-visible:ring-ring-error border-error",
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

type RadioGroupOptionProps = RadioGroupItemProps;

const RadioGroupOption = ({ className, children, ...props }: RadioGroupOptionProps) => {
  const id = useId();

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <RadioGroupItem id={id} {...props} />
      <RadioGroupLabel htmlFor={id}>{children}</RadioGroupLabel>
    </div>
  );
};

RadioGroup.Item = RadioGroupItem;
RadioGroup.Option = RadioGroupOption;

type RadioGroupContextValue = {
  ariaInvalid?: boolean | "true" | "false" | "grammar" | "spelling" | undefined;
};

const [RadioGroupContext, useRadioGroupContext] =
  createContextFactory<RadioGroupContextValue>("RadioGroup");
