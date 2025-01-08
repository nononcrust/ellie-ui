"use client";

import { usePopover } from "@/hooks/use-popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { DateRange, PropsBase, PropsRange, PropsSingle } from "react-day-picker";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { Popover } from "./popover";

type DatePickerProps = Omit<
  PropsBase & PropsSingle & React.ComponentPropsWithRef<"button">,
  "selected" | "onSelect" | "mode" | "onChange" | "value"
> & {
  value?: Date;
  onChange: (date?: Date) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  "aria-required"?: boolean;
  "aria-invalid"?: boolean;
  "aria-label"?: string;
  "aria-labelledby"?: string;
};

export const DatePicker = ({
  value: initialDate,
  onChange,
  placeholder,
  disabled,
  className,
  style,
  required,
  "aria-required": ariaRequired,
  "aria-invalid": ariaInvalid,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
  ref,
  ...props
}: DatePickerProps) => {
  const [date, setDate] = useState<Date | undefined>(initialDate);

  const popover = usePopover();

  const onCancel = () => {
    popover.close();
    setDate(initialDate);
  };

  const onApply = () => {
    onChange(date);
    popover.close();
  };

  const onOpenChange = (open: boolean) => {
    popover.onOpenChange(open);
    setDate(initialDate);
  };

  const onDateChange = (date?: Date) => {
    setDate(date);
  };

  const formattedDate = date ? format(date, "yyyy-MM-dd") : null;

  return (
    <Popover open={popover.isOpen} onOpenChange={onOpenChange}>
      <Trigger
        placeholder={placeholder}
        disabled={disabled}
        className={className}
        style={style}
        aria-required={required || ariaRequired}
        aria-invalid={ariaInvalid}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledby}
        ref={ref}
      >
        {formattedDate}
      </Trigger>
      <Popover.Content>
        <div className="p-3">
          <Calendar
            mode="single"
            selected={date}
            onSelect={onDateChange}
            {...props}
            required={required}
          />
        </div>
        <div className="flex items-center gap-2 border-t border-border p-3">
          <Button variant="outlined" className="w-full" onClick={onCancel}>
            취소하기
          </Button>
          <Button variant="primary" className="w-full" onClick={onApply}>
            적용하기
          </Button>
        </div>
      </Popover.Content>
    </Popover>
  );
};

interface DateRangePickerProps
  extends Omit<PropsBase & PropsRange, "selected" | "onSelect" | "mode"> {
  value?: DateRange;
  onChange: (date?: DateRange) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  "aria-required"?: boolean;
  "aria-invalid"?: boolean;
  "aria-label"?: string;
  "aria-labelledby"?: string;
}

export const DateRangePicker = ({
  value: initialDateRange,
  onChange,
  placeholder,
  disabled,
  className,
  style,
  required,
  "aria-required": ariaRequired,
  "aria-invalid": ariaInvalid,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
  ...props
}: DateRangePickerProps) => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>(initialDateRange);

  const popover = usePopover();

  const onCancel = () => {
    popover.close();
    setDateRange(initialDateRange);
  };

  const onApply = () => {
    onChange(dateRange);
    popover.close();
  };

  const onOpenChange = (open: boolean) => {
    popover.onOpenChange(open);
    setDateRange(initialDateRange);
  };

  const onDateRangeChange = (dateRange?: DateRange) => {
    setDateRange(dateRange);
  };

  const dateRangeFrom = dateRange && dateRange.from ? format(dateRange.from, "yyyy-MM-dd") : "";

  const dateRangeTo = dateRange && dateRange.to ? ` ~ ${format(dateRange.to, "yyyy-MM-dd")}` : "";

  const formattedDate = dateRange ? `${dateRangeFrom}${dateRangeTo}` : null;

  return (
    <Popover open={popover.isOpen} onOpenChange={onOpenChange}>
      <Trigger
        placeholder={placeholder}
        disabled={disabled}
        className={className}
        aria-required={required || ariaRequired}
        aria-invalid={ariaInvalid}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledby}
        style={style}
      >
        {formattedDate}
      </Trigger>
      <Popover.Content>
        <div className="p-3">
          <Calendar
            mode="range"
            selected={dateRange}
            onSelect={onDateRangeChange}
            disabled={disabled}
            required={required}
            {...props}
          />
        </div>
        <div className="flex items-center gap-2 border-t border-border p-3">
          <Button variant="outlined" className="w-full" type="button" onClick={onCancel}>
            취소하기
          </Button>
          <Button variant="primary" className="w-full" onClick={onApply}>
            적용하기
          </Button>
        </div>
      </Popover.Content>
    </Popover>
  );
};

type TriggerProps = React.ComponentPropsWithRef<"button"> & {
  placeholder?: string;
};

export const Trigger = ({
  className,
  children,
  placeholder,
  ["aria-invalid"]: ariaInvalid,
  ...props
}: TriggerProps) => {
  return (
    <Popover.Trigger asChild>
      <button
        className={cn(
          "flex h-9 w-full items-center gap-2 rounded-[8px] border border-border bg-background px-3 text-sm font-medium text-main outline-none",
          "disable-focus-ring focus-visible:focus-input-ring",
          "disabled:pointer-events-none disabled:opacity-50",
          ariaInvalid && "focus-visible:focus-input-ring-error border-error",
          className,
        )}
        {...props}
      >
        <CalendarIcon size={16} className="text-sub" />
        <span className="flex overflow-hidden truncate">
          {children ? (
            children
          ) : placeholder ? (
            <span className="text-placeholder">{placeholder}</span>
          ) : null}
        </span>
      </button>
    </Popover.Trigger>
  );
};
