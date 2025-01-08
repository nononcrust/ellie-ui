"use client";

import { Grid } from "@/components/layouts/grid";
import { Avatar } from "@/components/ui/avatar";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { IconButton } from "@/components/ui/icon-button";
import {
  BellMinusIcon,
  BookmarkIcon,
  EllipsisIcon,
  EyeOffIcon,
  LinkIcon,
  LogOutIcon,
  MessageSquareWarningIcon,
  UserIcon,
  UserRoundMinusIcon,
} from "lucide-react";

export default function DropdownMenuPage() {
  return (
    <Grid>
      <Grid.Item>
        <DropdownMenu>
          <DropdownMenu.Trigger asChild>
            <IconButton variant="outlined" aria-label="더보기" size="small">
              <EllipsisIcon size={16} />
            </IconButton>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item>수정하기</DropdownMenu.Item>
            <DropdownMenu.Item>삭제하기</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu>
      </Grid.Item>
      <Grid.Item>
        <DropdownMenu>
          <DropdownMenu.Trigger className="rounded-full">
            <Avatar>
              <Avatar.Image src="https://avatars.githubusercontent.com/u/30559508?v=4" />
              <Avatar.Fallback>U</Avatar.Fallback>
            </Avatar>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item>
              <UserIcon size={16} />
              프로필
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <LogOutIcon size={16} />
              로그아웃
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu>
      </Grid.Item>
      <Grid.Item>
        <DropdownMenu>
          <DropdownMenu.Trigger asChild>
            <IconButton variant="outlined" aria-label="더보기" size="small">
              <EllipsisIcon size={16} />
            </IconButton>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item>
              <BookmarkIcon size={16} />
              북마크
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <EyeOffIcon size={16} />
              관심 없음
            </DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>
              <BellMinusIcon size={16} />
              업데이트 알림 끄기
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <UserRoundMinusIcon size={16} />
              팔로우 취소
            </DropdownMenu.Item>
            <DropdownMenu.Item className="text-error">
              <MessageSquareWarningIcon size={16} />
              신고하기
            </DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>
              <LinkIcon size={16} />
              링크 복사
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu>
      </Grid.Item>
    </Grid>
  );
}
