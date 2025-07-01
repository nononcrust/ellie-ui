import { act, render, screen } from "@testing-library/react";
import userEvent, { PointerEventsCheckLevel } from "@testing-library/user-event";
import { DropdownMenu } from "./dropdown-menu";

const TRIGGER_LABEL = "열기";

const DefaultDropdownMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger>{TRIGGER_LABEL}</DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Group>
          <DropdownMenu.GroupLabel>그룹 1</DropdownMenu.GroupLabel>
          <DropdownMenu.Item>메뉴 1</DropdownMenu.Item>
          <DropdownMenu.Item>메뉴 2</DropdownMenu.Item>
        </DropdownMenu.Group>
        <DropdownMenu.Separator />
        <DropdownMenu.Item disabled>메뉴 3 (disabled)</DropdownMenu.Item>
        <DropdownMenu.Item>메뉴 4</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
};

describe("DropdownMenu", () => {
  const openDropdownMenu = async () => {
    const user = userEvent.setup();

    const trigger = screen.getByRole("button", { name: TRIGGER_LABEL });

    await user.click(trigger);
  };

  test("trigger를 클릭했을 때 드랍다운이 열려야 합니다.", async () => {
    render(<DefaultDropdownMenu />);

    const user = userEvent.setup();

    const trigger = screen.getByRole("button", { name: TRIGGER_LABEL });

    await user.click(trigger);

    const menu = screen.getByRole("menu");

    expect(menu).toBeInTheDocument();
  });

  test("menu item을 클릭했을 때 드랍다운이 닫혀야 합니다.", async () => {
    render(<DefaultDropdownMenu />);

    const user = userEvent.setup();

    await openDropdownMenu();

    const item = screen.getByRole("menuitem", { name: "메뉴 1" });

    await user.click(item);

    const menu = screen.queryByRole("menu");

    expect(menu).not.toBeInTheDocument();
  });

  test('드랍다운이 열려있을 때 스크롤이 비활성화되어야합니다.".', async () => {
    render(<DefaultDropdownMenu />);

    await openDropdownMenu();

    const body = document.body;

    expect(body).toHaveStyle("overflow: hidden");
  });

  test("menu 바깥을 클릭했을 때 드랍다운이 닫혀야 합니다.", async () => {
    render(<DefaultDropdownMenu />);

    await openDropdownMenu();

    await userEvent.click(document.body, {
      pointerEventsCheck: PointerEventsCheckLevel.Never,
    });

    const menu = screen.queryByRole("menu");

    expect(menu).not.toBeInTheDocument();
  });

  test('open 속성이 true일 때 드랍다운이 표시되어야 합니다."', async () => {
    render(
      <DropdownMenu open>
        <DropdownMenu.Content />
      </DropdownMenu>,
    );

    const menu = screen.getByRole("menu");

    expect(menu).toBeInTheDocument();
  });

  test('open 속성이 false일 때 드랍다운이 표시되지 않아야 합니다."', async () => {
    render(
      <DropdownMenu open={false}>
        <DropdownMenu.Content />
      </DropdownMenu>,
    );

    const menu = screen.queryByRole("menu");

    expect(menu).not.toBeInTheDocument();
  });

  test("드랍다운의 상태가 변경될 때 onOpenChange 함수가 호출되어야 합니다.", async () => {
    const user = userEvent.setup();

    const onOpenChange = vi.fn();

    render(
      <DropdownMenu onOpenChange={onOpenChange}>
        <DropdownMenu.Trigger>열기</DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item>메뉴 1</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>,
    );

    const trigger = screen.getByRole("button", { name: "열기" });

    await user.click(trigger);

    expect(onOpenChange).toHaveBeenCalledWith(true, expect.anything(), expect.anything());

    const item = screen.getByRole("menuitem", { name: "메뉴 1" });

    await user.click(item);

    expect(onOpenChange).toHaveBeenCalledWith(false, expect.anything(), expect.anything());
  });

  test("[a11y] Space 키를 눌러 드랍다운을 열 수 있어야 합니다.", async () => {
    render(<DefaultDropdownMenu />);

    const user = userEvent.setup();

    const trigger = screen.getByRole("button", { name: TRIGGER_LABEL });

    trigger.focus();

    await user.keyboard(" ");

    const menu = screen.getByRole("menu");

    expect(menu).toBeInTheDocument();
  });

  test("[a11y] ArrowDown 키를 눌러 드랍다운을 열 수 있어야 합니다.", async () => {
    render(<DefaultDropdownMenu />);

    const user = userEvent.setup();

    const trigger = screen.getByRole("button", { name: TRIGGER_LABEL });

    trigger.focus();

    await user.keyboard("{ArrowDown}");

    const menu = screen.getByRole("menu");

    expect(menu).toBeInTheDocument();
  });

  test("[a11y] trigger에 aria-haspopup 속성이 존재해야 합니다.", () => {
    render(<DefaultDropdownMenu />);

    const trigger = screen.getByRole("button", { name: TRIGGER_LABEL });

    expect(trigger).toHaveAttribute("aria-haspopup", "menu");
  });

  test("[a11y] 드랍다운이 닫혀있을 경우 trigger의 aria-expanded 속성이 false여야 합니다.", () => {
    render(<DefaultDropdownMenu />);

    const trigger = screen.getByRole("button", { name: TRIGGER_LABEL });

    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  test("[a11y] 드랍다운이 열려있을 경우 trigger의 aria-expanded 속성이 true여야 합니다.", async () => {
    render(<DefaultDropdownMenu />);

    const trigger = screen.getByRole("button", { name: TRIGGER_LABEL });

    await openDropdownMenu();

    expect(trigger).toHaveAttribute("aria-expanded", "true");
  });

  test("[a11y] menu에 role='menu' 속성이 존재해야 합니다.", async () => {
    render(<DefaultDropdownMenu />);

    await openDropdownMenu();

    const menu = screen.getByRole("menu");

    expect(menu).toBeInTheDocument();
  });

  test("[a11y] menu item에 role='menuitem' 속성이 존재해야 합니다.", async () => {
    render(<DefaultDropdownMenu />);

    await openDropdownMenu();

    const item = screen.getByRole("menuitem", { name: "메뉴 1" });

    expect(item).toBeInTheDocument();
  });

  test("[a11y] group에 role='group' 속성이 존재해야 합니다.", async () => {
    render(<DefaultDropdownMenu />);

    await openDropdownMenu();

    const group = screen.getByRole("group");

    expect(group).toBeInTheDocument();
  });

  test("[a11y] separator에 role='separator' 속성이 존재해야 합니다.", async () => {
    render(<DefaultDropdownMenu />);

    await openDropdownMenu();

    const separator = screen.getByRole("separator");

    expect(separator).toBeInTheDocument();
  });

  test("[a11y] menu의 aria-orientation 속성이 vertical이어야 합니다.", async () => {
    render(<DefaultDropdownMenu />);

    await openDropdownMenu();

    const menu = screen.getByRole("menu");

    expect(menu).toHaveAttribute("aria-orientation", "vertical");
  });

  test("[a11y] separator의 aria-orientation 속성이 horizontal이어야 합니다.", async () => {
    render(<DefaultDropdownMenu />);

    await openDropdownMenu();

    const separator = screen.getByRole("separator");

    expect(separator).toHaveAttribute("aria-orientation", "horizontal");
  });

  test("[a11y] menu에 aria-labelledby 속성이 존재하고 trigger의 id와 연결되어야 합니다.", async () => {
    render(<DefaultDropdownMenu />);

    const trigger = screen.getByRole("button", { name: TRIGGER_LABEL });

    await openDropdownMenu();

    const menu = screen.getByRole("menu");

    expect(menu).toHaveAttribute("aria-labelledby", trigger.id);
  });

  //   test("[a11y] 드랍다운이 열렸을 때 첫 번째 메뉴 아이템으로 포커스가 이동되어야 합니다.", async () => {
  //     // const user = userEvent.setup();
  //     // const trigger = screen.getByRole("button", { name: TRIGGER_LABEL });
  //     // await user.click(trigger);
  //     // const item = screen.getByRole("menuitem", { name: ITEM_LABEL });
  //     // expect(item).toHaveFocus();
  //   });

  test("[a11y] 키보드 방향키로 menu item의 포커스를 이동할 수 있어야 합니다.", async () => {
    render(<DefaultDropdownMenu />);

    const user = userEvent.setup();

    await openDropdownMenu();

    const item1 = screen.getByRole("menuitem", { name: "메뉴 1" });

    act(() => item1.focus());

    await user.keyboard("{ArrowDown}");

    const item2 = screen.getByRole("menuitem", { name: "메뉴 2" });

    expect(item2).toHaveFocus();

    await user.keyboard("{ArrowUp}");

    expect(item1).toHaveFocus();
  });

  test("[a11y] Home 키를 눌렀을 때 첫 번째 menu item으로 포커스가 이동되어야 합니다.", async () => {
    render(<DefaultDropdownMenu />);

    const user = userEvent.setup();

    await openDropdownMenu();

    const item2 = screen.getByRole("menuitem", { name: "메뉴 2" });

    act(() => item2.focus());

    await user.keyboard("{Home}");

    const item1 = screen.getByRole("menuitem", { name: "메뉴 1" });

    expect(item1).toHaveFocus();
  });

  test("[a11y] End 키를 눌렀을 때 마지막 menu item으로 포커스가 이동되어야 합니다.", async () => {
    render(<DefaultDropdownMenu />);

    const user = userEvent.setup();

    await openDropdownMenu();

    const item1 = screen.getByRole("menuitem", { name: "메뉴 1" });

    act(() => item1.focus());

    await user.keyboard("{End}");

    const item4 = screen.getByRole("menuitem", { name: "메뉴 4" });

    expect(item4).toHaveFocus();
  });

  test("[a11y] menu item이 disabled인 경우 aria-disabled 속성이 존재해야 합니다.", async () => {
    render(<DefaultDropdownMenu />);

    await openDropdownMenu();

    const disabledMenu = screen.getByRole("menuitem", { name: "메뉴 3 (disabled)" });

    expect(disabledMenu).toHaveAttribute("aria-disabled", "true");
  });

  test("[a11y] 드랍다운이 닫혔을 때 trigger로 포커스가 이동되어야 합니다.", async () => {
    render(<DefaultDropdownMenu />);

    const user = userEvent.setup();

    const trigger = screen.getByRole("button", { name: TRIGGER_LABEL });

    await openDropdownMenu();

    await user.keyboard("{Escape}");

    expect(trigger).toHaveFocus();
  });

  test("[a11y] Escape 키를 눌러 드랍다운을 닫을 수 있어야 합니다.", async () => {
    render(<DefaultDropdownMenu />);

    const user = userEvent.setup();

    await openDropdownMenu();

    const menu = screen.getByRole("menu");

    await user.keyboard("{Escape}");

    expect(menu).not.toBeInTheDocument();
  });
});
