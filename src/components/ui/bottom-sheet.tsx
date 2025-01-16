"use client";

import { createContextFactory } from "@/lib/context";
import { cn } from "@/lib/utils";
import * as DialogPrimitives from "@radix-ui/react-dialog";
import { CheckIcon } from "lucide-react";
import { Button, ButtonProps } from "./button";

type BottomSheetProps = React.ComponentPropsWithRef<typeof DialogPrimitives.Root>;

export const BottomSheet = ({ children, ...props }: BottomSheetProps) => {
  return <DialogPrimitives.Root {...props}>{children}</DialogPrimitives.Root>;
};

type BottomSheetOverlayProps = React.ComponentPropsWithRef<typeof DialogPrimitives.Overlay>;

const BottomSheetOverlay = ({ className, children, ...props }: BottomSheetOverlayProps) => {
  return (
    <DialogPrimitives.Overlay
      className={cn(
        "fixed inset-0 z-50 bg-black/50",
        "data-[state=open]:animate-in data-[state=open]:fade-in",
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
          "flex max-h-[calc(100%-4rem)] w-full max-w-[560px] flex-col",
          "rounded-t-[32px] bg-background p-5 outline-none",
          "data-[state=open]:animate-in data-[state=open]:slide-in-from-bottom-1/2",
          "!duration-500",
          "ease-out-expo",
          className,
        )}
        {...props}
      >
        {children}
      </DialogPrimitives.Content>
    </DialogPrimitives.Portal>
  );
};

type BottomSheetTitleProps = React.ComponentPropsWithRef<typeof DialogPrimitives.Title>;

const BottomSheetTitle = ({ className, children, ...props }: BottomSheetTitleProps) => {
  return (
    <DialogPrimitives.Title className={cn("my-3 text-[22px] font-semibold", className)} {...props}>
      {children}
    </DialogPrimitives.Title>
  );
};

type BottomSheetDescriptionProps = React.ComponentPropsWithRef<typeof DialogPrimitives.Description>;

const BottomSheetDescription = ({ className, children, ...props }: BottomSheetDescriptionProps) => {
  return (
    <DialogPrimitives.Description
      className={cn("text-lg font-medium text-sub", className)}
      {...props}
    >
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
  console.log("value", value, "onChange", onChange);

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
    <li>
      <DialogPrimitives.Close
        className={cn("flex w-full justify-between py-4 text-start text-lg font-medium", className)}
        onClick={() => onChange(value)}
        {...props}
      >
        {children}
        {isSelected && <CheckIcon className="text-primary" />}
      </DialogPrimitives.Close>
    </li>
  );
};

const BottomSheetButton = ({ className, children, ...props }: ButtonProps) => {
  return (
    <Button className={cn("h-[56px] rounded-2xl text-xl", className)} {...props}>
      {children}
    </Button>
  );
};

BottomSheet.Trigger = DialogPrimitives.Trigger;
BottomSheet.Close = DialogPrimitives.Close;
BottomSheet.Title = BottomSheetTitle;
BottomSheet.Description = BottomSheetDescription;
BottomSheet.Content = BottomSheetContent;
BottomSheet.SelectGroup = BottomSheetSelectGroup;
BottomSheet.SelectItem = BottomSheetSelectItem;
BottomSheet.Button = BottomSheetButton;
