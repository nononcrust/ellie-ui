import { Button, Prompt } from "@ellie-ui/core";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "components/Prompt",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Prompt>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <Prompt>
        <Prompt.Trigger asChild>
          <Button variant="outlined">열기</Button>
        </Prompt.Trigger>
        <Prompt.Content>
          <Prompt.Header>
            <Prompt.Title>모달 제목</Prompt.Title>
            <Prompt.Description>모달 설명이 여기에 표시됩니다.</Prompt.Description>
          </Prompt.Header>
          <Prompt.Footer>
            <Prompt.Cancel>취소</Prompt.Cancel>
            <Prompt.Action>확인</Prompt.Action>
          </Prompt.Footer>
        </Prompt.Content>
      </Prompt>
    );
  },
};

export const Destructive: Story = {
  render: () => {
    return (
      <Prompt>
        <Prompt.Trigger asChild>
          <Button variant="outlined">열기</Button>
        </Prompt.Trigger>
        <Prompt.Content>
          <Prompt.Header>
            <Prompt.Title>모달 제목</Prompt.Title>
            <Prompt.Description>모달 설명이 여기에 표시됩니다.</Prompt.Description>
          </Prompt.Header>
          <Prompt.Footer>
            <Prompt.Cancel>취소</Prompt.Cancel>
            <Prompt.Action variant="error">삭제</Prompt.Action>
          </Prompt.Footer>
        </Prompt.Content>
      </Prompt>
    );
  },
};
