"use client";

import { useDialog } from "@/hooks/use-dialog";
import { Button, Dialog, RadioGroup } from "@ellie-ui/core";
import { useRef } from "react";

export const Dialog6 = () => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const confirmDialog = useDialog();

  return (
    <>
      <Dialog>
        <Dialog.Trigger asChild>
          <Button variant="outlined" ref={triggerRef}>
            모달 + 모달
          </Button>
        </Dialog.Trigger>
        <Dialog.Content className="w-[400px]">
          <Dialog.Header>
            <Dialog.Title>신고하기</Dialog.Title>
            <Dialog.Description>신고 사유를 선택해주세요.</Dialog.Description>
          </Dialog.Header>
          <Dialog.Body>
            <RadioGroup size="small" defaultValue="1">
              <RadioGroup.Option value="1">욕설, 비방, 혐오 표현</RadioGroup.Option>
              <RadioGroup.Option value="2">음란물</RadioGroup.Option>
              <RadioGroup.Option value="3">광고</RadioGroup.Option>
              <RadioGroup.Option value="4">기타</RadioGroup.Option>
            </RadioGroup>
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.Close asChild>
              <Button variant="outlined">취소</Button>
            </Dialog.Close>
            <Dialog.Close asChild>
              <Button onClick={confirmDialog.open}>신고하기</Button>
            </Dialog.Close>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
      <Dialog
        isOpen={confirmDialog.isOpen}
        onOpenChange={confirmDialog.onOpenChange}
        triggerRef={triggerRef}
      >
        <Dialog.Content className="w-[320px]" animation="none">
          <Dialog.Header>
            <Dialog.Title>신고하기</Dialog.Title>
            <Dialog.Description>해당 유저를 신고하시겠습니까?</Dialog.Description>
          </Dialog.Header>
          <Dialog.Footer>
            <Dialog.Close asChild>
              <Button variant="outlined">취소</Button>
            </Dialog.Close>
            <Dialog.Close asChild>
              <Button>확인</Button>
            </Dialog.Close>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
    </>
  );
};
