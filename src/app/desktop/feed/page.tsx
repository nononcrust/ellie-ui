import { SearchInput } from "@/app/mobile/_components/search-input";
import { Button } from "@/components/ui/button";
import { ChipButton } from "@/components/ui/chip-button";
import { UsersRoundIcon } from "lucide-react";
import Link from "next/link";
import { FeedListItem } from "./_components/feed-list-item";

export default function FeedPage() {
  return (
    <div className="mx-auto flex w-full px-4 md:max-w-4xl">
      <main className="border-border w-full py-16 md:border-x">
        <ul className="border-border divide-border flex flex-col divide-y border-y">
          <FeedListItem user={{ nickname: "노논" }} />
          <FeedListItem user={{ nickname: "노논" }} />
          <FeedListItem user={{ nickname: "노논" }} />
          <FeedListItem user={{ nickname: "노논" }} />
          <FeedListItem user={{ nickname: "노논" }} />
          <FeedListItem user={{ nickname: "노논" }} />
          <FeedListItem user={{ nickname: "노논" }} />
          <FeedListItem user={{ nickname: "노논" }} />
          <FeedListItem user={{ nickname: "노논" }} />
          <FeedListItem user={{ nickname: "노논" }} />
        </ul>
      </main>
      <aside className="sticky top-[56px] right-0 hidden h-[120px] min-w-[320px] flex-col px-6 md:flex">
        <SearchInput className="mt-6" placeholder="검색하기" />
        <div className="mt-4 flex flex-col">
          <Button className="mt-4">
            <UsersRoundIcon size={16} />
            팔로우할 사람 찾기
          </Button>
        </div>
        <div className="mt-4 flex flex-col">
          <div className="flex flex-wrap gap-2">
            {TRENDS.map((trend, index) => (
              <ChipButton key={index} size="xsmall" variant="outlined">
                {trend}
              </ChipButton>
            ))}
          </div>
        </div>
        <div className="text-subtle mt-4 flex items-center gap-1 font-bold">
          <Link className="text-primary text-sm font-normal hover:underline" href="#">
            Feedback
          </Link>
          •
          <Link className="text-primary text-sm font-normal hover:underline" href="#">
            Privacy
          </Link>
          •
          <Link className="text-primary text-sm font-normal hover:underline" href="#">
            Terms
          </Link>
          •
          <Link className="text-primary text-sm font-normal hover:underline" href="#">
            Help
          </Link>
        </div>
      </aside>
    </div>
  );
}

const TRENDS = [
  "플라스틱 빨대",
  "테슬라 주식",
  "교보문고",
  "비트코인",
  "오카에리",
  "알루미늄 25%",
  "발렌타인데이",
] as const;
