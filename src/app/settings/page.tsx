import profileImage from "@/assets/images/nonon.png";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { Switch } from "@/components/ui/switch";
import { Tooltip } from "@/components/ui/tooltip";
import { ChevronRightIcon, CircleHelpIcon } from "lucide-react";

export default function SettingsPage() {
  return (
    <main className="mx-auto mt-16 w-full max-w-3xl">
      <h2 className="text-lg font-semibold">프로필</h2>
      <Divider className="my-3" />
      <div className="flex pt-2">
        <Avatar className="size-24">
          <Avatar.Image src={profileImage.src} />
          <Avatar.Fallback>N</Avatar.Fallback>
        </Avatar>
      </div>
      <h2 className="mt-8 text-lg font-semibold">계정 보안</h2>
      <Divider className="my-3" />
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium">이메일</span>
            <span className="text-xs text-sub">nononcrust@gmail.com</span>
          </div>
          <Button size="small" variant="outlined">
            이메일 변경
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium">비밀번호</span>
            <span className="text-xs text-sub">
              계정 로그인에 사용할 영구 비밀번호를 설정하세요.
            </span>
          </div>
          <Switch />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium">2단계 인증</span>
            <span className="text-xs text-sub">로그인 단계에서 계정 보안 방식을 추가하세요.</span>
          </div>
          <Button size="small" variant="outlined">
            인증 방법 추가
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-error">내 계정 삭제</span>
            <span className="text-xs text-sub">
              계정을 영구적으로 삭제하고 모든 워크스페이스에서 액세스 권한을 제거합니다.
            </span>
          </div>
          <ChevronRightIcon size={16} className="text-sub" />
        </div>
      </div>

      <h2 className="mt-8 flex items-center gap-2 text-lg font-semibold">
        기기
        <Tooltip content="모든 기기가 로그인 되어있습니다.">
          <CircleHelpIcon size={16} className="text-subtle" />
        </Tooltip>
      </h2>
      <Divider className="my-3" />
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium">모든 기기에서 로그아웃</span>
            <span className="text-xs text-sub">
              이 기기 외에 다른 기기의 모든 활성 세션에서 로그아웃합니다.
            </span>
          </div>
          <Button size="small" variant="outlined">
            모든 기기에서 로그아웃
          </Button>
        </div>
      </div>
    </main>
  );
}
