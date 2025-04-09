import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Popover } from "./popover";

const TRIGGER_LABEL = "열기";

describe("Popover", () => {
  beforeEach(() => {
    render(
      <Popover>
        <Popover.Trigger>{TRIGGER_LABEL}</Popover.Trigger>
        <Popover.Content>
          <Popover.Close>취소</Popover.Close>
          <Popover.Close>확인</Popover.Close>
        </Popover.Content>
      </Popover>,
    );
  });

  const openPopover = async () => {
    const user = userEvent.setup();

    const trigger = screen.getByText(TRIGGER_LABEL);

    await user.click(trigger);
  };

  test("[a11y] content에 role='dialog' 속성이 존재해야 합니다.", async () => {
    await openPopover();

    const content = screen.getByRole("dialog");

    expect(content).toBeInTheDocument();
  });

  test('[a11y] trigger에 aria-haspopup="dialog" 속성이 존재해야 합니다.', async () => {
    const trigger = screen.getByText(TRIGGER_LABEL);

    expect(trigger).toHaveAttribute("aria-haspopup", "dialog");
  });

  test('[a11y] 팝오버가 닫혀있을 때 trigger에 aria-expanded="false" 속성이 존재해야 합니다.', async () => {
    const trigger = screen.getByText(TRIGGER_LABEL);

    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  test('[a11y] 팝오버가 열려있을 때 trigger에 aria-expanded="true" 속성이 존재해야 합니다.', async () => {
    await openPopover();

    const trigger = screen.getByText(TRIGGER_LABEL);

    expect(trigger).toHaveAttribute("aria-expanded", "true");
  });

  test("[a11y] Space 키를 눌러 팝오버를 열 수 있어야 합니다.", async () => {
    const user = userEvent.setup();

    const trigger = screen.getByText(TRIGGER_LABEL);

    trigger.focus();

    await user.keyboard(" ");

    const content = screen.getByRole("dialog");

    expect(content).toBeInTheDocument();
  });

  test("[a11y] 팝오버가 열렸을 때 첫 번째 포커스 가능한");

  test("[a11y] Escape 키를 눌러 팝오버를 닫을 수 있어야 합니다.", async () => {
    const user = userEvent.setup();

    await openPopover();

    await user.keyboard("{Escape}");

    const content = screen.queryByRole("dialog");

    expect(content).not.toBeInTheDocument();
  });

  test("[a11y] 팝오버가 열렸을 때 첫 번째 포커스 가능한 요소로 포커스가 이동되어야 합니다.", async () => {
    await openPopover();

    const firstFocusableElement = screen.getByText("취소");

    expect(firstFocusableElement).toHaveFocus();
  });

  test("[a11y] 마지막 포커스 가능한 요소에서 Tab 키를 누르면 첫 번째 포커스 가능한 요소로 이동되어야 합니다.", async () => {
    const user = userEvent.setup();

    await openPopover();

    const firstFocusableElement = screen.getByText("취소");
    const lastFocusableElement = screen.getByText("확인");

    lastFocusableElement.focus();

    await user.tab();

    expect(firstFocusableElement).toHaveFocus();
  });

  test("[a11y] 첫 번째 포커스 가능한 요소에서 Shift + Tab 키를 누르면 마지막 포커스 가능한 요소로 이동되어야 합니다.", async () => {
    const user = userEvent.setup();

    await openPopover();

    await user.keyboard("{Shift>}{Tab}{/Shift}");

    const lastFocusableElement = screen.getByText("확인");

    expect(lastFocusableElement).toHaveFocus();
  });
});
