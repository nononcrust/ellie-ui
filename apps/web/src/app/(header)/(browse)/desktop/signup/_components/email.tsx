"use client";

import { Button, Form, Input } from "@ellie-ui/core";
import { useState } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import { authApi, EmailForm } from "../_utils/schema";

type EmailProps = {
  form: UseFormReturn<EmailForm>;
  onSubmit: () => void;
};

export const Email = ({ form, onSubmit: afterSubmit }: EmailProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = form.handleSubmit(async (data) => {
    try {
      setIsLoading(true);
      await authApi.checkEmail(data.email);
      afterSubmit();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  });

  return (
    <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
      <Controller
        name="email"
        control={form.control}
        render={({ field, fieldState }) => (
          <Form.Field invalid={fieldState.invalid}>
            <Form.Label>이메일</Form.Label>
            <Form.Control>
              <Input {...field} />
            </Form.Control>
          </Form.Field>
        )}
      />
      <Button type="submit" disabled={isLoading}>
        다음
      </Button>
    </Form>
  );
};
