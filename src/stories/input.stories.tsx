import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
    return <Input />;
  },
};

export const WithPlaceholder: Story = {
  render: () => {
    return <Input placeholder="텍스트를 입력하세요" />;
  },
};

export const WithLabelAndDescription: Story = {
  render: () => {
    return (
      <div className="flex w-full flex-col">
        <Label className="mb-2">이름</Label>
        <Input />
      </div>
    );
  },
};
