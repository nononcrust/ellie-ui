import { IconButton } from "@/components/ui/icon-button";
import type { Meta, StoryObj } from "@storybook/react";
import {
  BookmarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CopyIcon,
  EllipsisIcon,
  MenuIcon,
  PlusIcon,
  Trash2Icon,
} from "lucide-react";

const meta = {
  title: "packages/ui/IconButton",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => {
    return (
      <div className="flex gap-2">
        {iconSet.map(({ size, label, icon }, index) => (
          <IconButton key={index} size={size} aria-label={label} variant="primary">
            {icon}
          </IconButton>
        ))}
      </div>
    );
  },
};

export const Secondary: Story = {
  render: () => {
    return (
      <div className="flex gap-2">
        {iconSet.map(({ size, label, icon }, index) => (
          <IconButton key={index} size={size} aria-label={label} variant="secondary">
            {icon}
          </IconButton>
        ))}
      </div>
    );
  },
};

export const Outlined: Story = {
  render: () => {
    return (
      <div className="flex gap-2">
        {iconSet.map(({ size, label, icon }, index) => (
          <IconButton key={index} size={size} aria-label={label} variant="outlined">
            {icon}
          </IconButton>
        ))}
      </div>
    );
  },
};

export const Ghost: Story = {
  render: () => {
    return (
      <div className="flex gap-2">
        {iconSet.map(({ size, label, icon }, index) => (
          <IconButton key={index} size={size} aria-label={label} variant="ghost">
            {icon}
          </IconButton>
        ))}
      </div>
    );
  },
};

export const Grouped: Story = {
  render: () => {
    return (
      <>
        <IconButton variant="outlined" size="large" aria-label="추가">
          <PlusIcon width={16} />
        </IconButton>
        <IconButton variant="outlined" size="large" aria-label="삭제">
          <Trash2Icon width={16} />
        </IconButton>
        <IconButton variant="outlined" size="large" aria-label="이전">
          <ChevronLeftIcon width={16} />
        </IconButton>
        <IconButton variant="outlined" size="large" aria-label="다음">
          <ChevronRightIcon width={16} />
        </IconButton>
      </>
    );
  },
};

const iconSet = [
  {
    size: "small",
    label: "추가",
    icon: <PlusIcon width={14} />,
  },
  {
    size: "small",
    label: "삭제",
    icon: <Trash2Icon width={12} />,
  },
  {
    size: "small",
    label: "이전",
    icon: <ChevronLeftIcon width={14} />,
  },
  {
    size: "small",
    label: "다음",
    icon: <ChevronRightIcon width={14} />,
  },
  {
    size: "medium",
    label: "메뉴",
    icon: <MenuIcon width={14} />,
  },
  {
    size: "medium",
    label: "복사",
    icon: <CopyIcon width={13} />,
  },
  {
    size: "large",
    label: "북마크",
    icon: <BookmarkIcon width={16} />,
  },
  {
    size: "large",
    label: "더보기",
    icon: <EllipsisIcon width={16} />,
  },
] as const;
