"use client";

import { Mobile } from "@/components/layouts/mobile";
import { Badge } from "@/components/ui/badge";
import { BottomSheet } from "@/components/ui/bottom-sheet";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup } from "@/components/ui/radio-group";
import { useSelect } from "@/hooks/use-select";
import { cn } from "@/lib/utils";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  RotateCwIcon,
  SlidersHorizontalIcon,
} from "lucide-react";
import React from "react";

export default function AppartmentApplicationPage() {
  return (
    <Mobile>
      <h1 className="mt-12 text-3xl font-bold">주거/청약</h1>
      <div className="mt-6 flex flex-wrap gap-2">
        <AllFilter />
        <TypeFilter />
        <FilterChip>
          청약 종료일
          <ChevronDownIcon size={16} />
        </FilterChip>
        <FilterChip>
          잔여 세대 수
          <ChevronDownIcon size={16} />
        </FilterChip>
        <FilterChip>
          지원 조건
          <ChevronDownIcon size={16} />
        </FilterChip>
        <FilterChip>
          공급 위치
          <ChevronDownIcon size={16} />
        </FilterChip>
      </div>
      <ul className="mt-8 flex flex-col gap-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <li key={index} className="h-[120px] w-full rounded-xl bg-background-100" />
        ))}
      </ul>
      <div className="mt-12 flex gap-2 pb-4">
        <Button size="xlarge" className="w-full" variant="primaryLow">
          청약 알림받기
        </Button>
        <Button className="w-full" size="xlarge">
          청약 신청하기
        </Button>
      </div>
    </Mobile>
  );
}

const AllFilter = () => {
  return (
    <BottomSheet>
      <BottomSheet.Trigger asChild>
        <div className="relative">
          <FilterChip active className="w-9 px-0">
            <SlidersHorizontalIcon size={16} />
          </FilterChip>
          <Badge className="absolute -top-2 left-full -translate-x-4">3</Badge>
        </div>
      </BottomSheet.Trigger>
      <BottomSheet.Content>
        <BottomSheet.Header>
          <BottomSheet.Title>상세 필터</BottomSheet.Title>
          <BottomSheet.Description className="sr-only">상세 필터</BottomSheet.Description>
        </BottomSheet.Header>
        <BottomSheet.Body>
          <span className="text-semibold mt-4">청약 종료일</span>
          <RadioGroup className="mt-3" size="large" defaultValue="전체">
            <RadioGroup.Option value="전체">전체</RadioGroup.Option>
            <RadioGroup.Option value="1개월 이내">1개월 이내</RadioGroup.Option>
            <RadioGroup.Option value="3개월 이내">3개월 이내</RadioGroup.Option>
            <RadioGroup.Option value="6개월 이내">6개월 이내</RadioGroup.Option>
          </RadioGroup>
          <span className="text-semibold mt-4">지원 조건</span>
          <RadioGroup className="mt-3" size="large" defaultValue="전체">
            <RadioGroup.Option value="전체">전체</RadioGroup.Option>
            <RadioGroup.Option value="1개월 이내">사회 초년생</RadioGroup.Option>
            <RadioGroup.Option value="3개월 이내">다자녀 가구</RadioGroup.Option>
            <RadioGroup.Option value="6개월 이내">미혼 여성</RadioGroup.Option>
          </RadioGroup>
          <span className="text-semibold mt-8">잔여 세대 수</span>
          <div className="mt-3 flex flex-col gap-6">
            <label className="flex items-center gap-3">
              <Checkbox size="large" />
              <span className="font-medium">전체</span>
            </label>
            <label className="flex items-center gap-3">
              <Checkbox size="large" />
              <span className="font-medium">1세대</span>
            </label>
          </div>
          <span className="text-semibold mt-8">공급 위치</span>
          <div className="flex items-center justify-between py-4">
            <span className="text-lg font-medium text-sub">성남시 분당구 서현동</span>
            <ChevronRightIcon size={20} />
          </div>
        </BottomSheet.Body>
        <BottomSheet.Footer className="gap-4">
          <Button size="xlarge" variant="outlined">
            <RotateCwIcon size={18} className="text-subtle" />
            초기화
          </Button>
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

const TypeFilter = () => {
  const typeSelect = useSelect();

  return (
    <BottomSheet>
      <BottomSheet.Trigger asChild>
        <FilterChip>
          주거 형태
          <ChevronDownIcon size={16} />
        </FilterChip>
      </BottomSheet.Trigger>
      <BottomSheet.Content>
        <BottomSheet.Header>
          <BottomSheet.Title>주거 형태</BottomSheet.Title>
        </BottomSheet.Header>
        <BottomSheet.Body>
          <BottomSheet.SelectGroup value={typeSelect.value} onChange={typeSelect.onChange}>
            <BottomSheet.SelectItem value="apartment">아파트</BottomSheet.SelectItem>
            <BottomSheet.SelectItem value="house">주택</BottomSheet.SelectItem>
            <BottomSheet.SelectItem value="officetel">오피스텔</BottomSheet.SelectItem>
          </BottomSheet.SelectGroup>
        </BottomSheet.Body>
      </BottomSheet.Content>
    </BottomSheet>
  );
};

type FilterChipProps = React.ComponentPropsWithRef<"button"> & {
  active?: boolean;
};

const FilterChip = ({ className, active, children, ...props }: FilterChipProps) => {
  return (
    <button
      className={cn(
        "inline-flex h-9 items-center justify-center gap-1.5 rounded-full border border-transparent bg-background-100 px-3.5 text-sm font-medium",
        active && "border-primary bg-primary-lighter text-primary",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
