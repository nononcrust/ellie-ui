"use client";

import { Grid } from "@/components/layouts/grid";
import { Pagination } from "@ellie-ui/core";
import { useState } from "react";

export default function PaginationPage() {
  const [page, setPage] = useState(1);

  return (
    <Grid>
      <Grid.Item>
        <Pagination page={page} onChange={setPage} total={30} />
      </Grid.Item>
    </Grid>
  );
}
