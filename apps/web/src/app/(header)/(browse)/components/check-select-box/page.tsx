"use client";

import { Grid } from "@/components/layouts/grid";
import { CheckSelectBox } from "@ellie-ui/core";

export default function CheckSelectBoxPage() {
  return (
    <Grid>
      <div className="col-span-3 mt-8 px-4">
        <CheckSelectBox defaultValue={["1"]}>
          {options.map((option) => (
            <CheckSelectBox.Option key={option.value} value={option.value}>
              <CheckSelectBox.Label>{option.label}</CheckSelectBox.Label>
              <CheckSelectBox.Description>{option.description}</CheckSelectBox.Description>
            </CheckSelectBox.Option>
          ))}
        </CheckSelectBox>
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
