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
  decorators: [
    (Story) => (
      <div className="w-[20rem]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return <Textarea />;
  },
};

export const WithPlaceholder: Story = {
  render: () => {
    return <Textarea placeholder="텍스트를 입력하세요" />;
  },
};

export const Disabled: Story = {
  render: () => {
    return <Textarea disabled />;
  },
};

export const Invalid: Story = {
  render: () => {
    return <Textarea invalid />;
  },
};

export const WithLabel: Story = {
  render: () => {
    const inputId = useId();

    return (
      <div>
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
      <Form.Field>
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
    return <Textarea readOnly value="읽기 전용입니다." />;
  },
};

export const Controlled: Story = {
  render: () => {
    const input = useInput();

    return <Textarea {...input.register()} />;
  },
};
