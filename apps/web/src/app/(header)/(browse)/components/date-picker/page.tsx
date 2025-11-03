"use client";

import { Grid } from "@/components/layouts/grid";
import { Calendar, DatePicker, DateRangePicker, Label } from "@ellie-ui/core";
import { useDatePicker, useDateRangePicker } from "@ellie-ui/core/hooks";

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
          <DatePicker {...datePicker.register()} placeholder="날짜 선택" />
        </div>
      </Grid.Item>
      <Grid.Item>
        <div className="flex w-full flex-col">
          <Label className="mb-2">날짜 범위 선택</Label>
          <DateRangePicker
            {...dateRangePicker.register()}
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
          <DatePicker {...disabledDatePicker.register()} placeholder="날짜 선택" disabled />
        </div>
      </Grid.Item>
      <Grid.Item>
        <div className="flex w-full flex-col">
          <Label className="mb-2">날짜 선택</Label>
          <DatePicker
            {...rangeLimitDatePicker.register()}
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
          <DatePicker {...invalidDatePicker.register()} placeholder="날짜 선택" invalid />
        </div>
      </Grid.Item>
      <Grid.Item>
        <div className="border-border rounded-lg border p-4">
          <Calendar mode="single" />
        </div>
      </Grid.Item>
      <Grid.Item>
        <div className="border-border rounded-lg border p-4">
          <Calendar mode="multiple" />
        </div>
      </Grid.Item>
    </Grid>
  );
}
