import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tooltip } from "./tooltip";

describe("Tooltip", () => {
  beforeEach(() => {
    render(
      <Tooltip content="툴팁 텍스트">
        <button>버튼</button>
      </Tooltip>,
    );
  });

  test("[a11y] tooltip에 role='tooltip' 속성이 존재해야 합니다.", async () => {
    const user = userEvent.setup();

    const trigger = screen.getByRole("button");

    await user.hover(trigger);

    const tooltip = screen.getByRole("tooltip");

    expect(tooltip).toBeInTheDocument();
  });

  test("[a11y] tooltip이 표시되었을 때 trigger에 aria-describedby 속성이 존재하고 tooltip의 id와 연결되어야 합니다.", async () => {
    const user = userEvent.setup();

    const trigger = screen.getByRole("button");

    await user.hover(trigger);

    const tooltip = screen.getByRole("tooltip");

    expect(trigger).toHaveAttribute("aria-describedby", tooltip.id);
  });

  test("[a11y] trigger가 포커스되었을 때 tooltip이 표시되어야 합니다.", async () => {
    const trigger = screen.getByRole("button");

    act(() => trigger.focus());

    const tooltip = screen.getByRole("tooltip");

    expect(tooltip).toBeInTheDocument();
  });

  test("[a11y] Escape 키를 눌러 tooltip을 닫을 수 있어야 합니다.", async () => {
    const user = userEvent.setup();

    const trigger = screen.getByRole("button");

    await user.hover(trigger);

    await user.keyboard("{Escape}");

    const tooltip = screen.queryByRole("tooltip");

    expect(tooltip).not.toBeInTheDocument();
  });
});
