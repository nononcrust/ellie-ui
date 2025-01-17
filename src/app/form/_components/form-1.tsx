"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DatePicker } from "@/components/ui/date-picker";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup } from "@/components/ui/radio-group";
import { Select } from "@/components/ui/select";
import { toast } from "@/components/ui/toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useId } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  type: z.string().nonempty({ message: "타입을 선택해주세요." }),
  name: z.string().nonempty({ message: "이름을 입력해주세요." }),
  email: z.string().email({ message: "유효한 이메일을 입력해주세요." }),
  password: z.string().min(8, { message: "비밀번호는 8자 이상이어야 합니다." }),
  passwordConfirm: z.string().min(8),
  date: z.date(),
  terms: z.boolean().refine((data) => data === true, {
    message: "약관에 동의해주세요.",
  }),
  gender: z.string().nonempty({ message: "성별을 선택해주세요." }),
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
                  size="small"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  id={checkboxId}
                  ref={field.ref}
                >
                  약관에 동의합니다.
                </Checkbox>
              </Form.Control>
            )}
          />
          <Label htmlFor={checkboxId}>서비스 이용약관에 동의합니다.</Label>
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
              <RadioGroup {...field} onValueChange={field.onChange}>
                <RadioGroup.Option value="1">React</RadioGroup.Option>
                <RadioGroup.Option value="2">Astro</RadioGroup.Option>
                <RadioGroup.Option value="3">Remix</RadioGroup.Option>
              </RadioGroup>
            </Form.Control>
          )}
        />
      </Form.Item>
      <Button type="submit">가입하기</Button>
    </Form>
  );
};
