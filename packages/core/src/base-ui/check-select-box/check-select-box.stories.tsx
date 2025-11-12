import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { useCheckboxGroup } from "../../hooks";
import { noop } from "../../lib/utils";
import { Button } from "../button";
import { Form } from "../form";
import { CheckSelectBox } from "./check-select-box";

const meta = {
  title: "base-ui/CheckSelectBox",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CheckSelectBox>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  {
    value: "1",
    label: "동적 UI",
    description: "조건을 걸어 서버에 동작할 수 있는 통신을 보낼 수 있어요.",
  },
  { value: "2", label: "조건 조회 UI", description: "조건을 설정하여 데이터를 조회할 수 있어요." },
  {
    value: "3",
    label: "조건 조회 + 동적 UI",
    description: "조건을 설정하여 데이터를 조회하고 추가 동작을 할 수 있어요.",
  },
] as const;

export const Default: Story = {
  render: () => {
    return (
      <div className="min-w-[24rem]">
        <CheckSelectBox defaultValue={["1"]}>
          {options.map((option) => (
            <CheckSelectBox.Option key={option.value} value={option.value}>
              <CheckSelectBox.Label>{option.label}</CheckSelectBox.Label>
              <CheckSelectBox.Description>{option.description}</CheckSelectBox.Description>
            </CheckSelectBox.Option>
          ))}
        </CheckSelectBox>
      </div>
    );
  },
};

export const LabelOnly: Story = {
  render: () => {
    return (
      <div className="min-w-[24rem]">
        <CheckSelectBox defaultValue={["1"]}>
          {options.map((option) => (
            <CheckSelectBox.Option key={option.value} value={option.value}>
              <CheckSelectBox.Label>{option.label}</CheckSelectBox.Label>
            </CheckSelectBox.Option>
          ))}
        </CheckSelectBox>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <div className="min-w-[24rem]">
        <CheckSelectBox defaultValue={["1"]} disabled>
          {options.map((option) => (
            <CheckSelectBox.Option key={option.value} value={option.value}>
              <CheckSelectBox.Label>{option.label}</CheckSelectBox.Label>
              <CheckSelectBox.Description>{option.description}</CheckSelectBox.Description>
            </CheckSelectBox.Option>
          ))}
        </CheckSelectBox>
      </div>
    );
  },
};

export const OptionDisabled: Story = {
  render: () => {
    return (
      <div className="min-w-[24rem]">
        <CheckSelectBox>
          {options.map((option) => (
            <CheckSelectBox.Option
              key={option.value}
              value={option.value}
              disabled={option.value === "2"}
            >
              <CheckSelectBox.Label>{option.label}</CheckSelectBox.Label>
              <CheckSelectBox.Description>{option.description}</CheckSelectBox.Description>
            </CheckSelectBox.Option>
          ))}
        </CheckSelectBox>
      </div>
    );
  },
};

export const Invalid: Story = {
  render: () => {
    return (
      <div className="min-w-[24rem]">
        <CheckSelectBox defaultValue={["1"]} invalid>
          {options.map((option) => (
            <CheckSelectBox.Option key={option.value} value={option.value}>
              <CheckSelectBox.Label>{option.label}</CheckSelectBox.Label>
              <CheckSelectBox.Description>{option.description}</CheckSelectBox.Description>
            </CheckSelectBox.Option>
          ))}
        </CheckSelectBox>
      </div>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const checkboxGroup = useCheckboxGroup({
      entries: options.map((option) => option.value),
      initialEntries: ["1"],
    });

    return (
      <div className="min-w-[24rem]">
        <CheckSelectBox value={checkboxGroup.value} onValueChange={checkboxGroup.onValueChange}>
          {options.map((option) => (
            <CheckSelectBox.Option key={option.value} value={option.value}>
              <CheckSelectBox.Label>{option.label}</CheckSelectBox.Label>
              <CheckSelectBox.Description>{option.description}</CheckSelectBox.Description>
            </CheckSelectBox.Option>
          ))}
        </CheckSelectBox>
      </div>
    );
  },
};

export const WithForm: Story = {
  render: () => {
    const schema = z.object({
      options: z
        .array(z.enum(options.map((option) => option.value)))
        .min(1, "최소 하나 이상의 옵션을 선택해 주세요."),
    });

    const form = useForm({
      resolver: zodResolver(schema),
      defaultValues: {
        options: [],
      },
    });

    const onSubmit = form.handleSubmit(noop);

    return (
      <Form onSubmit={onSubmit} className="flex w-[24rem] flex-col gap-4">
        <Controller
          name="options"
          control={form.control}
          render={({ field: { value, onChange, ...rest }, fieldState }) => (
            <Form.Field invalid={fieldState.invalid}>
              <Form.Label>레이블</Form.Label>
              <Form.Control>
                <CheckSelectBox value={value} onValueChange={onChange} {...rest}>
                  {options.map((option) => (
                    <CheckSelectBox.Option key={option.value} value={option.value}>
                      <CheckSelectBox.Label>{option.label}</CheckSelectBox.Label>
                      <CheckSelectBox.Description>{option.description}</CheckSelectBox.Description>
                    </CheckSelectBox.Option>
                  ))}
                </CheckSelectBox>
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
