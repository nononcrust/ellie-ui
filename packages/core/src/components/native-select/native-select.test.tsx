import { render, screen } from "@testing-library/react";
import { NativeSelect } from "./native-select";

describe("NativeSelect", () => {
  test("정상적으로 렌더링되어야 합니다.", () => {
    render(
      <NativeSelect data-testid="native-select">
        <option value="1">옵션 1</option>
        <option value="2">옵션 2</option>
        <option value="3">옵션 3</option>
      </NativeSelect>,
    );

    const nativeSelect = screen.getByTestId("native-select");

    expect(nativeSelect).toBeInTheDocument();
  });
});
