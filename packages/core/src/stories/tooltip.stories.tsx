import { IconButton, Tooltip } from "@ellie-ui/core";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { SearchIcon } from "lucide-react";

const meta = {
  title: "components/Tooltip",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <Tooltip content="툴팁 메시지">
        <IconButton aria-label="검색" variant="outlined" size="small">
          <SearchIcon className="size-4" />
        </IconButton>
      </Tooltip>
    );
  },
};

export const Outlined: Story = {
  render: () => {
    return (
      <Tooltip content="툴팁 메시지" variant="outlined">
        <IconButton aria-label="검색" variant="outlined" size="small">
          <SearchIcon className="size-4" />
        </IconButton>
      </Tooltip>
    );
  },
};
