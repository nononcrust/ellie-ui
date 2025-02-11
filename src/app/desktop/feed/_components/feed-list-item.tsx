"use client";

import profileImage from "@/assets/images/chat-emoticon.webp";
import { Avatar } from "@/components/ui/avatar";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { IconButton } from "@/components/ui/icon-button";
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
  };
};

export const FeedListItem = ({ user }: FeedListItemProps) => {
  return (
    <li className="flex gap-3 px-4 py-3">
      <Avatar>
        <Avatar.Image src={profileImage.src} alt="프로필 이미지" />
        <Avatar.Fallback>U</Avatar.Fallback>
      </Avatar>
      <div className="flex flex-col">
        <span className="text-[15px] font-semibold">
          {user.nickname}
          <span className="text-subtle ml-1 font-normal">@nononcrust.social</span>
          <span className="mx-1">·</span>
          <span className="text-sub text-[13px] font-normal">1시간 전</span>
        </span>
        <p className="text-[15px]">안녕하세요!!!</p>
        <div className="text-subtle mt-2 flex items-center gap-16">
          <span className="flex items-center gap-0.5 text-sm">
            <MessageCircleIcon size={16} />
            16
          </span>
          <span className="flex items-center gap-0.5 text-sm">
            <HeartIcon size={16} />
            16
          </span>
          <span className="flex items-center gap-0.5 text-sm">
            <Repeat2Icon size={16} />
            16
          </span>
          <DropdownMenu>
            <DropdownMenu.Trigger asChild>
              <IconButton size="xsmall" variant="ghost" aria-label="더보기">
                <EllipsisIcon size={16} />
              </IconButton>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Group>
                <DropdownMenu.Item>
                  <LinkIcon size={16} />
                  링크 복사하기
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                  <CodeIcon size={16} />
                  게시글 임베드
                </DropdownMenu.Item>
              </DropdownMenu.Group>
              <DropdownMenu.Separator />
              <DropdownMenu.Group>
                <DropdownMenu.Item>
                  <UserRoundXIcon size={16} />
                  작성자 차단하기
                </DropdownMenu.Item>
                <DropdownMenu.Item className="text-error">
                  <TriangleAlertIcon size={16} />
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
