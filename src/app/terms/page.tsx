import { Mobile } from "@/components/layouts/mobile";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { IconButton } from "@/components/ui/icon-button";
import { ChevronRightIcon } from "lucide-react";

export default function TermsPage() {
  return (
    <Mobile>
      <h1 className="mt-12 text-3xl font-bold">약관 동의</h1>
      <p className="mt-2 text-lg font-medium text-subtle">
        이용약관과 개인정보 처리방침에 동의해주세요.
      </p>
      <label className="mt-6 flex flex-col">
        <div className="flex items-center">
          <Checkbox size="large" />
          <span className="ml-3 text-lg font-semibold">약관 전체 동의하기</span>
        </div>
        <span className="ml-9 mt-1 text-sm font-medium text-subtle">
          선택 항목에 대한 동의 모두 포함
        </span>
      </label>
      <h2 className="mt-12 text-2xl font-bold">약관 동의 항목</h2>
      <ul className="mt-4 flex flex-col gap-4">
        <TermsItem title="만 14세 이상입니다." required />
        <TermsItem title="이용약관" required />
        <TermsItem title="전자금융거래 이용약관" required />
        <TermsItem title="개인정보 수집동의서" required />
        <TermsItem title="개인정보 마케팅 활용 동의" />
        <TermsItem title="이벤트, 홍보 알림 메일 및 SMS 등 수신" />
      </ul>
      <Button className="mt-16" size="xlarge">
        다음으로
      </Button>
    </Mobile>
  );
}

type TermsItemProps = {
  title: string;
  required?: boolean;
};

const TermsItem = ({ title, required = false }: TermsItemProps) => {
  return (
    <li className="flex items-center justify-between">
      <label className="flex flex-1 items-center">
        <Checkbox />
        <span className="ml-2 font-medium">
          [{required ? "필수" : "선택"}] {title}
        </span>
      </label>
      <IconButton aria-label="약관 상세보기" size="xsmall" variant="ghost">
        <ChevronRightIcon size={20} />
      </IconButton>
    </li>
  );
};
