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
  SearchIcon,
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
      <IconButton size="small" aria-label="검색" variant="primary">
        <SearchIcon size={14} />
      </IconButton>
    );
  },
};

export const Secondary: Story = {
  render: () => {
    return (
      <IconButton size="small" aria-label="검색" variant="secondary">
        <SearchIcon size={14} />
      </IconButton>
    );
  },
};

export const Outlined: Story = {
  render: () => {
    return (
      <IconButton size="small" aria-label="검색" variant="outlined">
        <SearchIcon size={14} />
      </IconButton>
    );
  },
};

export const Ghost: Story = {
  render: () => {
    return (
      <IconButton size="small" aria-label="검색" variant="ghost">
        <SearchIcon size={14} />
      </IconButton>
    );
  },
};

export const Small: Story = {
  render: () => {
    return (
      <IconButton size="small" aria-label="검색">
        <SearchIcon width={14} />
      </IconButton>
    );
  },
};

export const Medium: Story = {
  render: () => {
    return (
      <IconButton size="medium" aria-label="검색">
        <SearchIcon width={16} />
      </IconButton>
    );
  },
};

export const Large: Story = {
  render: () => {
    return (
      <IconButton size="large" aria-label="검색">
        <SearchIcon width={18} />
      </IconButton>
    );
  },
};

export const IconSet: Story = {
  render: () => {
    return (
      <div className="flex gap-1">
        {iconSet.map((icon) => (
          <IconButton key={icon.label} size={icon.size} aria-label={icon.label}>
            {icon.icon}
          </IconButton>
        ))}
      </div>
    );
  },
};

const iconSet = [
  {
    size: "small",
    label: "검색",
    icon: <SearchIcon width={14} />,
  },
  {
    size: "small",
    label: "추가",
    icon: <PlusIcon width={16} />,
  },
  {
    size: "small",
    label: "삭제",
    icon: <Trash2Icon width={14} />,
  },
  {
    size: "small",
    label: "이전",
    icon: <ChevronLeftIcon width={16} />,
  },
  {
    size: "small",
    label: "다음",
    icon: <ChevronRightIcon width={16} />,
  },
  {
    size: "medium",
    label: "메뉴",
    icon: <MenuIcon width={16} />,
  },
  {
    size: "medium",
    label: "복사",
    icon: <CopyIcon width={14} />,
  },
  {
    size: "large",
    label: "북마크",
    icon: <BookmarkIcon width={18} />,
  },
  {
    size: "large",
    label: "더보기",
    icon: <EllipsisIcon width={18} />,
  },
] as const;
