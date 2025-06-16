"use client";

import { Button, DatePicker, DateRangePicker, Form } from "@ellie-ui/core";
import { useDatePicker, useDateRangePicker } from "@ellie-ui/core/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

export const DatePickerDemo = () => {
  const datePicker = useDatePicker();

  return (
    <DatePicker className="w-[20rem]" value={datePicker.value} onChange={datePicker.onChange} />
  );
};

export const DatePickerDemoRange = () => {
  const dateRangePicker = useDateRangePicker();

  return (
    <DateRangePicker
      className="w-[20rem]"
      value={dateRangePicker.value}
      onChange={dateRangePicker.onChange}
    />
  );
};

export const DatePickerDemoWithPlaceholder = () => {
  const datePicker = useDatePicker();

  return (
    <DatePicker
      className="w-[20rem]"
      value={datePicker.value}
      onChange={datePicker.onChange}
      placeholder="날짜를 선택해주세요"
    />
  );
};

export const DatePickerDemoDisabled = () => {
  const datePicker = useDatePicker();

  return (
    <DatePicker
      className="w-[20rem]"
      value={datePicker.value}
      onChange={datePicker.onChange}
      disabled
    />
  );
};

export const DatePickerDemoDayDisabled = () => {
  const datePicker = useDatePicker();

  return (
    <DatePicker
      className="w-[20rem]"
      value={datePicker.value}
      onChange={datePicker.onChange}
      hidden={{
        before: new Date(),
      }}
    />
  );
};

export const DatePickerDemoInvalid = () => {
  const datePicker = useDatePicker();

  return (
    <DatePicker
      className="w-[20rem]"
      value={datePicker.value}
      onChange={datePicker.onChange}
      aria-invalid
    />
  );
};

const DateForm = z.object({
  date: z.date({ message: "날짜를 선택해주세요." }),
});

export const DatePickerDemoWithForm = () => {
  const form = useForm({
    resolver: zodResolver(DateForm),
    defaultValues: {
      date: undefined,
    },
  });

  const onSubmit = form.handleSubmit(() => {});

  return (
    <Form onSubmit={onSubmit}>
      <Form.Item error={!!form.formState.errors.date}>
        <Form.Label>날짜</Form.Label>
        <Controller
          name="date"
          control={form.control}
          render={({ field }) => (
            <Form.Control>
              <DatePicker className="w-[20rem]" {...field} placeholder="날짜를 선택해주세요" />
            </Form.Control>
          )}
        />
        <Form.Description>날짜를 선택해주세요.</Form.Description>
        <Form.ErrorMessage>{form.formState.errors.date?.message}</Form.ErrorMessage>
      </Form.Item>
      <Button className="mt-4" type="submit">
        제출하기
      </Button>
    </Form>
  );
};
