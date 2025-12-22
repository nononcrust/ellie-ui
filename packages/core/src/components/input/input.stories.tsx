import { Form, Input, Label } from "@ellie-ui/core";
import { useInput } from "@ellie-ui/core/hooks";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useId } from "react";

const meta = {
  title: "components/Input",
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
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const input = useInput({ format: "phoneNumberDashed" });

    return <Input {...input.register()} />;
  },
};

export const WithPlaceholder: Story = {
  render: () => {
    return <Input placeholder="텍스트를 입력하세요" />;
  },
};

export const Disabled: Story = {
  render: () => {
    return <Input disabled />;
  },
};

export const Invalid: Story = {
  render: () => {
    return <Input invalid />;
  },
};

export const WithLabel: Story = {
  render: () => {
    const inputId = useId();

    return (
      <div>
        <Label className="mb-2 flex" htmlFor={inputId}>
          이름
        </Label>
        <Input id={inputId} />
      </div>
    );
  },
};

export const WithForm: Story = {
  render: () => {
    return (
      <Form.Field>
        <Form.Label>이름</Form.Label>
        <Form.Control>
          <Input />
        </Form.Control>
        <Form.Description>이름은 2자 이상 20자 이하로 입력해주세요.</Form.Description>
      </Form.Field>
    );
  },
};

export const ReadOnly: Story = {
  render: () => {
    return <Input readOnly value="읽기 전용입니다." />;
  },
};

export const Controlled: Story = {
  render: () => {
    const input = useInput();

    return <Input {...input.register()} />;
  },
};
