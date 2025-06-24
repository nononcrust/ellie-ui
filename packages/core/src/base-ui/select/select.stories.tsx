import { useSelect } from "@ellie-ui/core/hooks";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from ".";

const meta = {
  title: "base-ui/Select",
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
      <Select className="w-[12.5rem]" defaultValue="">
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
      <Select className="w-[12.5rem]" placeholder="과일을 선택해주세요.">
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
      <Select className="w-[12.5rem]" placeholder="과일을 선택해주세요." defaultValue="" disabled>
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
      <Select className="w-[12.5rem]" placeholder="과일을 선택해주세요." defaultValue="">
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
      <Select
        className="w-[12.5rem]"
        placeholder="과일을 선택해주세요."
        defaultValue=""
        aria-invalid
      >
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
      <Select className="w-[12.5rem]" placeholder="항목을 선택해주세요." defaultValue="">
        <Select.Group>
          <Select.GroupLabel>그룹 1</Select.GroupLabel>
          <Select.Option value="1">항목 1</Select.Option>
          <Select.Option value="2">항목 2</Select.Option>
          <Select.Option value="3">항목 3</Select.Option>
        </Select.Group>
        <Select.Separator />
        <Select.Group>
          <Select.GroupLabel>그룹 2</Select.GroupLabel>
          <Select.Option value="4">항목 4</Select.Option>
          <Select.Option value="5">항목 5</Select.Option>
          <Select.Option value="6">항목 6</Select.Option>
        </Select.Group>
      </Select>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const select = useSelect();

    return (
      <Select
        className="w-[12.5rem]"
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
