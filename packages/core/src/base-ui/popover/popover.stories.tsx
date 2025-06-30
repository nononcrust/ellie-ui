import { Button, Popover } from "@ellie-ui/core";
import { usePopover } from "@ellie-ui/core/hooks";
import { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "base-ui/Popover",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <Popover>
        <Popover.Trigger asChild>
          <Button>열기</Button>
        </Popover.Trigger>
        <Popover.Content className="flex h-40 w-[20rem] flex-col items-center justify-center gap-3">
          <span className="text-subtle text-sm">내용이 여기에 표시됩니다.</span>
          <Popover.Close asChild>
            <Button size="small" variant="outlined">
              닫기
            </Button>
          </Popover.Close>
        </Popover.Content>
      </Popover>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const popover = usePopover();

    return (
      <Popover isOpen={popover.isOpen} onOpenChange={popover.onOpenChange}>
        <Popover.Trigger asChild>
          <Button>열기</Button>
        </Popover.Trigger>
        <Popover.Content className="flex h-40 w-[20rem] flex-col items-center justify-center gap-3">
          <span className="text-subtle text-sm">내용이 여기에 표시됩니다.</span>
          <Popover.Close asChild>
            <Button size="small" variant="outlined">
              닫기
            </Button>
          </Popover.Close>
        </Popover.Content>
      </Popover>
    );
  },
};
