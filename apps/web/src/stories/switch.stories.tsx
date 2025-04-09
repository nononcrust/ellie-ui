import { useSwitch } from "@/hooks/use-switch";
import { Switch } from "@ellie-ui/core";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "components/Switch",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return <Switch />;
  },
};

export const Small: Story = {
  render: () => {
    return <Switch size="small" />;
  },
};

export const Controlled: Story = {
  render: () => {
    const { checked, onChange } = useSwitch();

    return <Switch checked={checked} onChange={onChange} />;
  },
};
