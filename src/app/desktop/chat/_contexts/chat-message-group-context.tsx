import profileImage from "@/assets/images/nonon.png";
import {
  ChatMessage,
  ChatMessageGroup,
  Reaction,
  ReactionType,
} from "@/components/chat/chat-message";
import { isNonEmptyArray, NonEmptyArray } from "@/lib/array";
import { createContextFactory } from "@/lib/context";
import { useReducer } from "react";
import { useSession } from "../_hooks/use-session";

type Action =
  | {
      type: "chat";
      payload: {
        chatMessage: ChatMessage;
      };
    }
  | {
      type: "toggleReaction";
      payload: {
        messageId: string;
        type: ReactionType;
      };
    };

type ChatMessageGroupsContextValue = {
  chatMessageGroups: ChatMessageGroup[];
  dispatch: (action: Action) => void;
};

const [ChatMessageGroupsContext, useChatMessageGroups] =
  createContextFactory<ChatMessageGroupsContextValue>("ChatMessageGroups");
export { ChatMessageGroupsContext, useChatMessageGroups };

type ChatMessageGroupsContextProviderProps = {
  children: React.ReactNode;
  initialChatMessageGroups: ChatMessageGroup[];
};

export const ChatMessageGroupsContextProvider = ({
  initialChatMessageGroups,
  children,
}: ChatMessageGroupsContextProviderProps) => {
  const { session } = useSession();

  const reducer = (chatMessageGroups: ChatMessageGroup[], action: Action) => {
    switch (action.type) {
      case "chat":
        const lastGroup = chatMessageGroups[chatMessageGroups.length - 1];

        if (lastGroup && lastGroup.author.id === session.user.id) {
          return [
            ...chatMessageGroups.slice(0, -1),
            {
              ...lastGroup,
              messages: [...lastGroup.messages, action.payload.chatMessage],
            },
          ];
        } else {
          return [
            ...chatMessageGroups,
            {
              author: {
                id: session.user.id,
                name: session.user.name,
                profileImageUrl: profileImage.src,
              },
              messages: [action.payload.chatMessage],
              createdAt: new Date().toISOString(),
            },
          ];
        }

      case "toggleReaction":
        return chatMessageGroups.map((group) => {
          if (!group.messages.some((message) => message.id === action.payload.messageId)) {
            return group;
          }

          return {
            ...group,
            messages: group.messages.map((message) => {
              if (message.id !== action.payload.messageId) {
                return message;
              }

              const newReaction = {
                type: action.payload.type,
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

              const reactions = message.reactions.filter(
                (reaction) => reaction.type === action.payload.type,
              );

              const reactionExists = reactions.some(
                (reaction) => reaction.author.id === session.user.id,
              );

              // 내가 누른 리액션이 없는 경우
              if (!reactionExists) {
                const newReactions: NonEmptyArray<Reaction> = [...message.reactions, newReaction];

                return {
                  ...message,
                  reactions: newReactions,
                };
              }

              // 내가 누른 리액션이 있는 경우
              if (reactionExists) {
                const filteredReactions = message.reactions.filter(
                  (reaction) =>
                    reaction.author.id !== session.user.id || reaction.type !== action.payload.type,
                );

                if (isNonEmptyArray(filteredReactions)) {
                  return {
                    ...message,
                    reactions: filteredReactions,
                  };
                } else {
                  return {
                    ...message,
                    reactions: undefined,
                  };
                }
              }

              return message;
            }),
          };
        });
    }
  };

  const [chatMessageGroups, dispatch] = useReducer(reducer, initialChatMessageGroups);

  return (
    <ChatMessageGroupsContext.Provider value={{ chatMessageGroups, dispatch }}>
      {children}
    </ChatMessageGroupsContext.Provider>
  );
};
