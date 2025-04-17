"use client";

import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "lucide-react";
import { Accordion as AccordionPrimitives } from "radix-ui";

type AccordionProps = React.ComponentPropsWithRef<typeof AccordionPrimitives.Root>;

export const Accordion = ({ children, ...props }: AccordionProps) => {
  return <AccordionPrimitives.Root {...props}>{children}</AccordionPrimitives.Root>;
};

type AccordionItemProps = React.ComponentPropsWithRef<typeof AccordionPrimitives.Item>;

const AccordionItem = ({ className, children, ...props }: AccordionItemProps) => {
  return (
    <AccordionPrimitives.Item className={cn("border-border border-b", className)} {...props}>
      {children}
    </AccordionPrimitives.Item>
  );
};

type AccordionTriggerProps = React.ComponentPropsWithRef<typeof AccordionPrimitives.Trigger>;

const AccordionTrigger = ({ className, children, ...props }: AccordionTriggerProps) => {
  return (
    <AccordionPrimitives.Header className="flex">
      <AccordionPrimitives.Trigger
        className={cn(
          "flex flex-1 items-center justify-between py-4 text-left font-semibold transition-all",
          "[&[data-state=open]>svg]:rotate-180",
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon
          strokeWidth={2}
          className="size-4 shrink-0 opacity-60 transition-transform duration-200"
          aria-hidden="true"
        />
      </AccordionPrimitives.Trigger>
    </AccordionPrimitives.Header>
  );
};

type AccordionContentProps = React.ComponentPropsWithRef<typeof AccordionPrimitives.Content>;

const AccordionContent = ({ className, children, ...props }: AccordionContentProps) => {
  return (
    <AccordionPrimitives.Content
      className={cn(
        "flex-1 overflow-hidden text-sm transition-all",
        "data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up",
      )}
      {...props}
    >
      <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </AccordionPrimitives.Content>
  );
};

Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.Content = AccordionContent;
