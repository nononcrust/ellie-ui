import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Checkbox } from "./checkbox";

describe("Checkbox", () => {
  test("[a11y] checkbox에 role='checkbox' 속성이 존재해야 합니다.", () => {
    render(<Checkbox />);

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toBeInTheDocument();
  });

  test("[a11y] checkbox가 체크되지 않은 경우 aria-checked 속성이 false여야 합니다.", () => {
    render(<Checkbox />);

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toHaveAttribute("aria-checked", "false");
  });

  test("[a11y] checkbox가 체크된 경우 aria-checked 속성이 true여야 합니다.", async () => {
    render(<Checkbox defaultChecked />);

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toHaveAttribute("aria-checked", "true");
  });

  test('[a11y] checkbox가 indeterminate 상태인 경우 aria-checked 속성이 "mixed"여야 합니다.', async () => {
    render(<Checkbox defaultChecked="indeterminate" />);

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toHaveAttribute("aria-checked", "mixed");
  });

  test("[a11y] Space 키를 눌러 체크 상태를 변경할 수 있어야 합니다.", async () => {
    render(<Checkbox />);

    const user = userEvent.setup();

    const checkbox = screen.getByRole("checkbox");

    act(() => checkbox.focus());

    await user.keyboard(" ");

    expect(checkbox).toHaveAttribute("aria-checked", "true");

    await user.keyboard(" ");

    expect(checkbox).toHaveAttribute("aria-checked", "false");
  });

  test("[a11y] group에 role='group' 속성이 존재해야 합니다.", () => {
    render(
      <Checkbox.Group>
        <Checkbox />
        <Checkbox />
      </Checkbox.Group>,
    );

    const group = screen.getByRole("group");

    expect(group).toBeInTheDocument();
  });
});
