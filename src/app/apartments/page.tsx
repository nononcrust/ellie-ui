"use client";

import { Mobile } from "@/components/layouts/mobile";
import { BottomSheet } from "@/components/ui/bottom-sheet";
import { Button } from "@/components/ui/button";
import { useSelect } from "@/hooks/use-select";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "lucide-react";
import React from "react";

export default function AppartmentApplicationPage() {
  const typeSelect = useSelect();

  return (
    <Mobile>
      <h1 className="mt-12 text-3xl font-bold">주거/청약</h1>
      <div className="mt-6 flex flex-wrap gap-2">
        <BottomSheet>
          <BottomSheet.Trigger asChild>
            <FilterChip>주거 형태</FilterChip>
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
        <FilterChip>청약 종료일</FilterChip>
        <FilterChip>잔여 세대 수</FilterChip>
        <FilterChip>지원 조건</FilterChip>
        <FilterChip>공급 위치</FilterChip>
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

type FilterChipProps = React.ComponentPropsWithRef<"button">;

const FilterChip = ({ className, children, ...props }: FilterChipProps) => {
  return (
    <button
      className={cn(
        "inline-flex h-[40px] items-center gap-2 rounded-full bg-background-100 px-4 font-semibold",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDownIcon size={20} />
    </button>
  );
};
