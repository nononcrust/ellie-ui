"use client";

import { Grid } from "@/components/layouts/grid";
import { Label } from "@/components/ui/label";
import { RadioGroup } from "@/components/ui/radio-group";

export default function RadioGroupPage() {
  return (
    <Grid>
      <Grid.Item>
        <div className="flex w-full flex-col">
          <Label className="mb-2">프레임워크 선택</Label>
          <RadioGroup defaultValue="1">
            <RadioGroup.Option>
              <RadioGroup.Item value="1" />
              <RadioGroup.Label>React</RadioGroup.Label>
            </RadioGroup.Option>
            <RadioGroup.Option>
              <RadioGroup.Item value="2" />
              <RadioGroup.Label>Astro</RadioGroup.Label>
            </RadioGroup.Option>
            <RadioGroup.Option>
              <RadioGroup.Item value="3" />
              <RadioGroup.Label>Remix</RadioGroup.Label>
            </RadioGroup.Option>
          </RadioGroup>
        </div>
      </Grid.Item>
      <Grid.Item>
        <div className="flex w-full flex-col">
          <Label className="mb-2">프레임워크 선택</Label>
          <RadioGroup defaultValue="1">
            <RadioGroup.Option>
              <RadioGroup.Item value="1" />
              <RadioGroup.Label>React</RadioGroup.Label>
            </RadioGroup.Option>
            <RadioGroup.Option>
              <RadioGroup.Item value="2" disabled />
              <RadioGroup.Label>Astro</RadioGroup.Label>
            </RadioGroup.Option>
            <RadioGroup.Option>
              <RadioGroup.Item value="3" />
              <RadioGroup.Label>Remix</RadioGroup.Label>
            </RadioGroup.Option>
          </RadioGroup>
        </div>
      </Grid.Item>
      <Grid.Item>
        <RadioGroup>
          <div className="relative flex w-full items-start justify-between gap-2 rounded-lg border border-border p-4 shadow-sm has-[[data-state=checked]]:border-black">
            <div className="grid grow gap-2">
              <Label htmlFor="radio-1">Label</Label>
              <p id="1-description" className="text-xs text-subtle">
                You can use this card with a label and a description.
              </p>
            </div>
            <RadioGroup.Item
              id="radio-1"
              className="after:absolute after:inset-0"
              value="1"
              aria-describedby="1-description"
            />
          </div>
          <div className="relative flex w-full items-start justify-between gap-2 rounded-lg border border-border p-4 shadow-sm has-[[data-state=checked]]:border-black">
            <div className="grid grow gap-2">
              <Label htmlFor="radio-2">Label</Label>
              <p id="2-description" className="text-xs text-subtle">
                You can use this card with a label and a description.
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
