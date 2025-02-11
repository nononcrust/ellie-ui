"use client";

import profileImage from "@/assets/images/nonon.png";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChipButton } from "@/components/ui/chip-button";
import { IconButton } from "@/components/ui/icon-button";
import { UsersRoundIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FeedListItem } from "./_components/feed-list-item";
import { SearchInput } from "./_components/search-input";

export default function FeedPage() {
  return (
    <div className="mx-auto flex w-full md:max-w-4xl">
      <main className="border-border w-full py-16 md:border-x">
        <ul className="border-border divide-border flex flex-col divide-y border-y">
          {Array.from({ length: 10 }).map((_, index) => (
            <FeedListItem key={index} {...FEED} />
          ))}
        </ul>
      </main>
      <aside className="sticky top-[56px] right-0 hidden h-[120px] w-[360px] shrink-0 flex-col px-6 lg:flex">
        <SearchInput className="mt-6" placeholder="검색하기" />
        <Trends />
        <FollowRecommendation />
        <Links />
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

const Trends = () => {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="mt-4 flex flex-col">
      <div className="mb-3 flex items-center justify-between">
        <span className="font-semibold">트렌드</span>
        <IconButton
          size="xsmall"
          aria-label="숨기기"
          variant="ghost"
          onClick={() => setShow(false)}
        >
          <XIcon size={16} />
        </IconButton>
      </div>
      <div className="flex flex-wrap gap-2">
        {TRENDS.map((trend, index) => (
          <ChipButton key={index} size="xsmall" variant="outlined">
            {trend}
          </ChipButton>
        ))}
      </div>
    </div>
  );
};

const FollowRecommendation = () => {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="mt-4 flex flex-col">
      <div className="mb-3 flex items-center justify-between">
        <span className="font-semibold">팔로우 추천</span>
        <IconButton
          size="xsmall"
          aria-label="숨기기"
          variant="ghost"
          onClick={() => setShow(false)}
        >
          <XIcon size={16} />
        </IconButton>
      </div>
      <ul className="flex flex-col gap-5">
        <FollowRecommendationItem />
        <FollowRecommendationItem />
        <FollowRecommendationItem />
        <FollowRecommendationItem />
      </ul>
      <div className="mt-2 flex flex-col">
        <Button className="mt-4">
          <UsersRoundIcon size={16} />
          팔로우할 사람 찾기
        </Button>
      </div>
    </div>
  );
};

const FollowRecommendationItem = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <li className="flex items-center">
      <Avatar>
        <Avatar.Image src={profileImage.src} alt="프로필 이미지" />
      </Avatar>
      <div className="ml-2 flex flex-1 flex-col">
        <span className="text-sm font-semibold">노논</span>
        <span className="text-subtle text-[13px]">@nononcrust.social</span>
      </div>
      <ChipButton
        size="small"
        variant={isFollowing ? "primary" : "outlined"}
        onClick={() => setIsFollowing(!isFollowing)}
      >
        {isFollowing ? "팔로잉" : "팔로우"}
      </ChipButton>
    </li>
  );
};

const Links = () => {
  return (
    <div className="text-subtle mt-4 flex items-center gap-1 font-bold">
      <Link className="text-primary text-[13px] font-normal hover:underline" href="#">
        피드백
      </Link>
      •
      <Link className="text-primary text-[13px] font-normal hover:underline" href="#">
        이용약관
      </Link>
      •
      <Link className="text-primary text-[13px] font-normal hover:underline" href="#">
        개인정보 처리방침
      </Link>
      •
      <Link className="text-primary text-[13px] font-normal hover:underline" href="#">
        고객센터
      </Link>
    </div>
  );
};

const FEED = {
  user: {
    nickname: "노논",
    email: "@nononcrust.social",
  },
  content: "안녕하세요!!!",
  createdAt: "2025-02-11T03:53:06.584Z",
  count: {
    comment: 126,
    like: 23,
    repost: 8,
  },
};
