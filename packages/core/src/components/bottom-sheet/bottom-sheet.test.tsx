import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BottomSheet } from "./bottom-sheet";

const DefaultBottomSheet = () => {
  return (
    <BottomSheet>
      <BottomSheet.Trigger>열기</BottomSheet.Trigger>
      <BottomSheet.Content>
        <BottomSheet.Header>
          <BottomSheet.Title>제목</BottomSheet.Title>
          <BottomSheet.Description>설명</BottomSheet.Description>
        </BottomSheet.Header>
        <BottomSheet.Footer>
          <BottomSheet.Close>닫기</BottomSheet.Close>
        </BottomSheet.Footer>
      </BottomSheet.Content>
    </BottomSheet>
  );
};

describe("BottomSheet", () => {
  const openBottomSheet = async () => {
    const user = userEvent.setup();

    const trigger = screen.getByRole("button", { name: "열기" });

    await user.click(trigger);
  };

  test("trigger를 클릭했을 때 바텀시트가 열려야 합니다.", async () => {
    render(<DefaultBottomSheet />);

    await openBottomSheet();

    const bottomSheet = screen.getByRole("dialog");

    expect(bottomSheet).toBeInTheDocument();
  });
});
