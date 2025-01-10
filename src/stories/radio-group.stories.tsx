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

const DefaultRender = () => {
  return (
    <RadioGroup>
      <RadioGroup.Option value="1">바나나</RadioGroup.Option>
      <RadioGroup.Option value="2">사과</RadioGroup.Option>
    </RadioGroup>
  );
};

export const Default: Story = {
  render: DefaultRender,
};
