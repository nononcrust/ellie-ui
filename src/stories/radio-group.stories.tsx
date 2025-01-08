import { RadioGroup } from "@/components/ui/radio-group";
import type { Meta, StoryObj } from "@storybook/react";
import { useId } from "react";

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
  const id = useId();

  return (
    <RadioGroup>
      <RadioGroup.Option>
        <RadioGroup.Item value="1" id={`${id}-1`} />
        <RadioGroup.Label htmlFor={`${id}-1`}>바나나</RadioGroup.Label>
      </RadioGroup.Option>
      <RadioGroup.Option>
        <RadioGroup.Item value="2" id={`${id}-2`} />
        <RadioGroup.Label htmlFor={`${id}-2`}>사과</RadioGroup.Label>
      </RadioGroup.Option>
    </RadioGroup>
  );
};

export const Default: Story = {
  render: DefaultRender,
};
