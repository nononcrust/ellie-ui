import { render, screen } from "@testing-library/react";
import { Tag } from "./tag";

describe("Tag", () => {
  test("정상적으로 렌더링되어야 합니다.", () => {
    render(<Tag>레이블</Tag>);

    const tag = screen.getByText("레이블");

    expect(tag).toBeInTheDocument();
  });
});
