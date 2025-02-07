import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "packages/ui/Checkbox",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return <Checkbox />;
  },
};

export const WithLabel: Story = {
  render: () => {
    return (
      <Label className="flex items-center gap-2">
        <Checkbox />
        서비스 약관에 동의합니다.
      </Label>
    );
  },
};
