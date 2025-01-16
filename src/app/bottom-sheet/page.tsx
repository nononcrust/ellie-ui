"use client";

import { Grid } from "@/components/layouts/grid";
import { BottomSheet } from "@/components/ui/bottom-sheet";
import { Button } from "@/components/ui/button";
import { useSelect } from "@/hooks/use-select";

export default function BottomSheetPage() {
  return (
    <Grid>
      <Grid.Item>
        <BottomSheet1 />
      </Grid.Item>
      <Grid.Item>
        <BottomSheet2 />
      </Grid.Item>
    </Grid>
  );
}

const BottomSheet1 = () => {
  const bottomSheetSelect = useSelect("all");

  return (
    <BottomSheet>
      <BottomSheet.Trigger asChild>
        <Button variant="outlined">열기</Button>
      </BottomSheet.Trigger>
      <BottomSheet.Content>
        <BottomSheet.Title>1인 가구 종류를 선택하세요.</BottomSheet.Title>

        <BottomSheet.Description className="sr-only">
          1인 가구 종류를 선택하세요.
        </BottomSheet.Description>
        <BottomSheet.SelectGroup
          value={bottomSheetSelect.value}
          onChange={bottomSheetSelect.onChange}
        >
          <BottomSheet.SelectItem value="all">전체</BottomSheet.SelectItem>
          <BottomSheet.SelectItem value="one-room">원룸</BottomSheet.SelectItem>
          <BottomSheet.SelectItem value="officetel">오피스텔</BottomSheet.SelectItem>
        </BottomSheet.SelectGroup>
      </BottomSheet.Content>
    </BottomSheet>
  );
};
const BottomSheet2 = () => {
  return (
    <BottomSheet>
      <BottomSheet.Trigger asChild>
        <Button variant="outlined">열기</Button>
      </BottomSheet.Trigger>
      <BottomSheet.Content>
        <BottomSheet.Title>1인 가구 종류를 선택하세요.</BottomSheet.Title>
        <BottomSheet.Description>
          1인 가구의 종류에 따라 알맞는 방을 추천해드립니다.
        </BottomSheet.Description>
        <div className="h-[320px]" />
        <BottomSheet.Close asChild>
          <BottomSheet.Button>적용하기</BottomSheet.Button>
        </BottomSheet.Close>
      </BottomSheet.Content>
    </BottomSheet>
  );
};
