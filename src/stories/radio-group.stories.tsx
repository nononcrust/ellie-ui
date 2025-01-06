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
  const bananaId = useId();
  const appleId = useId();

  return (
    <RadioGroup>
      <RadioGroup.Container>
        <RadioGroup.Item value="1" id={bananaId} />
        <RadioGroup.Label htmlFor={bananaId}>바나나</RadioGroup.Label>
      </RadioGroup.Container>
      <RadioGroup.Container>
        <RadioGroup.Item value="2" id={appleId} />
        <RadioGroup.Label htmlFor={appleId}>사과</RadioGroup.Label>
      </RadioGroup.Container>
    </RadioGroup>
  );
};

export const Default: Story = {
  render: DefaultRender,
};
