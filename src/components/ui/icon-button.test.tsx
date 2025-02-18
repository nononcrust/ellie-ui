import { render, screen } from "@testing-library/react";
import { SearchIcon } from "lucide-react";
import { IconButton } from "./icon-button";

describe("IconButton", () => {
  test("정상적으로 렌더링되어야 합니다.", () => {
    render(
      <IconButton aria-label="검색">
        <SearchIcon />
      </IconButton>,
    );

    const iconButton = screen.getByRole("button");

    expect(iconButton).toBeInTheDocument();
  });
});
