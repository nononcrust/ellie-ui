"use client";

import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  RadioGroup,
  Select,
  toast,
} from "@ellie-ui/core";
import { zodResolver } from "@hookform/resolvers/zod";
import { useId } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  type: z.string().nonempty({ message: "타입을 선택해주세요." }),
  name: z.string().nonempty({ message: "이름을 입력해주세요." }),
  email: z.string().email({ message: "유효한 이메일을 입력해주세요." }),
  password: z.string().min(8, { message: "비밀번호는 8자 이상이어야 합니다." }),
  passwordConfirm: z.string().min(8, { message: "비밀번호를 한번 더 입력해주세요." }),
  date: z.date({ message: "생년월일을 입력해주세요." }),
  terms: z.boolean().refine((data) => data === true, {
    message: "약관에 동의해주세요.",
  }),
  gender: z.string({ message: "성별을 선택해주세요." }),
});

type FormSchema = z.infer<typeof formSchema>;

export const Form1 = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: "",
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
      terms: false,
    },
  });

  const checkboxId = useId();

  const onSubmit = form.handleSubmit(() => {
    toast.success("회원가입이 완료되었습니다.");
  });

  return (
    <Form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <Form.Item error={!!form.formState.errors.type}>
        <Form.Label>타입</Form.Label>
        <Controller
          name="type"
          control={form.control}
          render={({ field }) => (
            <Form.Control>
              <Select {...field} placeholder="타입을 선택해주세요.">
                <Select.Option value="1">개인</Select.Option>
                <Select.Option value="2">기업</Select.Option>
                <Select.Option value="3">단체</Select.Option>
              </Select>
            </Form.Control>
          )}
        />
        <Form.Description>타입을 선택하세요.</Form.Description>
        <Form.ErrorMessage>{form.formState.errors.type?.message}</Form.ErrorMessage>
      </Form.Item>
      <Form.Item error={!!form.formState.errors.name}>
        <Form.Label>이름</Form.Label>
        <Form.Control>
          <Input {...form.register("name")} placeholder="이름" />
        </Form.Control>
        <Form.Description>이름을 입력하세요.</Form.Description>
        <Form.ErrorMessage>{form.formState.errors.name?.message}</Form.ErrorMessage>
      </Form.Item>
      <Form.Item error={!!form.formState.errors.email}>
        <Form.Label>이메일</Form.Label>
        <Form.Control>
          <Input {...form.register("email")} placeholder="이메일" />
        </Form.Control>
        <Form.Description>이메일을 입력하세요.</Form.Description>
        <Form.ErrorMessage>{form.formState.errors.email?.message}</Form.ErrorMessage>
      </Form.Item>
      <Form.Item error={!!form.formState.errors.password}>
        <Form.Label>비밀번호</Form.Label>
        <Form.Control>
          <Input type="password" {...form.register("password")} placeholder="비밀번호" />
        </Form.Control>
        <Form.Description>비밀번호를 입력하세요.</Form.Description>
        <Form.ErrorMessage>{form.formState.errors.password?.message}</Form.ErrorMessage>
      </Form.Item>
      <Form.Item error={!!form.formState.errors.passwordConfirm}>
        <Form.Label>비밀번호 확인</Form.Label>
        <Form.Control>
          <Input
            type="password"
            {...form.register("passwordConfirm")}
            placeholder="비밀번호 확인"
          />
        </Form.Control>
        <Form.Description>비밀번호를 다시 입력하세요.</Form.Description>
        <Form.ErrorMessage>{form.formState.errors.passwordConfirm?.message}</Form.ErrorMessage>
      </Form.Item>
      <Form.Item error={!!form.formState.errors.terms}>
        <div className="flex items-center gap-2">
          <Controller
            name="terms"
            control={form.control}
            render={({ field }) => (
              <Form.Control>
                <Checkbox
                  checked={field.value}
                  onChange={field.onChange}
                  id={checkboxId}
                  ref={field.ref}
                >
                  <Checkbox.Label>약관에 동의합니다.</Checkbox.Label>
                </Checkbox>
              </Form.Control>
            )}
          />
        </div>
        <Form.ErrorMessage>{form.formState.errors.terms?.message}</Form.ErrorMessage>
      </Form.Item>
      <Form.Item error={!!form.formState.errors.date}>
        <Form.Label>생년월일</Form.Label>
        <Controller
          name="date"
          control={form.control}
          render={({ field }) => (
            <Form.Control>
              <DatePicker {...field} placeholder="생년월일" />
            </Form.Control>
          )}
        />
        <Form.Description>생년월일을 입력하세요.</Form.Description>
        <Form.ErrorMessage>{form.formState.errors.date?.message}</Form.ErrorMessage>
      </Form.Item>
      <Form.Item error={!!form.formState.errors.gender}>
        <Form.Label>성별</Form.Label>
        <Controller
          name="gender"
          control={form.control}
          render={({ field }) => (
            <Form.Control>
              <RadioGroup {...field} onChange={field.onChange}>
                <RadioGroup.Option value="1">남성</RadioGroup.Option>
                <RadioGroup.Option value="2">여성</RadioGroup.Option>
              </RadioGroup>
            </Form.Control>
          )}
        />
        <Form.ErrorMessage>{form.formState.errors.gender?.message}</Form.ErrorMessage>
      </Form.Item>
      <Button type="submit">가입하기</Button>
    </Form>
  );
};
