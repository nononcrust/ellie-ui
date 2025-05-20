import { render, screen } from "@testing-library/react";
import { noop } from "../../lib/utils";
import { Pagination } from "./pagination";

describe("Pagination", () => {
  test("정상적으로 렌더링되어야 합니다.", () => {
    render(<Pagination page={1} onChange={noop} total={10} />);

    const paginationButtons = screen.getAllByRole("button");

    paginationButtons.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
  });
});
