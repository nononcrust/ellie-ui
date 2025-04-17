"use client";

import { useSession } from "@/app/(header)/(browse)/desktop/chat/_hooks/use-session";
import { NonEmptyArray } from "@/lib/array";
import { formatToTime } from "@/lib/date";
import { objectEntries } from "@/lib/object";
import { cn, noop } from "@/lib/utils";
import { Chip, IconButton, Popover } from "@ellie-ui/core";
import { CheckIcon, HeartIcon } from "lucide-react";
import React from "react";

type ChatMessageAvatarProps = React.ComponentPropsWithRef<"img">;

export const ChatMessageAvatar = ({
  className,
  alt = "프로필 이미지",
  ...props
}: ChatMessageAvatarProps) => {
  return <img className={cn("bg-secondary size-10 rounded-2xl", className)} alt={alt} {...props} />;
};

type ChatMessageBubbleProps = React.ComponentPropsWithRef<"p"> & {
  variant: "primary" | "secondary";
  message: string;
};

const ChatMessageBubble = ({ className, variant, message, ...props }: ChatMessageBubbleProps) => {
  return (
    <p
      className={cn(
        "w-fit rounded-xl px-3 py-2 transition-colors",
        "whitespace-pre-wrap break-all text-start text-sm font-medium",
        variant === "primary" && "hover:bg-primary-hover bg-primary text-white",
        variant === "secondary" && "bg-secondary hover:bg-background-hover",
        className,
      )}
      {...props}
    >
      {message}
    </p>
  );
};

type ChatMessageEmoticonProps = React.ComponentPropsWithRef<"img">;

const ChatMessageEmoticon = ({
  className,
  alt = "이모티콘",
  ...props
}: ChatMessageEmoticonProps) => {
  return (
    <img className={cn("bg-secondary size-[7.5rem] rounded-2xl", className)} alt={alt} {...props} />
  );
};

type ChatMessageImageProps = React.ComponentPropsWithRef<"img"> & {
  width: number;
  height: number;
};

const ChatMessageImage = ({ className, alt = "이미지", ...props }: ChatMessageImageProps) => {
  return (
    <img className={cn("bg-secondary w-[17.5rem] rounded-2xl", className)} alt={alt} {...props} />
  );
};

const ChatMessageReactionIcon = {
  Check: () => (
    <div className="bg-primary flex size-4 items-center justify-center rounded-full text-white">
      <CheckIcon className="size-[0.625rem]" strokeWidth={3} />
    </div>
  ),
  Love: () => <HeartIcon className="size-4 fill-rose-500 text-rose-500" />,
};

const iconByReactionType: Record<ReactionType, React.ReactNode> = {
  check: <ChatMessageReactionIcon.Check />,
  love: <ChatMessageReactionIcon.Love />,
};

type ChatMessageReactionProps = React.ComponentPropsWithRef<"div"> & {
  type: ReactionType;
  count: number;
  variant?: "secondary" | "primaryLowOutlined";
};

const ChatMessageReaction = ({
  className,
  count,
  type,
  variant = "secondary",
  ...props
}: ChatMessageReactionProps) => {
  return (
    <Chip size="xsmall" variant={variant} className={cn("gap-1 px-1.5", className)} {...props}>
      {iconByReactionType[type]}
      {count}
    </Chip>
  );
};

type ChatMessageNameProps = React.ComponentPropsWithRef<"span"> & {
  name: string;
};

const ChatMessageName = ({ className, name, ...props }: ChatMessageNameProps) => {
  return (
    <span
      className={cn("text-subtle w-fit whitespace-nowrap text-[0.8125rem]", className)}
      {...props}
    >
      {name}
    </span>
  );
};

type ChatMessageTimeProps = React.ComponentPropsWithRef<"span"> & {
  time: string;
};

const ChatMessageTime = ({ className, time, ...props }: ChatMessageTimeProps) => {
  return (
    <span className={cn("text-subtle w-fit whitespace-nowrap text-xs", className)} {...props}>
      {formatToTime(time)}
    </span>
  );
};

type ChatMessageReadIndicatorProps = React.ComponentPropsWithRef<"span">;

const ChatMessageReadIndicator = ({ className, ...props }: ChatMessageReadIndicatorProps) => {
  return (
    <span className={cn("text-subtle w-fit text-xs", className)} {...props}>
      읽음
    </span>
  );
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
  onReactionClick?: (type: ReactionType) => void;
};

const ChatMessageBody = ({
  isMyMessage,
  chatMessage,
  onReactionClick = noop,
}: ChatMessageBodyProps) => {
  const { session } = useSession();

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

  const isMyReaction = (type: ReactionType) => {
    return chatMessage.reactions?.some(
      (reaction) => reaction.type === type && reaction.author.id === session.user.id,
    );
  };

  return (
    <Popover>
      <Popover.Trigger className="rounded-xl">{renderChatMessageBody()}</Popover.Trigger>
      <Popover.Content className="flex min-w-0 gap-0.5 rounded-xl p-1">
        {objectEntries(iconByReactionType).map(([type, icon], index) => (
          <Popover.Close asChild key={index}>
            <IconButton
              variant={isMyReaction(type) ? "secondary" : "ghost"}
              size="xsmall"
              aria-label="이모티콘"
              onClick={() => onReactionClick(type)}
            >
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

export const REACTION_TYPES = ["love", "check"] as const;
export type ReactionType = (typeof REACTION_TYPES)[number];

export type Reaction = {
  type: ReactionType;
  author: {
    id: string;
  };
};

type ChatMessageType = "text" | "image" | "emoticon";

type ChatBaseMessage = {
  id: string;
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
