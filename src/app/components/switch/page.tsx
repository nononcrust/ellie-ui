import { Grid } from "@/components/layouts/grid";
import { Switch } from "@/components/ui/switch";

export default function SwitchPage() {
  return (
    <Grid>
      <Grid.Item>
        <Switch />
      </Grid.Item>
      <Grid.Item>
        <Switch disabled />
      </Grid.Item>
    </Grid>
  );
}
