import { Badge } from "@/components/ui/badge";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "packages/ui/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => {
    return (
      <div className="flex gap-1">
        <Badge>1</Badge>
        <Badge>99</Badge>
        <Badge>뱃지</Badge>
      </div>
    );
  },
};

export const Secondary: Story = {
  render: () => {
    return (
      <div className="flex gap-1">
        <Badge variant="secondary">1</Badge>
        <Badge variant="secondary">99</Badge>
        <Badge variant="secondary">뱃지</Badge>
      </div>
    );
  },
};

export const Small: Story = {
  render: () => {
    return (
      <div className="flex gap-1">
        <Badge size="small">1</Badge>
        <Badge size="small">99</Badge>
        <Badge size="small">뱃지</Badge>
      </div>
    );
  },
};
