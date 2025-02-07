import { Button, ButtonProps } from "@/components/ui/button";
import type { Meta, StoryObj } from "@storybook/react";
import { ArrowRightIcon, Trash2Icon } from "lucide-react";

const meta = {
  title: "packages/ui/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => {
    return makeButtonSetByVariant("primary");
  },
};

export const Secondary: Story = {
  render: () => {
    return makeButtonSetByVariant("secondary");
  },
};

export const Outlined: Story = {
  render: () => {
    return makeButtonSetByVariant("outlined");
  },
};

export const Ghost: Story = {
  render: () => {
    return makeButtonSetByVariant("ghost");
  },
};

export const PrimaryLow: Story = {
  render: () => {
    return makeButtonSetByVariant("primaryLow");
  },
};

export const Error: Story = {
  render: () => {
    return makeButtonSetByVariant("error");
  },
};

export const Disabled: Story = {
  render: () => {
    return makeButtonSetByProps({ disabled: true });
  },
};

export const Small: Story = {
  render: () => {
    return (
      <div className="flex gap-2">
        <Button size="small">버튼</Button>
        <Button size="small">
          <Trash2Icon width={14} />
          삭제
        </Button>
        <Button size="small">
          이동하기
          <ArrowRightIcon width={14} />
        </Button>
      </div>
    );
  },
};

export const Large: Story = {
  render: () => {
    return (
      <div className="flex gap-2">
        <Button size="large">버튼</Button>
        <Button size="large">
          <Trash2Icon width={18} />
          삭제
        </Button>
        <Button size="large">
          이동하기
          <ArrowRightIcon width={18} />
        </Button>
      </div>
    );
  },
};

export const XLarge: Story = {
  render: () => {
    return (
      <div className="flex gap-2">
        <Button size="xlarge">버튼</Button>
        <Button size="xlarge">
          <Trash2Icon width={20} />
          삭제
        </Button>
        <Button size="xlarge">
          이동하기
          <ArrowRightIcon width={20} />
        </Button>
      </div>
    );
  },
};

export const CTA: Story = {
  render: () => {
    return (
      <div className="flex w-[320px] flex-col gap-2">
        <Button size="xlarge">버튼</Button>
      </div>
    );
  },
};

const makeButtonSetByVariant = (variant: ButtonProps["variant"]) => {
  return (
    <div className="flex gap-2">
      <Button variant={variant}>버튼</Button>
      <Button variant={variant}>
        <Trash2Icon width={16} />
        삭제
      </Button>
      <Button variant={variant}>
        이동하기
        <ArrowRightIcon width={16} />
      </Button>
    </div>
  );
};

const makeButtonSetByProps = (props: ButtonProps) => {
  return (
    <div className="flex gap-2">
      <Button variant="primary" {...props}>
        버튼
      </Button>
      <Button variant="secondary" {...props}>
        버튼
      </Button>
      <Button variant="primaryLow" {...props}>
        버튼
      </Button>
      <Button variant="outlined" {...props}>
        버튼
      </Button>
    </div>
  );
};
