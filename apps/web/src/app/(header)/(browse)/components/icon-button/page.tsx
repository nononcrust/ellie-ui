import { Grid } from "@/components/layouts/grid";
import { IconButton } from "@ellie-ui/core";
import { SearchIcon } from "lucide-react";

export default function IconButtonPage() {
  return (
    <Grid>
      <Grid.Item>
        <IconButton variant="primary" size="small" aria-label="검색">
          <SearchIcon className="size-[0.875rem]" />
        </IconButton>
      </Grid.Item>
      <Grid.Item>
        <IconButton variant="outlined" size="small" aria-label="검색">
          <SearchIcon className="size-[0.875rem]" />
        </IconButton>
      </Grid.Item>
      <Grid.Item>
        <IconButton variant="secondary" size="small" aria-label="검색">
          <SearchIcon className="size-[0.875rem]" />
        </IconButton>
      </Grid.Item>
      <Grid.Item>
        <IconButton variant="ghost" size="small" aria-label="검색">
          <SearchIcon className="size-[0.875rem]" />
        </IconButton>
      </Grid.Item>
      <Grid.Item>
        <IconButton variant="primaryLow" size="small" aria-label="검색">
          <SearchIcon className="size-[0.875rem]" />
        </IconButton>
      </Grid.Item>
      <Grid.Item>
        <IconButton variant="primaryOutlined" size="small" aria-label="검색">
          <SearchIcon className="size-[0.875rem]" />
        </IconButton>
      </Grid.Item>
      <Grid.Item>
        <IconButton variant="primaryLowOutlined" size="small" aria-label="검색">
          <SearchIcon className="size-[0.875rem]" />
        </IconButton>
      </Grid.Item>
      <Grid.Item>
        <IconButton variant="contained" size="small" aria-label="검색">
          <SearchIcon className="size-[0.875rem]" />
        </IconButton>
      </Grid.Item>
      <Grid.Item>
        <IconButton variant="primary" size="small" aria-label="검색" disabled>
          <SearchIcon className="size-[0.875rem]" />
        </IconButton>
      </Grid.Item>
      <Grid.Item>
        <IconButton variant="outlined" size="xsmall" aria-label="검색">
          <SearchIcon className="size-[0.875rem]" />
        </IconButton>
      </Grid.Item>
      <Grid.Item>
        <IconButton variant="outlined" size="medium" aria-label="검색">
          <SearchIcon className="size-4" />
        </IconButton>
      </Grid.Item>
      <Grid.Item>
        <IconButton variant="outlined" size="large" aria-label="검색">
          <SearchIcon className="size-[1.125rem]" />
        </IconButton>
      </Grid.Item>
    </Grid>
  );
}
