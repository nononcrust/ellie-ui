import { useDialog } from "@ellie-ui/core/hooks";
import { Meta, StoryObj } from "@storybook/react-vite";
import { useRef } from "react";
import { Dialog } from ".";
import { Button } from "../button";

const meta = {
  title: "base-ui/Dialog",
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
        <Dialog.Trigger render={<Button>열기</Button>} />
        <Dialog.Content className="w-[25rem]" animation="pop">
          <Dialog.Header>
            <Dialog.Title>모달 제목</Dialog.Title>
            <Dialog.Description>모달 설명이 여기에 표시됩니다.</Dialog.Description>
          </Dialog.Header>
          <Dialog.Footer className="mt-3">
            <Dialog.Close render={<Button variant="outlined">취소</Button>} />
            <Dialog.Close render={<Button>확인</Button>} />
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
        <Dialog.Trigger render={<Button>열기</Button>} />
        <Dialog.Content className="w-[25rem]" animation="slide">
          <Dialog.Header>
            <Dialog.Title>모달 제목</Dialog.Title>
            <Dialog.Description>모달 설명이 여기에 표시됩니다.</Dialog.Description>
          </Dialog.Header>
          <Dialog.Footer className="mt-3">
            <Dialog.Close render={<Button variant="outlined">취소</Button>} />
            <Dialog.Close render={<Button>확인</Button>} />
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
        <Dialog.Trigger render={<Button>열기</Button>} />
        <Dialog.Content className="w-[25rem]" animation="none">
          <Dialog.Header>
            <Dialog.Title>모달 제목</Dialog.Title>
            <Dialog.Description>모달 설명이 여기에 표시됩니다.</Dialog.Description>
          </Dialog.Header>
          <Dialog.Footer className="mt-3">
            <Dialog.Close render={<Button variant="outlined">취소</Button>} />
            <Dialog.Close render={<Button>확인</Button>} />
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
    );
  },
};

export const ScrollBody = () => {
  return (
    <Dialog>
      <Dialog.Trigger render={<Button>스크롤</Button>} />
      <Dialog.Content className="w-[25rem]">
        <Dialog.Header>
          <Dialog.Title>모달 제목</Dialog.Title>
          <Dialog.Description className="sr-only">
            모달 설명이 여기에 표시됩니다.
          </Dialog.Description>
        </Dialog.Header>
        <Dialog.Body>
          <div className="min-h-[225rem]">
            <span className="text-subtle">스크롤을 유발하는 컨텐츠</span>
          </div>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.Close render={<Button variant="outlined">취소</Button>} />
          <Dialog.Close render={<Button type="submit">동의합니다</Button>} />
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  );
};

export const Controlled: Story = {
  render: () => {
    const dialog = useDialog();

    return (
      <Dialog open={dialog.isOpen} onOpenChange={dialog.onOpenChange}>
        <Dialog.Trigger render={<Button>열기</Button>} />
        <Dialog.Content className="w-[25rem]" animation="pop">
          <Dialog.Header>
            <Dialog.Title>모달 제목</Dialog.Title>
            <Dialog.Description>모달 설명이 여기에 표시됩니다.</Dialog.Description>
          </Dialog.Header>
          <Dialog.Footer className="mt-3">
            <Dialog.Close render={<Button variant="outlined">취소</Button>} />
            <Dialog.Close render={<Button>확인</Button>} />
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
        <Dialog open={dialog.isOpen} onOpenChange={dialog.onOpenChange}>
          <Dialog.Content className="w-[25rem]" animation="pop" finalFocus={triggerRef}>
            <Dialog.Header>
              <Dialog.Title>모달 제목</Dialog.Title>
              <Dialog.Description>모달 설명이 여기에 표시됩니다.</Dialog.Description>
            </Dialog.Header>
            <Dialog.Footer className="mt-3">
              <Dialog.Close render={<Button variant="outlined">취소</Button>} />
              <Dialog.Close render={<Button>확인</Button>} />
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog>
      </>
    );
  },
};
