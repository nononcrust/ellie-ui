import { RadioGroup } from "@/components/ui/radio-group";
import { useRadioGroup } from "@/hooks/use-radio-group";
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

export const Default: Story = {
  render: () => {
    return (
      <RadioGroup defaultValue="1">
        <RadioGroup.Option value="1">선택 1</RadioGroup.Option>
        <RadioGroup.Option value="2">선택 2</RadioGroup.Option>
      </RadioGroup>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <RadioGroup disabled defaultValue="1">
        <RadioGroup.Option value="1">선택 1</RadioGroup.Option>
        <RadioGroup.Option value="2">선택 2</RadioGroup.Option>
      </RadioGroup>
    );
  },
};

export const OptionDisabled: Story = {
  render: () => {
    return (
      <RadioGroup defaultValue="1">
        <RadioGroup.Option value="1" disabled>
          선택 1
        </RadioGroup.Option>
        <RadioGroup.Option value="2">선택 2</RadioGroup.Option>
      </RadioGroup>
    );
  },
};

export const Error: Story = {
  render: () => {
    return (
      <RadioGroup aria-invalid defaultValue="1">
        <RadioGroup.Option value="1">선택 1</RadioGroup.Option>
        <RadioGroup.Option value="2">선택 2</RadioGroup.Option>
      </RadioGroup>
    );
  },
};

export const Small: Story = {
  render: () => {
    return (
      <RadioGroup size="small" defaultValue="1">
        <RadioGroup.Option value="1">선택 1</RadioGroup.Option>
        <RadioGroup.Option value="2">선택 2</RadioGroup.Option>
      </RadioGroup>
    );
  },
};

export const Large: Story = {
  render: () => {
    return (
      <RadioGroup size="large" defaultValue="1">
        <RadioGroup.Option value="1">선택 1</RadioGroup.Option>
        <RadioGroup.Option value="2">선택 2</RadioGroup.Option>
      </RadioGroup>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const radioGroup = useRadioGroup("1");

    return (
      <RadioGroup value={radioGroup.value} onChange={radioGroup.onChange}>
        <RadioGroup.Option value="1">선택 1</RadioGroup.Option>
        <RadioGroup.Option value="2">선택 2</RadioGroup.Option>
      </RadioGroup>
    );
  },
};
