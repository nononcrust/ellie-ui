"use client";

import { CheckIcon, XIcon } from "lucide-react";
import { Dialog as DialogPrimitives } from "radix-ui";
import { createContextFactory } from "../../lib/context";
import { cn } from "../../lib/utils";
import { IconButton } from "../icon-button";

type BottomSheetProps = Omit<DialogPrimitives.DialogProps, "open"> & {
  isOpen?: boolean;
};

const BottomSheet = ({ children, isOpen, ...props }: BottomSheetProps) => {
  return (
    <DialogPrimitives.Root open={isOpen} {...props}>
      {children}
    </DialogPrimitives.Root>
  );
};

type BottomSheetOverlayProps = React.ComponentPropsWithRef<typeof DialogPrimitives.Overlay>;

const BottomSheetOverlay = ({ className, children, ...props }: BottomSheetOverlayProps) => {
  return (
    <DialogPrimitives.Overlay
      className={cn(
        "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm",
        "data-[state=open]:animate-in data-[state=open]:fade-in",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out",
        className,
      )}
      {...props}
    >
      {children}
    </DialogPrimitives.Overlay>
  );
};

type DialogContentProps = React.ComponentPropsWithRef<typeof DialogPrimitives.Content>;

const BottomSheetContent = ({ className, children, ...props }: DialogContentProps) => {
  return (
    <DialogPrimitives.Portal>
      <BottomSheetOverlay />
      <DialogPrimitives.Content
        className={cn(
          "fixed bottom-0 left-0 right-0 z-50 mx-auto",
          "flex max-h-[calc(100%-4rem)] w-full max-w-[35rem] flex-col",
          "bg-background outline-hidden rounded-t-[2rem]",
          "data-[state=open]:animate-in data-[state=open]:slide-in-from-bottom",
          "data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom",
          "duration-500",
          "ease-out-quint",
          className,
        )}
        {...props}
      >
        {children}
        <DialogPrimitives.Close className="absolute right-4 top-[1.5rem]" asChild>
          <IconButton variant="ghost" aria-label="닫기">
            <XIcon className="size-5" />
          </IconButton>
        </DialogPrimitives.Close>
      </DialogPrimitives.Content>
    </DialogPrimitives.Portal>
  );
};

type BottomSheetHeaderProps = React.ComponentPropsWithRef<"div">;

const BottomSheetHeader = ({ className, children, ...props }: BottomSheetHeaderProps) => {
  return (
    <div className="relative flex flex-col">
      <div className={cn("flex flex-col gap-1.5 p-5 pb-1", className)} {...props}>
        {children}
      </div>
      <div className="to-background bg-linear-to-t absolute -bottom-5 left-0 right-0 h-5 from-transparent" />
    </div>
  );
};

type BottomSheetBodyProps = React.ComponentPropsWithRef<"div">;

const BottomSheetBody = ({ className, children, ...props }: BottomSheetBodyProps) => {
  return (
    <div className={cn("flex flex-col gap-1.5 overflow-y-auto p-5", className)} {...props}>
      {children}
    </div>
  );
};

type BottomSheetFooterProps = React.ComponentPropsWithRef<"div">;

const BottomSheetFooter = ({ className, children, ...props }: BottomSheetFooterProps) => {
  return (
    <div className="relative flex flex-col">
      <div className="from-background bg-linear-to-t absolute -top-5 left-0 right-0 h-5 to-transparent" />
      <div className={cn("flex p-5 pt-1", className)} {...props}>
        {children}
      </div>
    </div>
  );
};

type BottomSheetTitleProps = React.ComponentPropsWithRef<typeof DialogPrimitives.Title>;

const BottomSheetTitle = ({ className, children, ...props }: BottomSheetTitleProps) => {
  return (
    <DialogPrimitives.Title
      className={cn("mt-2 text-[1.25rem] font-semibold", className)}
      {...props}
    >
      {children}
    </DialogPrimitives.Title>
  );
};

type BottomSheetDescriptionProps = React.ComponentPropsWithRef<typeof DialogPrimitives.Description>;

const BottomSheetDescription = ({ className, children, ...props }: BottomSheetDescriptionProps) => {
  return (
    <DialogPrimitives.Description className={cn("text-sub font-medium", className)} {...props}>
      {children}
    </DialogPrimitives.Description>
  );
};

type BottomSheetSelectContextValue = {
  value: string;
  onChange: (value: string) => void;
};

const [BottomSheetSelectContext, useBottomSheetSelectContext] =
  createContextFactory<BottomSheetSelectContextValue>("BottomSheetSelect");

type BottomSheetSelectGroupProps = Omit<React.ComponentPropsWithRef<"ul">, "value" | "onChange"> & {
  value: string;
  onChange: (value: string) => void;
};

const BottomSheetSelectGroup = ({
  className,
  children,
  value,
  onChange,
  ...props
}: BottomSheetSelectGroupProps) => {
  return (
    <BottomSheetSelectContext value={{ value, onChange }}>
      <ul className={cn("flex flex-col", className)} {...props}>
        {children}
      </ul>
    </BottomSheetSelectContext>
  );
};

type BottomSheetSelectItemProps = React.ComponentPropsWithRef<typeof DialogPrimitives.Close> & {
  value: string;
};

const BottomSheetSelectItem = ({
  className,
  children,
  value,
  ...props
}: BottomSheetSelectItemProps) => {
  const { value: selectedValue, onChange } = useBottomSheetSelectContext();

  const isSelected = selectedValue === value;

  return (
    <li className="flex">
      <DialogPrimitives.Close
        className={cn(
          "-mx-5 flex flex-1 items-center justify-between py-3 text-start text-lg font-medium",
          "hover:bg-background-100 px-5",
          isSelected && "text-primary",
          className,
        )}
        onClick={() => onChange(value)}
        {...props}
      >
        {children}
        {isSelected && (
          <span className="bg-primary flex size-6 items-center justify-center rounded-full text-white">
            <CheckIcon className="size-4" />
          </span>
        )}
      </DialogPrimitives.Close>
    </li>
  );
};

type BottomSheetTriggerProps = React.ComponentPropsWithRef<typeof DialogPrimitives.Trigger>;

const BottomSheetTrigger = ({ children, ...props }: BottomSheetTriggerProps) => {
  return (
    <DialogPrimitives.Trigger aria-controls={undefined} {...props}>
      {children}
    </DialogPrimitives.Trigger>
  );
};

BottomSheet.Trigger = BottomSheetTrigger;
BottomSheet.Close = DialogPrimitives.Close;
BottomSheet.Title = BottomSheetTitle;
BottomSheet.Description = BottomSheetDescription;
BottomSheet.Content = BottomSheetContent;
BottomSheet.SelectGroup = BottomSheetSelectGroup;
BottomSheet.SelectItem = BottomSheetSelectItem;
BottomSheet.Header = BottomSheetHeader;
BottomSheet.Body = BottomSheetBody;
BottomSheet.Footer = BottomSheetFooter;

export { BottomSheet };
