import { Grid } from "@/components/layouts/grid";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SearchIcon } from "lucide-react";

export default function InputPage() {
  return (
    <Grid>
      <Grid.Item>
        <div className="flex w-full flex-col">
          <Label className="mb-2">이름</Label>
          <Input />
        </div>
      </Grid.Item>
      <Grid.Item>
        <div className="flex w-full flex-col">
          <Label className="mb-2">
            이름
            <span className="text-error ml-1">*</span>
          </Label>
          <Input />
        </div>
      </Grid.Item>
      <Grid.Item>
        <div className="flex w-full flex-col">
          <Label className="mb-2">이메일</Label>
          <Input placeholder="이메일을 입력하세요." />
        </div>
      </Grid.Item>
      <Grid.Item>
        <div className="flex w-full flex-col">
          <Label className="mb-2">이메일</Label>
          <Input placeholder="이메일을 입력하세요." disabled />
        </div>
      </Grid.Item>
      <Grid.Item>
        <div className="flex w-full flex-col">
          <Label className="mb-2">검색</Label>
          <div className="relative">
            <Input className="pl-8" placeholder="검색어를 입력하세요." />
            <SearchIcon
              size={14}
              className="text-subtle absolute top-1/2 left-3 -translate-y-1/2"
              strokeWidth={3}
            />
          </div>
        </div>
      </Grid.Item>
      <Grid.Item>
        <div className="flex w-full flex-col">
          <Label className="mb-2">검색</Label>
          <div className="relative">
            <Input className="pr-8" placeholder="검색어를 입력하세요." />
            <SearchIcon
              size={14}
              className="text-subtle absolute top-1/2 right-3 -translate-y-1/2"
              strokeWidth={3}
            />
          </div>
        </div>
      </Grid.Item>
      <Grid.Item>
        <div className="flex w-full flex-col">
          <Label className="mb-2">이메일</Label>
          <Input placeholder="이메일을 입력하세요." aria-invalid />
        </div>
      </Grid.Item>
    </Grid>
  );
}
