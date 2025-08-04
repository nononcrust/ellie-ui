"use client";

import { Radio as RadioBase } from "@base-ui-components/react/radio";
import { RadioGroup as RadioGroupBase } from "@base-ui-components/react/radio-group";
import { useId } from "react";
import { createContextFactory } from "../../lib/context";
import { cn } from "../../lib/utils";

type RadioListGroupProps<TValue extends string> = Omit<
  RadioGroupBase.Props,
  "value" | "onValueChange" | "onChange"
> & {
  value?: TValue;
  onChange?: (value: TValue) => void;
};

const RadioListGroup = <TValue extends string>({
  className,
  children,
  "aria-invalid": ariaInvalid,
  onChange,
  ...props
}: RadioListGroupProps<TValue>) => {
  return (
    <RadioGroupContext value={{ ariaInvalid }}>
      <RadioGroupBase
        className={cn("grid gap-0.5", className)}
        onValueChange={onChange as (value: unknown) => void}
        {...props}
      >
        {children}
      </RadioGroupBase>
    </RadioGroupContext>
  );
};

type RadioListGroupOptionProps = Omit<RadioBase.Root.Props, "className"> & {
  label: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
};

const RadioListGroupOption = ({
  className,
  label,
  description,
  ...props
}: RadioListGroupOptionProps) => {
  const id = useId();
  const { ariaInvalid } = useRadioGroupContext();

  return (
    <RadioBase.Root
      id={id}
      className={cn(
        "hover:bg-background-100 flex items-center gap-4 rounded-md px-4 py-3",
        "data-checked:bg-background-100",
        "data-disabled:pointer-events-none data-disabled:opacity-50",
        ariaInvalid && "border-error focus-visible:ring-ring-error data-checked:border-error",
        className,
      )}
      {...props}
    >
      <span>
        <RadioBase.Indicator
          className={cn(
            "flex size-5 items-center justify-center rounded-full",
            "border-border bg-background text-background border",
            "data-checked:bg-primary",
            ariaInvalid && "data-checked:bg-error",
          )}
          keepMounted
        >
          <svg
            className="size-[0.5rem]"
            viewBox="0 0 6 6"
            fill="currentcolor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="3" cy="3" r="3" />
          </svg>
        </RadioBase.Indicator>
      </span>
      <div className="flex flex-col items-start">
        {label}
        {description}
      </div>
    </RadioBase.Root>
  );
};

RadioListGroup.Item = RadioListGroupOption;

type RadioListGroupLabelProps = React.ComponentPropsWithRef<"span">;

const RadioListGroupLabel = ({ className, children, ...props }: RadioListGroupLabelProps) => {
  return (
    <span className={cn("text-[0.9375rem] font-medium", className)} {...props}>
      {children}
    </span>
  );
};

type RadioListGroupDescriptionProps = React.ComponentPropsWithRef<"span">;

const RadioListGroupDescription = ({
  className,
  children,
  ...props
}: RadioListGroupDescriptionProps) => {
  return (
    <span className={cn("text-sub text-start text-[0.8125rem]", className)} {...props}>
      {children}
    </span>
  );
};

RadioListGroup.Option = RadioListGroupOption;
RadioListGroup.Label = RadioListGroupLabel;
RadioListGroup.Description = RadioListGroupDescription;

type RadioGroupContextValue = {
  ariaInvalid?: boolean | "true" | "false" | "grammar" | "spelling" | undefined;
};

const [RadioGroupContext, useRadioGroupContext] =
  createContextFactory<RadioGroupContextValue>("RadioGroup");

export { RadioListGroup };
