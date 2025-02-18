import { render, screen } from "@testing-library/react";
import Link from "next/link";
import { Button } from "./button";

describe("Button", () => {
  test("정상적으로 렌더링되어야 합니다.", async () => {
    render(<Button>버튼</Button>);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("asChild 속성이 true일 때 children이 렌더링되어야 합니다.", async () => {
    render(
      <Button asChild>
        <Link href="/">링크</Link>
      </Button>,
    );

    const link = screen.getByText("링크");

    expect(link).toBeInTheDocument();
  });
});
