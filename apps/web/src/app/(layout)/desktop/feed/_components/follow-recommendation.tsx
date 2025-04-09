"use client";

import profileImage from "@/assets/images/nonon.png";
import { Avatar, Button, ChipButton, IconButton } from "@ellie-ui/core";
import { CheckIcon, UsersRoundIcon, XIcon } from "lucide-react";
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
          isFollowing
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
    verified?: boolean;
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
        <span className="flex items-center gap-1 text-sm font-semibold">
          {user.nickname}
          {user.verified && (
            <span className="bg-primary inline-flex size-3.5 items-center justify-center rounded-full text-white">
              <CheckIcon size={8} strokeWidth={4} />
            </span>
          )}
        </span>
        <span className="text-subtle text-[13px]">{user.email}</span>
      </div>
      <ChipButton
        size="small"
        variant={isFollowing ? "contained" : "outlined"}
        onClick={() => setIsFollowing(!isFollowing)}
        aria-pressed={isFollowing}
      >
        {isFollowing ? "팔로잉" : "팔로우"}
      </ChipButton>
    </li>
  );
};
