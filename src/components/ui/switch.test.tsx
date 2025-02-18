import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Switch } from "./switch";

describe("Switch", () => {
  test("[a11y] switch에 role='switch' 속성이 존재해야 합니다.", async () => {
    render(<Switch />);

    const switchElement = screen.getByRole("switch");

    expect(switchElement).toBeInTheDocument();
  });

  test("[a11y] switch가 체크되지 않은 경우 aria-checked='false' 속성이 존재해야 합니다.", async () => {
    render(<Switch />);

    const switchElement = screen.getByRole("switch");

    expect(switchElement).toHaveAttribute("aria-checked", "false");
  });

  test("[a11y] switch가 체크된 경우 aria-checked='true' 속성이 존재해야 합니다.", async () => {
    render(<Switch defaultChecked />);

    const switchElement = screen.getByRole("switch");

    expect(switchElement).toHaveAttribute("aria-checked", "true");
  });

  test("[a11y] Space 키를 눌러 switch를 토글할 수 있어야 합니다.", async () => {
    render(<Switch />);

    const user = userEvent.setup();

    const switchElement = screen.getByRole("switch");

    act(() => switchElement.focus());

    await user.keyboard(" ");

    expect(switchElement).toHaveAttribute("aria-checked", "true");

    await user.keyboard(" ");

    expect(switchElement).toHaveAttribute("aria-checked", "false");
  });
});
