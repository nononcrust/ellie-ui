"use client";

import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";

export const Dialog1 = () => {
  return (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button variant="outlined">팝 애니메이션</Button>
      </Dialog.Trigger>
      <Dialog.Content className="w-[400px]" animation="pop">
        <Dialog.Header>
          <Dialog.Title>제출하기</Dialog.Title>
          <Dialog.Description>과제를 제출하시겠습니까?</Dialog.Description>
        </Dialog.Header>
        <Dialog.Footer className="mt-3">
          <Dialog.Close asChild>
            <Button variant="outlined">취소</Button>
          </Dialog.Close>
          <Dialog.Close asChild>
            <Button>확인</Button>
          </Dialog.Close>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  );
};
