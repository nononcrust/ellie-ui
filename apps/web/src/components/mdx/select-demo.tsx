"use client";

import { Select } from "@ellie-ui/core";

export const SelectDemo = () => {
  return (
    <Select className="w-[20rem]" placeholder="항목을 선택해주세요">
      <Select.Option value="1">항목 1</Select.Option>
      <Select.Option value="2">항목 2</Select.Option>
      <Select.Option value="3">항목 3</Select.Option>
    </Select>
  );
};
