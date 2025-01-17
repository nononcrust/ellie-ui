import { Mobile } from "@/components/layouts/mobile";
import { cn } from "@/lib/utils";
import * as TabsPrimitives from "@radix-ui/react-tabs";
import { ChevronRightIcon } from "lucide-react";

export default function LandingPage() {
  return (
    <Mobile>
      <div className="mt-12 flex items-center justify-between">
        <h1 className="text-2xl font-bold">노논님을 위한 혜택</h1>
        <button className="flex items-center gap-1 font-medium text-sub">
          더보기
          <ChevronRightIcon size={18} />
        </button>
      </div>
      <ChipButtonTabs>
        <ChipButtonTabsList className="mt-4">
          <ChipButtonTabsTrigger value="주거/청약">주거/청약</ChipButtonTabsTrigger>
          <ChipButtonTabsTrigger value="지원금">지원금</ChipButtonTabsTrigger>
          <ChipButtonTabsTrigger value="문화생활">문화생활</ChipButtonTabsTrigger>
        </ChipButtonTabsList>
      </ChipButtonTabs>
    </Mobile>
  );
}

type ChipButtonTabsProps = React.ComponentProps<typeof TabsPrimitives.Root>;

const ChipButtonTabs = ({ className, children, ...props }: ChipButtonTabsProps) => {
  return (
    <TabsPrimitives.Root className={cn("", className)} {...props}>
      {children}
    </TabsPrimitives.Root>
  );
};

const ChipButtonTabsList = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof TabsPrimitives.List>) => {
  return (
    <TabsPrimitives.List className={cn("flex gap-2", className)} {...props}>
      {children}
    </TabsPrimitives.List>
  );
};

const ChipButtonTabsTrigger = ({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitives.Trigger>) => {
  return (
    <TabsPrimitives.Trigger
      className={cn(
        "flex h-9 items-center justify-center rounded-full border border-transparent bg-background-100 px-3.5 text-[14px] font-medium",
        "data-[state=active]:border-primary data-[state=active]:bg-primary-lighter data-[state=active]:text-primary",
        className,
      )}
      {...props}
    />
  );
};
