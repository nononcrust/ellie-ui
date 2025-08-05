import { render, screen } from "@testing-library/react";
import { useDatePicker } from "../../hooks/use-date-picker";
import { DatePicker } from "./date-picker";

const DefaultDatePicker = () => {
  const datePicker = useDatePicker();

  return (
    <DatePicker value={datePicker.value} onChange={datePicker.onChange} placeholder="날짜 선택" />
  );
};

describe("DatePicker", () => {
  test("정상적으로 렌더링되어야 합니다.", () => {
    render(<DefaultDatePicker />);

    const datePicker = screen.getByRole("button", { name: "날짜 선택" });

    expect(datePicker).toBeInTheDocument();
  });
});
