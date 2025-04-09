import { useDatePicker } from "@/hooks/use-date-picker";
import { useDateRangePicker } from "@/hooks/use-date-range-picker";
import { DatePicker, DateRangePicker } from "@ellie-ui/core";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "components/DatePicker",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const datePicker = useDatePicker();

    return (
      <DatePicker
        className="w-[240px]"
        value={datePicker.value}
        onChange={datePicker.onChange}
        aria-label="날짜 선택"
      />
    );
  },
};

export const WithPlaceholder: Story = {
  render: () => {
    const datePicker = useDatePicker();

    return (
      <DatePicker
        className="w-[240px]"
        placeholder="날짜를 선택해주세요"
        value={datePicker.value}
        onChange={datePicker.onChange}
      />
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const datePicker = useDatePicker();

    return (
      <DatePicker
        className="w-[240px]"
        value={datePicker.value}
        onChange={datePicker.onChange}
        disabled
      />
    );
  },
};

export const Error: Story = {
  render: () => {
    const datePicker = useDatePicker();

    return (
      <DatePicker
        className="w-[240px]"
        value={datePicker.value}
        onChange={datePicker.onChange}
        aria-invalid
      />
    );
  },
};

export const Range: Story = {
  render: () => {
    const dateRangePicker = useDateRangePicker();

    return (
      <DateRangePicker
        className="w-[240px]"
        placeholder="날짜 범위를 선택해주세요"
        value={dateRangePicker.value}
        onChange={dateRangePicker.onChange}
      />
    );
  },
};

export const DateBoundary: Story = {
  render: () => {
    const datePicker = useDatePicker();

    return (
      <DatePicker
        className="w-[240px]"
        placeholder="오늘부터 일주일 이내"
        value={datePicker.value}
        onChange={datePicker.onChange}
        hidden={{
          before: new Date(),
          after: new Date(new Date().setDate(new Date().getDate() + 7)),
        }}
      />
    );
  },
};
