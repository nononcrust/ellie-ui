"use client";

import chatEmoticon from "@/assets/images/chat-emoticon.webp";
import chatImage from "@/assets/images/chat-image.jpeg";
import profileImage from "@/assets/images/nonon.png";
import { ChatMessage, ChatMessageGroup } from "@/components/chat/chat-message";
import { ChatMessageInput } from "../../../components/chat/chat-message-input";
import { ChatMessageList } from "./_components/chat-message-list";
import {
  ChatMessageGroupsContextProvider,
  useChatMessageGroups,
} from "./_contexts/chat-message-group-context";
import { ScrollBottomContextProvider, useScrollBottom } from "./_contexts/scroll-bottom-context";

export const dynamic = "force-dynamic";

export default function ChatPage() {
  return (
    <ChatMessageGroupsContextProvider initialChatMessageGroups={initialChatMessageGroups}>
      <ScrollBottomContextProvider>
        <Chat />
      </ScrollBottomContextProvider>
    </ChatMessageGroupsContextProvider>
  );
}

const Chat = () => {
  const { scrollEndRef, keepScrollAtBottomAsync, scrollToBottomAsync } = useScrollBottom();

  const { chatMessageGroups, dispatch } = useChatMessageGroups();

  const onSendMessage = (chatMessage: ChatMessage) => {
    dispatch({
      type: "chat",
      payload: {
        chatMessage,
      },
    });

    scrollToBottomAsync();
  };

  const onInput = () => {
    keepScrollAtBottomAsync();
  };

  return (
    <main className="border-border mx-auto flex w-full max-w-xl flex-1 flex-col border-x px-4">
      <div className="flex flex-1 flex-col">
        <span className="text-subtle my-4 text-center text-sm">2025년 1월 22일</span>
        <div className="py-4">
          <ChatMessageList list={chatMessageGroups} />
        </div>
        <div ref={scrollEndRef} />
      </div>
      <div className="bg-background sticky right-0 bottom-0 left-0 flex pt-1 pb-4">
        <ChatMessageInput onSend={onSendMessage} onInput={onInput} />
      </div>
    </main>
  );
};

const chatImageMessage = {
  id: "123123",
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
        id: "1",
        type: "text",
        content: "판매 중이신가요?",
        reactions: [
          {
            type: "check",
            author: {
              id: "1",
            },
          },
          {
            type: "love",
            author: {
              id: "1",
            },
          },
        ],
      },
      {
        id: "2",
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
        id: "3",
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
        id: "4",
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
            author: {
              id: "1",
            },
          },
          {
            type: "love",
            author: {
              id: "1",
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
        content: "넵 가능합니다",
      },
      {
        id: "6",
        type: "text",
        content:
          "fwafeawfwafeawfwafeawfwafeawfwafeawfwafeawfwafeawfwafeawfwafeawfwafeawfwafeawfwafeawfwafeawfwafeawfwafeawfwafeaw",
        read: true,
      },
    ],
    createdAt: "2025-01-22T14:26:13Z",
  },
];
