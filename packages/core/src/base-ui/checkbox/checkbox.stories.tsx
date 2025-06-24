import { useCheckbox } from "@ellie-ui/core/hooks";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from ".";

const meta = {
  title: "base-ui/Checkbox",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return <Checkbox aria-label="체크박스" />;
  },
};

export const Checked: Story = {
  render: () => {
    return <Checkbox defaultChecked aria-label="체크박스" />;
  },
};

export const Disabled: Story = {
  render: () => {
    return <Checkbox disabled aria-label="체크박스" />;
  },
};

export const Indeterminate: Story = {
  render: () => {
    return <Checkbox indeterminate aria-label="체크박스" />;
  },
};

export const Error: Story = {
  render: () => {
    return <Checkbox aria-invalid aria-label="체크박스" />;
  },
};

export const Small: Story = {
  render: () => {
    return <Checkbox size="small" aria-label="체크박스" />;
  },
};

export const Large: Story = {
  render: () => {
    return <Checkbox size="large" aria-label="체크박스" />;
  },
};

export const WithLabel: Story = {
  render: () => {
    return (
      <label className="flex items-center gap-2">
        <Checkbox />
        서비스 약관에 동의합니다.
      </label>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const checkbox = useCheckbox();

    return (
      <Checkbox checked={checkbox.checked} onChange={checkbox.onChange} aria-label="체크박스" />
    );
  },
};
