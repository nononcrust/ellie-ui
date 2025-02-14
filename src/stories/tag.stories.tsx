import { Tag } from "@/components/ui/tag";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "packages/ui/Tag",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => {
    return <Tag variant="primary">태그</Tag>;
  },
};

export const Secondary: Story = {
  render: () => {
    return <Tag variant="secondary">태그</Tag>;
  },
};

export const Outlined: Story = {
  render: () => {
    return <Tag variant="outlined">태그</Tag>;
  },
};

export const Info: Story = {
  render: () => {
    return <Tag variant="info">태그</Tag>;
  },
};

export const Success: Story = {
  render: () => {
    return <Tag variant="success">태그</Tag>;
  },
};

export const Warning: Story = {
  render: () => {
    return <Tag variant="warning">태그</Tag>;
  },
};

export const Danger: Story = {
  render: () => {
    return <Tag variant="danger">태그</Tag>;
  },
};
