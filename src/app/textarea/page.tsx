import { Grid } from "@/components/layouts/grid";
import { Textarea } from "@/components/ui/textarea";

export default function TextareaPage() {
  return (
    <Grid>
      <Grid.Item>
        <Textarea />
      </Grid.Item>
      <Grid.Item>
        <Textarea disabled />
      </Grid.Item>
      <Grid.Item>
        <Textarea placeholder="댓글 입력" />
      </Grid.Item>
      <Grid.Item>
        <Textarea aria-invalid />
      </Grid.Item>
      <Grid.Item>
        <Textarea />
      </Grid.Item>
    </Grid>
  );
}
