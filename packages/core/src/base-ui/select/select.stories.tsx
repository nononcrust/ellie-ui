import { useSelect } from "@ellie-ui/core/hooks";
import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useState } from "react";
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

const items = [
  { value: "1", label: "바나나" },
  { value: "2", label: "사과" },
  { value: "3", label: "포도" },
  { value: "4", label: "딸기" },
] as const;

export const Default: Story = {
  render: () => {
    return (
      <Select className="w-[12.5rem]" items={items}>
        {items.map((item) => (
          <Select.Option key={item.value} value={item.value}>
            {item.label}
          </Select.Option>
        ))}
      </Select>
    );
  },
};

export const WithPlaceholder: Story = {
  render: () => {
    return (
      <Select className="w-[12.5rem]" items={items} placeholder="과일을 선택해주세요.">
        {items.map((item) => (
          <Select.Option key={item.value} value={item.value}>
            {item.label}
          </Select.Option>
        ))}
      </Select>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <Select className="w-[12.5rem]" disabled items={items}>
        {items.map((item) => (
          <Select.Option key={item.value} value={item.value}>
            {item.label}
          </Select.Option>
        ))}
      </Select>
    );
  },
};

const optionDisabledItems = [
  { value: "1", label: "바나나" },
  { value: "2", label: "사과" },
  { value: "3", label: "포도", disabled: true },
  { value: "4", label: "딸기" },
];

export const OptionDisabled: Story = {
  render: () => {
    return (
      <Select className="w-[12.5rem]" items={items}>
        {optionDisabledItems.map((item) => (
          <Select.Option key={item.value} value={item.value} disabled={item.disabled}>
            {item.label}
          </Select.Option>
        ))}
      </Select>
    );
  },
};

export const Invalid: Story = {
  render: () => {
    return (
      <Select className="w-[12.5rem]" invalid items={items}>
        {items.map((item) => (
          <Select.Option key={item.value} value={item.value}>
            {item.label}
          </Select.Option>
        ))}
      </Select>
    );
  },
};

const itemGroup = [
  {
    label: "그룹 1",
    options: [
      { value: "1", label: "항목 1" },
      { value: "2", label: "항목 2" },
      { value: "3", label: "항목 3" },
    ],
  },
  {
    label: "그룹 2",
    options: [
      { value: "4", label: "항목 4" },
      { value: "5", label: "항목 5" },
      { value: "6", label: "항목 6" },
    ],
  },
];

export const WithGroup: Story = {
  render: () => {
    return (
      <Select className="w-[12.5rem]" items={itemGroup.flatMap((g) => g.options)}>
        {itemGroup.map((group) => (
          <Separated key={group.label} by={<Select.Separator />}>
            <Select.Group key={group.label}>
              <Select.GroupLabel>{group.label}</Select.GroupLabel>
              {group.options.map((option) => (
                <Select.Option key={option.value} value={option.value}>
                  {option.label}
                </Select.Option>
              ))}
            </Select.Group>
          </Separated>
        ))}
      </Select>
    );
  },
};

export const Multiple: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([]);

    return (
      <Select className="w-[12.5rem]" multiple items={items} value={value} onValueChange={setValue}>
        {items.map((item) => (
          <Select.Option key={item.value} value={item.value}>
            {item.label}
          </Select.Option>
        ))}
      </Select>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const select = useSelect();

    return (
      <Select {...select.register()} className="w-[12.5rem]" items={items}>
        {items.map((item) => (
          <Select.Option key={item.value} value={item.value}>
            {item.label}
          </Select.Option>
        ))}
      </Select>
    );
  },
};

type SeparatedProps = {
  by: React.ReactNode;
  children: React.ReactNode;
};

const Separated = ({ by, children }: SeparatedProps) => {
  return (
    <>
      {React.Children.map(children, (child, index) => (
        <>
          {index > 0 && by}
          {child}
        </>
      ))}
    </>
  );
};
