"use client";

import { Button, DatePicker, DateRangePicker, Form } from "@ellie-ui/core";
import { useDatePicker, useDateRangePicker } from "@ellie-ui/core/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

export const DatePickerDemo = () => {
  const datePicker = useDatePicker();

  return <DatePicker className="w-[20rem]" {...datePicker.register()} />;
};

export const DatePickerDemoRange = () => {
  const dateRangePicker = useDateRangePicker();

  return <DateRangePicker {...dateRangePicker.register()} className="w-[20rem]" />;
};

export const DatePickerDemoWithPlaceholder = () => {
  const datePicker = useDatePicker();

  return (
    <DatePicker
      {...datePicker.register()}
      className="w-[20rem]"
      placeholder="날짜를 선택해주세요"
    />
  );
};

export const DatePickerDemoDisabled = () => {
  const datePicker = useDatePicker();

  return <DatePicker {...datePicker.register()} className="w-[20rem]" disabled />;
};

export const DatePickerDemoDayDisabled = () => {
  const datePicker = useDatePicker();

  return (
    <DatePicker
      {...datePicker.register()}
      className="w-[20rem]"
      hidden={{
        before: new Date(),
      }}
    />
  );
};

export const DatePickerDemoInvalid = () => {
  const datePicker = useDatePicker();

  return <DatePicker {...datePicker.register()} className="w-[20rem]" aria-invalid />;
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
      <Controller
        name="date"
        control={form.control}
        render={({ field: { value, onChange, ...rest }, fieldState }) => (
          <Form.Field invalid={fieldState.invalid}>
            <Form.Label>날짜</Form.Label>
            <Form.Control>
              <DatePicker
                placeholder="날짜를 선택해주세요"
                className="w-[20rem]"
                value={value}
                onValueChange={onChange}
                {...rest}
              />
            </Form.Control>
            <Form.Description>날짜를 선택해주세요.</Form.Description>
            <Form.ErrorMessage>{fieldState.error?.message}</Form.ErrorMessage>
          </Form.Field>
        )}
      />
      <Button className="mt-4" type="submit">
        제출하기
      </Button>
    </Form>
  );
};
