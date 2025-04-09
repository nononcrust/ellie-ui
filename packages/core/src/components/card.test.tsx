import { render, screen } from "@testing-library/react";
import { Card } from "./card";

describe("Card", () => {
  test("정상적으로 렌더링되어야 합니다.", () => {
    render(<Card>카드</Card>);

    const card = screen.getByText("카드");

    expect(card).toBeInTheDocument();
  });
});
