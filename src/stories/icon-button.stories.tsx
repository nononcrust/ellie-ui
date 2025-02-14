import { IconButton } from "@/components/ui/icon-button";
import type { Meta, StoryObj } from "@storybook/react";
import { SearchIcon } from "lucide-react";

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

export const Contained: Story = {
  render: () => {
    return (
      <IconButton size="small" aria-label="검색" variant="contained">
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

export const PrimaryLow: Story = {
  render: () => {
    return (
      <IconButton size="small" aria-label="검색" variant="primaryLow">
        <SearchIcon size={14} />
      </IconButton>
    );
  },
};

export const PrimayLowOutlined: Story = {
  render: () => {
    return (
      <IconButton size="small" aria-label="검색" variant="primaryLowOutlined">
        <SearchIcon size={14} />
      </IconButton>
    );
  },
};

export const PrimayOutlined: Story = {
  render: () => {
    return (
      <IconButton size="small" aria-label="검색" variant="primaryOutlined">
        <SearchIcon size={14} />
      </IconButton>
    );
  },
};

export const Error: Story = {
  render: () => {
    return (
      <IconButton size="small" aria-label="검색" variant="error">
        <SearchIcon size={14} />
      </IconButton>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <IconButton size="small" aria-label="검색" disabled>
        <SearchIcon size={14} />
      </IconButton>
    );
  },
};

export const XSmall: Story = {
  render: () => {
    return (
      <IconButton size="xsmall" aria-label="검색">
        <SearchIcon width={12} />
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

export const Large: Story = {
  render: () => {
    return (
      <IconButton size="large" aria-label="검색">
        <SearchIcon width={18} />
      </IconButton>
    );
  },
};
