"use client";

import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Chip } from "@/components/ui/chip";
import { DatePicker, DateRangePicker } from "@/components/ui/date-picker";
import { Dialog } from "@/components/ui/dialog";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { Form } from "@/components/ui/form";
import { IconButton } from "@/components/ui/icon-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup } from "@/components/ui/radio-group";
import { Select } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/toast";
import { Tooltip } from "@/components/ui/tooltip";
import { useDatePicker } from "@/hooks/use-date-picker";
import { useDateRangePicker } from "@/hooks/use-date-range-picker";
import { useSelect } from "@/hooks/use-select";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckIcon, EllipsisIcon, LogOutIcon, SettingsIcon, UserIcon, XIcon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

export default function Home() {
  const frameworkSelect = useSelect("");

  return (
    <main className="flex min-h-dvh items-center justify-center">
      <Card className="m-8 max-w-[1280px] gap-2">
        <div className="flex gap-2">
          <Tooltip variant="outlined" content="툴팁 내용">
            <Button>버튼</Button>
          </Tooltip>
          <Button variant="secondary" onClick={() => toast.success("토스트 메시지")}>
            토스트
          </Button>
          <Select
            className="w-[160px]"
            placeholder="프레임워크를 선택하세요."
            value={frameworkSelect.value}
            onChange={frameworkSelect.onChange}
          >
            {Array(20)
              .fill(0)
              .map((_, index) => (
                <Select.Option key={index} value={String(index + 1)}>
                  React {index + 1}
                </Select.Option>
              ))}
          </Select>
          <Select className="w-[160px]" placeholder="과일 선택">
            <Select.Group>
              <Select.Label>과일</Select.Label>
              <Select.Option value="1">사과사과사과사과사과사과사과사</Select.Option>
              <Select.Option value="2">바나나</Select.Option>
              <Select.Option value="3">수박</Select.Option>
              <Select.Option value="4">복숭아</Select.Option>
            </Select.Group>
            <Select.Separator />
            <Select.Group>
              <Select.Label>야채</Select.Label>
              <Select.Option value="5">당근</Select.Option>
              <Select.Option value="6">오이</Select.Option>
              <Select.Option value="7">양파</Select.Option>
              <Select.Option value="8">마늘</Select.Option>
            </Select.Group>
          </Select>
          <Dialog>
            <Dialog.Trigger asChild>
              <Button variant="outlined">모달 열기</Button>
            </Dialog.Trigger>
            <Dialog.Content className="max-w-[400px]">
              <Dialog.Header>
                <Dialog.Title>모달</Dialog.Title>
                <Dialog.Description>모달 내용은 이렇게 표시됩니다.</Dialog.Description>
                <div className="h-[80px] w-full" />
              </Dialog.Header>
              <Dialog.Footer>
                <Dialog.Close asChild>
                  <Button variant="outlined">닫기</Button>
                </Dialog.Close>
                <Button>확인</Button>
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog>
          <DropdownMenu>
            <DropdownMenu.Trigger asChild>
              <IconButton variant="outlined" aria-label="더보기">
                <EllipsisIcon size={16} />
              </IconButton>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Group>
                <DropdownMenu.Label>계정 관리</DropdownMenu.Label>
                <DropdownMenu.Item>메뉴 1</DropdownMenu.Item>
                <DropdownMenu.Item>메뉴 2</DropdownMenu.Item>
                <DropdownMenu.Item>메뉴 3</DropdownMenu.Item>
              </DropdownMenu.Group>
              <DropdownMenu.Separator />
              <DropdownMenu.Group>
                <DropdownMenu.Label>프로젝트 관리</DropdownMenu.Label>
                <DropdownMenu.Item>메뉴 4</DropdownMenu.Item>
                <DropdownMenu.Item>메뉴 5</DropdownMenu.Item>
                <DropdownMenu.Item>메뉴 6</DropdownMenu.Item>
              </DropdownMenu.Group>
            </DropdownMenu.Content>
          </DropdownMenu>
          <Switch />
        </div>
        <div className="flex gap-2">
          <div className="h-fit rounded-[12px] border border-border p-3">
            <Calendar mode="range" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <Input className="w-[320px]" placeholder="이메일을 입력해주세요" />
            </div>
            <div className="flex gap-2 p-3">
              <RadioGroup className="w-[120px]" defaultValue="1">
                <RadioGroup.Option value="1">학생</RadioGroup.Option>
                <RadioGroup.Option value="2">교사</RadioGroup.Option>
                <RadioGroup.Option value="3">학부모</RadioGroup.Option>
              </RadioGroup>
              <div className="flex flex-col gap-3">
                <div className="flex h-fit items-center gap-2">
                  <Checkbox defaultChecked id="service" />
                  <Label htmlFor="service">서비스 이용 약관에 동의합니다.</Label>
                </div>
                <div className="flex h-fit items-center gap-2">
                  <Checkbox id="privacy" />
                  <Label htmlFor="privacy">개인정보 수집 및 이용에 동의합니다.</Label>
                </div>
              </div>
            </div>
            <Textarea />
            <DropdownMenu>
              <DropdownMenu.Trigger className="w-fit rounded-full">
                <Avatar>
                  <Avatar.Image src="https://randomuser.me/api/port" />
                  <Avatar.Fallback>
                    <UserIcon size={16} />
                  </Avatar.Fallback>
                </Avatar>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Group>
                  <DropdownMenu.Label>계정 관리</DropdownMenu.Label>
                  <DropdownMenu.Item>
                    <UserIcon size={16} />
                    마이페이지
                  </DropdownMenu.Item>
                  <DropdownMenu.Item>
                    <SettingsIcon size={16} />
                    계정 설정
                  </DropdownMenu.Item>
                </DropdownMenu.Group>
                <DropdownMenu.Separator />
                <DropdownMenu.Item>
                  <LogOutIcon size={16} />
                  로그아웃
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu>
            <DatePickerSection />
            <ChipSection />
            <BadgeSection />
          </div>
        </div>
        <FormSection />
      </Card>
    </main>
  );
}

