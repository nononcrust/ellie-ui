"use client";

import { RadioGroup } from "@ellie-ui/core";

export const RadioGroupDemo = () => {
  return (
    <RadioGroup defaultValue="1">
      <RadioGroup.Option value="1">사과</RadioGroup.Option>
      <RadioGroup.Option value="2">바나나</RadioGroup.Option>
      <RadioGroup.Option value="3">딸기</RadioGroup.Option>
    </RadioGroup>
  );
};
