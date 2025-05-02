"use client";

import { Form, Input } from "@ellie-ui/core";

export const InputDemoWithForm = () => {
  return (
    <Form>
      <Form.Item>
        <Form.Label>이메일</Form.Label>
        <Form.Control>
          <Input className="w-[20rem]" placeholder="이메일을 입력해주세요" />
        </Form.Control>
        <Form.Description>이메일을 입력해주세요</Form.Description>
        <Form.ErrorMessage>올바른 이메일 형식을 입력해주세요</Form.ErrorMessage>
      </Form.Item>
    </Form>
  );
};
