"use client";

import profileImage from "@/assets/images/nonon.png";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChipButton } from "@/components/ui/chip-button";
import { IconButton } from "@/components/ui/icon-button";
import { UsersRoundIcon, XIcon } from "lucide-react";
import { useState } from "react";

export const FollowRecommendation = () => {
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
        <FollowRecommendationItem
          user={{ nickname: "노논", profileImage: profileImage.src, email: "@nononcrust.social" }}
          isFollowing={false}
        />
        <FollowRecommendationItem
          user={{ nickname: "노논", profileImage: profileImage.src, email: "@nononcrust.social" }}
          isFollowing={false}
        />
        <FollowRecommendationItem
          user={{ nickname: "노논", profileImage: profileImage.src, email: "@nononcrust.social" }}
          isFollowing={false}
        />
        <FollowRecommendationItem
          user={{ nickname: "노논", profileImage: profileImage.src, email: "@nononcrust.social" }}
          isFollowing={false}
        />
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

type FollowRecomendationItemProps = {
  user: {
    nickname: string;
    email: string;
    profileImage: string;
  };
  isFollowing: boolean;
};

export const FollowRecommendationItem = ({
  user,
  isFollowing: initialIsFollowing,
}: FollowRecomendationItemProps) => {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  return (
    <li className="flex items-center">
      <Avatar>
        <Avatar.Image src={user.profileImage} alt="프로필 이미지" />
      </Avatar>
      <div className="ml-2 flex flex-1 flex-col">
        <span className="text-sm font-semibold">{user.nickname}</span>
        <span className="text-subtle text-[13px]">{user.email}</span>
      </div>
      <ChipButton
        size="small"
        variant={isFollowing ? "primary" : "outlined"}
        onClick={() => setIsFollowing(!isFollowing)}
        aria-pressed={isFollowing}
      >
        {isFollowing ? "팔로잉" : "팔로우"}
      </ChipButton>
    </li>
  );
};
