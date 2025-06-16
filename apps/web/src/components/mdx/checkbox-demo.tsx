"use client";

import { Checkbox } from "@ellie-ui/core";
import { useCheckbox } from "@ellie-ui/core/hooks";

export const CheckboxDemo = () => {
  return <Checkbox defaultChecked />;
};

export const CheckboxDemoWithLabel = () => {
  return (
    <Checkbox defaultChecked>
      <Checkbox.Label>서비스 약관에 동의합니다.</Checkbox.Label>
    </Checkbox>
  );
};

export const CheckboxDemoSizes = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <Checkbox size="small" defaultChecked>
        <Checkbox.Label>서비스 약관에 동의합니다.</Checkbox.Label>
      </Checkbox>
      <Checkbox size="medium" defaultChecked>
        <Checkbox.Label>서비스 약관에 동의합니다.</Checkbox.Label>
      </Checkbox>
      <Checkbox size="large" defaultChecked>
        <Checkbox.Label>서비스 약관에 동의합니다.</Checkbox.Label>
      </Checkbox>
    </div>
  );
};

export const CheckboxDemoDisabled = () => {
  return <Checkbox defaultChecked disabled />;
};

export const CheckboxDemoInvalid = () => {
  return <Checkbox defaultChecked aria-invalid />;
};

export const CheckboxDemoIndeterminate = () => {
  return <Checkbox checked="indeterminate" />;
};

export const CheckboxDemoControlled = () => {
  const checkbox = useCheckbox();

  return <Checkbox checked={checkbox.checked} onChange={checkbox.onChange} />;
};
