import { createContextFactory } from "@/lib/context";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { useId, useRef } from "react";
import { Label } from "./label";

type FormProps = React.ComponentPropsWithRef<"form">;

export const Form = ({ children, ...props }: FormProps) => {
  return <form {...props}>{children}</form>;
};

type FormLabelProps = React.ComponentPropsWithRef<"label">;

const FormLabel = ({ className, children, ...props }: FormLabelProps) => {
  const { id } = useFormItemContext();

  return (
    <Label
      htmlFor={id}
      className={cn("text-main mb-2 w-fit text-sm font-medium", className)}
      {...props}
    >
      {children}
    </Label>
  );
};

type FormDescriptionProps = React.ComponentPropsWithRef<"p">;

const FormDescription = ({ className, children, ...props }: FormDescriptionProps) => {
  const { descriptionId, descriptionRef } = useFormItemContext();

  return (
    <p
      ref={descriptionRef}
      id={descriptionId}
      className={cn("text-subtle mt-1 text-[13px] font-medium", className)}
      {...props}
    >
      {children}
    </p>
  );
};

const FormControl = ({ children }: { children: React.ReactNode }) => {
  const { error, id, descriptionId, errorMessageId, descriptionRef, errorMessageRef } =
    useFormItemContext();

  return (
    <Slot
      id={id}
      aria-describedby={
        cn(descriptionRef.current && descriptionId, errorMessageRef.current && errorMessageId) ||
        undefined
      }
      aria-invalid={error}
    >
      {children}
    </Slot>
  );
};

type FormErrorMessageProps = React.ComponentPropsWithRef<"p">;

const FormErrorMessage = ({ className, children, ...props }: FormErrorMessageProps) => {
  const { errorMessageId, errorMessageRef } = useFormItemContext();

  return (
    <p
      ref={errorMessageRef}
      id={errorMessageId}
      className={cn("text-error mt-1 text-[13px] font-medium", className)}
      {...props}
    >
      {children}
    </p>
  );
};

type FormItemProps = React.ComponentPropsWithRef<"div"> & {
  error?: boolean;
};

const FormItem = ({ className, children, error = false, ...props }: FormItemProps) => {
  const id = useId();
  const descriptionId = useId();
  const errorMessageId = useId();
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const errorMessageRef = useRef<HTMLParagraphElement>(null);

  return (
    <FormItemContext
      value={{ error, descriptionId, errorMessageId, id, descriptionRef, errorMessageRef }}
    >
      <div className={cn("flex flex-col", className)} {...props}>
        {children}
      </div>
    </FormItemContext>
  );
};

type FormItemContextValue = {
  id: string;
  errorMessageId: string;
  descriptionId: string;
  error: boolean;
  descriptionRef: React.RefObject<HTMLParagraphElement | null>;
  errorMessageRef: React.RefObject<HTMLParagraphElement | null>;
};

const [FormItemContext, useFormItemContext] =
  createContextFactory<FormItemContextValue>("FormItem");

Form.Item = FormItem;
Form.Control = FormControl;
Form.Label = FormLabel;
Form.Description = FormDescription;
Form.ErrorMessage = FormErrorMessage;
