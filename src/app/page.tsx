"use client";

import profileImage2 from "@/assets/images/chat-emoticon.webp";
import profileImage from "@/assets/images/nonon.png";
import { ChatMessage, ChatMessageGroup } from "@/components/chat/chat-message";
import { ChatMessageInput } from "@/components/chat/chat-message-input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Divider } from "@/components/ui/divider";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { HammerIcon } from "lucide-react";
import { ChatMessageList } from "./desktop/chat/_components/chat-message-list";
import {
  ChatMessageGroupsContextProvider,
  useChatMessageGroups,
} from "./desktop/chat/_contexts/chat-message-group-context";
import { FollowRecommendationItem } from "./desktop/feed/_components/follow-recommendation";

export default function Home() {
  return (
    <main className="mb-16 columns-1 gap-5 px-4 lg:columns-2 xl:columns-3">
      <Card className="mb-5 break-inside-avoid">
        <span className="text-xl font-semibold">로그인</span>
        <Form className="mt-6 flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <Form.Item>
            <Form.Label>이메일</Form.Label>
            <Form.Control>
              <Input placeholder="이메일을 입력해주세요" />
            </Form.Control>
          </Form.Item>
          <Form.Item>
            <Form.Label>비밀번호</Form.Label>
            <Form.Control>
              <Input placeholder="비밀번호를 입력해주세요" />
            </Form.Control>
          </Form.Item>
          <Button className="mt-2 w-full" type="submit">
            로그인
          </Button>
        </Form>
        <div className="relative my-5">
          <Divider />
          <span className="text-subtle absolute -top-2 left-1/2 -translate-x-1/2 transform bg-white px-1 text-[13px] font-medium">
            혹은
          </span>
        </div>
        <Button variant="outlined">구글 계정으로 로그인</Button>
      </Card>
      <Card className="mb-5 break-inside-avoid">
        <ChatMessageGroupsContextProvider initialChatMessageGroups={initialChatMessageGroups}>
          <Chat />
        </ChatMessageGroupsContextProvider>
      </Card>
      <Card className="mb-5 break-inside-avoid">
        <span className="text-xl font-semibold">팔로우 추천</span>
        <ul className="mt-4 flex flex-col gap-4">
          <FollowRecommendationItem
            user={{ nickname: "노논", profileImage: profileImage.src, email: "@nononcrust.social" }}
            isFollowing={false}
          />{" "}
          <FollowRecommendationItem
            user={{ nickname: "노논", profileImage: profileImage.src, email: "@nononcrust.social" }}
            isFollowing={false}
          />{" "}
          <FollowRecommendationItem
            user={{
              nickname: "노논",
              profileImage: profileImage2.src,
              email: "@nononcrust.social",
            }}
            isFollowing
          />
        </ul>
      </Card>
      <Card className="mb-5 flex h-48 break-inside-avoid items-center justify-center">
        <UnderConstruction />
      </Card>
      <Card className="mb-5 flex h-48 break-inside-avoid items-center justify-center">
        <UnderConstruction />
      </Card>
      <Card className="mb-5 flex h-32 break-inside-avoid items-center justify-center">
        <UnderConstruction />
      </Card>
      <Card className="mb-5 flex h-48 break-inside-avoid items-center justify-center">
        <UnderConstruction />
      </Card>
      <Card className="mb-5 flex h-96 break-inside-avoid items-center justify-center">
        <UnderConstruction />
      </Card>
    </main>
  );
}

const UnderConstruction = () => {
  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-full border-3 border-gray-100">
      <HammerIcon className="text-gray-400" size={16} strokeWidth={2.5} />
    </div>
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

export const initialChatMessageGroups: ChatMessageGroup[] = [
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
