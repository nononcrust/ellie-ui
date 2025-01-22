import chatEmoticon from "@/assets/images/chat-emoticon.webp";
import chatImage from "@/assets/images/chat-image.jpeg";
import profileImage from "@/assets/images/nonon.png";
import { ChatMessageGroup } from "@/components/chat/chat-message";
import { createContextFactory } from "@/lib/context";

type ChatMessageGroupsContextValue = {
  chatMessageGroups: ChatMessageGroup[];
  setChatMessageGroups: React.Dispatch<React.SetStateAction<ChatMessageGroup[]>>;
};

const [ChatMessageGroupsContextProvider, useChatMessageGroupContext] =
  createContextFactory<ChatMessageGroupsContextValue>("ChatMessageGroups");
export { ChatMessageGroupsContextProvider, useChatMessageGroupContext };

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
