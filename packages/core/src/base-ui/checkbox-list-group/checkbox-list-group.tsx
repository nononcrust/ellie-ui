"use client";

import { CheckboxGroup as CheckboxGroupBase } from "@base-ui-components/react";
import { Checkbox as CheckboxBase } from "@base-ui-components/react/checkbox";
import { CheckIcon } from "lucide-react";
import { createContextFactory } from "../../lib/context";
import { cn } from "../../lib/utils";

type CheckboxGroupValue = string[] | readonly string[];

type CheckboxListGroup<TValue extends CheckboxGroupValue> = Omit<
  CheckboxGroupBase.Props,
  "value" | "onValueChange" | "onChange"
> & {
  value?: TValue;
  onChange?: (value: TValue) => void;
};

const CheckboxListGroup = <TValue extends CheckboxGroupValue>({
  className,
  children,
  "aria-invalid": ariaInvalid,
  value,
  onChange,
  ...props
}: CheckboxListGroup<TValue>) => {
  return (
    <CheckboxListGroupContext value={{ ariaInvalid }}>
      <CheckboxGroupBase
        className={cn("grid gap-0.5", className)}
        value={value as string[]}
        onValueChange={onChange as (value: string[]) => void}
        {...props}
      >
        {children}
      </CheckboxGroupBase>
    </CheckboxListGroupContext>
  );
};

type CheckboxListGroupOptionProps = Omit<CheckboxBase.Root.Props, "className"> & {
  className?: string;
};

const CheckboxListGroupOption = ({
  className,
  children,
  ...props
}: CheckboxListGroupOptionProps) => {
  const { ariaInvalid } = useCheckboxListGroupContext();

  return (
    <CheckboxBase.Root
      className={cn(
        "hover:bg-background-100 flex items-center gap-4 rounded-md px-4 py-3",
        "data-checked:bg-background-100",
        "data-disabled:pointer-events-none data-disabled:opacity-50",
        ariaInvalid && "border-error focus-visible:ring-ring-error data-checked:border-error",
        className,
      )}
      {...props}
    >
      <CheckboxBase.Indicator
        className={cn(
          "bg-background text-background flex size-5 items-center justify-center rounded-[0.3125rem]",
          "border-border shadow-xs outline-hidden shrink-0 border",
          "data-checked:border-primary data-checked:bg-primary data-checked:text-white",
          ariaInvalid && "data-checked:bg-error data-checked:border-error",
        )}
        keepMounted
      >
        <CheckIcon className="stroke-3 size-[0.875rem]" />
      </CheckboxBase.Indicator>
      <span className="flex flex-col items-start">{children}</span>
    </CheckboxBase.Root>
  );
};

type CheckboxListGroupLabelProps = React.ComponentPropsWithRef<"span">;

const CheckboxListGroupLabel = ({ className, children, ...props }: CheckboxListGroupLabelProps) => {
  return (
    <span className={cn("text-[0.9375rem] font-medium", className)} {...props}>
      {children}
    </span>
  );
};

type CheckboxListGroupDescriptionProps = React.ComponentPropsWithRef<"span">;

const CheckboxListGroupDescription = ({
  className,
  children,
  ...props
}: CheckboxListGroupDescriptionProps) => {
  return (
    <span className={cn("text-sub text-start text-[0.8125rem]", className)} {...props}>
      {children}
    </span>
  );
};

type CheckboxListGroupGroupContextValue = {
  ariaInvalid?: boolean | "true" | "false" | "grammar" | "spelling" | undefined;
};

const [CheckboxListGroupContext, useCheckboxListGroupContext] =
  createContextFactory<CheckboxListGroupGroupContextValue>("CheckboxListGroup");

CheckboxListGroup.Option = CheckboxListGroupOption;
CheckboxListGroup.Label = CheckboxListGroupLabel;
CheckboxListGroup.Description = CheckboxListGroupDescription;

export { CheckboxListGroup };
