"use client";

import { createContextFactory } from "@/lib/context";
import { cn } from "@/lib/utils";
import * as RadioGroupPrimitives from "@radix-ui/react-radio-group";
import React, { useId } from "react";
import { tv, VariantProps } from "tailwind-variants";
import { Label } from "./label";

const DEFAULT_SIZE = "medium";

const radioGroupVariants = tv({
  slots: {
    base: "grid",
    item: cn(
      "aspect-sqaure border-border size-4 shrink-0 rounded-full border shadow-xs outline-hidden",
      "data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-white",
      "disabled:pointer-events-none disabled:opacity-50",
    ),
    indicator: "",
    label: "",
    option: "flex items-center",
  },
  variants: {
    size: {
      small: {
        base: "gap-2",
        item: "size-4",
        indicator: "6",
        label: "text-sm",
        option: "gap-2",
      },
      medium: {
        base: "gap-3",
        item: "size-5",
        indicator: "8",
        label: "text-base",
        option: "gap-3",
      },
      large: {
        base: "gap-4",
        item: "size-6",
        indicator: "10",
        label: "text-base w-full",
        option: "gap-3",
      },
    },
  },
  defaultVariants: {
    size: DEFAULT_SIZE,
  },
});

type RadioGroupProps = Omit<RadioGroupPrimitives.RadioGroupProps, "onValueChange" | "onChange"> &
  VariantProps<typeof radioGroupVariants> & {
    onChange?: (value: string) => void;
  };

export const RadioGroup = ({
  className,
  children,
  ["aria-invalid"]: ariaInvalid,
  size = DEFAULT_SIZE,
  onChange,
  ...props
}: RadioGroupProps) => {
  const variants = radioGroupVariants({ size, className });

  return (
    <RadioGroupContext value={{ ariaInvalid, size }}>
      <RadioGroupPrimitives.Root
        className={cn(variants.base())}
        onValueChange={onChange}
        {...props}
      >
        {children}
      </RadioGroupPrimitives.Root>
    </RadioGroupContext>
  );
};

type RadioGroupItemProps = React.ComponentPropsWithRef<typeof RadioGroupPrimitives.Item>;

const RadioGroupItem = ({ className, ...props }: RadioGroupItemProps) => {
  const id = useId();
  const { ariaInvalid, size } = useRadioGroupContext();

  const variants = radioGroupVariants({ size, className });

  return (
    <RadioGroupPrimitives.Item
      id={id}
      className={cn(
        variants.item(),
        ariaInvalid &&
          "border-error focus-visible:ring-ring-error data-[state=checked]:bg-error data-[state=checked]:border-error",
      )}
      {...props}
    >
      <RadioGroupPrimitives.Indicator className="flex items-center justify-center">
        <svg
          width={variants.indicator()}
          height={variants.indicator()}
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
  const { size } = useRadioGroupContext();

  const variants = radioGroupVariants({ size, className });

  return (
    <Label className={variants.label()} {...props}>
      {children}
    </Label>
  );
};

type RadioGroupOptionProps = RadioGroupItemProps;

const RadioGroupOption = ({ className, children, ...props }: RadioGroupOptionProps) => {
  const { size } = useRadioGroupContext();
  const id = useId();

  const variants = radioGroupVariants({ size, className });

  return (
    <div className={cn(variants.option())}>
      <RadioGroupItem id={id} {...props} />
      <RadioGroupLabel htmlFor={id}>{children}</RadioGroupLabel>
    </div>
  );
};

RadioGroup.Item = RadioGroupItem;
RadioGroup.Option = RadioGroupOption;

type RadioGroupContextValue = {
  ariaInvalid?: boolean | "true" | "false" | "grammar" | "spelling" | undefined;
  size: VariantProps<typeof radioGroupVariants>["size"];
};

const [RadioGroupContext, useRadioGroupContext] =
  createContextFactory<RadioGroupContextValue>("RadioGroup");
