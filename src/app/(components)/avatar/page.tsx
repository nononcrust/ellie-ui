import { Grid } from "@/components/layouts/grid";
import { Avatar } from "@/components/ui/avatar";

export default function AvatarPage() {
  return (
    <Grid>
      <Grid.Item>
        <Avatar>
          <Avatar.Image src="https://randomuser.me/api/port" />
          <Avatar.Fallback>U</Avatar.Fallback>
        </Avatar>
      </Grid.Item>
    </Grid>
  );
}
