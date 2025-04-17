import { Mobile } from "@/components/layouts/mobile";
import { Button } from "@ellie-ui/core";
import { BellIcon } from "lucide-react";
import { Slot } from "radix-ui";

export default function PermissionsPage() {
  return (
    <div className="h-[calc(100vh-56px)] bg-black/40">
      <Mobile>
        <div className="bg-background mx-12 mt-[7.5rem] rounded-2xl p-6">
          <h1 className="whitespace-pre-wrap text-xl font-semibold">
            {"편리한 서비스 이용을 위해\n필요한 권한을 안내해 드려요"}
          </h1>
          <h2 className="text-subtle mt-2 whitespace-pre-wrap text-sm font-medium">
            {"허용하지 않아도 서비스를 이용할 수 있어요\n필요한 시점에 다시 알려드릴게요."}
          </h2>
          <div className="my-12 flex flex-col gap-3">
            <PermissionItem icon={<BellIcon />} title="위치" description="병원 및 약국 위치 안내" />
            <PermissionItem icon={<BellIcon />} title="알림" description="중요 메시지 수신" />
            <PermissionItem
              icon={<BellIcon />}
              title="사진 / 저장 공간, 카메라"
              description="비대면 진료 시 이미지 첨부"
            />
            <PermissionItem
              icon={<BellIcon />}
              title="신체활동"
              description="걸음 수 측정 및 건강 관리"
            />
          </div>
          <Button size="xlarge" className="w-full">
            확인
          </Button>
        </div>
      </Mobile>
    </div>
  );
}

type PermissionItemProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  required?: boolean;
};

const PermissionItem = ({ icon, title, description, required = false }: PermissionItemProps) => {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-background-100 flex size-11 items-center justify-center rounded-xl">
        <Slot.Root className="size-5">{icon}</Slot.Root>
      </div>
      <div className="flex flex-1 flex-col">
        <span className="text-sm font-semibold">
          {title}
          {!required && <span className="ml-2 font-medium">(선택)</span>}
        </span>
        <span className="text-subtle text-[0.8125rem] font-medium">{description}</span>
      </div>
    </div>
  );
};
