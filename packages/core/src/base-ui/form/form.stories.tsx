import { zodResolver } from "@hookform/resolvers/zod";
import { Meta, StoryObj } from "@storybook/react-vite";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from ".";
import { Input } from "../../components/input";
import { noop } from "../../lib/utils";
import { Button } from "../button";

const meta = {
  title: "base-ui/Form",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <Form onSubmit={(e) => e.preventDefault()} className="flex w-[20rem] flex-col gap-4">
        <Form.Field>
          <Form.Label>라벨</Form.Label>
          <Form.Control>
            <Input placeholder="텍스트를 입력해주세요" />
          </Form.Control>
          <Form.Description>설명이 여기에 표시됩니다.</Form.Description>
        </Form.Field>
      </Form>
    );
  },
};

export const WithInput: Story = {
  render: () => {
    const schema = z.object({
      input: z.string().nonempty({ message: "에러 메시지가 여기에 표시됩니다." }),
    });

    const form = useForm({
      resolver: zodResolver(schema),
      defaultValues: {
        input: "",
      },
    });

    const onSubmit = form.handleSubmit(noop);

    return (
      <Form onSubmit={onSubmit} className="flex w-[20rem] flex-col gap-4">
        <Controller
          name="input"
          control={form.control}
          render={({ field, fieldState }) => (
            <Form.Field invalid={fieldState.invalid}>
              <Form.Label>라벨</Form.Label>
              <Form.Control>
                <Input placeholder="텍스트를 입력해주세요" {...field} />
              </Form.Control>
              <Form.Description>설명이 여기에 표시됩니다.</Form.Description>
              <Form.ErrorMessage>{fieldState.error?.message}</Form.ErrorMessage>
            </Form.Field>
          )}
        />
        <Button type="submit">제출하기</Button>
      </Form>
    );
  },
};
