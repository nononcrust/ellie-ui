import { Button, Form, Input } from "@ellie-ui/core";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { authApi } from "../_utils/schema";

type PasswordProps = {
  email: string;
  onPrevious: () => void;
};

const formSchema = z.object({
  password: z.string().min(1, "비밀번호를 입력해 주세요."),
});

export const Password = ({ email, onPrevious }: PasswordProps) => {
  const [credentialError, setCredentialError] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
    },
  });

  const onSubmit = form.handleSubmit(async (data) => {
    try {
      console.log("submit");
      await authApi.login(email, data.password);
      console.log("Login successful");
    } catch {
      setCredentialError(true);
    }
  });

  return (
    <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
      <Form.Item>
        <Form.Label>이메일</Form.Label>
        <Form.Control>
          <Input defaultValue={email} readOnly />
        </Form.Control>
      </Form.Item>
      <Form.Item error={!!form.formState.errors.password}>
        <Form.Label>비밀번호</Form.Label>
        <Form.Control>
          <Input type="password" {...form.register("password")} />
        </Form.Control>
        <Form.ErrorMessage>{form.formState.errors.password?.message}</Form.ErrorMessage>
      </Form.Item>
      {credentialError && (
        <p className="text-error text-sm font-medium">비밀번호가 일치하지 않습니다.</p>
      )}
      <div className="flex gap-2">
        <Button variant="outlined" onClick={onPrevious}>
          이전
        </Button>
        <Button type="submit" className="flex-1">
          계속
        </Button>
      </div>
    </Form>
  );
};
