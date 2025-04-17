import { Form, Input, Label } from "@ellie-ui/core";
import { useInput } from "@ellie-ui/core/hooks";
import type { Meta, StoryObj } from "@storybook/react";
import { SearchIcon } from "lucide-react";
import { useId } from "react";

const meta = {
  title: "components/Input",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <div className="w-[20rem]">
        <Input />
      </div>
    );
  },
};

export const WithPlaceholder: Story = {
  render: () => {
    return (
      <div className="w-[20rem]">
        <Input placeholder="텍스트를 입력하세요" />
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <div className="w-[20rem]">
        <Input disabled />
      </div>
    );
  },
};

export const Error: Story = {
  render: () => {
    return (
      <div className="w-[20rem]">
        <Input aria-invalid />
      </div>
    );
  },
};

export const WithLabel: Story = {
  render: () => {
    const inputId = useId();

    return (
      <div className="w-[20rem]">
        <Label className="mb-2 flex" htmlFor={inputId}>
          이름
        </Label>
        <Input id={inputId} />
      </div>
    );
  },
};

export const WithForm: Story = {
  render: () => {
    return (
      <Form.Item className="w-[20rem]">
        <Form.Label>이름</Form.Label>
        <Form.Control>
          <Input />
        </Form.Control>
        <Form.Description>이름은 2자 이상 20자 이하로 입력해주세요.</Form.Description>
      </Form.Item>
    );
  },
};

export const WithPrefixIcon: Story = {
  render: () => {
    return (
      <div className="relative w-[20rem]">
        <SearchIcon className="text-sub absolute left-3 top-1/2 size-4 -translate-y-1/2" />
        <Input className="pl-9" />
      </div>
    );
  },
};

export const WithSuffixIcon: Story = {
  render: () => {
    return (
      <div className="relative w-[20rem]">
        <Input className="pr-9" />
        <SearchIcon className="text-sub absolute right-3 top-1/2 size-4 -translate-y-1/2" />
      </div>
    );
  },
};

export const WithPrefix: Story = {
  render: () => {
    return (
      <div className="relative w-[20rem]">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm">https://</span>
        <Input className="pl-15" placeholder="google.com" />
      </div>
    );
  },
};

export const WithSuffix: Story = {
  render: () => {
    return (
      <div className="relative w-[20rem]">
        <Input className="pr-12" placeholder="google" />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm">.com</span>
      </div>
    );
  },
};

export const ReadOnly: Story = {
  render: () => {
    return (
      <div className="w-[20rem]">
        <Input readOnly value="읽기 전용입니다." />
      </div>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const input = useInput();

    return (
      <div className="w-[20rem]">
        <Input value={input.value} onChange={input.onChange} />
      </div>
    );
  },
};
