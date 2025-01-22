import { Grid } from "@/components/layouts/grid";
import { ChipButton } from "@/components/ui/chip-button";
import { ChevronDownIcon } from "lucide-react";

export default function ChipButtonPage() {
  return (
    <Grid>
      <Grid.Item>
        <ChipButton variant="primary">버튼</ChipButton>
      </Grid.Item>
      <Grid.Item>
        <ChipButton variant="primaryLow">버튼</ChipButton>
      </Grid.Item>
      <Grid.Item>
        <ChipButton variant="secondary">버튼</ChipButton>
      </Grid.Item>
      <Grid.Item>
        <ChipButton variant="primary">
          버튼
          <ChevronDownIcon size={18} />
        </ChipButton>
      </Grid.Item>
      <Grid.Item>
        <ChipButton variant="primaryLow">
          버튼
          <ChevronDownIcon size={18} />
        </ChipButton>
      </Grid.Item>
      <Grid.Item>
        <ChipButton variant="secondary">
          버튼
          <ChevronDownIcon size={18} />
        </ChipButton>
      </Grid.Item>
      <Grid.Item>
        <ChipButton size="small" variant="primary">
          버튼
        </ChipButton>
      </Grid.Item>
      <Grid.Item>
        <ChipButton size="small" variant="primaryLow">
          버튼
        </ChipButton>
      </Grid.Item>
      <Grid.Item>
        <ChipButton size="small" variant="secondary">
          버튼
        </ChipButton>
      </Grid.Item>
      <Grid.Item>
        <ChipButton size="small" variant="primary">
          버튼
          <ChevronDownIcon size={16} />
        </ChipButton>
      </Grid.Item>
      <Grid.Item>
        <ChipButton size="small" variant="primaryLow">
          버튼
          <ChevronDownIcon size={16} />
        </ChipButton>
      </Grid.Item>
      <Grid.Item>
        <ChipButton size="small" variant="secondary">
          버튼
          <ChevronDownIcon size={16} />
        </ChipButton>
      </Grid.Item>
      <Grid.Item>
        <ChipButton size="xsmall" variant="primary">
          버튼
        </ChipButton>
      </Grid.Item>
      <Grid.Item>
        <ChipButton size="xsmall" variant="primaryLow">
          버튼
        </ChipButton>
      </Grid.Item>
      <Grid.Item>
        <ChipButton size="xsmall" variant="secondary">
          버튼
        </ChipButton>
      </Grid.Item>
      <Grid.Item>
        <ChipButton size="xsmall" variant="primary">
          버튼
          <ChevronDownIcon size={14} />
        </ChipButton>
      </Grid.Item>
      <Grid.Item>
        <ChipButton size="xsmall" variant="primaryLow">
          버튼
          <ChevronDownIcon size={14} />
        </ChipButton>
      </Grid.Item>
      <Grid.Item>
        <ChipButton size="xsmall" variant="secondary">
          버튼
          <ChevronDownIcon size={14} />
        </ChipButton>
      </Grid.Item>
    </Grid>
  );
}
