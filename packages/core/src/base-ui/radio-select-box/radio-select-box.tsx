"use client";

import { Radio as RadioBase } from "@base-ui-components/react/radio";
import { RadioGroup as RadioGroupBase } from "@base-ui-components/react/radio-group";
import { useId } from "react";
import { createContextFactory } from "../../lib/context";
import { cn } from "../../lib/utils";

type RadioSelectBoxProps<TValue extends string> = Omit<
  RadioGroupBase.Props,
  "value" | "onValueChange"
> & {
  value?: TValue;
  onValueChange?: (value: TValue) => void;
  invalid?: boolean;
};

const RadioSelectBox = <TValue extends string>({
  className,
  children,
  invalid,
  onValueChange,
  ...props
}: RadioSelectBoxProps<TValue>) => {
  return (
    <RadioSelectBoxContext value={{ invalid }}>
      <RadioGroupBase
        className={cn("grid gap-2", className)}
        onValueChange={onValueChange as (value: unknown) => void}
        aria-invalid={invalid}
        {...props}
      >
        {children}
      </RadioGroupBase>
    </RadioSelectBoxContext>
  );
};

type RadioSelectBoxOptionProps = Omit<RadioBase.Root.Props, "className"> & {
  className?: string;
};

const RadioSelectBoxOption = ({ className, children, ...props }: RadioSelectBoxOptionProps) => {
  const id = useId();
  const { invalid } = useRadioSelectBoxContext();

  return (
    <RadioBase.Root
      id={id}
      className={cn(
        "border-border flex items-center gap-4 rounded-md border px-4 py-3",
        "data-checked:border-primary data-checked:bg-primary-lighter",
        "data-disabled:pointer-events-none data-disabled:opacity-50",
        !invalid && "dark:data-checked:bg-primary-darker",
        invalid &&
          "border-error focus-visible:ring-ring-error data-checked:border-error data-checked:bg-error-lighter",
        className,
      )}
      {...props}
    >
      <span className="flex flex-1 flex-col items-start">{children}</span>
      <RadioBase.Indicator
        className={cn(
          "flex size-5 items-center justify-center rounded-full",
          "border-border bg-background text-background border",
          "data-checked:bg-primary data-checked:text-white",
          invalid && "data-checked:bg-error",
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
    </RadioBase.Root>
  );
};

type RadioSelectBoxLabelProps = React.ComponentPropsWithRef<"span">;

const RadioSelectBoxLabel = ({ className, children, ...props }: RadioSelectBoxLabelProps) => {
  return (
    <span className={cn("text-[0.9375rem] font-medium", className)} {...props}>
      {children}
    </span>
  );
};

type RadioSelectBoxDescriptionProps = React.ComponentPropsWithRef<"span">;

const RadioSelectBoxDescription = ({
  className,
  children,
  ...props
}: RadioSelectBoxDescriptionProps) => {
  return (
    <span className={cn("text-sub text-start text-[0.8125rem]", className)} {...props}>
      {children}
    </span>
  );
};

type RadioSelectBoxContextValue = {
  invalid?: boolean;
};

const [RadioSelectBoxContext, useRadioSelectBoxContext] =
  createContextFactory<RadioSelectBoxContextValue>("RadioSelectBox");

RadioSelectBox.Option = RadioSelectBoxOption;
RadioSelectBox.Label = RadioSelectBoxLabel;
RadioSelectBox.Description = RadioSelectBoxDescription;

export { RadioSelectBox };
