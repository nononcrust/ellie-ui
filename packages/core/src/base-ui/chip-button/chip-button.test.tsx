import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ChipButton } from "./chip-button";

describe("ChipButton", () => {
  test("정상적으로 렌더링되어야 합니다.", () => {
    render(<ChipButton>버튼</ChipButton>);

    const chipButton = screen.getByRole("button");

    expect(chipButton).toBeInTheDocument();
  });

  test("render 속성을 전달했을 때 해당 컴포넌트가 렌더링되어야 합니다.", () => {
    render(<ChipButton render={<a href="/">링크</a>} />);

    const link = screen.getByText("링크");

    expect(link).toBeInTheDocument();
  });

  test("[a11y] Enter 키로 버튼을 클릭할 수 있어야 합니다.", async () => {
    const onClick = vi.fn();

    render(<ChipButton onClick={onClick}>버튼</ChipButton>);

    const user = userEvent.setup();

    const button = screen.getByRole("button");

    button.focus();

    await user.keyboard("{Enter}");

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test("[a11y] Space 키로 버튼을 클릭할 수 있어야 합니다.", async () => {
    const onClick = vi.fn();

    render(<ChipButton onClick={onClick}>버튼</ChipButton>);

    const user = userEvent.setup();

    const button = screen.getByRole("button");

    button.focus();

    await user.keyboard(" ");

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
