import { Meta, StoryObj } from "@storybook/react-vite";
import { SearchIcon } from "lucide-react";
import { IconButton } from "../icon-button";
import { Tooltip } from "./tooltip";

const meta = {
  title: "base-ui/Tooltip",
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

export const Side: Story = {
  render: () => {
    const sides = ["left", "top", "bottom", "right"] as const;

    return (
      <div className="flex gap-2">
        {sides.map((side) => (
          <Tooltip key={side} content="툴팁 메시지" side={side}>
            <IconButton aria-label="검색" variant="outlined" size="small">
              <SearchIcon className="size-4" />
            </IconButton>
          </Tooltip>
        ))}
      </div>
    );
  },
};
