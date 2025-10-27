"use client";

import { Slot } from "radix-ui";
import { useId, useState } from "react";
import { Label } from "../../components/label";
import { createContextFactory } from "../../lib/context";
import { cn } from "../../lib/utils";

type FormProps = React.ComponentPropsWithRef<"form">;

const Form = ({ children, ...props }: FormProps) => {
  return <form {...props}>{children}</form>;
};

type FormFieldProps = React.ComponentPropsWithRef<"div"> & {
  invalid?: boolean;
};

const FormField = ({ className, children, invalid = false, ...props }: FormFieldProps) => {
  const id = useId();
  const labelId = useId();
  const descriptionId = useId();
  const errorMessageId = useId();

  const [descriptionElement, setDescriptionElement] = useState<HTMLParagraphElement | null>(null);
  const [errorMessageElement, setErrorMessageElement] = useState<HTMLParagraphElement | null>(null);

  return (
    <FormFieldContext
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
    </FormFieldContext>
  );
};

type FormLabelProps = React.ComponentPropsWithRef<"label">;

const FormLabel = ({ className, children, ...props }: FormLabelProps) => {
  const { labelId, id } = useFormFieldContext();

  return (
    <Label
      id={labelId}
      htmlFor={id}
      className={cn("text-main mb-2 w-fit text-sm font-medium", className)}
      {...props}
    >
      {children}
    </Label>
  );
};

type FormDescriptionProps = React.ComponentPropsWithoutRef<"p">;

const FormDescription = ({ className, children, ...props }: FormDescriptionProps) => {
  const { descriptionId, setDescriptionElement } = useFormFieldContext();

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

const FormControl = ({ children }: { children: React.ReactNode }) => {
  const {
    invalid,
    id,
    labelId,
    descriptionId,
    errorMessageId,
    descriptionElement,
    errorMessageElement,
  } = useFormFieldContext();

  return (
    <Slot.Root
      id={id}
      aria-labelledby={labelId}
      aria-describedby={
        cn(descriptionElement && descriptionId, errorMessageElement && errorMessageId) || undefined
      }
      aria-invalid={invalid || undefined}
    >
      {children}
    </Slot.Root>
  );
};

type FormErrorMessageProps = React.ComponentPropsWithoutRef<"p">;

const FormErrorMessage = ({ className, children, ...props }: FormErrorMessageProps) => {
  const { errorMessageId, setErrorMessageElement, invalid } = useFormFieldContext();

  const refCallback = (node: HTMLParagraphElement | null) => {
    if (node) {
      setErrorMessageElement(node);
    }

    return () => {
      setErrorMessageElement(null);
    };
  };

  if (!invalid) return null;

  return (
    <p
      ref={refCallback}
      id={errorMessageId}
      className={cn("text-error mt-1 text-[0.8125rem] font-medium", className)}
      {...props}
    >
      {children}
    </p>
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

type LegendProps = React.ComponentPropsWithRef<"legend">;

const Legend = ({ className, children, ...props }: LegendProps) => {
  return (
    <legend className={cn("text-main mb-2 w-fit text-sm font-medium", className)} {...props}>
      {children}
    </legend>
  );
};

type FormFieldContextValue = {
  id: string;
  labelId: string;
  errorMessageId: string;
  descriptionId: string;
  invalid: boolean;
  descriptionElement: HTMLParagraphElement | null;
  errorMessageElement: HTMLParagraphElement | null;
  setDescriptionElement: (element: HTMLParagraphElement | null) => void;
  setErrorMessageElement: (element: HTMLParagraphElement | null) => void;
};

const [FormFieldContext, useFormFieldContext] =
  createContextFactory<FormFieldContextValue>("FormField");

Form.Field = FormField;
Form.Control = FormControl;
Form.Label = FormLabel;
Form.Description = FormDescription;
Form.ErrorMessage = FormErrorMessage;
Form.Fieldset = Fieldset;
Form.Legend = Legend;

export { Form };
