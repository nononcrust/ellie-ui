"use client";

import profileImage2 from "@/assets/images/chat-emoticon.webp";
import profileImage3 from "@/assets/images/default-profile-image.svg";
import profileImage from "@/assets/images/nonon.png";
import { ChatMessage, ChatMessageGroup } from "@/components/chat/chat-message";
import { ChatMessageInput } from "@/components/chat/chat-message-input";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChipButton } from "@/components/ui/chip-button";
import { DatePicker } from "@/components/ui/date-picker";
import { Divider } from "@/components/ui/divider";
import { Form } from "@/components/ui/form";
import { IconButton } from "@/components/ui/icon-button";
import { Input } from "@/components/ui/input";
import { RadioGroup } from "@/components/ui/radio-group";
import { Select } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tag } from "@/components/ui/tag";
import { link } from "@/configs/link";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  EllipsisIcon,
  EyeOffIcon,
  LinkIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  SlidersHorizontalIcon,
} from "lucide-react";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { ChatMessageList } from "./desktop/chat/_components/chat-message-list";
import {
  ChatMessageGroupsContextProvider,
  useChatMessageGroups,
} from "./desktop/chat/_contexts/chat-message-group-context";
import { FollowRecommendationItem } from "./desktop/feed/_components/follow-recommendation";
import { SearchInput } from "./desktop/feed/_components/search-input";

export default function Home() {
  return (
    <main className="mx-auto mb-16 w-full max-w-[1440px] columns-1 gap-5 px-4 lg:columns-2 xl:columns-3">
      <LoginForm />
      <ChatRoom />
      <FollowRecommendation />
      <SearchMenu />
      <Settings />
      {/* <Card className="mb-5 flex h-48 break-inside-avoid items-center justify-center">
        <UnderConstruction />
      </Card> */}
      <Profile />
      <StoreDetail />
      <ReservationForm />
    </main>
  );
}

const LoginForm = () => {
  return (
    <Card className="mb-5 break-inside-avoid">
      <span className="text-lg font-semibold">로그인</span>
      <Form className="mt-6 flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
        <Form.Item>
          <Form.Label>이메일</Form.Label>
          <Form.Control>
            <Input placeholder="이메일을 입력해주세요" />
          </Form.Control>
        </Form.Item>
        <Form.Item>
          <Form.Label>비밀번호</Form.Label>
          <div className="relative">
            <Form.Control>
              <Input className="pr-8" placeholder="비밀번호를 입력해주세요" type="password" />
            </Form.Control>
            <IconButton
              aria-label="비밀번호 표시"
              size="xsmall"
              variant="ghost"
              className="text-subtle absolute top-1/2 right-1 -translate-y-1/2"
            >
              <EyeOffIcon size={14} />
            </IconButton>
          </div>
        </Form.Item>
        <Button className="mt-2 w-full" type="submit">
          로그인
        </Button>
      </Form>
      <div className="relative my-5">
        <Divider />
        <span className="text-subtle bg-background absolute -top-2 left-1/2 -translate-x-1/2 transform px-1 text-[13px] font-medium">
          혹은
        </span>
      </div>
      <Button variant="outlined">구글 계정으로 로그인</Button>
    </Card>
  );
};

const ChatRoom = () => {
  return (
    <Card className="mb-5 break-inside-avoid">
      <ChatMessageGroupsContextProvider initialChatMessageGroups={initialChatMessageGroups}>
        <Chat />
      </ChatMessageGroupsContextProvider>
    </Card>
  );
};

const FollowRecommendation = () => {
  return (
    <Card className="mb-5 break-inside-avoid">
      <span className="text-lg font-semibold">팔로우 추천</span>
      <ul className="mt-4 flex flex-col gap-4">
        <FollowRecommendationItem
          user={{
            nickname: "시나몬샌드위치",
            profileImage: profileImage.src,
            email: "@cinnamon.sandwich",
          }}
          isFollowing={false}
        />{" "}
        <FollowRecommendationItem
          user={{
            nickname: "로렌스",
            profileImage: profileImage3.src,
            email: "@lawrence",
          }}
          isFollowing={false}
        />{" "}
        <FollowRecommendationItem
          user={{
            nickname: "realize",
            profileImage: profileImage2.src,
            email: "@realize.social",
            verified: true,
          }}
          isFollowing
        />
      </ul>
      <Button className="mt-6" variant="outlined">
        더보기
      </Button>
    </Card>
  );
};

