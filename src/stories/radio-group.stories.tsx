import { RadioGroup } from "@/components/ui/radio-group";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "packages/ui/RadioGroup",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  render: () => {
    return (
      <RadioGroup size="small">
        <RadioGroup.Option value="1">선택 1</RadioGroup.Option>
        <RadioGroup.Option value="2">선택 2</RadioGroup.Option>
      </RadioGroup>
    );
  },
};

export const Medium: Story = {
  render: () => {
    return (
      <RadioGroup>
        <RadioGroup.Option value="1">선택 1</RadioGroup.Option>
        <RadioGroup.Option value="2">선택 2</RadioGroup.Option>
      </RadioGroup>
    );
  },
};

export const Large: Story = {
  render: () => {
    return (
      <RadioGroup size="large">
        <RadioGroup.Option value="1">선택 1</RadioGroup.Option>
        <RadioGroup.Option value="2">선택 2</RadioGroup.Option>
      </RadioGroup>
    );
  },
};
