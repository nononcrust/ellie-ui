"use client";

import profileImage from "@/assets/images/chat-emoticon.webp";
import { Grid } from "@/components/layouts/grid";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
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
  PencilIcon,
  Trash2Icon,
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
      <Grid.Item>
        <Dialog>
          <Dialog.Content className="max-w-[320px]">
            <Dialog.Header>
              <Dialog.Title>삭제할까요?</Dialog.Title>
              <Dialog.Description className="sr-only">삭제할까요?</Dialog.Description>
            </Dialog.Header>
            <Dialog.Footer className="mt-8">
              <Dialog.Close asChild>
                <Button variant="secondary">취소하기</Button>
              </Dialog.Close>
              <Dialog.Close asChild>
                <Button>삭제하기</Button>
              </Dialog.Close>
            </Dialog.Footer>
          </Dialog.Content>
          <DropdownMenu>
            <Dialog.Trigger asChild>
              <DropdownMenu.Trigger asChild>
                <Button variant="outlined">메뉴</Button>
              </DropdownMenu.Trigger>
            </Dialog.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item>
                <PencilIcon size={16} />
                수정하기
              </DropdownMenu.Item>
              <Dialog.Trigger asChild>
                <DropdownMenu.Item>
                  <Trash2Icon size={16} />
                  삭제하기
                </DropdownMenu.Item>
              </Dialog.Trigger>
            </DropdownMenu.Content>
          </DropdownMenu>
        </Dialog>
      </Grid.Item>
      <Grid.Item>
        <DropdownMenu>
          <DropdownMenu.Trigger className="rounded-full">
            <Avatar>
              <Avatar.Image src={profileImage.src} alt="프로필 이미지" />
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
    </Grid>
  );
}
