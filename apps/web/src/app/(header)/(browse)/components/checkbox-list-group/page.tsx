"use client";

import { Grid } from "@/components/layouts/grid";
import { CheckboxListGroup } from "@ellie-ui/core";

export default function CheckboxListGroupPage() {
  return (
    <Grid>
      <div className="col-span-3 mt-8 px-4">
        <CheckboxListGroup defaultValue={["1"]}>
          {options.map((option) => (
            <CheckboxListGroup.Option key={option.value} value={option.value}>
              <CheckboxListGroup.Label>{option.label}</CheckboxListGroup.Label>
              <CheckboxListGroup.Description>{option.description}</CheckboxListGroup.Description>
            </CheckboxListGroup.Option>
          ))}
        </CheckboxListGroup>
      </div>
    </Grid>
  );
}

const options = [
  {
    value: "1",
    label: "동적 UI",
    description: "조건을 걸어 서버에 동작할 수 있는 통신을 보낼 수 있어요.",
  },
  { value: "2", label: "조건 조회 UI", description: "조건을 설정하여 데이터를 조회할 수 있어요." },
  {
    value: "3",
    label: "조건 조회 + 동적 UI",
    description: "조건을 설정하여 데이터를 조회하고 추가 동작을 할 수 있어요.",
  },
];
