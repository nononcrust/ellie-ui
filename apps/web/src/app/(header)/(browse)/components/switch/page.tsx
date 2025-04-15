import { Grid } from "@/components/layouts/grid";
import { Switch } from "@ellie-ui/core";

export default function SwitchPage() {
  return (
    <Grid>
      <Grid.Item>
        <Switch />
      </Grid.Item>
      <Grid.Item>
        <Switch defaultChecked />
      </Grid.Item>
      <Grid.Item>
        <Switch disabled />
      </Grid.Item>
      <Grid.Item>
        <Switch size="small" defaultChecked />
      </Grid.Item>
    </Grid>
  );
}
