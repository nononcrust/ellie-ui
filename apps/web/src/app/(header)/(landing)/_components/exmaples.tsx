"use client";

import profileImage2 from "@/assets/images/chat-emoticon.webp";
import profileImage3 from "@/assets/images/default-profile-image.svg";
import profileImage from "@/assets/images/nonon.png";
import { ChatMessage, ChatMessageGroup } from "@/components/chat/chat-message";
import { ChatMessageInput } from "@/components/chat/chat-message-input";
import { TransitionMount } from "@/components/shared/transition-mount";
import { link } from "@/configs/link";
import {
  Avatar,
  Badge,
  Button,
  Card,
  ChipButton,
  DatePicker,
  Divider,
  Form,
  IconButton,
  Input,
  RadioGroup,
  Select,
  Switch,
  Tag,
} from "@ellie-ui/core";
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
import { useId } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { ChatMessageList } from "../../(browse)/desktop/chat/_components/chat-message-list";
import {
  ChatMessageGroupsContextProvider,
  useChatMessageGroups,
} from "../../(browse)/desktop/chat/_contexts/chat-message-group-context";
import { FollowRecommendationItem } from "../../(browse)/desktop/feed/_components/follow-recommendation";
import { SearchInput } from "../../(browse)/desktop/feed/_components/search-input";

export const Examples = () => {
  return (
    <section className="columns-1 gap-5 lg:columns-2 xl:columns-3">
      <TransitionMount delay={0.6} x={-16} y={-16}>
        <LoginForm />
      </TransitionMount>
      <TransitionMount delay={0.6} x={-16} y={16}>
        <ChatRoom />
      </TransitionMount>
      <TransitionMount delay={0.6} y={-16}>
        <FollowRecommendation />
      </TransitionMount>
      <TransitionMount delay={0.6}>
        <SearchMenu />
      </TransitionMount>
      <TransitionMount delay={0.6} y={16}>
        <Settings />
      </TransitionMount>
      <TransitionMount delay={0.6} x={16} y={-16}>
        <Profile />
      </TransitionMount>
      <TransitionMount delay={0.6} x={16}>
        <StoreDetail />
      </TransitionMount>
      <TransitionMount delay={0.6} x={16} y={16}>
        <ReservationForm />
      </TransitionMount>
    </section>
  );
};

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
              className="text-subtle absolute right-1 top-1/2 -translate-y-1/2"
            >
              <EyeOffIcon className="size-[0.875rem]" />
            </IconButton>
          </div>
        </Form.Item>
        <Button className="mt-2 w-full" type="submit">
          로그인
        </Button>
      </Form>
      <div className="relative my-5">
        <Divider />
        <span className="text-subtle bg-background absolute -top-2 left-1/2 -translate-x-1/2 transform px-1 text-[0.8125rem] font-medium">
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
            <SlidersHorizontalIcon className="size-3" />
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
  const titleId = useId();
  const descriptionId = useId();

  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex flex-col">
        <span id={titleId} className="text-[0.9375rem] font-semibold">
          {title}
        </span>
        <span id={descriptionId} className="text-subtle text-[0.8125rem] font-medium">
          {description}
        </span>
      </div>
      <Switch defaultChecked={enabled} aria-labelledby={titleId} aria-describedby={descriptionId} />
    </div>
  );
};

const Profile = () => {
  return (
    <Card className="mb-5 break-inside-avoid">
      <div className="flex w-full justify-between">
        <div className="flex gap-1">
          <Avatar className="size-14 rounded-lg">
            <Avatar.Image src={profileImage.src} alt="프로필 이미지" />
            <Avatar.Fallback />
          </Avatar>
          <div className="ml-2">
            <span className="flex items-center gap-2">
              <span className="text-lg font-semibold leading-none">신상호</span>
              <Tag variant="info">멤버</Tag>
            </span>
            <span className="text-subtle text-sm font-medium">Frontend Engineer</span>
            <div className="mt-2 flex flex-col gap-0.5">
              <span className="text-subtle flex items-center gap-2 text-sm">
                <MapPinIcon className="size-4" /> 경기도 수지구 동천동
              </span>
              <Link
                className="text-subtle hover:text-main flex items-center gap-2 text-sm transition-colors"
                href={`mailto:${link.email}`}
              >
                <MailIcon className="size-4" /> {link.email}
              </Link>
              <Link
                className="text-subtle hover:text-main flex items-center gap-2 text-sm transition-colors"
                href={link.github}
              >
                <LinkIcon className="size-4" /> {link.github}
              </Link>
            </div>
          </div>
        </div>
        <IconButton aria-label="메일 보내기" size="small" variant="outlined" asChild>
          <Link href={`mailto:${link.email}`}>
            <MailIcon className="size-4" />
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
              <EllipsisIcon className="size-4" />
            </IconButton>
          </div>
          <span className="text-xl font-semibold">우리들약국</span>
          <div className="mt-1 flex items-center gap-2">
            <span className="text-primary text-sm font-semibold">영업중</span>
            <span className="text-subtle text-[0.8125rem] font-medium">(수) 09:00 ~ 21:00</span>
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
              <PhoneIcon className="size-[0.875rem]" />
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
    type: "online",
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
