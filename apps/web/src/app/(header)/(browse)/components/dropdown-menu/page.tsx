"use client";

import profileImage from "@/assets/images/chat-emoticon.webp";
import { Grid } from "@/components/layouts/grid";
import { Avatar, Button, Dialog, DropdownMenu, IconButton } from "@ellie-ui/core";
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
import { useState } from "react";

export default function DropdownMenuPage() {
  const [checked, setChecked] = useState(false);

  return (
    <Grid>
      <Grid.Item>
        <DropdownMenu>
          <DropdownMenu.Trigger asChild>
            <IconButton variant="outlined" aria-label="더보기" size="small">
              <EllipsisIcon className="size-4" />
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
              <EllipsisIcon className="size-4" />
            </IconButton>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item>
              <BookmarkIcon className="size-4" />
              북마크
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <EyeOffIcon className="size-4" />
              관심 없음
            </DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.CheckboxItem
              onSelect={(e) => e.preventDefault()}
              checked={checked}
              onCheckedChange={setChecked}
            >
              <BellMinusIcon className="size-4" />
              업데이트 알림 끄기
            </DropdownMenu.CheckboxItem>
            <DropdownMenu.Item>
              <UserRoundMinusIcon className="size-4" />
              팔로우 취소
            </DropdownMenu.Item>
            <DropdownMenu.Item variant="danger">
              <MessageSquareWarningIcon className="size-4" />
              신고하기
            </DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>
              <LinkIcon className="size-4" />
              링크 복사
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu>
      </Grid.Item>
      <Grid.Item>
        <Dialog>
          <Dialog.Content className="w-[20rem]">
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
                <PencilIcon className="size-4" />
                수정하기
              </DropdownMenu.Item>
              <Dialog.Trigger asChild>
                <DropdownMenu.Item>
                  <Trash2Icon className="size-4" />
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
              <UserIcon className="size-4" />
              프로필
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <LogOutIcon className="size-4" />
              로그아웃
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu>
      </Grid.Item>
    </Grid>
  );
}