const SearchMenu = () => {
  return (
    <Card className="mb-5 break-inside-avoid">
      <SearchInput className="mb-3" placeholder="검색어를 입력해주세요" />
      <div className="flex gap-2">
        <div className="relative">
          <ChipButton size="xsmall" variant="primaryLowOutlined">
            <SlidersHorizontalIcon size={12} />
            필터
          </ChipButton>
          <Badge size="small" className="absolute -top-2 left-full -translate-x-3">
            3
          </Badge>
        </div>
        <ChipButton size="xsmall" variant="contained">
          인기
        </ChipButton>
        <ChipButton size="xsmall" variant="secondary">
          최신
        </ChipButton>
        <ChipButton size="xsmall" variant="secondary">
          추천
        </ChipButton>
      </div>
    </Card>
  );
};

const Settings = () => {
  return (
    <Card className="mb-5 break-inside-avoid">
      <span className="mb-4 text-lg font-semibold">알림 설정</span>
      <div className="flex flex-col gap-4">
        <SettingItem
          title="이벤트 알림"
          description="프로모션 및 기타 정보를 받아볼 수 있어요."
          enabled={false}
        />
        <SettingItem
          title="리뷰 알림"
          description="작성한 리뷰에 대한 알림을 받아볼 수 있어요."
          enabled={false}
        />
        <SettingItem title="댓글 알림" description="댓글 알림을 받아볼 수 있어요." enabled />
        <SettingItem
          title="이메일 알림"
          description="새로운 알림을 이메일로 받아볼 수 있어요."
          enabled
        />
      </div>
    </Card>
  );
};

type SettingItemProps = {
  title: string;
  description: string;
  enabled: boolean;
};

const SettingItem = ({ title, description, enabled }: SettingItemProps) => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex flex-col">
        <span className="text-[15px] font-semibold">{title}</span>
        <span className="text-subtle text-[13px] font-medium">{description}</span>
      </div>
      <Switch defaultChecked={enabled} />
    </div>
  );
};

const Profile = () => {
  return (
    <Card className="mb-5 break-inside-avoid">
      <div className="flex w-full justify-between">
        <div className="flex gap-1">
          <Avatar className="size-14 rounded-xl">
            <Avatar.Image src={profileImage.src} />
            <Avatar.Fallback />
          </Avatar>
          <div className="ml-2">
            <span className="flex items-center gap-2">
              <span className="text-lg leading-none font-semibold">신상호</span>
              <Tag variant="info">멤버</Tag>
            </span>
            <span className="text-subtle text-sm font-medium">Frontend Engineer</span>
            <div className="mt-2 flex flex-col gap-0.5">
              <span className="text-subtle flex items-center gap-2 text-sm">
                <MapPinIcon size={16} /> 경기도 수지구 동천동
              </span>
              <Link
                className="text-subtle hover:text-main flex items-center gap-2 text-sm transition-colors"
                href={`mailto:${link.email}`}
              >
                <MailIcon size={16} /> {link.email}
              </Link>
              <Link
                className="text-subtle hover:text-main flex items-center gap-2 text-sm transition-colors"
                href={link.github}
              >
                <LinkIcon size={16} /> {link.github}
              </Link>
            </div>
          </div>
        </div>
        <IconButton aria-label="메일 보내기" size="small" variant="outlined" asChild>
          <Link href={`mailto:${link.email}`}>
            <MailIcon size={16} />
          </Link>
        </IconButton>
      </div>
    </Card>
  );
};

