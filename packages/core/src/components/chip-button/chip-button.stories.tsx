import { ChipButton } from "@ellie-ui/core";
import { Meta, StoryObj } from "@storybook/react-vite";
import { ChevronDownIcon, PlusIcon } from "lucide-react";

const meta = {
  title: "components/ChipButton",
  component: ChipButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ChipButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => {
    return <ChipButton>버튼</ChipButton>;
  },
};

export const Secondary: Story = {
  render: () => {
    return <ChipButton variant="secondary">버튼</ChipButton>;
  },
};

export const Contained: Story = {
  render: () => {
    return <ChipButton variant="contained">버튼</ChipButton>;
  },
};

export const Outlined: Story = {
  render: () => {
    return <ChipButton variant="outlined">버튼</ChipButton>;
  },
};

export const Ghost: Story = {
  render: () => {
    return <ChipButton variant="ghost">버튼</ChipButton>;
  },
};

export const PrimaryLow: Story = {
  render: () => {
    return <ChipButton variant="primaryLow">버튼</ChipButton>;
  },
};

export const PrimaryLowOutlined: Story = {
  render: () => {
    return <ChipButton variant="primaryLowOutlined">버튼</ChipButton>;
  },
};

export const PrimaryOutlined: Story = {
  render: () => {
    return <ChipButton variant="primaryOutlined">버튼</ChipButton>;
  },
};

export const WithPrefixIcon: Story = {
  render: () => {
    return (
      <ChipButton>
        <PlusIcon className="size-4" />
        버튼
      </ChipButton>
    );
  },
};

export const WithSuffixIcon: Story = {
  render: () => {
    return (
      <ChipButton>
        버튼
        <ChevronDownIcon className="size-4" />
      </ChipButton>
    );
  },
};

export const Small: Story = {
  render: () => {
    return <ChipButton size="small">버튼</ChipButton>;
  },
};

export const XSmall: Story = {
  render: () => {
    return <ChipButton size="xsmall">버튼</ChipButton>;
  },
};
