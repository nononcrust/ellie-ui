"use client";

import { Grid } from "@/components/layouts/grid";
import { Label, RadioGroup } from "@ellie-ui/core";

export default function RadioGroupPage() {
  return (
    <Grid>
      <Grid.Item>
        <div className="flex w-full flex-col">
          <Label className="mb-2">Small</Label>
          <RadioGroup defaultValue="1" size="small">
            <RadioGroup.Option value="1">바나나</RadioGroup.Option>
            <RadioGroup.Option value="2">사과</RadioGroup.Option>
            <RadioGroup.Option value="3">딸기</RadioGroup.Option>
          </RadioGroup>
        </div>
      </Grid.Item>
      <Grid.Item>
        <div className="flex w-full flex-col">
          <Label className="mb-2">Medium</Label>
          <RadioGroup defaultValue="1" size="medium">
            <RadioGroup.Option value="1">바나나</RadioGroup.Option>
            <RadioGroup.Option value="2">사과</RadioGroup.Option>
            <RadioGroup.Option value="3">딸기</RadioGroup.Option>
          </RadioGroup>
        </div>
      </Grid.Item>
      <Grid.Item>
        <div className="flex w-full flex-col">
          <Label className="mb-2">Large</Label>
          <RadioGroup defaultValue="1" size="large">
            <RadioGroup.Option value="1">바나나</RadioGroup.Option>
            <RadioGroup.Option value="2">사과</RadioGroup.Option>
            <RadioGroup.Option value="3">딸기</RadioGroup.Option>
          </RadioGroup>
        </div>
      </Grid.Item>
      <Grid.Item>
        <div className="flex w-full flex-col">
          <Label className="mb-2">Disabled</Label>
          <RadioGroup defaultValue="1" size="small" disabled>
            <RadioGroup.Option value="1">바나나</RadioGroup.Option>
            <RadioGroup.Option value="2">사과</RadioGroup.Option>
            <RadioGroup.Option value="3">딸기</RadioGroup.Option>
          </RadioGroup>
        </div>
      </Grid.Item>
      <Grid.Item>
        <div className="flex w-full flex-col">
          <Label className="mb-2">Option Disabled</Label>
          <RadioGroup defaultValue="1" size="small">
            <RadioGroup.Option value="1">바나나</RadioGroup.Option>
            <RadioGroup.Option value="2" disabled>
              사과
            </RadioGroup.Option>
            <RadioGroup.Option value="3">딸기</RadioGroup.Option>
          </RadioGroup>
        </div>
      </Grid.Item>
    </Grid>
  );
}
