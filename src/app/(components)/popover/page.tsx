"use client";

import { Grid } from "@/components/layouts/grid";
import { Badge } from "@/components/ui/badge";
import { IconButton } from "@/components/ui/icon-button";
import { Popover } from "@/components/ui/popover";
import { BellIcon } from "lucide-react";

export default function PopoverPage() {
  return (
    <Grid>
      <Grid.Item>
        <Notifications />
      </Grid.Item>
    </Grid>
  );
}

const Notifications = () => {
  return (
    <Popover>
      <div className="relative w-fit">
        <Popover.Trigger asChild>
          <IconButton
            className="rounded-[12px] text-primary shadow-md"
            size="small"
            variant="outlined"
            aria-label="알림"
          >
            <BellIcon size={16} strokeWidth={2.5} />
          </IconButton>
        </Popover.Trigger>
        <Badge variant="primary" className="absolute -top-2 left-full -translate-x-4">
          9
        </Badge>
      </div>
      <Popover.Content>
        <ul className="flex w-[320px] flex-col p-2">
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
        </ul>
      </Popover.Content>
    </Popover>
  );
};

const NotificationItem = () => {
  return (
    <li>
      <Popover.Close className="flex w-full flex-col gap-2 rounded-[10px] px-4 py-3 transition-colors hover:bg-background-hover">
        <span className="text-[12px] font-semibold text-primary">커리어 성장</span>
        <p className="text-left text-sm font-medium">
          {
            "백엔드 챌린지 이제는 꼭 알아야 할 AWS\n실전에 바로 적용할 수 있는 AWS 기술을 2주 완성 학습하고 개발 역량을 높여보세요."
          }
        </p>
        <span className="text-xs font-medium text-subtle">2024.12.26 (목)</span>
      </Popover.Close>
    </li>
  );
};
