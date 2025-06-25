import { useCheckbox, useCheckboxGroup } from "@ellie-ui/core/hooks";
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
    return <Checkbox>서비스 약관에 동의합니다.</Checkbox>;
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

const terms = [
  { value: "terms", label: "서비스 약관에 동의합니다." },
  { value: "privacy", label: "개인정보 처리방침에 동의합니다." },
  { value: "marketing", label: "마케팅 정보 수신에 동의합니다." },
] as const;

export const Group: Story = {
  render: () => {
    const checkboxGroup = useCheckboxGroup({
      entries: terms.map((term) => term.value),
    });

    return (
      <Checkbox.Group
        className="flex flex-col gap-2"
        value={checkboxGroup.value}
        onChange={checkboxGroup.onChange}
        allValues={checkboxGroup.allValues}
      >
        <Checkbox className="mb-4" parent>
          전체 선택
        </Checkbox>
        {terms.map((term) => (
          <Checkbox key={term.value} value={term.value}>
            {term.label}
          </Checkbox>
        ))}
      </Checkbox.Group>
    );
  },
};
