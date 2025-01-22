import chatEmoticon from "@/assets/images/chat-emoticon.webp";
import chatImage from "@/assets/images/chat-image.jpeg";
import profileImage from "@/assets/images/nonon.png";
import { ChatMessage, ChatMessageGroup } from "@/components/chat/chat-message";
import { useState } from "react";
import { useSession } from "./use-session";

export const useChatMessageGroups = () => {
  const { session } = useSession();

  const [chatMessageGroups, setChatMessageGroups] =
    useState<ChatMessageGroup[]>(initialChatMessageGroups);

  const chat = (chatMessage: ChatMessage) => {
    const lastGroup = chatMessageGroups[chatMessageGroups.length - 1];

    if (lastGroup && lastGroup.author.id === session.user.id) {
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
  };

  return {
    chatMessageGroups,
    chat,
  };
};

const chatImageMessage = {
  type: "image",
  src: chatImage.src,
  width: 1290,
  height: 2211,
} as const;

const initialChatMessageGroups: ChatMessageGroup[] = [
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
