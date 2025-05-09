import { Avatar } from "@/components/avatar";
import { render, screen } from "@testing-library/react";

describe("Avatar", () => {
  test("유효하지 않은 src가 전달되었을 때 fallback이 렌더링되어야 합니다.", () => {
    render(
      <Avatar>
        <Avatar.Image src="invalid" alt="유효하지 않은 이미지" />
        <Avatar.Fallback>U</Avatar.Fallback>
      </Avatar>,
    );

    const fallback = screen.getByText("U");

    expect(fallback).toBeInTheDocument();
  });
});
