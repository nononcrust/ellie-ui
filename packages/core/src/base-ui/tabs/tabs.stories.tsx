import { useTabs } from "@ellie-ui/core/hooks";
import { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs } from ".";

const meta = {
  title: "base-ui/Tabs",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <Tabs defaultValue="1">
        <Tabs.List>
          <Tabs.Tab value="1">버튼 1</Tabs.Tab>
          <Tabs.Tab value="2">버튼 2</Tabs.Tab>
          <Tabs.Tab value="3">버튼 3</Tabs.Tab>
        </Tabs.List>
      </Tabs>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <Tabs defaultValue="1">
        <Tabs.List>
          <Tabs.Tab value="1">버튼 1</Tabs.Tab>
          <Tabs.Tab disabled value="2">
            버튼 2
          </Tabs.Tab>
          <Tabs.Tab value="3">버튼 3</Tabs.Tab>
        </Tabs.List>
      </Tabs>
    );
  },
};

export const Large: Story = {
  render: () => {
    return (
      <Tabs defaultValue="1">
        <Tabs.List size="large">
          <Tabs.Tab value="1">버튼 1</Tabs.Tab>
          <Tabs.Tab value="2">버튼 2</Tabs.Tab>
          <Tabs.Tab value="3">버튼 3</Tabs.Tab>
        </Tabs.List>
      </Tabs>
    );
  },
};

export const FullWidth: Story = {
  render: () => {
    return (
      <Tabs defaultValue="1">
        <Tabs.List fullWidth className="w-[25rem]">
          <Tabs.Tab value="1">버튼 1</Tabs.Tab>
          <Tabs.Tab value="2">버튼 2</Tabs.Tab>
          <Tabs.Tab value="3">버튼 3</Tabs.Tab>
        </Tabs.List>
      </Tabs>
    );
  },
};

export const Manual: Story = {
  render: () => {
    return (
      <Tabs defaultValue="1">
        <Tabs.List activateOnFocus={false}>
          <Tabs.Tab value="1">버튼 1</Tabs.Tab>
          <Tabs.Tab value="2">버튼 2</Tabs.Tab>
          <Tabs.Tab value="3">버튼 3</Tabs.Tab>
        </Tabs.List>
      </Tabs>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const tabs = useTabs("1");

    return (
      <Tabs value={tabs.value} onChange={tabs.onChange}>
        <Tabs.List>
          <Tabs.Tab value="1">버튼 1</Tabs.Tab>
          <Tabs.Tab value="2">버튼 2</Tabs.Tab>
          <Tabs.Tab value="3">버튼 3</Tabs.Tab>
        </Tabs.List>
      </Tabs>
    );
  },
};
