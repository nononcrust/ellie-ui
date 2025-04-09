import { Grid } from "@/components/layouts/grid";
import { Chip } from "@ellie-ui/core";

export default function ChipPage() {
  return (
    <Grid>
      <Grid.Item>
        <Chip size="xsmall" variant="primary">
          모집 완료
        </Chip>
      </Grid.Item>
      <Grid.Item>
        <Chip size="small" variant="primary">
          모집 완료
        </Chip>
      </Grid.Item>
      <Grid.Item>
        <Chip size="medium" variant="primary">
          모집 완료
        </Chip>
      </Grid.Item>
      <Grid.Item>
        <Chip size="small" variant="secondary">
          모집중
        </Chip>
      </Grid.Item>

      <Grid.Item>
        <Chip size="xsmall" variant="secondary">
          모집중
        </Chip>
      </Grid.Item>
      <Grid.Item>
        <Chip size="medium" variant="secondary">
          모집중
        </Chip>
      </Grid.Item>
    </Grid>
  );
}
