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
        <Select.Item value="1">React</Select.Item>
        <Select.Item value="2">Next.js</Select.Item>
        <Select.Item value="3">Astro</Select.Item>
        <Select.Item value="4">Gatsby</Select.Item>
      </Select>
    );
  },
};
