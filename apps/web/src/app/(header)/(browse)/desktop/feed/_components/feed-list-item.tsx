"use client";

import profileImage from "@/assets/images/chat-emoticon.webp";
import { formatToTimeAgo } from "@/lib/date";
import { Avatar, DropdownMenu, IconButton } from "@ellie-ui/core";
import {
  CodeIcon,
  EllipsisIcon,
  HeartIcon,
  LinkIcon,
  MessageCircleIcon,
  Repeat2Icon,
  TriangleAlertIcon,
  UserRoundXIcon,
} from "lucide-react";

type FeedListItemProps = {
  user: {
    nickname: string;
    email: string;
  };
  content: string;
  createdAt: string;
  count: {
    comment: number;
    like: number;
    repost: number;
  };
};

export const FeedListItem = ({ user, content, count, createdAt }: FeedListItemProps) => {
  return (
    <li className="flex gap-3 px-4 py-3">
      <Avatar>
        <Avatar.Image src={profileImage.src} alt="프로필 이미지" />
        <Avatar.Fallback />
      </Avatar>
      <div className="flex flex-col">
        <span className="text-[0.9375rem] font-semibold">
          {user.nickname}
          <span className="text-subtle ml-1 font-normal">{user.email}</span>
          <span className="mx-1">·</span>
          <span className="text-sub text-[0.8125rem] font-normal">
            {formatToTimeAgo(createdAt)}
          </span>
        </span>
        <p className="text-[0.9375rem]">{content}</p>
        <div className="text-subtle mt-2 flex items-center gap-16">
          <span className="flex items-center gap-0.5 text-sm">
            <MessageCircleIcon className="size-4" />
            {count.comment}
          </span>
          <span className="flex items-center gap-0.5 text-sm">
            <HeartIcon className="size-4" />
            {count.like}
          </span>
          <span className="flex items-center gap-0.5 text-sm">
            <Repeat2Icon className="size-4" />
            {count.repost}
          </span>
          <DropdownMenu>
            <DropdownMenu.Trigger asChild>
              <IconButton size="xsmall" variant="ghost" aria-label="더보기">
                <EllipsisIcon className="size-4" />
              </IconButton>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Group>
                <DropdownMenu.Item>
                  <LinkIcon className="size-4" />
                  링크 복사하기
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                  <CodeIcon className="size-4" />
                  게시글 임베드
                </DropdownMenu.Item>
              </DropdownMenu.Group>
              <DropdownMenu.Separator />
              <DropdownMenu.Group>
                <DropdownMenu.Item>
                  <UserRoundXIcon className="size-4" />
                  작성자 차단하기
                </DropdownMenu.Item>
                <DropdownMenu.Item className="text-error">
                  <TriangleAlertIcon className="size-4" />
                  신고하기
                </DropdownMenu.Item>
              </DropdownMenu.Group>
            </DropdownMenu.Content>
          </DropdownMenu>
        </div>
      </div>
    </li>
  );
};
