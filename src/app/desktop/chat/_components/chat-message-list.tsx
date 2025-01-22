import {
  ChatMessage,
  ChatMessageGroup,
  Reaction,
  REACTION_TYPES,
} from "@/components/chat/chat-message";
import { cn } from "@/lib/utils";
import { useChatMessageGroups } from "../_hooks/use-chat-message-groups";
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
  const { toggleReaction } = useChatMessageGroups();

  return (
    <div className="flex flex-col">
      <div className={cn("flex gap-2", isMyMessage && "flex-row-reverse")}>
        <ChatMessage.Body
          chatMessage={chatMessage}
          isMyMessage={isMyMessage}
          onReactionClick={(type) => toggleReaction(chatMessage.id, type)}
        />
        <div className="flex flex-col items-end justify-end">
          {chatMessage.read && <ChatMessage.ReadIndicator />}
          {(isMyMessage || isLastItem) && <ChatMessage.Time time={createdAt} />}
        </div>
      </div>
      {chatMessage.reactions && (
        <ChatMessageReactions reactions={chatMessage.reactions} isMyMessage={isMyMessage} />
      )}
    </div>
  );
};

type ChatMessageReactionsProps = {
  isMyMessage: boolean;
  reactions: Reaction[];
};

const ChatMessageReactions = ({ reactions, isMyMessage }: ChatMessageReactionsProps) => {
  return (
    <div className={cn("mt-1 flex gap-1", isMyMessage && "justify-end")}>
      {REACTION_TYPES.map((reactionType) => {
        const count = reactions.filter((reaction) => reaction.type === reactionType).length;

        if (count === 0) return null;

        return <ChatMessage.Reaction key={reactionType} type={reactionType} count={count} />;
      })}
    </div>
  );
};
