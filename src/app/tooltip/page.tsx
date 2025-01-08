import { Grid } from "@/components/layouts/grid";
import { IconButton } from "@/components/ui/icon-button";
import { Tooltip } from "@/components/ui/tooltip";
import { BellIcon, SearchIcon } from "lucide-react";

export default function TooltipPage() {
  return (
    <Grid>
      <Grid.Item>
        <Tooltip content="검색">
          <IconButton aria-label="검색" variant="outlined" size="small">
            <SearchIcon size={14} />
          </IconButton>
        </Tooltip>
      </Grid.Item>
      <Grid.Item>
        <Tooltip content="알림" variant="outlined">
          <IconButton aria-label="알림" variant="outlined" size="small">
            <BellIcon size={14} />
          </IconButton>
        </Tooltip>
      </Grid.Item>
    </Grid>
  );
}
