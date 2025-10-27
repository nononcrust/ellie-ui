"use client";

import { Button, Form, Input } from "@ellie-ui/core";
import { useInput } from "@ellie-ui/core/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

type EmailForm = z.infer<typeof EmailForm>;
const EmailForm = z.object({
  email: z.email({ message: "올바른 이메일 형식을 입력해주세요" }),
});

export const InputDemoWithForm = () => {
  const form = useForm<EmailForm>({
    resolver: zodResolver(EmailForm),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = form.handleSubmit(() => {});

  return (
    <Form onSubmit={onSubmit}>
      <Controller
        name="email"
        control={form.control}
        render={({ field, fieldState }) => (
          <Form.Field invalid={fieldState.invalid}>
            <Form.Label>이메일</Form.Label>
            <Form.Control>
              <Input {...field} className="w-[20rem]" placeholder="이메일을 입력해주세요" />
            </Form.Control>
            <Form.Description>이메일을 입력해주세요</Form.Description>
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

export const InputDemoControlled = () => {
  const input = useInput();

  return (
    <Input
      value={input.value}
      onChange={input.onChange}
      className="w-[20rem]"
      placeholder="텍스트를 입력해주세요"
    />
  );
};
