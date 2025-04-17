"use client";

import { Button, Dialog } from "@ellie-ui/core";

export const Dialog7 = () => {
  return (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button variant="outlined">중첩 모달</Button>
      </Dialog.Trigger>
      <Dialog.Content className="w-[20rem]">
        <Dialog.Header>
          <Dialog.Title>첫번째 모달</Dialog.Title>
          <Dialog.Description>두번째 모달을 열어주세요.</Dialog.Description>
        </Dialog.Header>
        <div className="h-[15rem]" />
        <Dialog.Footer className="mt-8">
          <SecondDialog />
          <Dialog.Close asChild>
            <Button variant="outlined">닫기</Button>
          </Dialog.Close>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  );
};

const SecondDialog = () => {
  return (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button>두번째 모달 열기</Button>
      </Dialog.Trigger>
      <Dialog.Content className="w-[40rem]">
        <Dialog.Header>
          <Dialog.Title>두번째 모달</Dialog.Title>
          <Dialog.Description>esc 키를 눌러 닫아주세요.</Dialog.Description>
        </Dialog.Header>
        <Dialog.Footer className="mt-8">
          <Dialog.Close asChild>
            <Button variant="outlined">닫기</Button>
          </Dialog.Close>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  );
};
