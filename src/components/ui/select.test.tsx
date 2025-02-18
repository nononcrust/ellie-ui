import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Select } from "./select";

describe("Select", () => {
  beforeEach(() => {
    window.HTMLElement.prototype.hasPointerCapture = vitest.fn();

    render(
      <Select placeholder="옵션을 선택하세요.">
        <Select.Group>
          <Select.Label>그룹 1</Select.Label>
          <Select.Option value="1">옵션 1</Select.Option>
          <Select.Option value="2">옵션 2</Select.Option>
          <Select.Option value="3" disabled>
            옵션 3 (disabled)
          </Select.Option>
        </Select.Group>
        <Select.Separator />
        <Select.Option value="4">옵션 4</Select.Option>
      </Select>,
    );
  });

  const openSelect = async () => {
    const user = userEvent.setup();

    const trigger = screen.getByRole("combobox");

    await user.click(trigger);
  };

  test("trigger를 클릭했을 때 셀렉트가 열려야 합니다.", async () => {
    const user = userEvent.setup();

    const trigger = screen.getByRole("combobox");

    await user.click(trigger);

    const listbox = screen.getByRole("listbox");

    expect(listbox).toBeInTheDocument();
  });

  test("값이 선택되지 않았을 때 placeholder가 표시되어야 합니다.", async () => {
    const trigger = screen.getByRole("combobox");

    expect(trigger).toHaveTextContent("옵션을 선택하세요.");
  });

  test("option을 클릭했을 때 option의 텍스트가 trigger에 표시되어야 합니다.", async () => {
    const user = userEvent.setup();

    const trigger = screen.getByRole("combobox");

    await user.click(trigger);

    const option = screen.getByRole("option", { name: "옵션 1" });

    await user.click(option);

    expect(trigger).toHaveTextContent("옵션 1");
  });

  test("[a11y] Space 키를 눌러 셀렉트를 열 수 있어야 합니다.", async () => {
    const user = userEvent.setup();

    const trigger = screen.getByRole("combobox");

    trigger.focus();

    await user.keyboard(" ");

    const listbox = screen.getByRole("listbox");

    expect(listbox).toBeInTheDocument();
  });

  test("[a11y] ArrowDown 키를 눌러 셀렉트를 열 수 있어야 합니다.", async () => {
    const user = userEvent.setup();

    const trigger = screen.getByRole("combobox");

    trigger.focus();

    await user.keyboard("{ArrowDown}");

    const option = screen.getByRole("option", { name: "옵션 1" });

    expect(option).toHaveFocus();
  });

  test("[a11y] 선택된 option이 없는 상태에서 셀렉트가 열렸을 때 첫 번째 포커스 가능한 옵션이 포커스되어야 합니다.", async () => {
    const user = userEvent.setup();

    const trigger = screen.getByRole("combobox");

    await user.click(trigger);

    const option = screen.getByRole("option", { name: "옵션 1" });

    expect(option).toHaveFocus();
  });

  test("[a11y] 선택된 option이 있는 상태에서 셀렉트가 열렸을 때 선택된 option이 포커스되어야 합니다.", async () => {
    const user = userEvent.setup();

    await openSelect();

    const option = screen.getByRole("option", { name: "옵션 2" });

    await user.click(option);

    await openSelect();

    const selectedOption = screen.getByRole("option", { name: "옵션 2" });

    expect(selectedOption).toHaveFocus();
  });

  test("[a11y] trigger에 aria-controls 속성이 존재하고 listbox의 id와 연결되어야 합니다.", async () => {
    const trigger = screen.getByRole("combobox");

    await openSelect();

    const listbox = screen.getByRole("listbox");

    expect(trigger).toHaveAttribute("aria-controls", listbox.id);
  });

  test("[a11y] trigger의 aria-autocomplete 속성이 none이어야 합니다.", async () => {
    const trigger = screen.getByRole("combobox");

    expect(trigger).toHaveAttribute("aria-autocomplete", "none");
  });

  test("[a11y] 셀렉트가 닫혀있을 때 trigger의 aria-expanded 속성이 false여야 합니다.", async () => {
    const trigger = screen.getByRole("combobox");

    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  test("[a11y] 셀렉트가 열려있을 때 trigger의 aria-expanded 속성이 true여야 합니다.", async () => {
    const trigger = screen.getByRole("combobox");

    await openSelect();

    expect(trigger).toHaveAttribute("aria-expanded", "true");
  });

  test("[a11y] trigger에 role='combobox' 속성이 존재해야 합니다.", async () => {
    const trigger = screen.getByRole("combobox");

    expect(trigger).toBeInTheDocument();
  });

  test("[a11y] listbox에 role='listbox' 속성이 존재해야 합니다.", async () => {
    await openSelect();

    const listbox = screen.getByRole("listbox");

    expect(listbox).toBeInTheDocument();
  });

  test("[a11y] option에 role='option' 속성이 존재해야 합니다.", async () => {
    await openSelect();

    const option = screen.getByRole("option", { name: "옵션 1" });

    expect(option).toBeInTheDocument();
  });

  test("[a11y] option이 disabled인 경우 aria-disabled 속성이 true여야 합니다.", async () => {
    await openSelect();

    const option = screen.getByRole("option", { name: "옵션 3 (disabled)" });

    expect(option).toHaveAttribute("aria-disabled", "true");
  });

  test("[a11y] option이 선택되지 않은 경우 aria-selected 속성이 false여야 합니다.", async () => {
    await openSelect();

    const option = screen.getByRole("option", { name: "옵션 1" });

    expect(option).toHaveAttribute("aria-selected", "false");
  });

  test("[a11y] 셀렉트가 열려있을 때 Tab 키가 동작하지 않아야 합니다.", async () => {
    const user = userEvent.setup();

    await openSelect();

    const option = screen.getByRole("option", { name: "옵션 1" });

    act(() => option.focus());

    await user.keyboard("{Tab}");

    expect(option).toHaveFocus();
  });

  test("[a11y] 키보드 방향키로 option의 포커스를 이동할 수 있어야 합니다.", async () => {
    const user = userEvent.setup();

    await openSelect();

    const option1 = screen.getByRole("option", { name: "옵션 1" });
    const option2 = screen.getByRole("option", { name: "옵션 2" });

    await user.keyboard("{ArrowDown}");

    expect(option2).toHaveFocus();

    await user.keyboard("{ArrowUp}");

    expect(option1).toHaveFocus();
  });

  test("[a11y] Home 키를 눌렀을 때 첫 번째 option으로 포커스가 이동되어야 합니다.", async () => {
    const user = userEvent.setup();

    await openSelect();

    const option2 = screen.getByRole("option", { name: "옵션 2" });

    act(() => option2.focus());

    await user.keyboard("{Home}");

    const option1 = screen.getByRole("option", { name: "옵션 1" });

    expect(option1).toHaveFocus();
  });

  test("[a11y] End 키를 눌렀을 때 마지막 option으로 포커스가 이동되어야 합니다.", async () => {
    const user = userEvent.setup();

    await openSelect();

    const option1 = screen.getByRole("option", { name: "옵션 1" });

    act(() => option1.focus());

    await user.keyboard("{End}");

    const option4 = screen.getByRole("option", { name: "옵션 4" });

    expect(option4).toHaveFocus();
  });

  test("[a11y] option이 disabled인 경우 키보드 방향키로 포커스를 이동할 수 없어야 합니다.", async () => {
    const user = userEvent.setup();

    await openSelect();

    const option2 = screen.getByRole("option", { name: "옵션 2" });

    act(() => option2.focus());

    await user.keyboard("{ArrowDown}");

    const disabledOption = screen.getByRole("option", { name: "옵션 3 (disabled)" });

    expect(disabledOption).not.toHaveFocus();
  });

  test("[a11y] option이 disabled인 경우 aria-disabled 속성이 존재해야 합니다.", async () => {
    await openSelect();

    const disabledOption = screen.getByRole("option", { name: "옵션 3 (disabled)" });

    expect(disabledOption).toHaveAttribute("aria-disabled", "true");
  });

  test("[a11y] Space 키를 눌러 option을 선택할 수 있어야 합니다.", async () => {
    const user = userEvent.setup();

    await openSelect();

    const option = screen.getByRole("option", { name: "옵션 1" });

    act(() => option.focus());

    await user.keyboard(" ");

    const trigger = screen.getByRole("combobox");

    expect(trigger).toHaveTextContent("옵션 1");
  });

  test("[a11y] Escape 키를 눌러 셀렉트를 닫을 수 있어야 합니다.", async () => {
    const user = userEvent.setup();

    await openSelect();

    await user.keyboard("{Escape}");

    const listbox = screen.queryByRole("listbox");

    expect(listbox).not.toBeInTheDocument();
  });

  test("[a11y] 셀렉트가 닫혔을 때 trigger로 포커스가 이동되어야 합니다.", async () => {
    const user = userEvent.setup();

    await openSelect();

    await user.keyboard("{Escape}");

    const trigger = screen.getByRole("combobox");

    expect(trigger).toHaveFocus();
  });

  test("[a11y] 선택된 option이 포커스된 경우 aria-selected 속성이 true여야 합니다.", async () => {
    const user = userEvent.setup();

    await openSelect();

    const option = screen.getByRole("option", { name: "옵션 1" });

    await user.click(option);

    await openSelect();

    const selectedOption = screen.getByRole("option", { name: "옵션 1" });

    expect(selectedOption).toHaveAttribute("aria-selected", "true");
  });
});
