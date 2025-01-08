"use client";

import { Grid } from "@/components/layouts/grid";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function CheckboxPage() {
  return (
    <Grid>
      <Grid.Item>
        <Checkbox id="1" />
        <Label htmlFor="1" className="ml-2">
          서비스 약관에 동의합니다.
        </Label>
      </Grid.Item>
      <Grid.Item>
        <Checkbox id="2" disabled />
        <Label htmlFor="2" className="ml-2">
          서비스 약관에 동의합니다.
        </Label>
      </Grid.Item>
      <Grid.Item>
        <Checkbox id="3" aria-invalid />
        <Label htmlFor="3" className="ml-2">
          서비스 약관에 동의합니다.
        </Label>
      </Grid.Item>
    </Grid>
  );
}
