"use client";

import { Grid } from "@/components/layouts/grid";
import { Calendar } from "@/components/ui/calendar";
import { DatePicker, DateRangePicker } from "@/components/ui/date-picker";
import { Label } from "@/components/ui/label";
import { useDatePicker } from "@/hooks/use-date-picker";
import { useDateRangePicker } from "@/hooks/use-date-range-picker";

export default function DatePickerPage() {
  const datePicker = useDatePicker();
  const dateRangePicker = useDateRangePicker();
  const disabledDatePicker = useDatePicker();
  const invalidDatePicker = useDatePicker();
  const rangeLimitDatePicker = useDatePicker();

  return (
    <Grid>
      <Grid.Item>
        <div className="flex w-full flex-col">
          <Label className="mb-2">날짜 선택</Label>
          <DatePicker
            value={datePicker.value}
            onChange={datePicker.onChange}
            placeholder="날짜 선택"
          />
        </div>
      </Grid.Item>
      <Grid.Item>
        <div className="flex w-full flex-col">
          <Label className="mb-2">날짜 범위 선택</Label>
          <DateRangePicker
            value={dateRangePicker.value}
            onChange={dateRangePicker.onChange}
            placeholder="날짜 범위 선택"
            hidden={{
              before: new Date(),
            }}
          />
        </div>
      </Grid.Item>
      <Grid.Item>
        <div className="flex w-full flex-col">
          <Label className="mb-2">날짜 선택</Label>
          <DatePicker
            value={disabledDatePicker.value}
            onChange={disabledDatePicker.onChange}
            placeholder="날짜 선택"
            disabled
          />
        </div>
      </Grid.Item>
      <Grid.Item>
        <div className="flex w-full flex-col">
          <Label className="mb-2">날짜 선택</Label>
          <DatePicker
            value={rangeLimitDatePicker.value}
            onChange={rangeLimitDatePicker.onChange}
            placeholder="날짜 선택"
            hidden={{
              before: new Date(),
            }}
          />
        </div>
      </Grid.Item>
      <Grid.Item>
        <div className="flex w-full flex-col">
          <Label className="mb-2">날짜 선택</Label>
          <DatePicker
            value={invalidDatePicker.value}
            onChange={invalidDatePicker.onChange}
            placeholder="날짜 선택"
            aria-invalid
          />
        </div>
      </Grid.Item>
      <Grid.Item>
        <div className="rounded-xl border border-border p-4">
          <Calendar mode="single" />
        </div>
      </Grid.Item>
      <Grid.Item>
        <div className="rounded-xl border border-border p-4">
          <Calendar mode="multiple" />
        </div>
      </Grid.Item>
    </Grid>
  );
}
