import {
  ChatMessage,
  ChatMessageGroup,
  Reaction,
  ReactionType,
} from "@/components/chat/chat-message";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import { useChatMessageGroups } from "../_contexts/chat-message-group-context";
import { useSession } from "../_hooks/use-session";

type ChatMessageListProps = {
  list: ChatMessageGroup[];
};

export const ChatMessageList = ({ list }: ChatMessageListProps) => {
  const { session } = useSession();

  return (
    <ul className="flex flex-col gap-4 py-4">
      {list.map((item, index) => {
        const isMyMessage = item.author.id === session.user.id;

        return (
          <ChatMessage.Group isMyMessage={isMyMessage} key={index}>
            {!isMyMessage && <ChatMessage.Avatar src={item.author.profileImageUrl} />}
            <div className="flex flex-col gap-1">
              {!isMyMessage && <ChatMessage.Name name={item.author.name} />}
              {item.messages.map((chatMessage, index) => {
                const isLastItem = index === item.messages.length - 1;

                return (
                  <ChatMessageItem
                    key={chatMessage.id}
                    chatMessage={chatMessage}
                    isMyMessage={isMyMessage}
                    isLastItem={isLastItem}
                    createdAt={item.createdAt}
                  />
                );
              })}
            </div>
          </ChatMessage.Group>
        );
      })}
    </ul>
  );
};

type ChatMessageItemProps = {
  chatMessage: ChatMessage;
  isLastItem: boolean;
  isMyMessage: boolean;
  createdAt: string;
};

const ChatMessageItem = ({
  chatMessage,
  isLastItem,
  isMyMessage,
  createdAt,
}: ChatMessageItemProps) => {
  const reactionsRef = useRef<HTMLDivElement>(null);
  const { dispatch } = useChatMessageGroups();

  const onReactionClick = (type: ReactionType) => {
    dispatch({
      type: "toggleReaction",
      payload: {
        messageId: chatMessage.id,
        type,
      },
    });
  };

  return (
    <div className="flex flex-col">
      <div className={cn("flex gap-2", isMyMessage && "flex-row-reverse")}>
        <ChatMessage.Body
          chatMessage={chatMessage}
          isMyMessage={isMyMessage}
          onReactionClick={onReactionClick}
        />
        <div className="flex flex-col items-end justify-end">
          {chatMessage.read && <ChatMessage.ReadIndicator />}
          {(isMyMessage || isLastItem) && <ChatMessage.Time time={createdAt} />}
        </div>
      </div>
      <div ref={reactionsRef}>
        {chatMessage.reactions && (
          <ChatMessageReactions reactions={chatMessage.reactions} isMyMessage={isMyMessage} />
        )}
      </div>
    </div>
  );
};

type ChatMessageReactionsProps = {
  isMyMessage: boolean;
  reactions: Reaction[];
};

type GroupedReactions = {
  type: ReactionType;
  count: number;
}[];

const ChatMessageReactions = ({ reactions, isMyMessage }: ChatMessageReactionsProps) => {
  const { session } = useSession();

  const groupReaction = (reactions: Reaction[]): GroupedReactions => {
    return reactions.reduce<GroupedReactions>((groupedReactions, reaction) => {
      const existingReaction = groupedReactions.find(
        (groupedReaction) => groupedReaction.type === reaction.type,
      );

      if (existingReaction) {
        existingReaction.count += 1;
      } else {
        groupedReactions.push({
          type: reaction.type,
          count: 1,
        });
      }

      return groupedReactions;
    }, []);
  };

  const groupedReactions = groupReaction(reactions);

  const isContainingMyReaction = (reactionType: ReactionType) => {
    return reactions.some(
      (reaction) => reaction.type === reactionType && reaction.author.id === session.user.id,
    );
  };

  return (
    <div className={cn("mt-1 flex gap-1", isMyMessage && "justify-end")}>
      {groupedReactions.map(({ type, count }) => (
        <ChatMessage.Reaction
          key={type}
          type={type}
          count={count}
          variant={isContainingMyReaction(type) ? "primaryLow" : "secondary"}
        />
      ))}
    </div>
  );
};
