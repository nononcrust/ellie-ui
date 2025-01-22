"use client";

import { NonEmptyArray } from "@/lib/array";
import { formatToTime } from "@/lib/date";
import { cn } from "@/lib/utils";
import { CheckIcon, HeartIcon } from "lucide-react";
import { useState } from "react";
import { IconButton } from "../ui/icon-button";
import { Popover } from "../ui/popover";

type ChatMessageAvatarProps = {
  src: string;
};

const ChatMessageAvatar = ({ src }: ChatMessageAvatarProps) => {
  return <img className="size-10 rounded-2xl bg-secondary" src={src} alt="프로필 이미지" />;
};

type ChatMessageBubbleProps = {
  variant: "primary" | "secondary";
  message: string;
};

const ChatMessageBubble = ({ variant, message }: ChatMessageBubbleProps) => {
  return (
    <div
      className={cn(
        "flex rounded-xl px-3 py-2 transition-colors",
        variant === "primary" && "hover:bg-primary-hover bg-primary text-white",
        variant === "secondary" && "bg-secondary hover:bg-background-hover",
      )}
    >
      <p className="whitespace-pre-wrap text-start text-sm font-medium">{message}</p>
    </div>
  );
};

type ChatMessageEmoticonProps = {
  src: string;
  alt?: string;
};

const ChatMessageEmoticon = ({ src, alt = "이모티콘" }: ChatMessageEmoticonProps) => {
  return <img className="size-[120px] rounded-2xl bg-secondary" src={src} alt={alt} />;
};

type ChatMessageImageProps = {
  src: string;
  width: number;
  height: number;
  alt?: string;
};

const ChatMessageImage = ({ src, alt = "이미지", width, height }: ChatMessageImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const onLoad = () => {
    setIsLoaded(true);
  };

  return (
    <img
      onLoad={onLoad}
      className={cn(
        "w-[280px] rounded-2xl bg-secondary transition-opacity",
        !isLoaded && "opacity-0",
      )}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

const ChatMessageReactionIcon = {
  Check: () => (
    <div className="flex size-4 items-center justify-center rounded-full bg-primary text-white">
      <CheckIcon size={10} strokeWidth={3} />
    </div>
  ),
  Love: () => <HeartIcon className="fill-rose-500 text-rose-500" size={16} />,
};

const chatMessageReactionIcon: Record<ReactionType, React.ReactNode> = {
  check: <ChatMessageReactionIcon.Check />,
  love: <ChatMessageReactionIcon.Love />,
};

type ChatMessageReactionProps = {
  reaction: ReactionType;
  count: number;
};

const ChatMessageReaction = ({ count, reaction }: ChatMessageReactionProps) => {
  return (
    <div className="flex w-fit items-center gap-1 rounded-full bg-secondary px-1.5 py-1 text-xs font-medium">
      {chatMessageReactionIcon[reaction]}
      {count}
    </div>
  );
};

type ChatMessageNameProps = {
  name: string;
};

const ChatMessageName = ({ name }: ChatMessageNameProps) => {
  return <span className="whitespace-nowrap text-[13px] text-subtle">{name}</span>;
};

type ChatMessageTimeProps = {
  time: string;
};

const ChatMessageTime = ({ time }: ChatMessageTimeProps) => {
  return <span className="whitespace-nowrap text-xs text-subtle">{formatToTime(time)}</span>;
};

const ChatMessageReadIndicator = () => {
  return <span className="text-xs text-subtle">읽음</span>;
};

type ChatMessageGroupProps = {
  isMyMessage: boolean;
  children: React.ReactNode;
};

const ChatMessageGroup = ({ isMyMessage, children }: ChatMessageGroupProps) => {
  return <li className={cn("flex gap-2", isMyMessage && "self-end")}>{children}</li>;
};

type ChatMessageBodyProps = {
  isMyMessage: boolean;
  chatMessage: ChatMessage;
};

const ChatMessageBody = ({ isMyMessage, chatMessage }: ChatMessageBodyProps) => {
  const renderChatMessageBody = () => {
    switch (chatMessage.type) {
      case "text":
        return (
          <ChatMessage.Bubble
            variant={isMyMessage ? "primary" : "secondary"}
            message={chatMessage.content}
          />
        );
      case "image":
        return (
          <ChatMessage.Image
            src={chatMessage.src}
            width={chatMessage.width}
            height={chatMessage.height}
          />
        );
      case "emoticon":
        return <ChatMessage.Emoticon src={chatMessage.src} />;
      default:
        chatMessage satisfies never;
    }
  };

  return (
    <Popover>
      <Popover.Trigger className="rounded-xl">{renderChatMessageBody()}</Popover.Trigger>
      <Popover.Content className="flex min-w-0 rounded-xl p-1">
        {Object.values(chatMessageReactionIcon).map((icon, index) => (
          <Popover.Close asChild key={index}>
            <IconButton variant="ghost" size="xsmall" aria-label="이모티콘">
              {icon}
            </IconButton>
          </Popover.Close>
        ))}
      </Popover.Content>
    </Popover>
  );
};

export const ChatMessage = {
  Group: ChatMessageGroup,
  Body: ChatMessageBody,
  Bubble: ChatMessageBubble,
  Avatar: ChatMessageAvatar,
  Reaction: ChatMessageReaction,
  Image: ChatMessageImage,
  Emoticon: ChatMessageEmoticon,
  Name: ChatMessageName,
  Time: ChatMessageTime,
  ReadIndicator: ChatMessageReadIndicator,
};

type ReactionType = "love" | "check";

type Reaction = {
  type: ReactionType;
  count: number;
};

type ChatMessageType = "text" | "image" | "emoticon";

type ChatBaseMessage = {
  type: ChatMessageType;
  reactions?: NonEmptyArray<Reaction>;
  read?: boolean;
};

type ChatTextMessage = ChatBaseMessage & {
  type: "text";
  content: string;
};

type ChatImageMessage = ChatBaseMessage & {
  type: "image";
  src: string;
  width: number;
  height: number;
};

type ChatEmoticonMessage = ChatBaseMessage & {
  type: "emoticon";
  src: string;
};

export type ChatMessage = ChatTextMessage | ChatImageMessage | ChatEmoticonMessage;

export type ChatMessageGroup = {
  author: {
    id: string;
    name: string;
    profileImageUrl: string;
  };
  messages: ChatMessage[];
  createdAt: string;
};
