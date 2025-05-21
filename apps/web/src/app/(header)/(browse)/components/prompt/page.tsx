"use client";

import { Grid } from "@/components/layouts/grid";
import { Button, Prompt } from "@ellie-ui/core";

export default function DialogPage() {
  return (
    <Grid>
      <Grid.Item>
        <Prompt1 />
      </Grid.Item>
      <Grid.Item>
        <Prompt2 />
      </Grid.Item>
    </Grid>
  );
}

export const Prompt1 = () => {
  return (
    <Prompt>
      <Prompt.Trigger asChild>
        <Button variant="outlined">제출하기</Button>
      </Prompt.Trigger>
      <Prompt.Content>
        <Prompt.Header>
          <Prompt.Title>과제를 제출할까요?</Prompt.Title>
          <Prompt.Description>제출한 과제는 수정할 수 없어요.</Prompt.Description>
        </Prompt.Header>
        <Prompt.Footer>
          <Prompt.Cancel>취소</Prompt.Cancel>
          <Prompt.Action>확인</Prompt.Action>
        </Prompt.Footer>
      </Prompt.Content>
    </Prompt>
  );
};

export const Prompt2 = () => {
  return (
    <Prompt>
      <Prompt.Trigger asChild>
        <Button variant="outlined">삭제하기</Button>
      </Prompt.Trigger>
      <Prompt.Content>
        <Prompt.Header>
          <Prompt.Title>과제를 삭제할까요?</Prompt.Title>
          <Prompt.Description>삭제한 과제는 되돌릴 수 없어요.</Prompt.Description>
        </Prompt.Header>
        <Prompt.Footer>
          <Prompt.Cancel>취소</Prompt.Cancel>
          <Prompt.Action variant="error">삭제</Prompt.Action>
        </Prompt.Footer>
      </Prompt.Content>
    </Prompt>
  );
};
