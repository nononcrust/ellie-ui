import { Fab } from "@/components/ui/fab";
import { Meta, StoryObj } from "@storybook/react";
import { PlusIcon } from "lucide-react";

const meta = {
  title: "packages/ui/Fab",
  component: Fab,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Fab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => {
    return (
      <Fab variant="primary" aria-label="추가">
        <PlusIcon size={24} />
      </Fab>
    );
  },
};

export const Secondary: Story = {
  render: () => {
    return (
      <Fab variant="secondary" aria-label="추가">
        <PlusIcon size={24} />
      </Fab>
    );
  },
};

export const WithLabel: Story = {
  render: () => {
    return (
      <Fab variant="primary" withLabel>
        추가하기
        <PlusIcon size={24} />
      </Fab>
    );
  },
};
