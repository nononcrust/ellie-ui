import type { Meta, StoryObj } from "@storybook/react-vite";
import { useRadioGroup } from "../../hooks";
import { RadioSelectBox } from "./radio-select-box";

const meta = {
  title: "base-ui/RadioSelectBox",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RadioSelectBox>;

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
        <RadioSelectBox defaultValue="1">
          {options.map((option) => (
            <RadioSelectBox.Option key={option.value} value={option.value}>
              <RadioSelectBox.Label>{option.label}</RadioSelectBox.Label>
              <RadioSelectBox.Description>{option.description}</RadioSelectBox.Description>
            </RadioSelectBox.Option>
          ))}
        </RadioSelectBox>
      </div>
    );
  },
};

export const LabelOnly: Story = {
  render: () => {
    return (
      <div className="min-w-[24rem]">
        <RadioSelectBox defaultValue="1">
          {options.map((option) => (
            <RadioSelectBox.Option key={option.value} value={option.value}>
              <RadioSelectBox.Label>{option.label}</RadioSelectBox.Label>
            </RadioSelectBox.Option>
          ))}
        </RadioSelectBox>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    return (
      <div className="min-w-[24rem]">
        <RadioSelectBox disabled>
          {options.map((option) => (
            <RadioSelectBox.Option key={option.value} value={option.value}>
              <RadioSelectBox.Label>{option.label}</RadioSelectBox.Label>
              <RadioSelectBox.Description>{option.description}</RadioSelectBox.Description>
            </RadioSelectBox.Option>
          ))}
        </RadioSelectBox>
      </div>
    );
  },
};

export const OptionDisabled: Story = {
  render: () => {
    return (
      <div className="min-w-[24rem]">
        <RadioSelectBox>
          {options.map((option) => (
            <RadioSelectBox.Option
              key={option.value}
              value={option.value}
              disabled={option.value === "2"}
            >
              <RadioSelectBox.Label>{option.label}</RadioSelectBox.Label>
              <RadioSelectBox.Description>{option.description}</RadioSelectBox.Description>
            </RadioSelectBox.Option>
          ))}
        </RadioSelectBox>
      </div>
    );
  },
};

export const Invalid: Story = {
  render: () => {
    return (
      <div className="min-w-[24rem]">
        <RadioSelectBox aria-invalid defaultValue="1">
          {options.map((option) => (
            <RadioSelectBox.Option key={option.value} value={option.value}>
              <RadioSelectBox.Label>{option.label}</RadioSelectBox.Label>
              <RadioSelectBox.Description>{option.description}</RadioSelectBox.Description>
            </RadioSelectBox.Option>
          ))}
        </RadioSelectBox>
      </div>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const radioGroup = useRadioGroup("1");

    return (
      <div className="min-w-[24rem]">
        <RadioSelectBox {...radioGroup.register()}>
          {options.map((option) => (
            <RadioSelectBox.Option key={option.value} value={option.value}>
              <RadioSelectBox.Label>{option.label}</RadioSelectBox.Label>
              <RadioSelectBox.Description>{option.description}</RadioSelectBox.Description>
            </RadioSelectBox.Option>
          ))}
        </RadioSelectBox>
      </div>
    );
  },
};
