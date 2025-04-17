"use client";

import { Button, Dialog } from "@ellie-ui/core";

export default function ConfirmDialogPage() {
  return (
    <main>
      <Dialog>
        <Dialog.Trigger asChild>
          <Button>변경하기</Button>
        </Dialog.Trigger>
        <Dialog.Content className="w-[20rem]" animation="slide">
          <Dialog.Header>
            <Dialog.Title>내용을 변경할까요?</Dialog.Title>
            <Dialog.Description>변경한 내용은 되돌릴 수 없어요.</Dialog.Description>
          </Dialog.Header>
          <Dialog.Footer>
            <Dialog.Close asChild>
              <Button className="w-full" size="large" variant="outlined">
                취소
              </Button>
            </Dialog.Close>
            <Dialog.Close asChild>
              <Button className="w-full" size="large">
                확인
              </Button>
            </Dialog.Close>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
    </main>
  );
}
