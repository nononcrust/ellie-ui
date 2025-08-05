"use client";

import { Popover as PopoverBase } from "@base-ui-components/react";
import { Command as CommandBase } from "cmdk";
import { SearchIcon } from "lucide-react";
import { usePopover } from "../../hooks";
import { createContextFactory } from "../../lib/context";
import { cn } from "../../lib/utils";
import { SelectChevronDownIcon, SelectItemIndicator, selectTriggerStyle } from "../select";

type ComboboxProps = PopoverBase.Root.Props & {
  value: string;
  onChange: (value: string) => void;
};

const Combobox = ({ children, value, onChange, ...props }: ComboboxProps) => {
  const popover = usePopover();

  return (
    <ComboboxContext value={{ value, onChange, popover }}>
      <PopoverBase.Root open={popover.isOpen} onOpenChange={popover.onOpenChange} {...props}>
        {children}
      </PopoverBase.Root>
    </ComboboxContext>
  );
};

type ComboboxTriggerProps = React.ComponentPropsWithRef<"button"> & {
  placeholder?: string;
};

const ComboboxTrigger = ({ className, placeholder, children, ...props }: ComboboxTriggerProps) => {
  const { value } = useComboboxContext();

  return (
    <PopoverBase.Trigger
      render={
        <button role="combobox" className={cn(selectTriggerStyle.base, className)} {...props}>
          <span className={cn("truncate", !value && "text-placeholder")}>
            {value ? children : placeholder}
          </span>
          <SelectChevronDownIcon />
        </button>
      }
    />
  );
};

type ComboboxContentProps = PopoverBase.Popup.Props;

const ComboboxContent = ({ className, children, ...props }: ComboboxContentProps) => {
  return (
    <PopoverBase.Portal>
      <PopoverBase.Positioner sideOffset={4} side="bottom" className="min-w-[var(--anchor-width)]">
        <PopoverBase.Popup
          className={cn(
            "border-border bg-background text-main outline-hidden relative z-50 overflow-y-auto overflow-x-hidden rounded-md border shadow-lg",
            "data-starting-style:opacity-0 data-open:duration-150",
            "data-[side=top]:data-starting-style:translate-y-[0.5rem]",
            "data-[side=bottom]:data-starting-style:translate-y-[-0.5rem]",
            "data-[side=left]:data-starting-style:translate-x-[0.5rem]",
            "data-[side=right]:data-starting-style:translate-x-[-0.5rem]",
            className,
          )}
          {...props}
        >
          <CommandBase>{children}</CommandBase>
        </PopoverBase.Popup>
      </PopoverBase.Positioner>
    </PopoverBase.Portal>
  );
};

type ComboboxListProps = React.ComponentPropsWithRef<typeof CommandBase.List>;

const ComboboxList = ({ className, children, ...props }: ComboboxListProps) => {
  return (
    <CommandBase.List
      className={cn("outline-hidden max-h-80 overflow-y-auto overflow-x-hidden py-1", className)}
      {...props}
    >
      {children}
    </CommandBase.List>
  );
};

type ComboboxEmptyProps = React.ComponentPropsWithRef<typeof CommandBase.Empty>;

const ComboboxEmpty = ({ className, children, ...props }: ComboboxEmptyProps) => {
  return (
    <CommandBase.Empty
      className={cn("text-subtle py-6 text-center text-sm font-medium", className)}
      {...props}
    >
      {children}
    </CommandBase.Empty>
  );
};

type ComboboxOptionProps = {
  value: string;
  children: React.ReactNode;
};

const ComboboxOption = ({ value, children }: ComboboxOptionProps) => {
  const { value: currentValue, onChange, popover } = useComboboxContext();

  const isSelected = value === currentValue;

  const onSelect = (value: string) => {
    onChange(value);
    popover.close();
  };

  return (
    <CommandBase.Item
      className={cn(
        "outline-hidden relative flex w-full cursor-pointer select-none items-center py-2 pl-3 pr-8 text-sm font-medium",
        "data-[selected=true]:bg-background-100",
        "data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0",
        isSelected && "text-primary font-semibold",
      )}
      value={value}
      onSelect={onSelect}
    >
      {children}
      {isSelected && <SelectItemIndicator />}
    </CommandBase.Item>
  );
};

type ComboboxInputProps = React.ComponentPropsWithRef<typeof CommandBase.Input>;

const ComboboxInput = ({ className, ...props }: ComboboxInputProps) => {
  return (
    <div className="border-border flex items-center border-b px-3" cmdk-input-wrapper="">
      <SearchIcon strokeWidth={2} className="text-placeholder mr-2 size-[1.125rem]" />
      <CommandBase.Input
        className={cn(
          "placeholder:text-placeholder outline-hidden flex h-10 w-full bg-transparent py-3 text-sm",
          "disabled:pointer-events-none disabled:opacity-50",
          className,
        )}
        {...props}
      />
    </div>
  );
};

type ComboboxContextValue = {
  value: string;
  onChange: (value: string) => void;
  popover: ReturnType<typeof usePopover>;
};

const [ComboboxContext, useComboboxContext] =
  createContextFactory<ComboboxContextValue>("Combobox");

Combobox.Trigger = ComboboxTrigger;
Combobox.Content = ComboboxContent;
Combobox.Option = ComboboxOption;
Combobox.Input = ComboboxInput;
Combobox.List = ComboboxList;
Combobox.Empty = ComboboxEmpty;
Combobox.Loading = CommandBase.Loading;

export { Combobox };
