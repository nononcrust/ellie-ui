"use client";

import profileImage from "@/assets/images/nonon.png";
import {
  ChatMessage,
  ChatMessageGroup,
  Reaction,
  ReactionType,
} from "@/components/chat/chat-message";
import { isNonEmptyArray, NonEmptyArray } from "@/lib/array";
import { useChatMessageGroupContext } from "../_contexts/chat-message-group-context";
import { useSession } from "./use-session";

export const useChatMessageGroups = () => {
  const { chatMessageGroups, setChatMessageGroups } = useChatMessageGroupContext();
  const { session } = useSession();

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

  const toggleReaction = (messageId: string, type: ReactionType) => {
    const updatedChatMessageGroups: ChatMessageGroup[] = chatMessageGroups.map((group) => {
      if (!group.messages.some((message) => message.id === messageId)) {
        return group;
      }

      return {
        ...group,
        messages: group.messages.map((message) => {
          if (message.id !== messageId) {
            return message;
          }

          const newReaction = {
            type,
            author: {
              id: session.user.id,
            },
          };

          // 리액션이 존재하지 않는 경우
          if (!message.reactions) {
            const newReactions: NonEmptyArray<Reaction> = [newReaction];

            return {
              ...message,
              reactions: newReactions,
            };
          }

          const reactions = message.reactions.filter((reaction) => reaction.type === type);

          // 리액션이 이미 존재하는 경우
          if (reactions.length > 0) {
            // 내가 누른 리액션이 있는 경우
            if (reactions.some((reaction) => reaction.author.id === session.user.id)) {
              const filteredReactions = message.reactions.filter(
                (reaction) => reaction.author.id !== session.user.id,
              );

              if (isNonEmptyArray(filteredReactions)) {
                return {
                  ...message,
                  reactions: filteredReactions,
                };
              } else {
                return {
                  ...message,
                };
              }
            } else {
              // 내가 누른 리액션이 없는 경우
              const newReactions: NonEmptyArray<Reaction> = [...message.reactions, newReaction];

              return {
                ...message,
                reactions: newReactions,
              };
            }
          }

          return message;
        }),
      };
    });

    setChatMessageGroups(updatedChatMessageGroups);
  };

  return {
    chatMessageGroups,
    toggleReaction,
    chat,
  };
};