const StoreDetail = () => {
  return (
    <Card className="mb-5 break-inside-avoid">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="text-sub flex items-center gap-4 text-sm font-medium">
              <span>125m</span>
              <span>도보 5분</span>
            </div>
            <IconButton aria-label="더보기" size="xsmall" variant="ghost">
              <EllipsisIcon size={16} />
            </IconButton>
          </div>
          <span className="text-xl font-semibold">우리들약국</span>
          <div className="mt-1 flex items-center gap-2">
            <span className="text-primary text-sm font-semibold">영업중</span>
            <span className="text-subtle text-[13px] font-medium">(수) 09:00 ~ 21:00</span>
          </div>
        </div>
        <div className="mt-2 flex flex-wrap gap-1">
          <Tag variant="secondary">연중무휴</Tag>
          <Tag variant="secondary">심야운영</Tag>
        </div>
        <div>
          <div className="mt-4 flex w-full gap-2">
            <Button className="flex-1" variant="outlined" size="large">
              자세히
            </Button>
            <Button className="flex-3" size="large">
              <PhoneIcon size={14} />
              전화하기
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

const Chat = () => {
  const { chatMessageGroups, dispatch } = useChatMessageGroups();

  const onSendMessage = (chatMessage: ChatMessage) => {
    dispatch({
      type: "chat",
      payload: {
        chatMessage,
      },
    });
  };

  return (
    <>
      <div className="flex flex-1 flex-col">
        <ChatMessageList list={chatMessageGroups} />
      </div>
      <div className="mt-8">
        <ChatMessageInput onSend={onSendMessage} />
      </div>
    </>
  );
};

const initialChatMessageGroups: ChatMessageGroup[] = [
  {
    author: {
      id: "2",
      name: "나",
      profileImageUrl: profileImage.src,
    },
    messages: [
      {
        id: "3",
        type: "text",
        content: "안녕하세요",
      },
    ],
    createdAt: "2025-01-22T14:26:13Z",
  },
  {
    author: {
      id: "1",
      name: "노논",
      profileImageUrl: profileImage.src,
    },
    messages: [
      {
        id: "4",
        type: "text",
        content: "박스랑 중고 고려해서 8만원에 판매 가능하신가요?",
        reactions: [
          {
            type: "check",
            author: {
              id: "2",
            },
          },
        ],
      },
    ],
    createdAt: "2025-01-22T14:26:13Z",
  },
  {
    author: {
      id: "2",
      name: "나",
      profileImageUrl: profileImage.src,
    },
    messages: [
      {
        id: "5",
        type: "text",
        content: "네 가능합니다. 박스는 없고 충전기만 드릴 수 있어요.",
      },
      {
        id: "6",
        type: "text",
        content: "거래 장소는 어디로 하시나요?",
        read: true,
      },
    ],
    createdAt: "2025-01-22T14:26:13Z",
  },
];

const reservationFormSchema = z.object({
  session: z.string().nonempty({ message: "참가할 세션을 선택해주세요." }),
  date: z.date({ message: "예약 날짜를 선택해주세요." }),
  type: z.string().nonempty({ message: "참가 유형을 선택해주세요." }),
});

const ReservationForm = () => {
  const defaultValues = {
    session: "",
    date: undefined,
    type: "",
  };

  const form = useForm({
    resolver: zodResolver(reservationFormSchema),
    defaultValues,
  });

  const onSubmit = form.handleSubmit(() => {
    form.reset(defaultValues);
  });

  return (
    <Card className="mb-5 break-inside-avoid">
      <span className="text-lg font-semibold">강의 예약</span>
      <Form className="mt-4 flex flex-col gap-4" onSubmit={onSubmit}>
        <Form.Item error={!!form.formState.errors.session}>
          <Form.Label>참가할 세션</Form.Label>
          <Controller
            name="session"
            control={form.control}
            render={({ field }) => (
              <Form.Control>
                <Select placeholder="참가할 세션을 선택해주세요" {...field}>
                  <Select.Option value="1">강의</Select.Option>
                  <Select.Option value="2">패널 토론</Select.Option>
                  <Select.Option value="3">네트워킹</Select.Option>
                </Select>
              </Form.Control>
            )}
          />
          <Form.ErrorMessage>{form.formState.errors.session?.message}</Form.ErrorMessage>
        </Form.Item>
        <Form.Item error={!!form.formState.errors.date}>
          <Form.Label>예약 날짜</Form.Label>
          <Controller
            name="date"
            control={form.control}
            render={({ field }) => (
              <Form.Control>
                <DatePicker {...field} placeholder="예약 날짜를 선택해주세요" />
              </Form.Control>
            )}
          />
          <Form.ErrorMessage>{form.formState.errors.date?.message}</Form.ErrorMessage>
        </Form.Item>
        <Form.Item error={!!form.formState.errors.type}>
          <Form.Label>참가 유형</Form.Label>
          <Controller
            name="type"
            control={form.control}
            render={({ field }) => (
              <Form.Control>
                <RadioGroup size="small" {...field}>
                  <RadioGroup.Option value="online">온라인</RadioGroup.Option>
                  <RadioGroup.Option value="offline">오프라인</RadioGroup.Option>
                </RadioGroup>
              </Form.Control>
            )}
          />
          <Form.ErrorMessage>{form.formState.errors.type?.message}</Form.ErrorMessage>
        </Form.Item>
        <Button className="w-full" type="submit">
          제출하기
        </Button>
      </Form>
    </Card>
  );
};
