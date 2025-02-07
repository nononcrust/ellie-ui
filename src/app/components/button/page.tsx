import { Grid } from "@/components/layouts/grid";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, PlusIcon } from "lucide-react";

export default function ButtonPage() {
  return (
    <Grid>
      <Grid.Item>
        <Button>버튼</Button>
      </Grid.Item>
      <Grid.Item>
        <Button variant="outlined">버튼</Button>
      </Grid.Item>
      <Grid.Item>
        <Button variant="secondary">버튼</Button>
      </Grid.Item>
      <Grid.Item>
        <Button variant="ghost">버튼</Button>
      </Grid.Item>
      <Grid.Item>
        <Button variant="primaryLow">버튼</Button>
      </Grid.Item>
      <Grid.Item>
        <Button variant="primaryOutlined">버튼</Button>
      </Grid.Item>
      <Grid.Item>
        <Button variant="primaryLowOutlined">버튼</Button>
      </Grid.Item>
      <Grid.Item>
        <Button variant="contained">버튼</Button>
      </Grid.Item>
      <Grid.Item>
        <Button>
          <PlusIcon size={14} />
          버튼
        </Button>
      </Grid.Item>
      <Grid.Item>
        <Button>
          버튼
          <ArrowRightIcon size={14} />
        </Button>
      </Grid.Item>
      <Grid.Item>
        <Button disabled>버튼</Button>
      </Grid.Item>
      <Grid.Item>
        <Button size="small">버튼</Button>
      </Grid.Item>
      <Grid.Item>
        <Button size="large">버튼</Button>
      </Grid.Item>
      <Grid.Item>
        <Button className="rounded-r-none" variant="outlined">
          버튼
        </Button>
        <Button className="rounded-none border-x-0" variant="outlined">
          버튼
        </Button>
        <Button className="rounded-l-none" variant="outlined">
          버튼
        </Button>
      </Grid.Item>
      <Grid.Item>
        <Button variant="error">버튼</Button>
      </Grid.Item>
      <Grid.Item>
        <Button size="xlarge">이메일로 가입하기</Button>
      </Grid.Item>
    </Grid>
  );
}
