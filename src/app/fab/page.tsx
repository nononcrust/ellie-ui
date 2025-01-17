"use client";

import { Grid } from "@/components/layouts/grid";
import { Fab } from "@/components/ui/fab";
import { usePopover } from "@/hooks/use-popover";
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
      <Fab.Container>
        <Fab onClick={fabMenu.open}>
          <MenuIcon size={20} />
        </Fab>
      </Fab.Container>
    </Grid>
  );
}
