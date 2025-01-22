import { ChatMessage, ChatMessageGroup } from "@/components/chat/chat-message";
import { cn } from "@/lib/utils";

type ChatMessageListProps = {
  list: ChatMessageGroup[];
};

export const ChatMessageList = ({ list }: ChatMessageListProps) => {
  return (
    <ul className="flex flex-col gap-4 py-4">
      {list.map((item, index) => {
        const isMyMessage = item.author.id === "2";

        return (
          <ChatMessage.Group isMyMessage={isMyMessage} key={index}>
            {!isMyMessage && <ChatMessage.Avatar src={item.author.profileImageUrl} />}
            <div className="flex flex-col gap-1">
              {!isMyMessage && <ChatMessage.Name name={item.author.name} />}
              {item.messages.map((chatMessage, index) => {
                const isLastItem = index === item.messages.length - 1;

                return (
                  <div key={index} className="flex flex-col">
                    <div className={cn("flex gap-2", isMyMessage && "flex-row-reverse")}>
                      <ChatMessage.Body chatMessage={chatMessage} isMyMessage={isMyMessage} />
                      <div className="flex flex-col items-end justify-end">
                        {chatMessage.read && <ChatMessage.ReadIndicator />}
                        {(isMyMessage || isLastItem) && <ChatMessage.Time time={item.createdAt} />}
                      </div>
                    </div>
                    {chatMessage.reactions && (
                      <div className="mt-1 flex gap-1">
                        {chatMessage.reactions.map((reaction, index) => (
                          <ChatMessage.Reaction
                            key={index}
                            reaction={reaction.type}
                            count={reaction.count}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </ChatMessage.Group>
        );
      })}
    </ul>
  );
};
