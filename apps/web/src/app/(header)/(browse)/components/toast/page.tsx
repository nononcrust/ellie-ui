"use client";

import { Grid } from "@/components/layouts/grid";
import { Button, toast } from "@ellie-ui/core";

export default function ToastPage() {
  return (
    <Grid>
      <Grid.Item>
        <Button onClick={() => toast("새로운 메시지가 3개 도착했습니다.")}>일반</Button>
      </Grid.Item>
      <Grid.Item>
        <Button onClick={() => toast.success("변경사항이 성공적으로 저장되었습니다.")}>성공</Button>
      </Grid.Item>
      <Grid.Item>
        <Button
          onClick={() => toast.error("네트워크 연결이 좋지 않습니다. 잠시 후 다시 시도해주세요.")}
        >
          실패
        </Button>
      </Grid.Item>
    </Grid>
  );
}
