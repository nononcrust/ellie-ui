import type { Meta, StoryObj } from "@storybook/react-vite";
import { SearchIcon } from "lucide-react";
import { IconButton } from ".";

const meta = {
  title: "base-ui/IconButton",
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
      <IconButton aria-label="검색" variant="primary">
        <SearchIcon className="size-[1rem]" />
      </IconButton>
    );
  },
};

export const Secondary: Story = {
  render: () => {
    return (
      <IconButton aria-label="검색" variant="secondary">
        <SearchIcon className="size-[1rem]" />
      </IconButton>
    );
  },
};

export const Contained: Story = {
  render: () => {
    return (
      <IconButton aria-label="검색" variant="contained">
        <SearchIcon className="size-[1rem]" />
      </IconButton>
    );
  },
};

export const Outlined: Story = {
  render: () => {
    return (
      <IconButton aria-label="검색" variant="outlined">
        <SearchIcon className="size-[1rem]" />
      </IconButton>
    );
  },
};

export const Ghost: Story = {
  render: () => {
    return (
      <IconButton aria-label="검색" variant="ghost">
        <SearchIcon className="size-[1rem]" />
      </IconButton>
    );
  },
};

export const PrimaryLow: Story = {
  render: () => {
    return (
      <IconButton aria-label="검색" variant="primaryLow">
        <SearchIcon className="size-[1rem]" />
      </IconButton>
    );
  },
};

export const PrimayLowOutlined: Story = {
  render: () => {
    return (
      <IconButton aria-label="검색" variant="primaryLowOutlined">
        <SearchIcon className="size-[1rem]" />
      </IconButton>
    );
  },
};

export const PrimayOutlined: Story = {
  render: () => {
    return (
      <IconButton aria-label="검색" variant="primaryOutlined">
        <SearchIcon className="size-[1rem]" />
      </IconButton>
    );
  },
};

export const Error: Story = {
  render: () => {
    return (
      <IconButton aria-label="검색" variant="error">
        <SearchIcon className="size-[1rem]" />
      </IconButton>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <IconButton aria-label="검색" disabled>
        <SearchIcon className="size-[1rem]" />
      </IconButton>
    );
  },
};

export const XSmall: Story = {
  render: () => {
    return (
      <IconButton size="xsmall" aria-label="검색">
        <SearchIcon className="size-[0.75rem]" />
      </IconButton>
    );
  },
};

export const Small: Story = {
  render: () => {
    return (
      <IconButton size="small" aria-label="검색">
        <SearchIcon className="size-[0.875rem]" />
      </IconButton>
    );
  },
};

export const Large: Story = {
  render: () => {
    return (
      <IconButton size="large" aria-label="검색">
        <SearchIcon className="size-[1.125rem]" />
      </IconButton>
    );
  },
};

export const WithRender: Story = {
  render: () => {
    return (
      <IconButton
        render={
          <a href="#">
            <SearchIcon className="size-[0.875rem]" />
          </a>
        }
        size="small"
        aria-label="검색"
      />
    );
  },
};
