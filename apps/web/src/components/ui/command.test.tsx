import { render, screen } from "@testing-library/react";
import { Command } from "./command";

const DefaultCommand = () => {
  return (
    <Command>
      <Command.Input />
      <Command.List>
        <Command.Empty>검색 결과가 없습니다.</Command.Empty>
        <Command.Item value="1">1</Command.Item>
        <Command.Item value="2">2</Command.Item>
      </Command.List>
    </Command>
  );
};

describe("Command", () => {
  test("정상적으로 렌더링되어야 합니다.", async () => {
    render(<DefaultCommand />);

    const command = screen.getByRole("combobox");

    expect(command).toBeInTheDocument();
  });
});
