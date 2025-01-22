"use client";

import { Grid } from "@/components/layouts/grid";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function CheckboxPage() {
  return (
    <Grid>
      <Grid.Item>
        <Checkbox size="small" defaultChecked id="1" />
        <Label htmlFor="1" className="ml-2">
          서비스 약관에 동의합니다.
        </Label>
      </Grid.Item>
      <Grid.Item>
        <Checkbox size="small" id="2" disabled />
        <Label htmlFor="2" className="ml-2">
          서비스 약관에 동의합니다.
        </Label>
      </Grid.Item>
      <Grid.Item>
        <Checkbox size="small" id="3" aria-invalid />
        <Label htmlFor="3" className="ml-2">
          서비스 약관에 동의합니다.
        </Label>
      </Grid.Item>
      <Grid.Item>
        <Checkbox checked="indeterminate" size="small" id="4" />
        <Label className="ml-2 text-base" htmlFor="4">
          서비스 약관에 동의합니다.
        </Label>
      </Grid.Item>
      <Grid.Item>
        <Checkbox defaultChecked size="medium" id="5" />
        <Label className="ml-2 text-base" htmlFor="5">
          서비스 약관에 동의합니다.
        </Label>
      </Grid.Item>
      <Grid.Item>
        <Checkbox checked="indeterminate" size="medium" id="6" />
        <Label className="ml-2 text-base" htmlFor="6">
          서비스 약관에 동의합니다.
        </Label>
      </Grid.Item>
      <Grid.Item>
        <Checkbox defaultChecked size="large" id="7" />
        <Label className="ml-3 text-base" htmlFor="7">
          서비스 약관에 동의합니다.
        </Label>
      </Grid.Item>
      <Grid.Item>
        <Checkbox checked="indeterminate" size="large" id="8" />
        <Label className="ml-3 text-base" htmlFor="8">
          서비스 약관에 동의합니다.
        </Label>
      </Grid.Item>
    </Grid>
  );
}
