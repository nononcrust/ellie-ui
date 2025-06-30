"use client";

import { Dialog as DialogBase } from "@base-ui-components/react/dialog";
import { CheckIcon, XIcon } from "lucide-react";
import { createContextFactory } from "../../lib/context";
import { cn } from "../../lib/utils";
import { IconButton } from "../icon-button";

type BottomSheetProps = DialogBase.Root.Props;

const BottomSheet = ({ children, ...props }: BottomSheetProps) => {
  return <DialogBase.Root {...props}>{children}</DialogBase.Root>;
};

type BottomSheetBackdropProps = DialogBase.Backdrop.Props;

const BottomSheetBackdrop = ({ className, children, ...props }: BottomSheetBackdropProps) => {
  return (
    <DialogBase.Backdrop
      className={cn(
        "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm",
        "data-starting-style:opacity-0 data-ending-style:opacity-0",
        "duration-200",
        className,
      )}
      {...props}
    >
      {children}
    </DialogBase.Backdrop>
  );
};

type BottomSheetContentProps = DialogBase.Popup.Props;

const BottomSheetContent = ({ className, children, ...props }: BottomSheetContentProps) => {
  return (
    <DialogBase.Portal>
      <BottomSheetBackdrop />
      <DialogBase.Popup
        className={cn(
          "fixed bottom-0 left-0 right-0 z-50 mx-auto",
          "flex max-h-[calc(100%-4rem)] w-full max-w-[35rem] flex-col",
          "bg-background outline-hidden rounded-t-[2rem]",
          "data-starting-style:translate-y-full",
          "data-ending-style:translate-y-full",
          "ease-out-quint duration-500",
          className,
        )}
        {...props}
      >
        {children}
        <DialogBase.Close
          render={
            <IconButton className="absolute right-4 top-[1.5rem]" variant="ghost" aria-label="닫기">
              <XIcon className="size-5" />
            </IconButton>
          }
        />
      </DialogBase.Popup>
    </DialogBase.Portal>
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

type BottomSheetTitleProps = DialogBase.Title.Props;

const BottomSheetTitle = ({ className, children, ...props }: BottomSheetTitleProps) => {
  return (
    <DialogBase.Title className={cn("mt-2 text-[1.25rem] font-semibold", className)} {...props}>
      {children}
    </DialogBase.Title>
  );
};

type BottomSheetDescriptionProps = DialogBase.Description.Props;

const BottomSheetDescription = ({ className, children, ...props }: BottomSheetDescriptionProps) => {
  return (
    <DialogBase.Description className={cn("text-sub font-medium", className)} {...props}>
      {children}
    </DialogBase.Description>
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

type BottomSheetSelectItemProps = DialogBase.Close.Props & {
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
      <DialogBase.Close
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
      </DialogBase.Close>
    </li>
  );
};

type BottomSheetTriggerProps = DialogBase.Trigger.Props;

const BottomSheetTrigger = ({ children, ...props }: BottomSheetTriggerProps) => {
  return <DialogBase.Trigger {...props}>{children}</DialogBase.Trigger>;
};

BottomSheet.Trigger = BottomSheetTrigger;
BottomSheet.Close = DialogBase.Close;
BottomSheet.Title = BottomSheetTitle;
BottomSheet.Description = BottomSheetDescription;
BottomSheet.Content = BottomSheetContent;
BottomSheet.SelectGroup = BottomSheetSelectGroup;
BottomSheet.SelectItem = BottomSheetSelectItem;
BottomSheet.Header = BottomSheetHeader;
BottomSheet.Body = BottomSheetBody;
BottomSheet.Footer = BottomSheetFooter;

export { BottomSheet };