const BadgeSection = () => {
  return (
    <div className="flex gap-2">
      <Badge variant="primary">1</Badge>
      <Badge variant="primary">2</Badge>
      <Badge variant="primary">3</Badge>
      <Badge variant="primary">99</Badge>
      <Badge variant="primary">99+</Badge>
    </div>
  );
};

const ChipSection = () => {
  return (
    <div className="flex flex-wrap gap-1">
      <Chip variant="primary">신규 가입 기업</Chip>
      <Chip variant="secondary">신규 가입 기업</Chip>
      <Chip variant="outlined">신규 가입 기업</Chip>
      <Chip variant="info">신규 가입 기업</Chip>
      <Chip variant="success">신규 가입 기업</Chip>
      <Chip variant="warning">신규 가입 기업</Chip>
      <Chip variant="danger">신규 가입 기업</Chip>
    </div>
  );
};

const DatePickerSection = () => {
  const datePicker = useDatePicker();
  const dateRangePicker = useDateRangePicker();

  return (
    <div className="flex flex-col gap-2">
      <DatePicker
        placeholder="날짜를 선택해주세요."
        value={datePicker.value}
        onChange={datePicker.onChange}
        aria-invalid
      />
      <DateRangePicker
        placeholder="날짜 범위를 선택해주세요."
        value={dateRangePicker.value}
        onChange={dateRangePicker.onChange}
        aria-invalid
      />
    </div>
  );
};

