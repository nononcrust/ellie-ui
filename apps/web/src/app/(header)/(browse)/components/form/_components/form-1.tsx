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
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const terms = [
  { id: "services", label: "서비스 이용약관에 동의합니다. (필수)", required: true },
  { id: "privacy", label: "개인정보 처리방침에 동의합니다. (필수)", required: true },
  { id: "marketing", label: "마케팅 정보 수신에 동의합니다. (선택)", required: false },
] as const;

const formSchema = z.object({
  type: z.string().nonempty({ message: "타입을 선택해주세요." }),
  name: z.string().nonempty({ message: "이름을 입력해주세요." }),
  email: z.string().email({ message: "유효한 이메일을 입력해주세요." }),
  password: z.string().min(8, { message: "비밀번호는 8자 이상이어야 합니다." }),
  passwordConfirm: z.string().min(8, { message: "비밀번호를 한번 더 입력해주세요." }),
  date: z.date({ message: "생년월일을 입력해주세요." }),
  gender: z.enum(["male", "female"], { message: "성별을 선택해주세요." }),
  terms: z.array(z.string()).refine(
    (value) => {
      const requiredTermIds = terms.filter((term) => term.required === true).map((term) => term.id);

      return requiredTermIds.every((id) => value.some((termId) => termId === id));
    },
    { message: "모든 필수 약관에 동의해주세요." },
  ),
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
      gender: "male",
      terms: [],
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    toast.success(JSON.stringify(data, null, 2));
  });

  console.log("Error:", form.formState.errors);

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
              <RadioGroup {...field}>
                <RadioGroup.Option value="male">남성</RadioGroup.Option>
                <RadioGroup.Option value="female">여성</RadioGroup.Option>
              </RadioGroup>
            </Form.Control>
          )}
        />
        <Form.ErrorMessage>{form.formState.errors.gender?.message}</Form.ErrorMessage>
      </Form.Item>
      <Form.Item error={!!form.formState.errors.terms}>
        <Form.Label>약관 동의</Form.Label>
        <Controller
          name="terms"
          control={form.control}
          render={({ field }) => (
            <Checkbox.Group className="flex flex-col gap-2">
              <Checkbox
                className="mb-4"
                aria-invalid={!!form.formState.errors.terms}
                checked={field.value.length === terms.length}
                onChange={() => {
                  const allTerms = terms.map((term) => term.id);
                  const newTerms = field.value.length === allTerms.length ? [] : allTerms;

                  field.onChange(newTerms);
                }}
              >
                <Checkbox.Label>전체 동의</Checkbox.Label>
              </Checkbox>
              {terms.map((term) => (
                <Checkbox
                  key={term.id}
                  checked={field.value.some((t) => t === term.id)}
                  aria-invalid={!!form.formState.errors.terms && !field.value.includes(term.id)}
                  onChange={() => {
                    const newTerms = field.value.includes(term.id)
                      ? field.value.filter((t) => t !== term.id)
                      : [...field.value, term.id];

                    field.onChange(newTerms);
                  }}
                >
                  <Checkbox.Label>{term.label}</Checkbox.Label>
                </Checkbox>
              ))}
            </Checkbox.Group>
          )}
        />
        <Form.ErrorMessage>{form.formState.errors.terms?.message}</Form.ErrorMessage>
      </Form.Item>
      <Button type="submit">가입하기</Button>
    </Form>
  );
};
