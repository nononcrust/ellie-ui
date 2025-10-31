"use client";

import { Button, Dialog, DropdownMenu } from "@ellie-ui/core";
import { useDialog } from "@ellie-ui/core/hooks";
import { useRef } from "react";

export const Dialog5 = () => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const loginDialog = useDialog();
  const signupDialog = useDialog();

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="outlined" ref={triggerRef}>
          드랍다운 + 모달
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item onClick={loginDialog.open}>로그인</DropdownMenu.Item>
        <DropdownMenu.Item onClick={signupDialog.open}>회원가입</DropdownMenu.Item>
      </DropdownMenu.Content>
      <Dialog {...loginDialog.register()} triggerRef={triggerRef}>
        <Dialog.Content className="w-[27.5rem]">
          <Dialog.Header>
            <Dialog.Title>로그인</Dialog.Title>
            <Dialog.Description>
              모달을 닫았을 때, 드랍다운을 열였던 버튼으로 포커스가 이동합니다.
            </Dialog.Description>
          </Dialog.Header>
          <Dialog.Footer>
            <Dialog.Close asChild>
              <Button>닫기</Button>
            </Dialog.Close>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
      <Dialog {...signupDialog.register()} triggerRef={triggerRef}>
        <Dialog.Content className="w-[27.5rem]">
          <Dialog.Header>
            <Dialog.Title>회원가입</Dialog.Title>
            <Dialog.Description>
              모달을 닫았을 때, 드랍다운을 열였던 버튼으로 포커스가 이동합니다.
            </Dialog.Description>
          </Dialog.Header>
          <Dialog.Footer>
            <Dialog.Close asChild>
              <Button>닫기</Button>
            </Dialog.Close>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
    </DropdownMenu>
  );
};
