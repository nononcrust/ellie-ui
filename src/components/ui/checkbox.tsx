"use client";

import { cn } from "@/lib/utils";
import * as CheckboxPrimitives from "@radix-ui/react-checkbox";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

type CheckboxProps = React.ComponentPropsWithRef<typeof CheckboxPrimitives.Root> &
  VariantProps<typeof checkboxVariants>;

const checkboxVariants = cva("", {
  variants: {
    size: {
      small: "size-4",
      medium: "size-5",
      large: "size-6",
    },
  },
  defaultVariants: {
    size: "small",
  },
});

export const Checkbox = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitives.Root>,
  CheckboxProps
>(({ className, checked, ["aria-invalid"]: ariaInvalid, size, ...props }, ref) => {
  return (
    <CheckboxPrimitives.Root
      ref={ref}
      className={cn(
        "peer size-4 shrink-0 rounded border border-border shadow-sm outline-none",
        "data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-white",
        "data-[state=indeterminate]:border-primary data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-white",
        "disabled:pointer-events-none disabled:opacity-50",
        checkboxVariants({ size }),
        ariaInvalid &&
          "focus-visible:ring-ring-error border-error data-[state=checked]:border-error data-[state=checked]:bg-error",
        className,
      )}
      checked={checked}
      aria-invalid={ariaInvalid}
      {...props}
    >
      <CheckboxPrimitives.Indicator className="flex items-center justify-center">
        {checked === "indeterminate" ? (
          <svg
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="currentcolor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.75 4.5C0.75 4.08579 1.08579 3.75 1.5 3.75H7.5C7.91421 3.75 8.25 4.08579 8.25 4.5C8.25 4.91421 7.91421 5.25 7.5 5.25H1.5C1.08579 5.25 0.75 4.91421 0.75 4.5Z"
            />
          </svg>
        ) : (
          <svg
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="currentcolor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.53547 0.62293C8.88226 0.849446 8.97976 1.3142 8.75325 1.66099L4.5083 8.1599C4.38833 8.34356 4.19397 8.4655 3.9764 8.49358C3.75883 8.52167 3.53987 8.45309 3.3772 8.30591L0.616113 5.80777C0.308959 5.52987 0.285246 5.05559 0.563148 4.74844C0.84105 4.44128 1.31533 4.41757 1.62249 4.69547L3.73256 6.60459L7.49741 0.840706C7.72393 0.493916 8.18868 0.396414 8.53547 0.62293Z"
            />
          </svg>
        )}
      </CheckboxPrimitives.Indicator>
    </CheckboxPrimitives.Root>
  );
});
Checkbox.displayName = CheckboxPrimitives.Root.displayName;
