"use client";

import { Grid } from "@/components/layouts/grid";
import { Checkbox } from "@ellie-ui/core";

export default function CheckboxPage() {
  return (
    <Grid>
      <Grid.Item>
        <Checkbox defaultChecked>
          <Checkbox.Label>서비스 약관에 동의합니다.</Checkbox.Label>
        </Checkbox>
      </Grid.Item>
      <Grid.Item>
        <Checkbox disabled>
          <Checkbox.Label>서비스 약관에 동의합니다.</Checkbox.Label>
        </Checkbox>
      </Grid.Item>
      <Grid.Item>
        <Checkbox aria-invalid>
          <Checkbox.Label>서비스 약관에 동의합니다.</Checkbox.Label>
        </Checkbox>
      </Grid.Item>
      <Grid.Item>
        <Checkbox checked="indeterminate">
          <Checkbox.Label>서비스 약관에 동의합니다.</Checkbox.Label>
        </Checkbox>
      </Grid.Item>
      <Grid.Item>
        <Checkbox defaultChecked>
          <Checkbox.Label>서비스 약관에 동의합니다.</Checkbox.Label>
        </Checkbox>
      </Grid.Item>
      <Grid.Item>
        <Checkbox defaultChecked size="small">
          <Checkbox.Label>서비스 약관에 동의합니다.</Checkbox.Label>
        </Checkbox>
      </Grid.Item>
      <Grid.Item>
        <Checkbox defaultChecked size="large">
          <Checkbox.Label>서비스 약관에 동의합니다.</Checkbox.Label>
        </Checkbox>
      </Grid.Item>
      <Grid.Item>
        <Checkbox.Group className="flex flex-col gap-2">
          <Checkbox size="medium" defaultChecked>
            <Checkbox.Label>서비스 약관에 동의합니다.</Checkbox.Label>
          </Checkbox>
          <Checkbox size="medium" defaultChecked>
            <Checkbox.Label>개인정보 처리 방침에 동의합니다.</Checkbox.Label>
          </Checkbox>
          <Checkbox size="medium" defaultChecked>
            <Checkbox.Label>마케인 정보 수신에 동의합니다.</Checkbox.Label>
          </Checkbox>
        </Checkbox.Group>
      </Grid.Item>
    </Grid>
  );
}
