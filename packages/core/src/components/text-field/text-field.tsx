"use client";

import React, { useId, useState } from "react";
import { buildContext } from "../../lib/context";
import { cn } from "../../lib/utils";
import { Label } from "../label";

type TextFieldProps = Omit<React.ComponentPropsWithRef<"div">, "value"> & {
  value?: string;
  onValueChange?: (value: string) => void;
  defaultValue?: string;
  label?: React.ReactNode;
  description?: React.ReactNode;
  invalid?: boolean;
  errorMessage?: React.ReactNode;
};

const TextField = ({
  value: externalValue,
  onValueChange: externalOnValueChange,
  defaultValue,
  className,
  children,
  label,
  description,
  invalid = false,
  errorMessage,
  ...props
}: TextFieldProps) => {
  const [internalValue, setInternalValue] = useState(defaultValue ?? "");

  const value = externalValue ?? internalValue;
  const onValueChange = externalOnValueChange ?? setInternalValue;

  const textFieldId = useId();
  const descriptionId = useId();
  const errorMessageId = useId();

  const [descriptionElement, setDescriptionElement] = useState<HTMLParagraphElement | null>(null);
  const [errorMessageElement, setErrorMessageElement] = useState<HTMLParagraphElement | null>(null);

  const contextValue = {
    value,
    onValueChange,
    defaultValue,
    invalid,
    textFieldId,
    descriptionId,
    errorMessageId,
    descriptionElement,
    errorMessageElement,
    setDescriptionElement,
    setErrorMessageElement,
  };

  return (
    <TextFieldContext value={contextValue}>
      <div className={cn("flex w-full flex-col", className)} {...props}>
        {label}
        <div
          className={cn(
            "border-border bg-background shadow-xs flex min-h-10 gap-3 rounded-md border px-3",
            "focus-within:focus-input-ring",
            "has-data-[invalid=true]:focus-within:focus-input-ring-error has-data-[invalid=true]:border-error",
            "has-data-[disabled=true]:bg-background-100 has-data-[disabled=true]:pointer-events-none has-data-[disabled=true]:opacity-50",
            "has-data-[readonly=true]:bg-background-100",
          )}
        >
          {children}
        </div>
        {(description || (invalid && errorMessage)) && (
          <div className="mt-1 flex flex-col">
            {description && description}
            {invalid && errorMessage}
          </div>
        )}
      </div>
    </TextFieldContext>
  );
};

type TextFieldInputProps = React.ComponentPropsWithRef<"input">;

const TextFieldInput = ({ className, ...props }: TextFieldInputProps) => {
  const { register } = useRegisterTextField();

  return (
    <input
      className={cn("outline-hidden text-main placeholder-placeholder w-full text-sm", className)}
      data-disabled={props.disabled}
      data-readonly={props.readOnly}
      {...register}
      {...props}
    />
  );
};

type TextFieldTextareaProps = React.ComponentPropsWithRef<"textarea">;

const TextFieldTextarea = ({ className, ...props }: TextFieldTextareaProps) => {
  const { register } = useRegisterTextField();

  return (
    <textarea
      className={cn(
        "outline-hidden text-main placeholder-placeholder w-full py-2.5 text-sm",
        "min-h-[7.5rem]",
        "field-sizing-content",
        className,
      )}
      data-disabled={props.disabled}
      data-readonly={props.readOnly}
      {...register}
      {...props}
    />
  );
};

type TextFieldPrefixProps = React.ComponentPropsWithRef<"div">;

const TextFieldPrefix = ({ className, children, ...props }: TextFieldPrefixProps) => {
  return (
    <div
      className={cn(
        "border-border text-placeholder flex items-center justify-center border-r pr-3 text-sm",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

type TextFieldSuffixProps = React.ComponentPropsWithRef<"div">;

const TextFieldSuffix = ({ className, children, ...props }: TextFieldSuffixProps) => {
  return (
    <div
      className={cn(
        "border-border text-placeholder flex items-center justify-center border-l pl-3 text-sm",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

type TextFieldInlineAffixProps = React.ComponentPropsWithRef<"div">;

const TextFieldInlineAffix = ({ className, children, ...props }: TextFieldInlineAffixProps) => {
  return (
    <div className={cn("flex items-center justify-center", className)} {...props}>
      {children}
    </div>
  );
};

type TextFieldLabelProps = React.ComponentPropsWithRef<typeof Label> & {
  asterisk?: boolean;
};

const TextFieldLabel = ({
  className,
  children,
  asterisk = false,
  ...props
}: TextFieldLabelProps) => {
  const { textFieldId } = useTextFieldContext();

  return (
    <Label htmlFor={textFieldId} className={cn("mb-2 flex items-center", className)} {...props}>
      {children}
      {asterisk && <span className="text-error ml-1">*</span>}
    </Label>
  );
};

type TextFieldDescriptionProps = React.ComponentPropsWithRef<"p">;

const TextFieldDescription = ({ className, children, ...props }: TextFieldDescriptionProps) => {
  const { descriptionId, setDescriptionElement } = useTextFieldContext();

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
      id={descriptionId}
      ref={refCallback}
      className={cn("text-subtle flex-1 text-[0.8125rem] font-medium", className)}
      {...props}
    >
      {children}
    </p>
  );
};

type TextFieldErrorMessageProps = React.ComponentPropsWithRef<"p">;

const TextFieldErrorMessage = ({ className, children, ...props }: TextFieldErrorMessageProps) => {
  const { errorMessageId, setErrorMessageElement } = useTextFieldContext();

  const refCallback = (node: HTMLParagraphElement | null) => {
    if (node) {
      setErrorMessageElement(node);
    }

    return () => {
      setErrorMessageElement(null);
    };
  };

  return (
    <p
      id={errorMessageId}
      ref={refCallback}
      className={cn("text-error mt-1 flex-1 text-[0.8125rem] font-medium", className)}
      {...props}
    >
      {children}
    </p>
  );
};

type TextFieldContextValue = {
  value: string;
  onValueChange: (value: string) => void;
  defaultValue?: string;
  invalid: boolean;
  textFieldId: string;
  errorMessageId: string;
  descriptionId: string;
  descriptionElement: HTMLParagraphElement | null;
  errorMessageElement: HTMLParagraphElement | null;
  setDescriptionElement: (element: HTMLParagraphElement | null) => void;
  setErrorMessageElement: (element: HTMLParagraphElement | null) => void;
};

const [TextFieldContext, useTextFieldContext] = buildContext<TextFieldContextValue>("");

const useRegisterTextField = () => {
  const {
    textFieldId,
    value,
    onValueChange,
    invalid,
    descriptionElement,
    errorMessageElement,
    errorMessageId,
    descriptionId,
  } = useTextFieldContext();

  const onFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onValueChange(event.target.value);
  };

  const register = {
    id: textFieldId,
    value,
    onChange: onFieldChange,
    "aria-invalid": invalid,
    "data-invalid": invalid,
    "aria-describedby": cn(
      descriptionElement && descriptionId,
      errorMessageElement && errorMessageId,
    ),
  };

  return { register };
};

TextField.Input = TextFieldInput;
TextField.Textarea = TextFieldTextarea;
TextField.InlineAffix = TextFieldInlineAffix;
TextField.Prefix = TextFieldPrefix;
TextField.Suffix = TextFieldSuffix;
TextField.Label = TextFieldLabel;
TextField.Description = TextFieldDescription;
TextField.ErrorMessage = TextFieldErrorMessage;

export { TextField };
