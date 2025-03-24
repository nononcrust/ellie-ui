import { Mobile } from "@/components/layouts/mobile";
import { ChipButton } from "@/components/ui/chip-button";
import { ChevronRightIcon } from "lucide-react";

export default function LandingPage() {
  return (
    <Mobile>
      <div className="mt-12 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">노논님을 위한 혜택</h1>
        <button className="text-sub flex items-center gap-1 font-medium">
          더보기
          <ChevronRightIcon size={18} />
        </button>
      </div>
      <ul className="mt-4 flex gap-2">
        <ChipButton variant="primaryLowOutlined" value="주거/청약">
          주거/청약
        </ChipButton>
        <ChipButton variant="secondary" value="지원금">
          지원금
        </ChipButton>
        <ChipButton variant="secondary" value="문화생활">
          문화생활
        </ChipButton>
      </ul>
    </Mobile>
  );
}
