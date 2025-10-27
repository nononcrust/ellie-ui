"use client";

import { Button, Form, Input } from "@ellie-ui/core";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

// const terms = [
//   { id: "terms", label: "[필수] 디에듀 이용약관에 동의", required: true },
//   { id: "privacy", label: "[필수] 개인정보 수집 및 이용방침에 동의", required: true },
//   { id: "marketing", label: "[선택] 마케팅 정보 수신 및 선택적 개인정보 제공", required: false },
// ];

// const requiredIds = terms.filter((term) => term.required).map((term) => term.id);

const formSchema = z
  .object({
    email: z.email("올바른 이메일 주소를 입력해 주세요."),
    password: z.string().min(8, "비밀번호는 8자 이상이어야 합니다."),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "비밀번호가 일치하지 않습니다.",
  });

export const Signup = () => {
  const [verificationCodeSent, setVerificationCodeSent] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
      <Controller
        name="email"
        control={form.control}
        render={({ field, fieldState }) => (
          <Form.Field invalid={fieldState.invalid}>
            <Form.Label>이메일</Form.Label>
            <div className="flex gap-2">
              <Form.Control>
                <Input {...field} readOnly={verificationCodeSent} />
              </Form.Control>
              {!verificationCodeSent && (
                <Button variant="outlined" onClick={() => setVerificationCodeSent(true)}>
                  인증번호 보내기
                </Button>
              )}
            </div>
          </Form.Field>
        )}
      />
      {verificationCodeSent && (
        <Form.Field>
          <Form.Label>인증번호</Form.Label>
          <div className="flex gap-2">
            <Form.Control>
              <Input />
            </Form.Control>
            <Button variant="outlined">인증하기</Button>
          </div>
        </Form.Field>
      )}
      <Controller
        name="password"
        control={form.control}
        render={({ field, fieldState }) => (
          <Form.Field invalid={fieldState.invalid}>
            <Form.Label>비밀번호</Form.Label>
            <Form.Control>
              <Input {...field} />
            </Form.Control>
            <Form.ErrorMessage>{fieldState.error?.message}</Form.ErrorMessage>
          </Form.Field>
        )}
      />
      <Controller
        name="confirmPassword"
        control={form.control}
        render={({ field, fieldState }) => (
          <Form.Field invalid={fieldState.invalid}>
            <Form.Label>비밀번호 확인</Form.Label>
            <Form.Control>
              <Input {...field} />
            </Form.Control>
            <Form.ErrorMessage>{fieldState.error?.message}</Form.ErrorMessage>
          </Form.Field>
        )}
      />
      <Button className="mt-4" type="submit">
        회원가입
      </Button>
    </Form>
  );
};
