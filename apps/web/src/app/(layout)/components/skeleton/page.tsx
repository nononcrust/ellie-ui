import { Grid } from "@/components/layouts/grid";
import { Skeleton } from "@ellie-ui/core";

export default function SkeletonPage() {
  return (
    <Grid>
      <Grid.Item>
        <Skeleton width={200} height={200} />
      </Grid.Item>
      <Grid.Item>
        <div className="flex items-center gap-2">
          <Skeleton shape="circle" width={48} height={48} />
          <div className="flex flex-col gap-1">
            <Skeleton width={200} height={24} />
            <Skeleton width={160} height={16} />
          </div>
        </div>
      </Grid.Item>
    </Grid>
  );
}
