"use client";

import { Select } from "@ellie-ui/core";
import { useSelect } from "@ellie-ui/core/hooks";

export const SelectDemo = () => {
  return (
    <Select className="w-[20rem]" placeholder="항목을 선택해주세요">
      <Select.Option value="1">항목 1</Select.Option>
      <Select.Option value="2">항목 2</Select.Option>
      <Select.Option value="3">항목 3</Select.Option>
    </Select>
  );
};

export const SelectDemoDisabled = () => {
  return (
    <Select className="w-[20rem]" placeholder="항목을 선택해주세요" disabled>
      <Select.Option value="1">항목 1</Select.Option>
      <Select.Option value="2">항목 2</Select.Option>
      <Select.Option value="3">항목 3</Select.Option>
    </Select>
  );
};

export const SelectDemoInvalid = () => {
  return (
    <Select className="w-[20rem]" placeholder="항목을 선택해주세요" invalid>
      <Select.Option value="1">항목 1</Select.Option>
      <Select.Option value="2">항목 2</Select.Option>
      <Select.Option value="3">항목 3</Select.Option>
    </Select>
  );
};

export const SelectDemoControlled = () => {
  const select = useSelect();

  return (
    <Select {...select.register()} className="w-[20rem]" placeholder="항목을 선택해주세요">
      <Select.Option value="1">항목 1</Select.Option>
      <Select.Option value="2">항목 2</Select.Option>
      <Select.Option value="3">항목 3</Select.Option>
    </Select>
  );
};

export const SelectDemoOptionDisabled = () => {
  return (
    <Select className="w-[20rem]" placeholder="항목을 선택해주세요">
      <Select.Option value="1">항목 1</Select.Option>
      <Select.Option value="2" disabled>
        항목 2
      </Select.Option>
      <Select.Option value="3">항목 3</Select.Option>
    </Select>
  );
};

export const SelectDemoGroup = () => {
  return (
    <Select className="w-[20rem]" placeholder="항목을 선택해주세요">
      <Select.Group>
        <Select.Label>그룹 1</Select.Label>
        <Select.Option value="1">항목 1</Select.Option>
        <Select.Option value="2">항목 2</Select.Option>
        <Select.Option value="3">항목 3</Select.Option>
      </Select.Group>
      <Select.Separator />
      <Select.Group>
        <Select.Label>그룹 2</Select.Label>
        <Select.Option value="4">항목 4</Select.Option>
        <Select.Option value="5">항목 5</Select.Option>
        <Select.Option value="6">항목 6</Select.Option>
      </Select.Group>
    </Select>
  );
};
