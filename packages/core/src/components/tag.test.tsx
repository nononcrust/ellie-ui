import { render, screen } from "@testing-library/react";
import { Tag } from "./tag";

describe("Tag", () => {
  test("정상적으로 렌더링되어야 합니다.", () => {
    render(<Tag>라벨</Tag>);

    const tag = screen.getByText("라벨");

    expect(tag).toBeInTheDocument();
  });
});
