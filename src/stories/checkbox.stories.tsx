import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useCheckbox } from "@/hooks/use-checkbox";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "packages/ui/Checkbox",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return <Checkbox />;
  },
};

export const Checked: Story = {
  render: () => {
    return <Checkbox defaultChecked />;
  },
};

export const Disabled: Story = {
  render: () => {
    return <Checkbox disabled />;
  },
};

export const Indeterminate: Story = {
  render: () => {
    return <Checkbox checked="indeterminate" />;
  },
};

export const Error: Story = {
  render: () => {
    return <Checkbox aria-invalid />;
  },
};

export const Small: Story = {
  render: () => {
    return <Checkbox size="small" />;
  },
};

export const Large: Story = {
  render: () => {
    return <Checkbox size="large" />;
  },
};

export const WithLabel: Story = {
  render: () => {
    return (
      <Label className="flex items-center gap-2">
        <Checkbox />
        서비스 약관에 동의합니다.
      </Label>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const checkbox = useCheckbox();

    return <Checkbox checked={checkbox.checked} onChange={checkbox.onChange} />;
  },
};
