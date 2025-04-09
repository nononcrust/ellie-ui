"use client";

import { Grid } from "@/components/layouts/grid";
import { usePopover } from "@/hooks/use-popover";
import { Fab } from "@ellie-ui/core";
import { MenuIcon, PlusIcon } from "lucide-react";

export default function FabPage() {
  const fabMenu = usePopover();

  return (
    <Grid>
      <Grid.Item>
        <Fab>
          <PlusIcon />
        </Fab>
      </Grid.Item>
      <Grid.Item>
        <Fab withLabel>
          <PlusIcon />
          추가하기
        </Fab>
      </Grid.Item>
      <Grid.Item>
        <Fab variant="secondary">
          <PlusIcon />
        </Fab>
      </Grid.Item>
      <Fab.Container>
        <Fab onClick={fabMenu.open}>
          <MenuIcon size={20} />
        </Fab>
      </Fab.Container>
    </Grid>
  );
}
