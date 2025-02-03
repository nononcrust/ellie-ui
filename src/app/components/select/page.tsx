"use client";

import { Grid } from "@/components/layouts/grid";
import { Command } from "@/components/ui/command";
import { Label } from "@/components/ui/label";
import { Popover } from "@/components/ui/popover";
import { Select } from "@/components/ui/select";
import { usePopover } from "@/hooks/use-popover";
import { cn } from "@/lib/utils";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import { useState } from "react";

export default function SelectPage() {
  return (
    <Grid>
      <Grid.Item>
        <div className="flex w-full flex-col">
          <Label className="mb-2">프레임워크 선택</Label>
          <Select>
            <Select.Option value="1">React</Select.Option>
            <Select.Option value="2">Astro</Select.Option>
            <Select.Option value="3">Remix</Select.Option>
          </Select>
        </div>
      </Grid.Item>
      <Grid.Item>
        <div className="flex w-full flex-col">
          <Label className="mb-2">언어 선택</Label>
          <Select placeholder="언어 선택">
            <Select.Option value="1">한국어</Select.Option>
            <Select.Option value="2">영어</Select.Option>
            <Select.Option value="3">일본어</Select.Option>
            <Select.Option value="4">중국어</Select.Option>
          </Select>
        </div>
      </Grid.Item>
      <Grid.Item>
        <div className="flex w-full flex-col">
          <Label className="mb-2">회원 등급</Label>
          <Select placeholder="회원 등급" aria-invalid>
            <Select.Option value="1">일반</Select.Option>
            <Select.Option value="2">프리미엄</Select.Option>
            <Select.Option value="3">관리자</Select.Option>
          </Select>
        </div>
      </Grid.Item>
      <Grid.Item>
        <div className="flex w-full flex-col">
          <Label className="mb-2">배송 옵션</Label>
          <Select placeholder="배송 옵션" disabled>
            <Select.Option value="1">일반 배송</Select.Option>
            <Select.Option value="2">퀵 배송</Select.Option>
            <Select.Option value="3">당일 배송</Select.Option>
          </Select>
        </div>
      </Grid.Item>
      <Grid.Item>
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
      </Grid.Item>
      <Grid.Item>
        <div className="flex w-full flex-col">
          <Label className="mb-2">프레임워크 선택</Label>
          <Select placeholder="프레임워크">
            <Select.Option value="1">
              <span>React</span>
              <span>
                <span className="text-subtle"> (Frontend)</span>
              </span>
            </Select.Option>
            <Select.Option value="2">
              <span>Astro</span>
              <span>
                <span className="text-subtle"> (Frontend)</span>
              </span>
            </Select.Option>
            <Select.Option value="3">
              <span>Hono</span>
              <span>
                <span className="text-subtle"> (Backend)</span>
              </span>
            </Select.Option>
          </Select>
        </div>
      </Grid.Item>
      <Grid.Item>
        <div className="flex w-full flex-col">
          <Label className="mb-2">프레임워크 선택</Label>
          <Select placeholder="프레임워크" className="**:data-desc:hidden">
            <Select.Option value="1">
              <div className="flex flex-col">
                <span>React</span>
                <span data-desc className="text-[13px] text-subtle">
                  Web and native user interfaces
                </span>
              </div>
            </Select.Option>
            <Select.Option value="2">
              <div className="flex flex-col">
                <span>Astro</span>
                <span data-desc className="text-[13px] text-subtle">
                  Static site generator
                </span>
              </div>
            </Select.Option>
            <Select.Option value="3">
              <div className="flex flex-col">
                <span>Remix</span>
                <span data-desc className="text-[13px] text-subtle">
                  Full stack web framework
                </span>
              </div>
            </Select.Option>
          </Select>
        </div>
      </Grid.Item>
      <Grid.Item>
        <Select1 />
      </Grid.Item>
    </Grid>
  );
}

const Select1 = () => {
  const popover = usePopover();
  const [value, setValue] = useState("");

  return (
    <div className="flex w-full flex-col">
      <Label className="mb-2">프레임워크 선택</Label>
      <Popover open={popover.isOpen} onOpenChange={popover.onOpenChange}>
        <Popover.Trigger asChild>
          <button
            className={cn(
              "flex h-9 w-full items-center justify-between gap-2 rounded-[8px] border border-border bg-background px-3 text-start text-[14px] font-semibold text-main shadow-xs outline-hidden",
              "data-placeholder:text-placeholder",
              "[&>span]:min-w-0",
              "placeholder-placeholder",
              "disable-focus-ring focus-visible:focus-input-ring",
              "disabled:pointer-events-none disabled:opacity-50",
            )}
          >
            <span className={cn("truncate", !value && "text-placeholder")}>
              {value
                ? frameworks.find((framework) => framework.value === value)?.label
                : "프레임워크 선택"}
            </span>
            <ChevronDownIcon size={16} className="shrink-0 text-sub" />
          </button>
        </Popover.Trigger>
        <Popover.Content className="w-full min-w-[var(--radix-popper-anchor-width)] border-border p-0">
          <Command>
            <Command.Input placeholder="프레임워크를 검색해주세요." />
            <Command.List>
              <Command.Empty>검색 결과가 없습니다.</Command.Empty>
              {frameworks.map((framework) => (
                <Command.Item
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    popover.close();
                  }}
                >
                  {framework.label}
                  {framework.value === value && <CheckIcon size={16} className="ml-auto" />}
                </Command.Item>
              ))}
            </Command.List>
          </Command>
        </Popover.Content>
      </Popover>
    </div>
  );
};

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
  {
    value: "angular",
    label: "Angular",
  },
  {
    value: "vue",
    label: "Vue.js",
  },
  {
    value: "react",
    label: "React",
  },
  {
    value: "ember",
    label: "Ember.js",
  },
  {
    value: "gatsby",
    label: "Gatsby",
  },
  {
    value: "eleventy",
    label: "Eleventy",
  },
  {
    value: "solid",
    label: "SolidJS",
  },
  {
    value: "preact",
    label: "Preact",
  },
  {
    value: "qwik",
    label: "Qwik",
  },
  {
    value: "alpine",
    label: "Alpine.js",
  },
  {
    value: "lit",
    label: "Lit",
  },
];
