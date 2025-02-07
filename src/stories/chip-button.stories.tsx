import { ChipButton } from "@/components/ui/chip-button";
import { Meta, StoryObj } from "@storybook/react";
import { ChevronDownIcon } from "lucide-react";

const meta = {
  title: "packages/ui/ChipButton",
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

export const PrimaryLowOutlined: Story = {
  render: () => {
    return <ChipButton variant="primaryLowOutlined">버튼</ChipButton>;
  },
};

export const WithIcon: Story = {
  render: () => {
    return (
      <ChipButton>
        버튼
        <ChevronDownIcon size={16} />
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
