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

describe("Tabs", async () => {
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

  test("[a11y] tab에 aria-controls 속성이 존재하고 tabpanel의 id와 연결되어야 합니다.", async () => {
    render(<DefaultTabs />);

    const tab = screen.getByRole("tab", { name: "탭 1" });

    const tabpanel = screen.getByRole("tabpanel");

    expect(tab).toHaveAttribute("aria-controls", tabpanel.id);
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
});
