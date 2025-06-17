"use client";

import { Grid } from "@/components/layouts/grid";
import { cn } from "@/lib/utils";
import { Command, Label, NativeSelect, Popover, Select } from "@ellie-ui/core";
import { usePopover } from "@ellie-ui/core/hooks";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";

export default function SelectPage() {
  return (
    <Grid>
      <Grid.Item>
        <Select1 />
      </Grid.Item>
      <Grid.Item>
        <Select2 />
      </Grid.Item>
      <Grid.Item>
        <Select3 />
      </Grid.Item>
      <Grid.Item>
        <Select4 />
      </Grid.Item>
      <Grid.Item>
        <Select5 />
      </Grid.Item>
      <Grid.Item>
        <Select6 />
      </Grid.Item>
      <Grid.Item>
        <Select7 />
      </Grid.Item>
      <Grid.Item>
        <Select8 />
      </Grid.Item>
      <Grid.Item>
        <Select9 />
      </Grid.Item>
    </Grid>
  );
}

const Select1 = () => {
  return (
    <div className="flex w-full flex-col">
      <Label className="mb-2">정렬 기준</Label>
      <Select>
        <Select.Option value="1">인기순</Select.Option>
        <Select.Option value="2">최신순</Select.Option>
        <Select.Option value="3">가격 낮은 순</Select.Option>
        <Select.Option value="4">가격 높은 순</Select.Option>
      </Select>
    </div>
  );
};

const Select2 = () => {
  return (
    <div className="flex w-full flex-col">
      <Label className="mb-2">언어 선택</Label>
      <Select placeholder="언어 선택">
        <Select.Option value="1">한국어</Select.Option>
        <Select.Option value="2">영어</Select.Option>
        <Select.Option value="3">일본어</Select.Option>
        <Select.Option value="4">중국어</Select.Option>
      </Select>
    </div>
  );
};

const Select3 = () => {
  return (
    <div className="flex w-full flex-col">
      <Label className="mb-2">회원 등급</Label>
      <Select placeholder="회원 등급" aria-invalid>
        <Select.Option value="1">일반</Select.Option>
        <Select.Option value="2">프리미엄</Select.Option>
        <Select.Option value="3">관리자</Select.Option>
      </Select>
    </div>
  );
};

const Select4 = () => {
  return (
    <div className="flex w-full flex-col">
      <Label className="mb-2">배송 옵션</Label>
      <Select placeholder="배송 옵션" disabled>
        <Select.Option value="1">일반 배송</Select.Option>
        <Select.Option value="2">퀵 배송</Select.Option>
        <Select.Option value="3">당일 배송</Select.Option>
      </Select>
    </div>
  );
};

const Select5 = () => {
  return (
    <div className="flex w-full flex-col">
      <Label className="mb-2">직무 선택</Label>
      <Select placeholder="직무 선택">
        <Select.Group>
          <Select.Label>개발</Select.Label>
          <Select.Option value="1">프론트엔드</Select.Option>
          <Select.Option value="2">백엔드</Select.Option>
          <Select.Option value="3">풀스택</Select.Option>
        </Select.Group>
        <Select.Separator />
        <Select.Group>
          <Select.Label>디자인</Select.Label>
          <Select.Option value="4">UI/UX</Select.Option>
          <Select.Option value="5">그래픽</Select.Option>
          <Select.Option value="6">모션</Select.Option>
        </Select.Group>
      </Select>
    </div>
  );
};

const Select6 = () => {
  return (
    <div className="flex w-full flex-col">
      <Label className="mb-2">직무 선택</Label>
      <Select placeholder="직무 선택">
        <Select.Group>
          <Select.Label>개발</Select.Label>
          <Select.Option value="1">프론트엔드</Select.Option>
          <Select.Option value="2">백엔드</Select.Option>
          <Select.Option value="3">풀스택</Select.Option>
        </Select.Group>
        <Select.Separator />
        <Select.Group>
          <Select.Label>디자인</Select.Label>
          <Select.Option value="4">UI/UX</Select.Option>
          <Select.Option value="5">그래픽</Select.Option>
          <Select.Option value="6">모션</Select.Option>
        </Select.Group>
      </Select>
    </div>
  );
};

const Select7 = () => {
  const popover = usePopover();
  const [value, setValue] = useState("");

  return (
    <div className="flex w-full flex-col">
      <Label className="mb-2">은행 선택</Label>
      <Popover isOpen={popover.isOpen} onOpenChange={popover.onOpenChange}>
        <Popover.Trigger asChild>
          <button
            className={cn(
              "border-border bg-background text-main shadow-xs outline-hidden flex h-9 w-full items-center justify-between gap-2 rounded-[0.5rem] border px-3 text-start text-sm font-semibold",
              "data-placeholder:text-placeholder",
              "[&>span]:min-w-0",
              "placeholder-placeholder",
              "focus-visible:disable-focus-ring focus-visible:focus-input-ring",
              "disabled:pointer-events-none disabled:opacity-50",
            )}
          >
            <span className={cn("truncate", !value && "text-placeholder")}>
              {value ? banks.find((bank) => bank === value) : "은행 선택"}
            </span>
            <ChevronDownIcon className="text-sub size-4 shrink-0" />
          </button>
        </Popover.Trigger>
        <Popover.Content className="border-border w-full min-w-[var(--radix-popper-anchor-width)] overflow-hidden p-0">
          <Command>
            <Command.Input placeholder="은행을 검색해주세요." />
            <Command.List>
              <Command.Empty>검색 결과가 없습니다.</Command.Empty>
              {banks.map((bank) => (
                <Command.Item
                  className={cn(bank === value && "text-primary font-semibold")}
                  key={bank}
                  value={bank}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    popover.close();
                  }}
                >
                  {bank}
                </Command.Item>
              ))}
            </Command.List>
          </Command>
        </Popover.Content>
      </Popover>
    </div>
  );
};

const banks = [
  "우리은행",
  "카카오뱅크",
  "신한은행",
  "국민은행",
  "하나은행",
  "농협은행",
  "기업은행",
  "SC제일은행",
  "케이뱅크",
  "토스뱅크",
  "KEB하나은행",
  "한국시티은행",
] as const;

const Select8 = () => {
  return (
    <div className="flex w-full flex-col">
      <Label className="mb-2">강의 상태</Label>
      <Select placeholder="프레임워크" className="**:data-desc:hidden">
        <Select.Option value="1">
          <div className="flex flex-col">
            <span>진행 중</span>
            <span data-desc className="text-subtle text-[0.8125rem]">
              현재 학습 중인 강의만 표시
            </span>
          </div>
        </Select.Option>
        <Select.Option value="2">
          <div className="flex flex-col">
            <span>완료</span>
            <span data-desc className="text-subtle text-[0.8125rem]">
              수강을 완료한 강의만 표시
            </span>
          </div>
        </Select.Option>
        <Select.Option value="3">
          <div className="flex flex-col">
            <span>미시작</span>
            <span data-desc className="text-subtle text-[0.8125rem]">
              아직 수강을 시작하지 않은 강의만 표시
            </span>
          </div>
        </Select.Option>
      </Select>
    </div>
  );
};

const Select9 = () => {
  return (
    <div className="flex w-full flex-col">
      <Label className="mb-2">언어 선택 (Native)</Label>
      <NativeSelect defaultValue="">
        <option value="" disabled>
          언어 선택
        </option>
        <option value="1">한국어</option>
        <option value="2">영어</option>
        <option value="3">일본어</option>
        <option value="4">중국어</option>
      </NativeSelect>
    </div>
  );
};
