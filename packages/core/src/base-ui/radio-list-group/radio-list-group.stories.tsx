import type { Meta, StoryObj } from "@storybook/react-vite";
import { useRadioGroup } from "../../hooks";
import { RadioListGroup } from "./radio-list-group";

const meta = {
  title: "base-ui/RadioListGroup",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RadioListGroup>;

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
        <RadioListGroup defaultValue="1">
          {options.map((option) => (
            <RadioListGroup.Option key={option.value} value={option.value}>
              <RadioListGroup.Label>{option.label}</RadioListGroup.Label>
              <RadioListGroup.Description>{option.description}</RadioListGroup.Description>
            </RadioListGroup.Option>
          ))}
        </RadioListGroup>
      </div>
    );
  },
};

export const LabelOnly: Story = {
  render: () => {
    return (
      <div className="min-w-[24rem]">
        <RadioListGroup defaultValue="1">
          {options.map((option) => (
            <RadioListGroup.Option key={option.value} value={option.value}>
              <RadioListGroup.Label>{option.label}</RadioListGroup.Label>
            </RadioListGroup.Option>
          ))}
        </RadioListGroup>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <div className="min-w-[24rem]">
        <RadioListGroup disabled>
          {options.map((option) => (
            <RadioListGroup.Option key={option.value} value={option.value}>
              <RadioListGroup.Label>{option.label}</RadioListGroup.Label>
              <RadioListGroup.Description>{option.description}</RadioListGroup.Description>
            </RadioListGroup.Option>
          ))}
        </RadioListGroup>
      </div>
    );
  },
};

export const OptionDisabled: Story = {
  render: () => {
    return (
      <div className="min-w-[24rem]">
        <RadioListGroup>
          {options.map((option) => (
            <RadioListGroup.Option
              key={option.value}
              value={option.value}
              disabled={option.value === "2"}
            >
              <RadioListGroup.Label>{option.label}</RadioListGroup.Label>
              <RadioListGroup.Description>{option.description}</RadioListGroup.Description>
            </RadioListGroup.Option>
          ))}
        </RadioListGroup>
      </div>
    );
  },
};

export const Error: Story = {
  render: () => {
    return (
      <div className="min-w-[24rem]">
        <RadioListGroup aria-invalid defaultValue="1">
          {options.map((option) => (
            <RadioListGroup.Option key={option.value} value={option.value}>
              <RadioListGroup.Label>{option.label}</RadioListGroup.Label>
              <RadioListGroup.Description>{option.description}</RadioListGroup.Description>
            </RadioListGroup.Option>
          ))}
        </RadioListGroup>
      </div>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const radioGroup = useRadioGroup("1");

    return (
      <div className="min-w-[24rem]">
        <RadioListGroup value={radioGroup.value} onChange={radioGroup.onChange}>
          {options.map((option) => (
            <RadioListGroup.Option key={option.value} value={option.value}>
              <RadioListGroup.Label>{option.label}</RadioListGroup.Label>
              <RadioListGroup.Description>{option.description}</RadioListGroup.Description>
            </RadioListGroup.Option>
          ))}
        </RadioListGroup>
      </div>
    );
  },
};
