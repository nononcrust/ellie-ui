import { Grid } from "@/components/layouts/grid";
import { Badge } from "@ellie-ui/core";

export default function BadgePage() {
  return (
    <Grid>
      <Grid.Item>
        <Badge>1</Badge>
      </Grid.Item>
      <Grid.Item>
        <Badge>99+</Badge>
      </Grid.Item>
      <Grid.Item>
        <Badge>뱃지</Badge>
      </Grid.Item>
      <Grid.Item>
        <Badge variant="secondary">1</Badge>
      </Grid.Item>
      <Grid.Item>
        <Badge variant="secondary">99+</Badge>
      </Grid.Item>
      <Grid.Item>
        <Badge variant="secondary">뱃지</Badge>
      </Grid.Item>
    </Grid>
  );
}
