import { DatePicker, DateRangePicker } from "@ellie-ui/core";
import { useDatePicker, useDateRangePicker } from "@ellie-ui/core/hooks";
import { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "base-ui/DatePicker",
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

    return <DatePicker {...datePicker.register()} className="w-[15rem]" aria-label="날짜 선택" />;
  },
};

export const WithPlaceholder: Story = {
  render: () => {
    const datePicker = useDatePicker();

    return (
      <DatePicker
        {...datePicker.register()}
        className="w-[15rem]"
        placeholder="날짜를 선택해주세요"
      />
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const datePicker = useDatePicker();

    return <DatePicker {...datePicker.register()} className="w-[15rem]" disabled />;
  },
};

export const Invalid: Story = {
  render: () => {
    const datePicker = useDatePicker();

    return <DatePicker {...datePicker.register()} className="w-[15rem]" aria-invalid />;
  },
};

export const Range: Story = {
  render: () => {
    const dateRangePicker = useDateRangePicker();

    return (
      <DateRangePicker
        {...dateRangePicker.register()}
        className="w-[15rem]"
        placeholder="날짜 범위를 선택해주세요"
      />
    );
  },
};

export const DateBoundary: Story = {
  render: () => {
    const datePicker = useDatePicker();

    return (
      <DatePicker
        {...datePicker.register()}
        className="w-[15rem]"
        placeholder="오늘부터 일주일 이내"
        hidden={{
          before: new Date(),
          after: new Date(new Date().setDate(new Date().getDate() + 7)),
        }}
      />
    );
  },
};
