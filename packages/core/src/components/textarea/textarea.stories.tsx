import { Form, Label, Textarea } from "@ellie-ui/core";
import { useInput } from "@ellie-ui/core/hooks";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useId } from "react";

const meta = {
  title: "components/Textarea",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <div className="w-[20rem]">
        <Textarea />
      </div>
    );
  },
};

export const WithPlaceholder: Story = {
  render: () => {
    return (
      <div className="w-[20rem]">
        <Textarea placeholder="텍스트를 입력하세요" />
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <div className="w-[20rem]">
        <Textarea disabled />
      </div>
    );
  },
};

export const Invalid: Story = {
  render: () => {
    return (
      <div className="w-[20rem]">
        <Textarea invalid />
      </div>
    );
  },
};

export const WithLabel: Story = {
  render: () => {
    const inputId = useId();

    return (
      <div className="w-[20rem]">
        <Label className="mb-2 flex" htmlFor={inputId}>
          내용
        </Label>
        <Textarea id={inputId} />
      </div>
    );
  },
};

export const WithForm: Story = {
  render: () => {
    return (
      <Form.Field className="w-[20rem]">
        <Form.Label>내용</Form.Label>
        <Form.Control>
          <Textarea />
        </Form.Control>
        <Form.Description>내용을 입력해주세요.</Form.Description>
      </Form.Field>
    );
  },
};

export const ReadOnly: Story = {
  render: () => {
    return (
      <div className="w-[20rem]">
        <Textarea readOnly value="읽기 전용입니다." />
      </div>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const input = useInput();

    return (
      <div className="w-[20rem]">
        <Textarea {...input.register()} />
      </div>
    );
  },
};
