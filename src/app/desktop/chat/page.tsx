"use client";

import chatEmoticon from "@/assets/images/chat-emoticon.webp";
import chatImage from "@/assets/images/chat-image.jpeg";
import profileImage from "@/assets/images/nonon.png";
import { ChatMessage, ChatMessageGroup } from "@/components/chat/chat-message";
import { useEffect, useRef, useState } from "react";
import { ChatMessageInput } from "./_components/chat-message-input";
import { ChatMessageList } from "./_components/chat-message-list";

export default function ChatPage() {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    setIsInitialized(true);
  }, []);

  const scrollEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    setTimeout(() => {
      scrollEndRef.current?.scrollIntoView();
    }, 0);
  };

  const [chatMessageGroups, setChatMessageGroups] =
    useState<ChatMessageGroup[]>(initialChatMessageGroups);

  const chat = (chatMessage: ChatMessage) => {
    const lastGroup = chatMessageGroups[chatMessageGroups.length - 1];

    if (lastGroup && lastGroup.author.id === "2") {
      setChatMessageGroups([
        ...chatMessageGroups.slice(0, -1),
        {
          ...lastGroup,
          messages: [...lastGroup.messages, chatMessage],
        },
      ]);
    } else {
      setChatMessageGroups([
        ...chatMessageGroups,
        {
          author: { id: "2", name: "노논", profileImageUrl: profileImage.src },
          messages: [chatMessage],
          createdAt: new Date().toISOString(),
        },
      ]);
    }

    scrollToBottom();
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  if (!isInitialized) return null;

  return (
    <main className="mx-auto flex w-full max-w-xl flex-1 flex-col border-x px-4">
      <div className="flex flex-1 flex-col">
        <span className="my-4 text-center text-sm text-subtle">2025년 1월 22일</span>
        <ChatMessageList list={chatMessageGroups} />
        <div ref={scrollEndRef} />
      </div>
      <div className="sticky bottom-0 left-0 right-0 flex bg-background pb-4 pt-1">
        <ChatMessageInput onSend={chat} onLineBreak={scrollToBottom} />
      </div>
    </main>
  );
}

const chatImageMessage = {
  type: "image",
  src: chatImage.src,
  width: 1290,
  height: 2211,
} as const;

export const initialChatMessageGroups: ChatMessageGroup[] = [
  {
    author: {
      id: "1",
      name: "노논",
      profileImageUrl: profileImage.src,
    },
    messages: [
      {
        type: "text",
        content: "판매 중이신가요?",
        reactions: [
          {
            type: "check",
            count: 1,
          },
          {
            type: "love",
            count: 1,
          },
        ],
      },
      {
        type: "emoticon",
        src: chatEmoticon.src,
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
        type: "text",
        content: "넵",
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
        type: "text",
        content: "박스랑 중고 고려해서 8만원에 판매 가능하신가요??",
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
        ...chatImageMessage,
        reactions: [
          {
            type: "check",
            count: 1,
          },
          {
            type: "love",
            count: 1,
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
        type: "text",
        content: "넵 가능합니다",
      },
      {
        type: "text",
        content:
          "fwafeawfwafeawfwafeawfwafeawfwafeawfwafeawfwafeawfwafeawfwafeawfwafeawfwafeawfwafeawfwafeawfwafeawfwafeawfwafeaw",
        read: true,
      },
    ],
    createdAt: "2025-01-22T14:26:13Z",
  },
];
