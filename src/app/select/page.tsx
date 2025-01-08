"use client";

import { Grid } from "@/components/layouts/grid";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";

export default function SelectPage() {
  return (
    <Grid>
      <Grid.Item>
        <div className="flex w-full flex-col">
          <Label className="mb-2">프레임워크 선택</Label>
          <Select>
            <Select.Item value="1">React</Select.Item>
            <Select.Item value="2">Astro</Select.Item>
            <Select.Item value="3">Remix</Select.Item>
          </Select>
        </div>
      </Grid.Item>
      <Grid.Item>
        <div className="flex w-full flex-col">
          <Label className="mb-2">언어 선택</Label>
          <Select placeholder="프레임워크">
            <Select.Item value="1">한국어</Select.Item>
            <Select.Item value="2">영어</Select.Item>
            <Select.Item value="3">일본어</Select.Item>
            <Select.Item value="3">중국어</Select.Item>
          </Select>
        </div>
      </Grid.Item>
      <Grid.Item>
        <div className="flex w-full flex-col">
          <Label className="mb-2">회원 등급</Label>
          <Select placeholder="회원 등급" aria-invalid>
            <Select.Item value="1">일반</Select.Item>
            <Select.Item value="2">프리미엄</Select.Item>
            <Select.Item value="3">관리자</Select.Item>
          </Select>
        </div>
      </Grid.Item>
      <Grid.Item>
        <div className="flex w-full flex-col">
          <Label className="mb-2">배송 옵션</Label>
          <Select placeholder="배송 옵션" disabled>
            <Select.Item value="1">일반 배송</Select.Item>
            <Select.Item value="2">퀵 배송</Select.Item>
            <Select.Item value="3">당일 배송</Select.Item>
          </Select>
        </div>
      </Grid.Item>
      <Grid.Item>
        <div className="flex w-full flex-col">
          <Label className="mb-2">직무 선택</Label>
          <Select placeholder="직무 선택">
            <Select.Group>
              <Select.Label>개발</Select.Label>
              <Select.Item value="1">프론트엔드</Select.Item>
              <Select.Item value="2">백엔드</Select.Item>
              <Select.Item value="3">풀스택</Select.Item>
            </Select.Group>
            <Select.Separator />
            <Select.Group>
              <Select.Label>디자인</Select.Label>
              <Select.Item value="4">UI/UX</Select.Item>
              <Select.Item value="5">그래픽</Select.Item>
              <Select.Item value="6">모션</Select.Item>
            </Select.Group>
          </Select>
        </div>
      </Grid.Item>
      <Grid.Item>
        <div className="flex w-full flex-col">
          <Label className="mb-2">프레임워크 선택</Label>
          <Select placeholder="프레임워크">
            <Select.Item value="1">
              <span>React</span>
              <span>
                <span className="text-subtle"> (Frontend)</span>
              </span>
            </Select.Item>
            <Select.Item value="2">
              <span>Astro</span>
              <span>
                <span className="text-subtle"> (Frontend)</span>
              </span>
            </Select.Item>
            <Select.Item value="3">
              <span>Hono</span>
              <span>
                <span className="text-subtle"> (Backend)</span>
              </span>
            </Select.Item>
          </Select>
        </div>
      </Grid.Item>
      <Grid.Item>
        <div className="flex w-full flex-col">
          <Label className="mb-2">프레임워크 선택</Label>
          <Select placeholder="프레임워크" className="[&_[data-desc]]:hidden">
            <Select.Item value="1">
              <div className="flex flex-col">
                <span>React</span>
                <span data-desc className="text-[13px] text-subtle">
                  Web and native user interfaces
                </span>
              </div>
            </Select.Item>
            <Select.Item value="2">
              <div className="flex flex-col">
                <span>Astro</span>
                <span data-desc className="text-[13px] text-subtle">
                  Static site generator
                </span>
              </div>
            </Select.Item>
            <Select.Item value="3">
              <div className="flex flex-col">
                <span>Remix</span>
                <span data-desc className="text-[13px] text-subtle">
                  Full stack web framework
                </span>
              </div>
            </Select.Item>
          </Select>
        </div>
      </Grid.Item>
    </Grid>
  );
}
