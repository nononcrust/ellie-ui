import { useTabs } from "@/hooks/use-tabs";
import { Tabs } from "@ellie-ui/core";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "components/Tabs",
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
          <Tabs.Trigger value="1">버튼 1</Tabs.Trigger>
          <Tabs.Trigger value="2">버튼 2</Tabs.Trigger>
          <Tabs.Trigger value="3">버튼 3</Tabs.Trigger>
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
          <Tabs.Trigger value="1">버튼 1</Tabs.Trigger>
          <Tabs.Trigger disabled value="2">
            버튼 2
          </Tabs.Trigger>
          <Tabs.Trigger value="3">버튼 3</Tabs.Trigger>
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
          <Tabs.Trigger value="1">버튼 1</Tabs.Trigger>
          <Tabs.Trigger value="2">버튼 2</Tabs.Trigger>
          <Tabs.Trigger value="3">버튼 3</Tabs.Trigger>
        </Tabs.List>
      </Tabs>
    );
  },
};

export const FullWidth: Story = {
  render: () => {
    return (
      <Tabs defaultValue="1">
        <Tabs.List fullWidth className="w-[400px]">
          <Tabs.Trigger value="1">버튼 1</Tabs.Trigger>
          <Tabs.Trigger value="2">버튼 2</Tabs.Trigger>
          <Tabs.Trigger value="3">버튼 3</Tabs.Trigger>
        </Tabs.List>
      </Tabs>
    );
  },
};

export const Manual: Story = {
  render: () => {
    return (
      <Tabs defaultValue="1" activationMode="manual">
        <Tabs.List>
          <Tabs.Trigger value="1">버튼 1</Tabs.Trigger>
          <Tabs.Trigger value="2">버튼 2</Tabs.Trigger>
          <Tabs.Trigger value="3">버튼 3</Tabs.Trigger>
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
          <Tabs.Trigger value="1">버튼 1</Tabs.Trigger>
          <Tabs.Trigger value="2">버튼 2</Tabs.Trigger>
          <Tabs.Trigger value="3">버튼 3</Tabs.Trigger>
        </Tabs.List>
      </Tabs>
    );
  },
};
