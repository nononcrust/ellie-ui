"use client";

import { Mobile } from "@/components/layouts/mobile";
import { Badge, BottomSheet, Button, Checkbox, ChipButton, RadioGroup } from "@ellie-ui/core";
import { useSelect } from "@ellie-ui/core/hooks";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  RotateCwIcon,
  SlidersHorizontalIcon,
} from "lucide-react";
import React from "react";
import { SearchInput } from "../_components/search-input";

export default function AppartmentApplicationPage() {
  return (
    <Mobile>
      <SearchInput placeholder="청약 제목으로 검색하세요" />
      <h1 className="mt-12 text-3xl font-semibold">주거/청약</h1>
      <div className="mt-6 flex flex-wrap gap-2">
        <AllFilter />
        <TypeFilter />
        <ChipButton variant="secondary">
          청약 종료일
          <ChevronDownIcon className="size-4" />
        </ChipButton>
        <ChipButton variant="secondary">
          잔여 세대 수
          <ChevronDownIcon className="size-4" />
        </ChipButton>
        <ChipButton variant="secondary">
          지원 조건
          <ChevronDownIcon className="size-4" />
        </ChipButton>
        <ChipButton variant="secondary">
          공급 위치
          <ChevronDownIcon className="size-4" />
        </ChipButton>
      </div>
      <ul className="mt-8 flex flex-col gap-6">
        {Array.from({ length: 10 }).map((_, index) => (
          <ApplicationListItem key={index} />
        ))}
      </ul>
      <div className="flex justify-center py-16">
        <span className="text-subtle font-medium">마지막 항목입니다.</span>
      </div>
      <CTAContainer>
        <Button className="w-full" size="xlarge">
          청약 신청하러 가기
        </Button>
      </CTAContainer>
    </Mobile>
  );
}

const CTAContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex h-24 md:hidden" />
      <div className="bg-background sticky bottom-0 left-0 right-0 flex flex-col pb-4 pt-0 md:hidden">
        <div className="relative">
          <div className="to-background bg-linear-to-b absolute -top-8 left-0 right-0 z-10 h-8 from-transparent" />
          <div className="relative z-20">{children}</div>
        </div>
      </div>
    </>
  );
};

const AllFilter = () => {
  return (
    <BottomSheet>
      <div className="relative">
        <BottomSheet.Trigger asChild>
          <ChipButton variant="primaryLowOutlined" className="w-9 px-0">
            <SlidersHorizontalIcon className="size-4" />
          </ChipButton>
        </BottomSheet.Trigger>
        <Badge className="absolute -top-2 left-full -translate-x-4">3</Badge>
      </div>
      <BottomSheet.Content>
        <BottomSheet.Header>
          <BottomSheet.Title>상세 필터</BottomSheet.Title>
          <BottomSheet.Description className="sr-only">상세 필터</BottomSheet.Description>
        </BottomSheet.Header>
        <BottomSheet.Body>
          <span className="mt-4 font-semibold">청약 종료일</span>
          <RadioGroup className="mt-3" size="large" defaultValue="전체">
            <RadioGroup.Option value="전체">전체</RadioGroup.Option>
            <RadioGroup.Option value="1개월 이내">1개월 이내</RadioGroup.Option>
            <RadioGroup.Option value="3개월 이내">3개월 이내</RadioGroup.Option>
            <RadioGroup.Option value="6개월 이내">6개월 이내</RadioGroup.Option>
          </RadioGroup>
          <span className="mt-4 font-semibold">지원 조건</span>
          <RadioGroup className="mt-3" size="large" defaultValue="전체">
            <RadioGroup.Option value="전체">전체</RadioGroup.Option>
            <RadioGroup.Option value="1개월 이내">사회 초년생</RadioGroup.Option>
            <RadioGroup.Option value="3개월 이내">다자녀 가구</RadioGroup.Option>
            <RadioGroup.Option value="6개월 이내">미혼 여성</RadioGroup.Option>
          </RadioGroup>
          <span className="mt-8 font-semibold">잔여 세대 수</span>
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
          <span className="mt-8 font-semibold">공급 위치</span>
          <div className="flex items-center justify-between py-4">
            <span className="text-sub text-lg font-medium">성남시 분당구 서현동</span>
            <ChevronRightIcon className="size-5" />
          </div>
        </BottomSheet.Body>
        <BottomSheet.Footer className="gap-4">
          <Button size="xlarge" variant="outlined">
            <RotateCwIcon className="text-subtle size-[1.125rem]" />
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
        <ChipButton variant={typeSelect.value ? "primaryLowOutlined" : "secondary"}>
          {typeSelect.value || "주거 형태"}
          <ChevronDownIcon className="size-4" />
        </ChipButton>
      </BottomSheet.Trigger>
      <BottomSheet.Content>
        <BottomSheet.Header>
          <BottomSheet.Title>주거 형태</BottomSheet.Title>
        </BottomSheet.Header>
        <BottomSheet.Body>
          <BottomSheet.SelectGroup value={typeSelect.value} onChange={typeSelect.onChange}>
            <BottomSheet.SelectItem value="아파트">아파트</BottomSheet.SelectItem>
            <BottomSheet.SelectItem value="주택">주택</BottomSheet.SelectItem>
            <BottomSheet.SelectItem value="오피스텔">오피스텔</BottomSheet.SelectItem>
          </BottomSheet.SelectGroup>
        </BottomSheet.Body>
      </BottomSheet.Content>
    </BottomSheet>
  );
};

const ApplicationListItem = () => {
  return (
    <li className="flex items-center justify-between">
      <div className="flex flex-col">
        <span className="text-primary text-sm font-semibold">무순위/잔여세대</span>
        <span className="font-medium">의왕고천지구 대방 디에트르 센트럴(B1BL)</span>
        <span className="text-sub text-sm font-medium">의왕시 고천동</span>
        <span className="text-subtle mt-2 text-sm font-medium">조회 5,513 알림 수 479</span>
      </div>
      <div>
        <Button>신청</Button>
      </div>
    </li>
  );
};
