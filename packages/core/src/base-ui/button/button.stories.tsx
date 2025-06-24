import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArrowRightIcon, PlusIcon } from "lucide-react";
import { useRef } from "react";
import { Button } from ".";

const meta = {
  title: "base-ui/Button",
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
    const ref = useRef<HTMLButtonElement>(null);

    return (
      <Button ref={ref} variant="primary">
        버튼
      </Button>
    );
  },
};

export const Secondary: Story = {
  render: () => {
    return <Button variant="secondary">버튼</Button>;
  },
};

export const Contained: Story = {
  render: () => {
    return <Button variant="contained">버튼</Button>;
  },
};

export const Outlined: Story = {
  render: () => {
    return <Button variant="outlined">버튼</Button>;
  },
};

export const Ghost: Story = {
  render: () => {
    return <Button variant="ghost">버튼</Button>;
  },
};

export const PrimaryLow: Story = {
  render: () => {
    return <Button variant="primaryLow">버튼</Button>;
  },
};

export const PrimaryLowOutlined: Story = {
  render: () => {
    return <Button variant="primaryLowOutlined">버튼</Button>;
  },
};

export const PrimaryOutlined: Story = {
  render: () => {
    return <Button variant="primaryOutlined">버튼</Button>;
  },
};

export const Error: Story = {
  render: () => {
    return <Button variant="error">버튼</Button>;
  },
};

export const Disabled: Story = {
  render: () => {
    return <Button disabled>버튼</Button>;
  },
};

export const WithPrefixIcon: Story = {
  render: () => {
    return (
      <Button>
        <PlusIcon className="size-[0.875rem]" />
        추가
      </Button>
    );
  },
};

export const WithSuffixIcon: Story = {
  render: () => {
    return (
      <Button>
        이동
        <ArrowRightIcon className="size-[0.875rem]" />
      </Button>
    );
  },
};

export const Small: Story = {
  render: () => {
    return <Button size="small">버튼</Button>;
  },
};

export const Large: Story = {
  render: () => {
    return <Button size="large">버튼</Button>;
  },
};

export const XLarge: Story = {
  render: () => {
    return <Button size="xlarge">버튼</Button>;
  },
};

export const WithRender: Story = {
  render: () => {
    return <Button render={<a href="#">링크</a>} />;
  },
};
