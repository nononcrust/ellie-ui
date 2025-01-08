import { Grid } from "@/components/layouts/grid";
import { Chip } from "@/components/ui/chip";

export default function ChipPage() {
  return (
    <Grid>
      <Grid.Item>
        <Chip variant="primary">신규 가입 기업</Chip>
      </Grid.Item>
      <Grid.Item>
        <Chip variant="secondary">신규 가입 기업</Chip>
      </Grid.Item>
      <Grid.Item>
        <Chip variant="outlined">신규 가입 기업</Chip>
      </Grid.Item>
      <Grid.Item>
        <Chip variant="info">신규 가입 기업</Chip>
      </Grid.Item>
      <Grid.Item>
        <Chip variant="success">신규 가입 기업</Chip>
      </Grid.Item>
      <Grid.Item>
        <Chip variant="warning">신규 가입 기업</Chip>
      </Grid.Item>
      <Grid.Item>
        <Chip variant="danger">신규 가입 기업</Chip>
      </Grid.Item>
      <Grid.Item>
        <Chip size="large">신규 가입 기업</Chip>
      </Grid.Item>
    </Grid>
  );
}
