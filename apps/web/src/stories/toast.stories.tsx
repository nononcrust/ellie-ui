import { Button, toast, Toaster } from "@ellie-ui/core";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "components/Toast",
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <>
        <Toaster />
        <Story />
      </>
    ),
  ],
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  render: () => {
    return (
      <Button onClick={() => toast.success("토스트 메시지가 여기에 표시됩니다.")}>토스트</Button>
    );
  },
};

export const Error: Story = {
  render: () => {
    return (
      <Button onClick={() => toast.error("토스트 메시지가 여기에 표시됩니다.")}>토스트</Button>
    );
  },
};
