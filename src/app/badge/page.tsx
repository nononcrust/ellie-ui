import { Grid } from "@/components/layouts/grid";
import { Badge } from "@/components/ui/badge";

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
    </Grid>
  );
}
