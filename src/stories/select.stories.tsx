import { Select } from "@/components/ui/select";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "packages/ui/Select",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <Select className="w-[200px]" placeholder="과일을 선택해주세요." defaultValue="">
        <Select.Option value="1">바나나</Select.Option>
        <Select.Option value="2">사과</Select.Option>
        <Select.Option value="3">포도</Select.Option>
        <Select.Option value="4">딸기</Select.Option>
      </Select>
    );
  },
};
