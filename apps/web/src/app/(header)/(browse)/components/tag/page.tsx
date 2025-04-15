import { Grid } from "@/components/layouts/grid";
import { Tag } from "@ellie-ui/core";

export default function TagPage() {
  return (
    <Grid>
      <Grid.Item>
        <Tag variant="primary">신규 가입 기업</Tag>
      </Grid.Item>
      <Grid.Item>
        <Tag variant="secondary">신규 가입 기업</Tag>
      </Grid.Item>
      <Grid.Item>
        <Tag variant="outlined">신규 가입 기업</Tag>
      </Grid.Item>
      <Grid.Item>
        <Tag variant="info">신규 가입 기업</Tag>
      </Grid.Item>
      <Grid.Item>
        <Tag variant="success">신규 가입 기업</Tag>
      </Grid.Item>
      <Grid.Item>
        <Tag variant="warning">신규 가입 기업</Tag>
      </Grid.Item>
      <Grid.Item>
        <Tag variant="danger">신규 가입 기업</Tag>
      </Grid.Item>
      <Grid.Item>
        <Tag size="large">신규 가입 기업</Tag>
      </Grid.Item>
    </Grid>
  );
}
