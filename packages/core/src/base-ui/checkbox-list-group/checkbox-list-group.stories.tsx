import type { Meta, StoryObj } from "@storybook/react-vite";
import { useCheckboxGroup } from "../../hooks";
import { CheckboxListGroup } from "./checkbox-list-group";

const meta = {
  title: "base-ui/CheckboxListGroup",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CheckboxListGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  {
    value: "1",
    label: "동적 UI",
    description: "조건을 걸어 서버에 동작할 수 있는 통신을 보낼 수 있어요.",
  },
  { value: "2", label: "조건 조회 UI", description: "조건을 설정하여 데이터를 조회할 수 있어요." },
  {
    value: "3",
    label: "조건 조회 + 동적 UI",
    description: "조건을 설정하여 데이터를 조회하고 추가 동작을 할 수 있어요.",
  },
] as const;

export const Default: Story = {
  render: () => {
    return (
      <div className="min-w-[24rem]">
        <CheckboxListGroup defaultValue={["1"]}>
          {options.map((option) => (
            <CheckboxListGroup.Option key={option.value} value={option.value}>
              <CheckboxListGroup.Label>{option.label}</CheckboxListGroup.Label>
              <CheckboxListGroup.Description>{option.description}</CheckboxListGroup.Description>
            </CheckboxListGroup.Option>
          ))}
        </CheckboxListGroup>
      </div>
    );
  },
};

export const LabelOnly: Story = {
  render: () => {
    return (
      <div className="min-w-[24rem]">
        <CheckboxListGroup defaultValue={["1"]}>
          {options.map((option) => (
            <CheckboxListGroup.Option key={option.value} value={option.value}>
              <CheckboxListGroup.Label>{option.label}</CheckboxListGroup.Label>
            </CheckboxListGroup.Option>
          ))}
        </CheckboxListGroup>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <div className="min-w-[24rem]">
        <CheckboxListGroup defaultValue={["1"]} disabled>
          {options.map((option) => (
            <CheckboxListGroup.Option key={option.value} value={option.value}>
              <CheckboxListGroup.Label>{option.label}</CheckboxListGroup.Label>
              <CheckboxListGroup.Description>{option.description}</CheckboxListGroup.Description>
            </CheckboxListGroup.Option>
          ))}
        </CheckboxListGroup>
      </div>
    );
  },
};

export const OptionDisabled: Story = {
  render: () => {
    return (
      <div className="min-w-[24rem]">
        <CheckboxListGroup>
          {options.map((option) => (
            <CheckboxListGroup.Option
              key={option.value}
              value={option.value}
              disabled={option.value === "2"}
            >
              <CheckboxListGroup.Label>{option.label}</CheckboxListGroup.Label>
              <CheckboxListGroup.Description>{option.description}</CheckboxListGroup.Description>
            </CheckboxListGroup.Option>
          ))}
        </CheckboxListGroup>
      </div>
    );
  },
};

export const Error: Story = {
  render: () => {
    return (
      <div className="min-w-[24rem]">
        <CheckboxListGroup defaultValue={["1"]} aria-invalid>
          {options.map((option) => (
            <CheckboxListGroup.Option key={option.value} value={option.value}>
              <CheckboxListGroup.Label>{option.label}</CheckboxListGroup.Label>
              <CheckboxListGroup.Description>{option.description}</CheckboxListGroup.Description>
            </CheckboxListGroup.Option>
          ))}
        </CheckboxListGroup>
      </div>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const checkboxGroup = useCheckboxGroup({
      entries: options.map((option) => option.value),
      initialEntries: ["1"],
    });

    return (
      <div className="min-w-[24rem]">
        <CheckboxListGroup value={checkboxGroup.value} onChange={checkboxGroup.onChange}>
          {options.map((option) => (
            <CheckboxListGroup.Option key={option.value} value={option.value}>
              <CheckboxListGroup.Label>{option.label}</CheckboxListGroup.Label>
              <CheckboxListGroup.Description>{option.description}</CheckboxListGroup.Description>
            </CheckboxListGroup.Option>
          ))}
        </CheckboxListGroup>
      </div>
    );
  },
};
