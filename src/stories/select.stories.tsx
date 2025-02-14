import { Select } from "@/components/ui/select";
import { useSelect } from "@/hooks/use-select";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "packages/ui/Select",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <Select className="w-[200px]" defaultValue="">
        <Select.Option value="1">바나나</Select.Option>
        <Select.Option value="2">사과</Select.Option>
        <Select.Option value="3">포도</Select.Option>
        <Select.Option value="4">딸기</Select.Option>
      </Select>
    );
  },
};

export const WithPlaceholder: Story = {
  render: () => {
    return (
      <Select className="w-[200px]" placeholder="과일을 선택해주세요." defaultValue="">
        <Select.Option value="1">바나나</Select.Option>
        <Select.Option value="2">사과</Select.Option>
        <Select.Option value="3">포도</Select.Option>
        <Select.Option value="4">딸기</Select.Option>
      </Select>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <Select className="w-[200px]" placeholder="과일을 선택해주세요." defaultValue="" disabled>
        <Select.Option value="1">바나나</Select.Option>
        <Select.Option value="2">사과</Select.Option>
        <Select.Option value="3">포도</Select.Option>
        <Select.Option value="4">딸기</Select.Option>
      </Select>
    );
  },
};

export const OptionDisabled: Story = {
  render: () => {
    return (
      <Select className="w-[200px]" placeholder="과일을 선택해주세요." defaultValue="">
        <Select.Option value="1">바나나</Select.Option>
        <Select.Option value="2" disabled>
          사과
        </Select.Option>
        <Select.Option value="3">포도</Select.Option>
        <Select.Option value="4">딸기</Select.Option>
      </Select>
    );
  },
};

export const Error: Story = {
  render: () => {
    return (
      <Select className="w-[200px]" placeholder="과일을 선택해주세요." defaultValue="" aria-invalid>
        <Select.Option value="1">바나나</Select.Option>
        <Select.Option value="2">사과</Select.Option>
        <Select.Option value="3">포도</Select.Option>
        <Select.Option value="4">딸기</Select.Option>
      </Select>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const select = useSelect();

    return (
      <Select
        className="w-[200px]"
        placeholder="과일을 선택해주세요."
        value={select.value}
        onChange={select.onChange}
      >
        <Select.Option value="1">바나나</Select.Option>
        <Select.Option value="2">사과</Select.Option>
        <Select.Option value="3">포도</Select.Option>
        <Select.Option value="4">딸기</Select.Option>
      </Select>
    );
  },
};
