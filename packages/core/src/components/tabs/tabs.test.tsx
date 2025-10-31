import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tabs } from "./tabs";

const DefaultTabs = () => {
  return (
    <Tabs defaultValue="1">
      <Tabs.List>
        <Tabs.Trigger value="1">탭 1</Tabs.Trigger>
        <Tabs.Trigger value="2">탭 2</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="1">패널 1</Tabs.Content>
      <Tabs.Content value="2">패널 2</Tabs.Content>
    </Tabs>
  );
};

const DisabledTabs = () => {
  return (
    <Tabs>
      <Tabs.List>
        <Tabs.Trigger value="1">탭 1</Tabs.Trigger>
        <Tabs.Trigger value="2" disabled>
          탭 2 (disabled)
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="1">패널 1</Tabs.Content>
      <Tabs.Content value="2">패널 2</Tabs.Content>
    </Tabs>
  );
};

describe("Tabs", async () => {
  test("정상적으로 렌더링되어야 합니다.", async () => {
    render(<DefaultTabs />);

    const tab1 = screen.getByRole("tab", { name: "탭 1" });
    const tab2 = screen.getByRole("tab", { name: "탭 2" });

    const tabpanel1 = screen.getByText("패널 1");
    const tabpanel2 = screen.queryByText("패널 2");

    expect(tab1).toBeInTheDocument();
    expect(tab2).toBeInTheDocument();
    expect(tabpanel1).toBeInTheDocument();
    expect(tabpanel2).not.toBeInTheDocument();
  });

  test("tab을 클릭하면 해당 tab이 선택되어야 합니다.", async () => {
    render(<DefaultTabs />);

    const user = userEvent.setup();

    const tab2 = screen.getByRole("tab", { name: "탭 2" });

    await user.click(tab2);

    const tabpanel1 = screen.queryByText("패널 1");
    const tabpanel2 = screen.getByText("패널 2");

    expect(tabpanel1).not.toBeInTheDocument();
    expect(tabpanel2).toBeInTheDocument();
  });

  test("선택된 tab의 tabpanel이 표시되어야 합니다.", async () => {
    render(<DefaultTabs />);

    const tabpanel1 = screen.getByText("패널 1");
    const tabpanel2 = screen.queryByText("패널 2");

    expect(tabpanel1).toBeInTheDocument();
    expect(tabpanel2).not.toBeInTheDocument();
  });

  test("disabled인 tab을 클릭해도 tab이 선택되지 않아야 합니다.", async () => {
    render(<DisabledTabs />);

    const user = userEvent.setup();

    const tab2 = screen.getByRole("tab", { name: "탭 2 (disabled)" });

    await user.click(tab2);

    expect(tab2).toHaveAttribute("aria-selected", "false");
  });

  test("value를 전달했을 때 해당 tab이 선택되어야 합니다.", async () => {
    render(
      <Tabs value="2">
        <Tabs.List>
          <Tabs.Trigger value="1">탭 1</Tabs.Trigger>
          <Tabs.Trigger value="2">탭 2</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="1">패널 1</Tabs.Content>
        <Tabs.Content value="2">패널 2</Tabs.Content>
      </Tabs>,
    );

    const tab2 = screen.getByRole("tab", { name: "탭 2" });

    expect(tab2).toHaveAttribute("aria-selected", "true");
  });

  test("선택된 tab이 변경되었을 때 onValueChange가 호출되어야 합니다.", async () => {
    const onValueChange = vi.fn();

    render(
      <Tabs onValueChange={onValueChange}>
        <Tabs.List>
          <Tabs.Trigger value="1">탭 1</Tabs.Trigger>
          <Tabs.Trigger value="2">탭 2</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="1">패널 1</Tabs.Content>
        <Tabs.Content value="2">패널 2</Tabs.Content>
      </Tabs>,
    );

    const user = userEvent.setup();

    const tab2 = screen.getByRole("tab", { name: "탭 2" });

    await user.click(tab2);

    expect(onValueChange).toHaveBeenCalledWith("2");
  });

  test("[a11y] tablist에 role='tablist' 속성이 존재해야 합니다.", async () => {
    render(<DefaultTabs />);

    const tablist = screen.getByRole("tablist");

    expect(tablist).toBeInTheDocument();
  });

  test("[a11y] tab에 role='tab' 속성이 존재해야 합니다.", async () => {
    render(<DefaultTabs />);

    const tabs = screen.getAllByRole("tab");

    tabs.forEach((tab) => {
      expect(tab).toBeInTheDocument();
    });
  });

  test("[a11y] tabpanel에 role='tabpanel' 속성이 존재해야 합니다.", async () => {
    render(<DefaultTabs />);

    const tabpanels = screen.getAllByRole("tabpanel");

    tabpanels.forEach((tabpanel) => {
      expect(tabpanel).toBeInTheDocument();
    });
  });

  test('[a11y] tablist에 aria-orientation="horizontal" 속성이 존재해야 합니다.', async () => {
    render(<DefaultTabs />);

    const tablist = screen.getByRole("tablist");

    expect(tablist).toHaveAttribute("aria-orientation", "horizontal");
  });

  test('[a11y] tab이 선택되어 있을 때 aria-selected="true" 속성이 존재해야 합니다.', async () => {
    render(<DefaultTabs />);

    const tab = screen.getByRole("tab", { name: "탭 1" });

    expect(tab).toHaveAttribute("aria-selected", "true");
  });

  test('[a11y] tab이 선택되어 있지 않을 때 aria-selected="false" 속성이 존재해야 합니다.', async () => {
    render(<DefaultTabs />);

    const tab = screen.getByRole("tab", { name: "탭 2" });

    expect(tab).toHaveAttribute("aria-selected", "false");
  });

  test("[a11y] tabpanel에 aria-labelledby 속성이 존재하고 tab의 id와 연결되어야 합니다.", async () => {
    render(<DefaultTabs />);

    const tabpanel = screen.getByRole("tabpanel");

    const tab = screen.getByRole("tab", { name: "탭 1" });

    expect(tabpanel).toHaveAttribute("aria-labelledby", tab.id);
  });

  test("[a11y] 선택된 tab이 없는 상태에서 tablist가 포커스되었을 때 첫 번째 tab이 포커스되어야 합니다.", async () => {
    render(
      <Tabs>
        <Tabs.List>
          <Tabs.Trigger value="1">탭 1</Tabs.Trigger>
          <Tabs.Trigger value="2">탭 2</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="1">패널 1</Tabs.Content>
        <Tabs.Content value="2">패널 2</Tabs.Content>
      </Tabs>,
    );

    const tablist = screen.getByRole("tablist");

    act(() => tablist.focus());

    const tab = screen.getByRole("tab", { name: "탭 1" });

    expect(tab).toHaveFocus();
  });

  test("[a11y] 선택된 tab이 있는 상태에서 tablist가 포커스되었을 때 선택된 tab이 포커스되어야 합니다.", async () => {
    render(<DefaultTabs />);

    const tablist = screen.getByRole("tablist");

    act(() => tablist.focus());

    const tab = screen.getByRole("tab", { name: "탭 1" });

    expect(tab).toHaveFocus();
  });

  test("[a11y] 키보드 방향키로 tab의 포커스를 이동할 수 있어야 합니다.", async () => {
    render(<DefaultTabs />);

    const user = userEvent.setup();

    const tablist = screen.getByRole("tablist");

    act(() => tablist.focus());

    const tab1 = screen.getByRole("tab", { name: "탭 1" });
    const tab2 = screen.getByRole("tab", { name: "탭 2" });

    await user.keyboard("{ArrowRight}");

    expect(tab2).toHaveFocus();

    await user.keyboard("{ArrowLeft}");

    expect(tab1).toHaveFocus();
  });

  test("[a11y] Home 키를 눌러 첫 번째 tab으로 포커스를 이동할 수 있어야 합니다.", async () => {
    render(<DefaultTabs />);

    const user = userEvent.setup();

    const tab2 = screen.getByRole("tab", { name: "탭 2" });

    act(() => tab2.focus());

    await user.keyboard("{Home}");

    const tab1 = screen.getByRole("tab", { name: "탭 1" });

    expect(tab1).toHaveFocus();
  });

  test("[a11y] End 키를 눌러 마지막 tab으로 포커스를 이동할 수 있어야 합니다.", async () => {
    render(<DefaultTabs />);

    const user = userEvent.setup();

    const tab1 = screen.getByRole("tab", { name: "탭 1" });

    act(() => tab1.focus());

    await user.keyboard("{End}");

    const tab2 = screen.getByRole("tab", { name: "탭 2" });

    expect(tab2).toHaveFocus();
  });
});
