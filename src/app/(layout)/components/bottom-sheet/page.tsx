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
      <Grid.Item>
        <BottomSheet3 />
      </Grid.Item>
    </Grid>
  );
}

const BottomSheet1 = () => {
  const bottomSheetSelect = useSelect("all");

  return (
    <BottomSheet>
      <BottomSheet.Trigger asChild>
        <Button variant="outlined">가구 유형 선택</Button>
      </BottomSheet.Trigger>
      <BottomSheet.Content>
        <BottomSheet.Header>
          <BottomSheet.Title>1인 가구 종류를 선택하세요.</BottomSheet.Title>
          <BottomSheet.Description className="sr-only">
            1인 가구 종류를 선택하세요.
          </BottomSheet.Description>
        </BottomSheet.Header>
        <BottomSheet.Body>
          <BottomSheet.SelectGroup
            value={bottomSheetSelect.value}
            onChange={bottomSheetSelect.onChange}
          >
            <BottomSheet.SelectItem value="all">전체</BottomSheet.SelectItem>
            <BottomSheet.SelectItem value="one-room">원룸</BottomSheet.SelectItem>
            <BottomSheet.SelectItem value="officetel">오피스텔</BottomSheet.SelectItem>
          </BottomSheet.SelectGroup>
        </BottomSheet.Body>
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
        <BottomSheet.Header>
          <BottomSheet.Title>1인 가구 종류를 선택하세요.</BottomSheet.Title>
          <BottomSheet.Description>
            1인 가구의 종류에 따라 알맞는 방을 추천해드립니다.
          </BottomSheet.Description>
        </BottomSheet.Header>

        <div className="h-[320px]" />
        <BottomSheet.Footer>
          <BottomSheet.Close asChild>
            <Button size="xlarge" className="w-full">
              적용하기
            </Button>
          </BottomSheet.Close>
        </BottomSheet.Footer>
      </BottomSheet.Content>
    </BottomSheet>
  );
};

const BottomSheet3 = () => {
  const bottomSheetSelect = useSelect("all");

  return (
    <BottomSheet>
      <BottomSheet.Trigger asChild>
        <Button variant="outlined">키워드 선택</Button>
      </BottomSheet.Trigger>
      <BottomSheet.Content>
        <BottomSheet.Header>
          <BottomSheet.Title>키워드 선택</BottomSheet.Title>
          <BottomSheet.Description className="sr-only">키워드 선택</BottomSheet.Description>
        </BottomSheet.Header>
        <BottomSheet.Body>
          <BottomSheet.SelectGroup
            value={bottomSheetSelect.value}
            onChange={bottomSheetSelect.onChange}
          >
            <BottomSheet.SelectItem value="all">전체</BottomSheet.SelectItem>
            <BottomSheet.SelectItem value="one-room">원룸</BottomSheet.SelectItem>
            <BottomSheet.SelectItem value="officetel">오피스텔</BottomSheet.SelectItem>
            <BottomSheet.SelectItem value="apartment">아파트</BottomSheet.SelectItem>
            <BottomSheet.SelectItem value="house">주택</BottomSheet.SelectItem>
            <BottomSheet.SelectItem value="villa">빌라</BottomSheet.SelectItem>
            <BottomSheet.SelectItem value="detached-house">단독주택</BottomSheet.SelectItem>
            <BottomSheet.SelectItem value="row-house">연립주택</BottomSheet.SelectItem>
            <BottomSheet.SelectItem value="office">사무실</BottomSheet.SelectItem>
            <BottomSheet.SelectItem value="store">상가</BottomSheet.SelectItem>
            <BottomSheet.SelectItem value="building">건물</BottomSheet.SelectItem>
          </BottomSheet.SelectGroup>
        </BottomSheet.Body>
        <BottomSheet.Footer className="gap-4">
          <BottomSheet.Close asChild>
            <Button size="xlarge" className="w-full" variant="primaryLow">
              취소
            </Button>
          </BottomSheet.Close>
          <BottomSheet.Close asChild>
            <Button size="xlarge" className="w-full" variant="primary">
              적용하기
            </Button>
          </BottomSheet.Close>
        </BottomSheet.Footer>
      </BottomSheet.Content>
    </BottomSheet>
  );
};
