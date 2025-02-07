"use client";

import { cn } from "@/lib/utils";
import * as DialogPrimitives from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import React from "react";
import { IconButton } from "./icon-button";

type DialogProps = React.ComponentPropsWithRef<typeof DialogPrimitives.Root>;

export const Dialog = ({ children, ...props }: DialogProps) => {
  return <DialogPrimitives.Root {...props}>{children}</DialogPrimitives.Root>;
};

type DialogOverlayProps = React.ComponentPropsWithRef<typeof DialogPrimitives.Overlay>;

const DialogOverlay = ({ className, children, ...props }: DialogOverlayProps) => {
  return (
    <DialogPrimitives.Overlay
      className={cn("fixed inset-0 z-50 bg-black/70", "animate-in fade-in", className)}
      {...props}
    >
      {children}
    </DialogPrimitives.Overlay>
  );
};

type DialogAnimation = "pop" | "slide";

type DialogContentProps = React.ComponentPropsWithRef<typeof DialogPrimitives.Content> & {
  animation?: DialogAnimation;
};

const animationStyle: Record<DialogAnimation, string> = {
  pop: "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 duration-200",
  slide:
    "ease-out-expo data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-bottom-[600px] duration-500!",
};

const DialogContent = ({
  className,
  children,
  animation = "pop",
  ...props
}: DialogContentProps) => {
  return (
    <DialogPrimitives.Portal>
      <DialogOverlay />
      <DialogPrimitives.Content
        className={cn(
          "bg-background fixed top-1/2 left-1/2 z-50 grid max-h-[calc(100%-4rem)] w-full max-w-[calc(100%-4rem)] -translate-x-1/2 -translate-y-1/2 rounded-[12px] p-5",
          animationStyle[animation],
          className,
        )}
        {...props}
      >
        {children}
        <DialogPrimitives.Close asChild className="absolute top-4 right-4">
          <IconButton variant="ghost" aria-label="닫기" size="xsmall">
            <XIcon size={16} />
          </IconButton>
        </DialogPrimitives.Close>
      </DialogPrimitives.Content>
    </DialogPrimitives.Portal>
  );
};

type DialogHeaderProps = React.ComponentPropsWithRef<"div">;

const DialogHeader = ({ className, children, ...props }: DialogHeaderProps) => {
  return (
    <div className={cn("flex flex-col gap-1.5", className)} {...props}>
      {children}
    </div>
  );
};

type DialogFooterProps = React.ComponentPropsWithRef<"div">;

const DialogFooter = ({ className, children, ...props }: DialogFooterProps) => {
  return (
    <div className={cn("flex justify-end gap-2", className)} {...props}>
      {children}
    </div>
  );
};

type DialogTitleProps = React.ComponentPropsWithRef<typeof DialogPrimitives.Title>;

const DialogTitle = ({ className, children, ...props }: DialogTitleProps) => {
  return (
    <DialogPrimitives.Title
      className={cn("text-lg font-semibold tracking-tight", className)}
      {...props}
    >
      {children}
    </DialogPrimitives.Title>
  );
};

type DialogDescriptionProps = React.ComponentPropsWithRef<typeof DialogPrimitives.Description>;

const DialogDescription = ({ className, children, ...props }: DialogDescriptionProps) => {
  return (
    <DialogPrimitives.Description className={cn("text-sub text-sm", className)} {...props}>
      {children}
    </DialogPrimitives.Description>
  );
};

Dialog.Trigger = DialogPrimitives.Trigger;
Dialog.Close = DialogPrimitives.Close;
Dialog.Content = DialogContent;
Dialog.Header = DialogHeader;
Dialog.Footer = DialogFooter;
Dialog.Title = DialogTitle;
Dialog.Description = DialogDescription;