const formSchema = z
  .object({
    name: z.string().nonempty({ message: "이름은 최소 1글자 이상이어야 합니다." }),
    email: z.string().email({ message: "유효한 이메일 주소를 입력해주세요." }),
    password: z.string().min(8, { message: "비밀번호는 최소 8자 이상이어야 합니다." }),
    confirmPassword: z.string(),
    type: z.string().min(1, { message: "유형을 선택해주세요." }),
    date: z.date({ message: "날짜를 선택해주세요." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["confirmPassword"],
  });

type FormSchema = z.infer<typeof formSchema>;

const FormSection = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      password: "",
      type: "",
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    console.log(data);
  });

  const checkStrength = (pass: string) => {
    const requirements = [
      { regex: /.{8,}/, text: "최소 8자 이상" },
      { regex: /[0-9]/, text: "최소 1자 이상의 숫자" },
      { regex: /[a-z]/, text: "최소 1자 이상의 소문자" },
      { regex: /[A-Z]/, text: "최소 1자 이상의 대문자" },
    ];

    return requirements.map((req) => ({
      met: req.regex.test(pass),
      text: req.text,
    }));
  };

  const passwordStrength = checkStrength(form.watch("password"));

  const strengthScore = passwordStrength.filter((req) => req.met).length;

  const getStrengthColor = (score: number) => {
    if (score === 0) return "bg-border";
    if (score <= 1) return "bg-red-500";
    if (score <= 2) return "bg-orange-500";
    if (score === 3) return "bg-amber-500";
    return "bg-emerald-500";
  };

  const getStrengthText = (score: number) => {
    if (score === 0) return "비밀번호를 입력해주세요.";
    if (score <= 2) return "약한 비밀번호입니다.";
    if (score === 3) return "보통 비밀번호입니다.";
    return "아주 강력한 비밀번호입니다!";
  };

  return (
    <Form className="flex max-w-[320px] flex-col gap-3" onSubmit={onSubmit}>
      <Form.Item error={!!form.formState.errors.name}>
        <Form.Label>이름</Form.Label>
        <Form.Control>
          <Input placeholder="이름" {...form.register("name")} />
        </Form.Control>
        <Form.Description>이름을 입력해주세요.</Form.Description>
        <Form.ErrorMessage>{form.formState.errors.name?.message}</Form.ErrorMessage>
      </Form.Item>
      <Form.Item error={!!form.formState.errors.email}>
        <Form.Label>이메일</Form.Label>
        <Form.Control>
          <Input placeholder="이메일" {...form.register("email")} />
        </Form.Control>
        <Form.Description>이메일을 입력해주세요.</Form.Description>
        <Form.ErrorMessage>{form.formState.errors.email?.message}</Form.ErrorMessage>
      </Form.Item>
      <Form.Item error={!!form.formState.errors.password}>
        <Form.Label>비밀번호</Form.Label>
        <Form.Control>
          <Input type="password" placeholder="비밀번호" {...form.register("password")} />
        </Form.Control>
        <Form.ErrorMessage>{form.formState.errors.password?.message}</Form.ErrorMessage>
        <div
          className="mb-4 mt-3 h-1 w-full overflow-hidden rounded-full bg-border"
          role="progressbar"
          aria-valuenow={strengthScore}
          aria-valuemin={0}
          aria-valuemax={4}
          aria-label="Password strength"
        >
          <div
            className={`h-full ${getStrengthColor(strengthScore)} transition-all duration-500 ease-out`}
            style={{ width: `${(strengthScore / 4) * 100}%` }}
          ></div>
        </div>
        <p id="password-strength" className="text-foreground mb-2 text-sm font-medium">
          {getStrengthText(strengthScore)}.
        </p>
        <ul className="space-y-1.5" aria-label="Password requirements">
          {passwordStrength.map((req, index) => (
            <li key={index} className="flex items-center gap-2">
              {req.met ? (
                <CheckIcon size={16} className="text-emerald-500" aria-hidden="true" />
              ) : (
                <XIcon size={16} className="text-muted-foreground/80" aria-hidden="true" />
              )}
              <span className={`text-xs ${req.met ? "text-emerald-600" : "text-muted-foreground"}`}>
                {req.text}
                <span className="sr-only">
                  {req.met ? " - Requirement met" : " - Requirement not met"}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </Form.Item>
      <Form.Item error={!!form.formState.errors.confirmPassword}>
        <Form.Label>비밀번호 확인</Form.Label>
        <Form.Control>
          <Input
            type="password"
            placeholder="비밀번호 확인"
            {...form.register("confirmPassword")}
          />
        </Form.Control>
        <Form.Description>비밀번호를 다시 입력해주세요.</Form.Description>
        <Form.ErrorMessage>{form.formState.errors.confirmPassword?.message}</Form.ErrorMessage>
      </Form.Item>
      <Form.Item error={!!form.formState.errors.type}>
        <Form.Label>유형</Form.Label>
        <Controller
          name="type"
          control={form.control}
          render={({ field }) => (
            <Form.Control>
              <Select placeholder="유형 선택" {...field}>
                <Select.Option value="student">학생</Select.Option>
                <Select.Option value="teacher">교사</Select.Option>
                <Select.Option value="parent">학부모</Select.Option>
              </Select>
            </Form.Control>
          )}
        />
        <Form.ErrorMessage>{form.formState.errors.type?.message}</Form.ErrorMessage>
      </Form.Item>
      <Form.Item error={!!form.formState.errors.date}>
        <Form.Label>날짜</Form.Label>
        <Controller
          name="date"
          control={form.control}
          render={({ field }) => (
            <Form.Control>
              <DatePicker placeholder="날짜 선택" {...field} />
            </Form.Control>
          )}
        />
        <Form.ErrorMessage>{form.formState.errors.date?.message}</Form.ErrorMessage>
      </Form.Item>
      <Button className="w-full" type="submit">
        가입하기
      </Button>
    </Form>
  );
};
