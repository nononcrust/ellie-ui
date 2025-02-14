import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { noop } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Meta, StoryObj } from "@storybook/react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const meta = {
  title: "packages/ui/Form",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithInput: Story = {
  render: () => {
    const schema = z.object({
      input: z.string().nonempty({ message: "에럭 메시지가 여기에 표시됩니다." }),
    });

    const form = useForm({
      resolver: zodResolver(schema),
      defaultValues: {
        input: "",
      },
    });

    const onSubmit = form.handleSubmit(noop);

    return (
      <Form onSubmit={onSubmit} className="flex w-[320px] flex-col gap-4">
        <Form.Item error={!!form.formState.errors.input}>
          <Form.Label>라벨</Form.Label>
          <Controller
            name="input"
            control={form.control}
            render={({ field }) => (
              <Form.Control>
                <Input placeholder="텍스트를 입력해주세요" {...field} />
              </Form.Control>
            )}
          />
          <Form.Description>설명이 여기에 표시됩니다.</Form.Description>
          <Form.ErrorMessage>{form.formState.errors.input?.message}</Form.ErrorMessage>
        </Form.Item>
        <Button type="submit">제출하기</Button>
      </Form>
    );
  },
};

export const WithSelect = () => {
  const schema = z.object({
    select: z.string().nonempty({ message: "에럭 메시지가 여기에 표시됩니다." }),
  });

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      select: "",
    },
  });

  const onSubmit = form.handleSubmit(noop);

  return (
    <Form onSubmit={onSubmit} className="flex w-[320px] flex-col gap-4">
      <Form.Item error={!!form.formState.errors.select}>
        <Form.Label>라벨</Form.Label>
        <Controller
          name="select"
          control={form.control}
          render={({ field }) => (
            <Form.Control>
              <Select placeholder="항목을 선택해주세요" {...field}>
                <Select.Option value="1">옵션 1</Select.Option>
                <Select.Option value="2">옵션 2</Select.Option>
                <Select.Option value="3">옵션 3</Select.Option>
              </Select>
            </Form.Control>
          )}
        />
        <Form.Description>설명이 여기에 표시됩니다.</Form.Description>
        <Form.ErrorMessage>{form.formState.errors.select?.message}</Form.ErrorMessage>
      </Form.Item>
      <Button type="submit">제출하기</Button>
    </Form>
  );
};
