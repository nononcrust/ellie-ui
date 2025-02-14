import { NativeSelect } from "@/components/ui/native-select";
import { Select } from "@/components/ui/select";
import { useSelect } from "@/hooks/use-select";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "components/Select",
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

export const WithGroup: Story = {
  render: () => {
    return (
      <Select className="w-[200px]" placeholder="항목을 선택해주세요." defaultValue="">
        <Select.Group>
          <Select.Label>그룹 1</Select.Label>
          <Select.Option value="1">항목 1</Select.Option>
          <Select.Option value="2">항목 2</Select.Option>
          <Select.Option value="3">항목 3</Select.Option>
        </Select.Group>
        <Select.Separator />
        <Select.Group>
          <Select.Label>그룹 2</Select.Label>
          <Select.Option value="4">항목 4</Select.Option>
          <Select.Option value="5">항목 5</Select.Option>
          <Select.Option value="6">항목 6</Select.Option>
        </Select.Group>
      </Select>
    );
  },
};

export const Native: Story = {
  render: () => {
    return (
      <NativeSelect className="w-[200px]" defaultValue="" placeholder="과일을 선택해주세요.">
        <option value="1">바나나</option>
        <option value="2">사과</option>
        <option value="3">딸기</option>
      </NativeSelect>
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
