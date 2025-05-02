"use client";

import { Button, Form, Input } from "@ellie-ui/core";
import { useInput } from "@ellie-ui/core/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

type EmailForm = z.infer<typeof EmailForm>;
const EmailForm = z.object({
  email: z.string().email({ message: "올바른 이메일 형식을 입력해주세요" }),
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
      <Form.Item error={!!form.formState.errors.email}>
        <Form.Label>이메일</Form.Label>
        <Form.Control>
          <Input
            {...form.register("email")}
            className="w-[20rem]"
            placeholder="이메일을 입력해주세요"
          />
        </Form.Control>
        <Form.Description>이메일을 입력해주세요</Form.Description>
        <Form.ErrorMessage>{form.formState.errors.email?.message}</Form.ErrorMessage>
      </Form.Item>
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
