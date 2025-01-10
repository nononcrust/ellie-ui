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
      <Select className="w-[120px]" placeholder="프레임워크를 선택하세요" defaultValue="1">
        <Select.Option value="1">React</Select.Option>
        <Select.Option value="2">Next.js</Select.Option>
        <Select.Option value="3">Astro</Select.Option>
        <Select.Option value="4">Gatsby</Select.Option>
      </Select>
    );
  },
};
