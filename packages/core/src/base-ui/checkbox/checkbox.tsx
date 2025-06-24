"use client";

import { Checkbox as CheckboxBase } from "@base-ui-components/react/checkbox";
import { CheckIcon, MinusIcon } from "lucide-react";
import React, { useId } from "react";
import { tv, VariantProps } from "tailwind-variants";
import { createContextFactory } from "../../lib/context";
import { cn } from "../../lib/utils";

const DEFAULT_SIZE = "medium";

type CheckboxProps = Omit<
  React.ComponentPropsWithRef<typeof CheckboxBase.Root>,
  "onChange" | "onCheckedChange"
> &
  VariantProps<typeof checkboxVariants> & {
    onChange?: (checked: boolean) => void;
  };

export const checkboxVariants = tv({
  slots: {
    root: cn(
      "border-border shadow-xs outline-hidden peer size-4 shrink-0 border",
      "data-checked:border-primary data-checked:bg-primary data-checked:text-white",
      "data-indeterminate:border-primary data-indeterminate:bg-primary data-indeterminate:text-white",
      "disabled:pointer-events-none disabled:opacity-50",
    ),
    icon: "stroke-3",
    label: "flex items-center w-fit font-medium",
  },
  variants: {
    size: {
      small: {
        root: "size-4 rounded-[0.25rem]",
        icon: "size-[0.75rem]",
        label: "ml-2 text-sm",
      },
      medium: {
        root: "size-5 rounded-[0.3125rem]",
        icon: "size-[0.875rem]",
        label: "ml-2.5 text-[0.9375rem]",
      },
      large: {
        root: "size-6 rounded-[0.375rem]",
        icon: "size-[1.125rem]",
        label: "ml-3 text-base",
      },
    },
  },
  defaultVariants: {
    size: DEFAULT_SIZE,
  },
});

const Checkbox = ({
  className,
  checked,
  ["aria-invalid"]: ariaInvalid,
  size,
  id: idProp,
  children,
  onChange,
  ...props
}: CheckboxProps) => {
  const generatedId = useId();

  const checkboxId = idProp ?? generatedId;

  const variants = checkboxVariants({ size });

  return (
    <CheckboxContext value={{ size, checkboxId }}>
      <div className={cn("flex items-center", className)}>
        <CheckboxBase.Root
          id={checkboxId}
          className={cn(
            variants.root(),
            ariaInvalid &&
              "border-error focus-visible:ring-ring-error data-checked:border-error data-checked:bg-error",
          )}
          checked={checked}
          aria-invalid={ariaInvalid}
          onCheckedChange={onChange}
          {...props}
        >
          <CheckboxBase.Indicator className="flex items-center justify-center">
            {props.indeterminate ? (
              <MinusIcon className={variants.icon()} />
            ) : (
              <CheckIcon className={variants.icon()} />
            )}
          </CheckboxBase.Indicator>
        </CheckboxBase.Root>
        {children}
      </div>
    </CheckboxContext>
  );
};

type CheckboxLabelProps = React.ComponentPropsWithRef<"label">;

const CheckboxLabel = ({ className, children, ...props }: CheckboxLabelProps) => {
  const { size, checkboxId } = useCheckboxContext();

  return (
    <label
      htmlFor={checkboxId}
      className={cn(checkboxVariants({ size }).label(), className)}
      {...props}
    >
      {children}
    </label>
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

Checkbox.Label = CheckboxLabel;
Checkbox.Group = CheckboxGroup;

export { Checkbox };

type CheckboxContextValue = {
  checkboxId: string;
  size: VariantProps<typeof checkboxVariants>["size"];
};

const [CheckboxContext, useCheckboxContext] =
  createContextFactory<CheckboxContextValue>("Checkbox");
