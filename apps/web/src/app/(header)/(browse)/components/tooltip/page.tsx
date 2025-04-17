import { Grid } from "@/components/layouts/grid";
import { IconButton, Tooltip } from "@ellie-ui/core";
import { BellIcon, SearchIcon } from "lucide-react";

export default function TooltipPage() {
  return (
    <Grid>
      <Grid.Item>
        <Tooltip content="검색">
          <IconButton aria-label="검색" variant="outlined" size="small">
            <SearchIcon className="size-[0.875rem]" />
          </IconButton>
        </Tooltip>
      </Grid.Item>
      <Grid.Item>
        <Tooltip content="알림" variant="outlined">
          <IconButton aria-label="알림" variant="outlined" size="small">
            <BellIcon className="size-[0.875rem]" />
          </IconButton>
        </Tooltip>
      </Grid.Item>
    </Grid>
  );
}
