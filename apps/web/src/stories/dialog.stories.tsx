import { Button, Dialog } from "@ellie-ui/core";
import { useDialog } from "@ellie-ui/core/hooks";
import { Meta, StoryObj } from "@storybook/react";
import { useRef } from "react";

const meta = {
  title: "components/Dialog",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <Dialog>
        <Dialog.Trigger asChild>
          <Button>열기</Button>
        </Dialog.Trigger>
        <Dialog.Content className="w-[400px]" animation="pop">
          <Dialog.Header>
            <Dialog.Title>모달 제목</Dialog.Title>
            <Dialog.Description>모달 설명이 여기에 표시됩니다.</Dialog.Description>
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
  },
};

export const SlideAnimation: Story = {
  render: () => {
    return (
      <Dialog>
        <Dialog.Trigger asChild>
          <Button>열기</Button>
        </Dialog.Trigger>
        <Dialog.Content className="w-[400px]" animation="slide">
          <Dialog.Header>
            <Dialog.Title>모달 제목</Dialog.Title>
            <Dialog.Description>모달 설명이 여기에 표시됩니다.</Dialog.Description>
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
  },
};

export const NoAnimation: Story = {
  render: () => {
    return (
      <Dialog>
        <Dialog.Trigger asChild>
          <Button>열기</Button>
        </Dialog.Trigger>
        <Dialog.Content className="w-[400px]" animation="none">
          <Dialog.Header>
            <Dialog.Title>모달 제목</Dialog.Title>
            <Dialog.Description>모달 설명이 여기에 표시됩니다.</Dialog.Description>
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
  },
};

export const ScrollBody = () => {
  return (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button>스크롤</Button>
      </Dialog.Trigger>
      <Dialog.Content className="w-[400px]">
        <Dialog.Header>
          <Dialog.Title>모달 제목</Dialog.Title>
          <Dialog.Description className="sr-only">
            모달 설명이 여기에 표시됩니다.
          </Dialog.Description>
        </Dialog.Header>
        <Dialog.Body>
          <div className="min-h-[2400px]">
            <span className="text-subtle">스크롤을 유발하는 컨텐츠</span>
          </div>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.Close asChild>
            <Button variant="outlined">취소</Button>
          </Dialog.Close>
          <Dialog.Close asChild>
            <Button type="submit">동의합니다</Button>
          </Dialog.Close>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  );
};

export const Controlled: Story = {
  render: () => {
    const dialog = useDialog();

    return (
      <Dialog isOpen={dialog.isOpen} onOpenChange={dialog.onOpenChange}>
        <Dialog.Trigger asChild>
          <Button>열기</Button>
        </Dialog.Trigger>
        <Dialog.Content className="w-[400px]" animation="pop">
          <Dialog.Header>
            <Dialog.Title>모달 제목</Dialog.Title>
            <Dialog.Description>모달 설명이 여기에 표시됩니다.</Dialog.Description>
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
  },
};

export const WithCustomTrigger: Story = {
  render: () => {
    const triggerRef = useRef<HTMLButtonElement>(null);
    const dialog = useDialog();

    return (
      <>
        <Button ref={triggerRef} onClick={dialog.open}>
          열기
        </Button>
        <Dialog isOpen={dialog.isOpen} onOpenChange={dialog.onOpenChange} triggerRef={triggerRef}>
          <Dialog.Content className="w-[400px]" animation="pop">
            <Dialog.Header>
              <Dialog.Title>모달 제목</Dialog.Title>
              <Dialog.Description>모달 설명이 여기에 표시됩니다.</Dialog.Description>
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
      </>
    );
  },
};
