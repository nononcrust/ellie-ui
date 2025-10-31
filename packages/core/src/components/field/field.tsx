"use client";

import { useId, useState } from "react";
import { createContextFactory } from "../../lib/context";
import { cn } from "../../lib/utils";

type FieldProps = React.ComponentPropsWithRef<"div"> & {
  invalid?: boolean;
};

const Field = ({ className, children, invalid = false, ...props }: FieldProps) => {
  const id = useId();
  const labelId = useId();
  const descriptionId = useId();
  const errorMessageId = useId();

  const [descriptionElement, setDescriptionElement] = useState<HTMLParagraphElement | null>(null);
  const [errorMessageElement, setErrorMessageElement] = useState<HTMLParagraphElement | null>(null);

  return (
    <FieldContext
      value={{
        invalid,
        id,
        labelId,
        descriptionId,
        errorMessageId,
        descriptionElement,
        errorMessageElement,
        setDescriptionElement,
        setErrorMessageElement,
      }}
    >
      <div className={cn("flex flex-col", className)} {...props}>
        {children}
      </div>
    </FieldContext>
  );
};

type FieldsetProps = React.ComponentPropsWithRef<"fieldset">;

const Fieldset = ({ className, children, ...props }: FieldsetProps) => {
  return (
    <fieldset className={cn("flex flex-col", className)} {...props}>
      {children}
    </fieldset>
  );
};

type FieldLegendProps = React.ComponentPropsWithRef<"legend">;

const FieldLegend = ({ className, children, ...props }: FieldLegendProps) => {
  return (
    <legend className={cn("mb-4 font-medium", className)} {...props}>
      {children}
    </legend>
  );
};

type FieldLabelProps = React.ComponentPropsWithRef<"label">;

const FieldLabel = ({ className, children, ...props }: FieldLabelProps) => {
  return (
    <label className={cn("mb-2 font-medium", className)} {...props}>
      {children}
    </label>
  );
};

type FieldDescriptionProps = React.ComponentPropsWithoutRef<"p">;

const FieldDescription = ({ className, children, ...props }: FieldDescriptionProps) => {
  const { descriptionId, setDescriptionElement } = useFieldContext();

  const refCallback = (node: HTMLParagraphElement | null) => {
    if (node) {
      setDescriptionElement(node);
    }

    return () => {
      setDescriptionElement(null);
    };
  };

  return (
    <p
      ref={refCallback}
      id={descriptionId}
      className={cn("text-subtle mt-1 text-[0.8125rem] font-medium", className)}
      {...props}
    >
      {children}
    </p>
  );
};

type FieldContextValue = {
  invalid: boolean;
  id: string;
  labelId: string;
  errorMessageId: string;
  descriptionId: string;
  descriptionElement: HTMLParagraphElement | null;
  errorMessageElement: HTMLParagraphElement | null;
  setDescriptionElement: (element: HTMLParagraphElement | null) => void;
  setErrorMessageElement: (element: HTMLParagraphElement | null) => void;
};

const [FieldContext, useFieldContext] = createContextFactory<FieldContextValue>("Field");

Field.Fieldset = Fieldset;
Field.Legend = FieldLegend;
Field.Label = FieldLabel;
Field.Description = FieldDescription;

export { Field };
