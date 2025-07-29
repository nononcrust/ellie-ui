"use client";

import { ko } from "date-fns/locale/ko";
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import {
  CustomComponents,
  DayPicker,
  DayPickerProps,
  DayProps,
  DropdownProps,
  useDayPicker,
} from "react-day-picker";
import { cn } from "../../lib/utils";

export type CalendarProps = DayPickerProps;

const Calendar = (props: CalendarProps) => {
  return (
    <DayPicker
      showOutsideDays
      classNames={classNames}
      locale={ko}
      components={components}
      captionLayout="dropdown"
      labels={{
        labelPrevious: () => "이전 달",
        labelNext: () => "다음 달",
      }}
      {...props}
    />
  );
};

const navButton =
  "text-main absolute size-8 flex justify-center items-center rounded-sm bg-background hover:bg-background-100 transition-colors disabled:pointer-events-none disabled:opacity-50";

const classNames = {
  months: "flex relative",
  month: "flex flex-col gap-2 w-full",
  month_caption: "h-8 flex justify-center items-center",
  caption_label: "hidden",
  dropdowns: "flex gap-1 flex-row-reverse",
  button_previous: cn(navButton, "left-[0.125rem]"),
  button_next: cn(navButton, "right-[0.125rem]"),
  month_grid: "w-full border-collapse gap-2",
  weekdays: "flex w-full gap-2 justify-center",
  weekday:
    "text-[0.8125rem] font-medium text-sub m-0 box-border flex size-8 items-center justify-center p-0",
  week: "flex w-full mt-2 gap-2 justify-center",
  day: "text-[0.8125rem] font-medium relative rounded-[0.5rem] size-8 flex justify-center items-center p-0 text-center text-main",
  day_button:
    "text-[0.8125rem] font-medium outline-hidden text-center w-full h-full p-0 rounded-[0.5rem] disabled:pointer-events-none hover:bg-background-hover",
  selected: "bg-primary text-white hover:[&>button]:bg-primary-dark",
  outside: "text-sub",
  disabled: "text-subtle",
  range_middle:
    "bg-primary-lighter dark:bg-primary-darker dark:text-white! text-primary! hover:[&>button]:bg-primary-lighter dark:hover:[&>button]:bg-primary-darker",
  hidden: "opacity-20",
};

const Day = ({ children, day, className, ...props }: DayProps) => {
  const { getModifiers, isSelected, selected: selectedDates } = useDayPicker<{ mode: "range" }>();

  const { disabled, today, hidden } = getModifiers(day);

  const selected = isSelected?.(day.date);

  const isRangeMiddle =
    selected &&
    selectedDates?.from &&
    selectedDates.from.toISOString() !== day.date.toISOString() &&
    selectedDates?.to &&
    selectedDates.to.toISOString() !== day.date.toISOString();

  if (hidden) {
    return (
      <td className={className}>
        {day.date.getDate()}
        {today && (
          <span
            className={cn(
              "bg-primary absolute right-[0.3125rem] top-[0.3125rem] size-1 rounded-full",
            )}
          />
        )}
      </td>
    );
  }

  return (
    <td className={className} {...props}>
      {children}
      {today && (
        <span
          className={cn(
            "absolute right-[0.3125rem] top-[0.3125rem] size-1 rounded-full",
            !selected && "bg-primary",
            selected && "bg-white",
            isRangeMiddle && "bg-primary",
            disabled && "bg-primary opacity-0.5",
          )}
        />
      )}
    </td>
  );
};

const Dropdown = ({ className, options, value, onChange }: DropdownProps) => {
  const isYearDropdown = !!value && value.toString().length === 4;

  return (
    <div className="relative">
      <select
        className={cn(
          "focus-visible:focus-ring outline-hidden border-border hover:bg-background-hover flex h-8 cursor-pointer appearance-none items-center justify-center rounded-sm border pl-2.5 pr-7 text-center text-sm font-medium transition-colors",
          className,
        )}
        value={value}
        onChange={onChange}
      >
        {options &&
          options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
              {isYearDropdown && "년"}
            </option>
          ))}
      </select>
      <ChevronDownIcon
        className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2"
        size={16}
      />
    </div>
  );
};

const components: Partial<CustomComponents> = {
  Chevron: ({ orientation }) => {
    if (orientation === "left") {
      return <ChevronLeftIcon className="size-5" strokeWidth={2.5} />;
    }
    return <ChevronRightIcon className="size-5" strokeWidth={2.5} />;
  },
  Day,
  Dropdown,
};

export { Calendar };
