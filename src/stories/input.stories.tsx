import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "packages/ui/Input",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <div className="w-[320px]">
        <Input />
      </div>
    );
  },
};

export const WithPlaceholder: Story = {
  render: () => {
    return (
      <div className="w-[320px]">
        <Input placeholder="텍스트를 입력하세요" />
      </div>
    );
  },
};

export const WithLabelAndDescription: Story = {
  render: () => {
    return (
      <Form.Item className="w-[320px]">
        <Form.Label>이름</Form.Label>
        <Form.Control>
          <Input />
        </Form.Control>
        <Form.Description>이름은 2자 이상 20자 이하로 입력해주세요.</Form.Description>
      </Form.Item>
    );
  },
};
