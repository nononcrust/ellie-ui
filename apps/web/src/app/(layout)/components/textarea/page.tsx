import { Grid } from "@/components/layouts/grid";
import { Label, Textarea } from "@ellie-ui/core";

export default function TextareaPage() {
  return (
    <Grid>
      <Grid.Item>
        <div className="flex w-full flex-col">
          <Label htmlFor="1" className="mb-2">
            내용
          </Label>
          <Textarea id="1" />
        </div>
      </Grid.Item>
      <Grid.Item>
        <div className="flex w-full flex-col">
          <Label htmlFor="2" className="mb-2">
            내용
          </Label>
          <Textarea id="2" disabled />
        </div>
      </Grid.Item>
      <Grid.Item>
        <div className="flex w-full flex-col">
          <Label htmlFor="3" className="mb-2">
            내용
          </Label>
          <Textarea id="3" placeholder="내용을 입력해주세요" />
        </div>
      </Grid.Item>
      <Grid.Item>
        <div className="flex w-full flex-col">
          <Label htmlFor="4" className="mb-2">
            내용
          </Label>
          <Textarea id="4" aria-invalid />
        </div>
      </Grid.Item>
    </Grid>
  );
}
