import { Grid } from "@/components/layouts/grid";
import { Input, Label, Tooltip } from "@ellie-ui/core";
import { InfoIcon, SearchIcon } from "lucide-react";

export default function InputPage() {
  return (
    <Grid>
      <Grid.Item>
        <div className="flex w-full flex-col">
          <Label htmlFor="1" className="mb-2">
            이름
          </Label>
          <Input id="1" />
        </div>
      </Grid.Item>
      <Grid.Item>
        <div className="flex w-full flex-col">
          <Label htmlFor="2" className="mb-2">
            이름
            <span className="text-error ml-1">*</span>
          </Label>
          <Input id="2" />
        </div>
      </Grid.Item>
      <Grid.Item>
        <div className="flex w-full flex-col">
          <Label htmlFor="3" className="mb-2 flex items-center">
            이메일
            <Tooltip content="계정 당 하나의 이메일만 사용할 수 있습니다.">
              <InfoIcon
                className="text-subtle outline-hidden focus-visible:focus-ring ml-1.5 size-3.5 rounded-full"
                tabIndex={0}
              />
            </Tooltip>
          </Label>
          <Input id="3" placeholder="이메일을 입력하세요." />
        </div>
      </Grid.Item>
      <Grid.Item>
        <div className="flex w-full flex-col">
          <Label htmlFor="4" className="mb-2">
            이메일
          </Label>
          <Input id="4" placeholder="이메일을 입력하세요." disabled />
        </div>
      </Grid.Item>
      <Grid.Item>
        <div className="flex w-full flex-col">
          <Label htmlFor="4" className="mb-2">
            이메일
          </Label>
          <Input id="4" placeholder="이메일을 입력하세요." readOnly />
        </div>
      </Grid.Item>
      <Grid.Item>
        <div className="flex w-full flex-col">
          <Label htmlFor="5" className="mb-2">
            검색
          </Label>
          <div className="relative">
            <Input id="5" className="pl-8" placeholder="검색어를 입력하세요." />
            <SearchIcon
              className="text-subtle absolute left-3 top-1/2 size-[0.875rem] -translate-y-1/2"
              strokeWidth={3}
            />
          </div>
        </div>
      </Grid.Item>
      <Grid.Item>
        <div className="flex w-full flex-col">
          <Label htmlFor="6" className="mb-2">
            검색
          </Label>
          <div className="relative">
            <Input id="6" className="pr-8" placeholder="검색어를 입력하세요." />
            <SearchIcon
              className="text-subtle absolute right-3 top-1/2 size-[0.875rem] -translate-y-1/2"
              strokeWidth={3}
            />
          </div>
        </div>
      </Grid.Item>
      <Grid.Item>
        <div className="flex w-full flex-col">
          <Label htmlFor="7" className="mb-2">
            이메일
          </Label>
          <Input id="7" placeholder="이메일을 입력하세요." aria-invalid />
        </div>
      </Grid.Item>
    </Grid>
  );
}
