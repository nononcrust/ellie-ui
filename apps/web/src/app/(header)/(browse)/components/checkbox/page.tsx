"use client";

import { Grid } from "@/components/layouts/grid";
import { Checkbox } from "@ellie-ui/core";

export default function CheckboxPage() {
  return (
    <Grid>
      <Grid.Item>
        <Checkbox size="small" defaultChecked>
          <Checkbox.Label>서비스 약관에 동의합니다.</Checkbox.Label>
        </Checkbox>
      </Grid.Item>
      <Grid.Item>
        <Checkbox size="small" disabled>
          <Checkbox.Label>서비스 약관에 동의합니다.</Checkbox.Label>
        </Checkbox>
      </Grid.Item>
      <Grid.Item>
        <Checkbox size="small" aria-invalid>
          <Checkbox.Label>서비스 약관에 동의합니다.</Checkbox.Label>
        </Checkbox>
      </Grid.Item>
      <Grid.Item>
        <Checkbox checked="indeterminate" size="small">
          <Checkbox.Label>서비스 약관에 동의합니다.</Checkbox.Label>
        </Checkbox>
      </Grid.Item>
      <Grid.Item>
        <Checkbox defaultChecked size="medium">
          <Checkbox.Label>서비스 약관에 동의합니다.</Checkbox.Label>
        </Checkbox>
      </Grid.Item>
      <Grid.Item>
        <Checkbox checked="indeterminate" size="medium">
          <Checkbox.Label>서비스 약관에 동의합니다.</Checkbox.Label>
        </Checkbox>
      </Grid.Item>
      <Grid.Item>
        <Checkbox defaultChecked size="large">
          <Checkbox.Label>서비스 약관에 동의합니다.</Checkbox.Label>
        </Checkbox>
      </Grid.Item>
      <Grid.Item>
        <Checkbox checked="indeterminate" size="large">
          <Checkbox.Label>서비스 약관에 동의합니다.</Checkbox.Label>
        </Checkbox>
      </Grid.Item>
      <Grid.Item>
        <Checkbox.Group className="flex flex-col gap-1">
          <Checkbox size="small" defaultChecked>
            <Checkbox.Label>서비스 약관에 동의합니다.</Checkbox.Label>
          </Checkbox>
          <Checkbox size="small" defaultChecked>
            <Checkbox.Label>개인정보 처리 방침에 동의합니다.</Checkbox.Label>
          </Checkbox>
          <Checkbox size="small" defaultChecked>
            <Checkbox.Label>마케인 정보 수신에 동의합니다.</Checkbox.Label>
          </Checkbox>
        </Checkbox.Group>
      </Grid.Item>
    </Grid>
  );
}
