"use client";

import { Grid } from "@/components/layouts/grid";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function CheckboxPage() {
  return (
    <Grid>
      <Grid.Item>
        <Label className="flex items-center gap-2">
          <Checkbox size="small" defaultChecked />
          서비스 약관에 동의합니다.
        </Label>
      </Grid.Item>
      <Grid.Item>
        <Label className="flex items-center gap-2">
          <Checkbox size="small" disabled />
          서비스 약관에 동의합니다.
        </Label>
      </Grid.Item>
      <Grid.Item>
        <Label className="flex items-center gap-2">
          <Checkbox size="small" aria-invalid />
          서비스 약관에 동의합니다.
        </Label>
      </Grid.Item>
      <Grid.Item>
        <Label className="flex items-center gap-2 text-base">
          <Checkbox checked="indeterminate" size="small" />
          서비스 약관에 동의합니다.
        </Label>
      </Grid.Item>
      <Grid.Item>
        <Label className="flex items-center gap-2 text-base">
          <Checkbox defaultChecked size="medium" />
          서비스 약관에 동의합니다.
        </Label>
      </Grid.Item>
      <Grid.Item>
        <Label className="flex items-center gap-2 text-base">
          <Checkbox checked="indeterminate" size="medium" />
          서비스 약관에 동의합니다.
        </Label>
      </Grid.Item>
      <Grid.Item>
        <Label className="flex items-center gap-3 text-base">
          <Checkbox defaultChecked size="large" />
          서비스 약관에 동의합니다.
        </Label>
      </Grid.Item>
      <Grid.Item>
        <Label className="flex items-center gap-3 text-base">
          <Checkbox checked="indeterminate" size="large" />
          서비스 약관에 동의합니다.
        </Label>
      </Grid.Item>
    </Grid>
  );
}
