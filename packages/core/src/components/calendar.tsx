"use client";

import { cn } from "@/lib/utils";
import { ko } from "date-fns/locale/ko";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import {
  CustomComponents,
  DayPicker,
  DayPickerProps,
  DayProps,
  useDayPicker,
} from "react-day-picker";

export type CalendarProps = DayPickerProps;

const Calendar = (props: CalendarProps) => {
  return (
    <DayPicker
      showOutsideDays
      classNames={classNames}
      locale={ko}
      components={components}
      {...props}
    />
  );
};

const navButton =
  "text-main absolute size-7 flex justify-center items-center rounded-[0.375rem] bg-background-100 hover:bg-background-200 transition-colors disabled:pointer-events-none disabled:opacity-50";

const classNames = {
  months: "flex relative",
  month: "flex flex-col gap-2 w-full",
  month_caption: "mb-10 flex justify-center relative items-center",
  caption_label:
    "absolute bottom-0 left-0 right-0 top-4 text-[0.8125rem] font-medium flex items-center justify-center text-main",
  nav: "flex justify-between items-center bg-background-100 rounded-[0.375rem] w-full h-8 p-1 absolute top-0 left-0 right-0",
  button_previous: cn(navButton, "left-[0.125rem]"),
  button_next: cn(navButton, "right-[0.125rem]"),
  month_grid: "w-full border-collapse gap-2",
  weekdays: "flex w-full gap-2 justify-center",
  weekday:
    "text-[0.8125rem] font-medium text-sub m-0 box-border flex size-8 items-center justify-center p-0",
  week: "flex w-full mt-2 gap-2 justify-center",
  day: "text-[0.8125rem] font-medium relative rounded-[0.5rem] size-8 flex justify-center items-center p-0 text-center text-main",
  day_button:
    "text-[0.8125rem] font-medium outline-hidden text-center w-full h-full p-0 rounded-[0.5rem] disabled:pointer-events-none hover:bg-background-200",
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

const components: Partial<CustomComponents> = {
  Chevron: ({ orientation }) => {
    if (orientation === "left") {
      return <ChevronLeftIcon className="size-4" strokeWidth={3} />;
    }
    return <ChevronRightIcon className="size-4" strokeWidth={3} />;
  },
  Day,
};

export { Calendar };
