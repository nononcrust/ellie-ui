import { useRadioGroup } from "@ellie-ui/core/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { RadioGroup } from ".";
import { noop } from "../../lib/utils";
import { Button } from "../button";
import { Form } from "../form";

const meta = {
  title: "base-ui/RadioGroup",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <RadioGroup defaultValue="1">
        <RadioGroup.Option value="1">선택 1</RadioGroup.Option>
        <RadioGroup.Option value="2">선택 2</RadioGroup.Option>
      </RadioGroup>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <RadioGroup disabled defaultValue="1">
        <RadioGroup.Option value="1">선택 1</RadioGroup.Option>
        <RadioGroup.Option value="2">선택 2</RadioGroup.Option>
      </RadioGroup>
    );
  },
};

export const OptionDisabled: Story = {
  render: () => {
    return (
      <RadioGroup defaultValue="1">
        <RadioGroup.Option value="1" disabled>
          선택 1
        </RadioGroup.Option>
        <RadioGroup.Option value="2">선택 2</RadioGroup.Option>
      </RadioGroup>
    );
  },
};

export const Invalid: Story = {
  render: () => {
    return (
      <RadioGroup invalid defaultValue="1">
        <RadioGroup.Option value="1">선택 1</RadioGroup.Option>
        <RadioGroup.Option value="2">선택 2</RadioGroup.Option>
      </RadioGroup>
    );
  },
};

export const Small: Story = {
  render: () => {
    return (
      <RadioGroup size="small" defaultValue="1">
        <RadioGroup.Option value="1">선택 1</RadioGroup.Option>
        <RadioGroup.Option value="2">선택 2</RadioGroup.Option>
      </RadioGroup>
    );
  },
};

export const Large: Story = {
  render: () => {
    return (
      <RadioGroup size="large" defaultValue="1">
        <RadioGroup.Option value="1">선택 1</RadioGroup.Option>
        <RadioGroup.Option value="2">선택 2</RadioGroup.Option>
      </RadioGroup>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const radioGroup = useRadioGroup("1");

    return (
      <RadioGroup {...radioGroup.register()}>
        <RadioGroup.Option value="1">선택 1</RadioGroup.Option>
        <RadioGroup.Option value="2">선택 2</RadioGroup.Option>
      </RadioGroup>
    );
  },
};

export const WithForm: Story = {
  render: () => {
    const options = ["1", "2", "3"] as const;

    const schema = z.object({
      radioGroup: z.enum(options, { message: "옵션을 선택해주세요." }),
    });

    const form = useForm({
      resolver: zodResolver(schema),
      defaultValues: {
        radioGroup: undefined,
      },
    });

    const onSubmit = form.handleSubmit(noop);

    return (
      <Form onSubmit={onSubmit} className="flex w-[20rem] flex-col gap-4">
        <Controller
          name="radioGroup"
          control={form.control}
          render={({ field: { value, onChange, ...rest }, fieldState }) => (
            <Form.Field invalid={fieldState.invalid}>
              <Form.Label>레이블</Form.Label>
              <Form.Control>
                <RadioGroup value={value ?? ""} onValueChange={onChange} {...rest}>
                  {options.map((option) => (
                    <RadioGroup.Option key={option} value={option}>
                      옵션 {option}
                    </RadioGroup.Option>
                  ))}
                </RadioGroup>
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
