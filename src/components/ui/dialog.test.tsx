import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Dialog } from "./dialog";

const TRIGGER_LABEL = "열기";
const DIALOG_TITLE = "모달 제목";
const DIALOG_DESCRIPTION = "모달 설명이 여기에 표시됩니다.";

describe("Dialog", () => {
  beforeEach(() => {
    render(
      <Dialog>
        <Dialog.Trigger>{TRIGGER_LABEL}</Dialog.Trigger>
        <Dialog.Content className="w-[400px]" animation="pop">
          <Dialog.Header>
            <Dialog.Title>{DIALOG_TITLE}</Dialog.Title>
            <Dialog.Description>{DIALOG_DESCRIPTION}</Dialog.Description>
          </Dialog.Header>
          <Dialog.Footer className="mt-3">
            <Dialog.Close>취소</Dialog.Close>
            <Dialog.Close>확인</Dialog.Close>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>,
    );
  });

  const openDialog = async () => {
    const user = userEvent.setup();

    const trigger = screen.getByRole("button", { name: TRIGGER_LABEL });

    await user.click(trigger);
  };

  test("trigger를 클릭했을 때 모달이 열려야 합니다.", async () => {
    const user = userEvent.setup();

    const trigger = screen.getByRole("button", { name: TRIGGER_LABEL });

    await user.click(trigger);

    const dialog = screen.getByRole("dialog");

    expect(dialog).toBeInTheDocument();
  });

  test("overlay를 클릭했을 때 모달이 닫혀야 합니다.", async () => {
    const user = userEvent.setup();

    await openDialog();

    const backdrop = screen.getByTestId("overlay");

    await user.click(backdrop);

    const dialog = screen.queryByRole("dialog");

    expect(dialog).not.toBeInTheDocument();
  });

  test("닫기 버튼을 클릭했을 때 모달이 닫혀야 합니다.", async () => {
    const user = userEvent.setup();

    await openDialog();

    const close = screen.getByRole("button", { name: "취소" });

    await user.click(close);

    const dialog = screen.queryByRole("dialog");

    expect(dialog).not.toBeInTheDocument();
  });

  test('모달이 열려있을 때 스크롤이 비활성화되어야합니다."', async () => {
    await openDialog();

    const body = document.body;

    expect(body).toHaveStyle("overflow: hidden");
  });

  test("[a11y] Space 키 눌러 모달을 열 수 있어야 합니다.", async () => {
    const user = userEvent.setup();

    const trigger = screen.getByRole("button", { name: TRIGGER_LABEL });

    trigger.focus();

    await user.keyboard(" ");

    const dialog = screen.getByRole("dialog");

    expect(dialog).toBeInTheDocument();
  });

  test("[a11y] trigger에 aria-haspopup 속성이 존재해야 합니다.", () => {
    const trigger = screen.getByRole("button", { name: TRIGGER_LABEL });

    expect(trigger).toHaveAttribute("aria-haspopup", "dialog");
  });

  test("[a11y] trigger에 aria-controls 속성이 존재하고 dialog의 id와 연결되어야 합니다.", async () => {
    const trigger = screen.getByRole("button", { name: TRIGGER_LABEL });

    await openDialog();

    const dialog = screen.getByRole("dialog");

    expect(trigger).toHaveAttribute("aria-controls", dialog.id);
  });

  test("[a11y] dialog에 role='dialog' 속성이 존재해야 합니다.", async () => {
    await openDialog();

    const dialog = screen.getByRole("dialog");

    expect(dialog).toBeInTheDocument();
  });

  test("[a11y] 모달이 닫혀있을 경우 trigger의 aria-expanded 속성이 false여야 합니다.", () => {
    const trigger = screen.getByRole("button", { name: TRIGGER_LABEL });

    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  test("[a11y] 모달이 열려있을 경우 trigger의 aria-expanded 속성이 true여야 합니다.", async () => {
    const trigger = screen.getByRole("button", { name: TRIGGER_LABEL });

    await openDialog();

    expect(trigger).toHaveAttribute("aria-expanded", "true");
  });

  test("[a11y] dialog에 aria-labelledby 속성이 존재하고 제목의 id와 연결되어야 합니다.", async () => {
    await openDialog();

    const dialog = screen.getByRole("dialog");
    const title = screen.getByText(DIALOG_TITLE);

    expect(dialog).toHaveAttribute("aria-labelledby", title.id);
  });

  test("[a11y] dialog에 aria-describedby 속성이 존재하고 설명의 id와 연결되어야 합니다.", async () => {
    await openDialog();

    const dialog = screen.getByRole("dialog");
    const description = screen.getByText(DIALOG_DESCRIPTION);

    expect(dialog).toHaveAttribute("aria-describedby", description.id);
  });

  test("[a11y] 모달이 닫혔을 때 trigger로 포커스가 이동되어야 합니다.", async () => {
    const user = userEvent.setup();

    const trigger = screen.getByRole("button", { name: TRIGGER_LABEL });

    await openDialog();

    const close = screen.getByRole("button", { name: "취소" });

    await user.click(close);

    expect(trigger).toHaveFocus();
  });

  // test("[a11y] 모달이 열렸을 때 첫 번째 포커스 가능한 요소로 포커스가 이동되어야 합니다.", async () => {
  //   const user = userEvent.setup();
  //   const trigger = screen.getByRole("button", { name: TRIGGER_LABEL });
  //   await user.click(trigger);
  //   const firstFocusableElement = screen.getByRole("button", { name: "취소" });
  //   expect(firstFocusableElement).toHaveFocus();
  // });

  // test("[a11y] 마지막 포커스 가능한 요소에서 Tab 키를 누르면 첫 번째 포커스 가능한 요소로 이동되어야 합니다.", async () => {
  //   const user = userEvent.setup();
  //   const trigger = screen.getByRole("button", { name: TRIGGER_LABEL });
  //   await user.click(trigger);
  //   const firstFocusableElement = screen.getByRole("button", { name: "취소" });
  //   const lastFocusableElement = screen.getByRole("button", { name: "닫기" });
  //   lastFocusableElement.focus();
  //   await user.tab();
  //   expect(firstFocusableElement).toHaveFocus();
  // });

  test("[a11y] 첫 번째 포커스 가능한 요소에서 Shift + Tab 키를 누르면 마지막 포커스 가능한 요소로 이동되어야 합니다.", async () => {
    const user = userEvent.setup();

    await openDialog();

    const lastFocusableElement = screen.getByRole("button", { name: "닫기" });

    await user.keyboard("{Shift>}{Tab}{/Shift}");

    expect(lastFocusableElement).toHaveFocus();
  });

  test("[a11y] Escape 키를 눌러 모달을 닫을 수 있어야 합니다.", async () => {
    const user = userEvent.setup();

    await openDialog();

    await user.keyboard("{Escape}");

    const dialog = screen.queryByRole("dialog");

    expect(dialog).not.toBeInTheDocument();
  });
});
