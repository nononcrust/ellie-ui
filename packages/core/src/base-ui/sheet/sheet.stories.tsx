import { Meta, StoryObj } from "@storybook/react-vite";
import { Sheet } from ".";
import { Button } from "../button";

const meta = {
  title: "base-ui/Sheet",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <Sheet>
        <Sheet.Trigger render={<Button>열기</Button>} />
        <Sheet.Content className="w-[400px]">
          <Sheet.Header>
            <Sheet.Title>시트 제목</Sheet.Title>
            <Sheet.Description>시트 설명이 여기에 표시됩니다.</Sheet.Description>
          </Sheet.Header>
        </Sheet.Content>
      </Sheet>
    );
  },
};
