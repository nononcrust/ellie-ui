"use client";

import { cn } from "@/lib/utils";
import { CheckIcon, MinusIcon } from "lucide-react";
import { Checkbox as CheckboxPrimitives } from "radix-ui";
import React from "react";
import { tv, VariantProps } from "tailwind-variants";

const DEFAULT_SIZE = "medium";

type CheckboxProps = Omit<
  React.ComponentPropsWithRef<typeof CheckboxPrimitives.Root>,
  "onChange" | "onCheckedChange"
> &
  VariantProps<typeof checkboxVariants> & {
    onChange?: (checked: boolean) => void;
  };

const checkboxVariants = tv({
  variants: {
    size: {
      small: "size-4 rounded-[0.25rem]",
      medium: "size-5 rounded-[0.3125rem]",
      large: "size-6 rounded-[0.375rem]",
    },
  },
  defaultVariants: {
    size: DEFAULT_SIZE,
  },
});

const iconSize: Record<NonNullable<CheckboxProps["size"]>, number> = {
  small: 0.75,
  medium: 0.875,
  large: 1.125,
};

const Checkbox = ({
  className,
  checked,
  ["aria-invalid"]: ariaInvalid,
  size,
  onChange,
  ...props
}: CheckboxProps) => {
  const sizeWithDefault = size ?? DEFAULT_SIZE;

  return (
    <CheckboxPrimitives.Root
      className={cn(
        "border-border shadow-xs outline-hidden peer size-4 shrink-0 border",
        "data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-white",
        "data-[state=indeterminate]:border-primary data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-white",
        "disabled:pointer-events-none disabled:opacity-50",
        checkboxVariants({ size }),
        ariaInvalid &&
          "border-error focus-visible:ring-ring-error data-[state=checked]:border-error data-[state=checked]:bg-error",
        className,
      )}
      checked={checked}
      aria-invalid={ariaInvalid}
      onCheckedChange={onChange}
      {...props}
    >
      <CheckboxPrimitives.Indicator className="flex items-center justify-center">
        {checked === "indeterminate" ? (
          <MinusIcon
            style={{
              width: `${iconSize[sizeWithDefault]}rem`,
              height: `${iconSize[sizeWithDefault]}rem`,
            }}
            strokeWidth={3}
          />
        ) : (
          <CheckIcon
            style={{
              width: `${iconSize[sizeWithDefault]}rem`,
              height: `${iconSize[sizeWithDefault]}rem`,
            }}
            strokeWidth={3}
          />
        )}
      </CheckboxPrimitives.Indicator>
    </CheckboxPrimitives.Root>
  );
};

type CheckboxGroupProps = React.ComponentPropsWithRef<"div">;

const CheckboxGroup = ({ children, ...props }: CheckboxGroupProps) => {
  return (
    <div role="group" {...props}>
      {children}
    </div>
  );
};

Checkbox.Group = CheckboxGroup;

export { Checkbox };
