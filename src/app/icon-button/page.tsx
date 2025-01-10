import { Grid } from "@/components/layouts/grid";
import { IconButton } from "@/components/ui/icon-button";
import { SearchIcon } from "lucide-react";

export default function IconButtonPage() {
  return (
    <Grid>
      <Grid.Item>
        <IconButton variant="primary" size="small" aria-label="검색">
          <SearchIcon size={14} />
        </IconButton>
      </Grid.Item>
      <Grid.Item>
        <IconButton variant="outlined" size="small" aria-label="검색">
          <SearchIcon size={14} />
        </IconButton>
      </Grid.Item>
      <Grid.Item>
        <IconButton variant="secondary" size="small" aria-label="검색">
          <SearchIcon size={14} />
        </IconButton>
      </Grid.Item>
      <Grid.Item>
        <IconButton variant="ghost" size="small" aria-label="검색">
          <SearchIcon size={14} />
        </IconButton>
      </Grid.Item>
      <Grid.Item>
        <IconButton variant="outlined" size="xsmall" aria-label="검색">
          <SearchIcon size={14} />
        </IconButton>
      </Grid.Item>
      <Grid.Item>
        <IconButton variant="outlined" size="medium" aria-label="검색">
          <SearchIcon size={16} />
        </IconButton>
      </Grid.Item>
      <Grid.Item>
        <IconButton variant="outlined" size="large" aria-label="검색">
          <SearchIcon size={18} />
        </IconButton>
      </Grid.Item>
    </Grid>
  );
}
