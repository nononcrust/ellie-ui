import { Chip } from "@/components/ui/chip";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "components/Chip",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => {
    return <Chip>라벨</Chip>;
  },
};

export const Secondary: Story = {
  render: () => {
    return <Chip variant="secondary">라벨</Chip>;
  },
};

export const PrimaryLowOutlined: Story = {
  render: () => {
    return <Chip variant="primaryLowOutlined">라벨</Chip>;
  },
};

export const XSmall: Story = {
  render: () => {
    return <Chip size="xsmall">라벨</Chip>;
  },
};

export const Small: Story = {
  render: () => {
    return <Chip size="small">라벨</Chip>;
  },
};

export const Large: Story = {
  render: () => {
    return <Chip size="large">라벨</Chip>;
  },
};
