import { act, render, screen } from "@testing-library/react";
import { toast, Toaster } from "./toast";

describe("Toast", () => {
  test("정상적으로 렌더링되어야 합니다.", async () => {
    render(<Toaster />);

    act(() => toast.success("토스트 메시지"));

    const toastMessage = await screen.findByText("토스트 메시지");

    expect(toastMessage).toBeInTheDocument();
  });
});
