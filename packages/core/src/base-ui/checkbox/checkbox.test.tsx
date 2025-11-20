import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Checkbox } from "./checkbox";

describe("Checkbox", () => {
  test("정상적으로 렌더링되어야 합니다.", () => {
    render(<Checkbox />);

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toBeInTheDocument();
  });

  test("checkbox를 클릭했을 때 체크 상태가 변경되어야 합니다.", async () => {
    render(<Checkbox />);

    const user = userEvent.setup();

    const checkbox = screen.getByRole("checkbox");

    await user.click(checkbox);

    expect(checkbox).toBeChecked();
  });

  test("체크 상태가 변경되었을 때 onCheckedChange가 호출되어야 합니다.", async () => {
    const onCheckedChange = vi.fn();

    render(<Checkbox onCheckedChange={onCheckedChange} />);

    const user = userEvent.setup();

    const checkbox = screen.getByRole("checkbox");

    await user.click(checkbox);

    expect(onCheckedChange).toBeCalledWith(true, expect.anything());
  });

  test("disabled가 true인 경우 disabled 상태가 되어야 합니다.", async () => {
    render(<Checkbox disabled />);

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toHaveAttribute("aria-disabled", "true");
  });

  test("disabled 상태인 경우 클릭할 수 없어야 합니다.", async () => {
    render(<Checkbox disabled />);

    const user = userEvent.setup();

    const checkbox = screen.getByRole("checkbox");

    await user.click(checkbox);

    expect(checkbox).not.toBeChecked();
  });

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
    render(<Checkbox indeterminate />);

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toHaveAttribute("aria-checked", "mixed");
  });

  test("[a11y] Space 키를 눌러 체크 상태를 변경할 수 있어야 합니다.", async () => {
    render(<Checkbox />);

    const user = userEvent.setup();

    const checkbox = screen.getByRole("checkbox");

    act(() => checkbox.focus());

    await user.keyboard(" ");

    expect(checkbox).toBeChecked();

    await user.keyboard(" ");

    expect(checkbox).not.toBeChecked();
  });

  test("[a11y] group에 role='group' 속성이 존재해야 합니다.", () => {
    render(
      <Checkbox.Group allValues={["1", "2"]}>
        <Checkbox />
        <Checkbox />
      </Checkbox.Group>,
    );

    const group = screen.getByRole("group");

    expect(group).toBeInTheDocument();
  });
});
