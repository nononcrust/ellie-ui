"use client";

import { Grid } from "@/components/layouts/grid";
import { Label } from "@/components/ui/label";
import { RadioGroup } from "@/components/ui/radio-group";

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
        <RadioGroup defaultValue="1">
          <div className="border-border has-data-[state=checked]:border-primary relative flex w-full items-start justify-between gap-2 rounded-lg border p-4 shadow-xs">
            <div className="grid grow gap-2">
              <Label htmlFor="radio-1">바나나</Label>
              <p id="1-description" className="text-subtle text-xs">
                당도 높고 아주 맛있는 바나나입니다.
              </p>
            </div>
            <RadioGroup.Item
              id="radio-1"
              className="after:absolute after:inset-0"
              value="1"
              aria-describedby="1-description"
            />
          </div>
          <div className="border-border has-data-[state=checked]:border-primary relative flex w-full items-start justify-between gap-2 rounded-lg border p-4 shadow-xs">
            <div className="grid grow gap-2">
              <Label htmlFor="radio-2">딸기</Label>
              <p id="2-description" className="text-subtle text-xs">
                색이 예쁘고 달콤한 딸기입니다.
              </p>
            </div>
            <RadioGroup.Item
              id="radio-2"
              className="after:absolute after:inset-0"
              value="2"
              aria-describedby="2-description"
            />
          </div>
        </RadioGroup>
      </Grid.Item>
    </Grid>
  );
}
