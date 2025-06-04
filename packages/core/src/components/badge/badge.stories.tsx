import { Badge } from "@ellie-ui/core";
import { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "components/Badge",
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
    return <Badge>뱃지</Badge>;
  },
};

export const Secondary: Story = {
  render: () => {
    return <Badge variant="secondary">뱃지</Badge>;
  },
};

export const Small: Story = {
  render: () => {
    return <Badge size="small">뱃지</Badge>;
  },
};

export const WithNumber: Story = {
  render: () => {
    return <Badge>99</Badge>;
  },
};
