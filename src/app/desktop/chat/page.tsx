"use client";

import { ChatMessage } from "@/components/chat/chat-message";
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
    <ChatMessageGroupsContextProvider>
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
    <main className="mx-auto flex w-full max-w-xl flex-1 flex-col border-x px-4">
      <div className="flex flex-1 flex-col">
        <span className="my-4 text-center text-sm text-subtle">2025년 1월 22일</span>
        <ChatMessageList list={chatMessageGroups} />
        <div ref={scrollEndRef} />
      </div>
      <div className="sticky bottom-0 left-0 right-0 flex bg-background pb-4 pt-1">
        <ChatMessageInput onSend={onSendMessage} onInput={onInput} />
      </div>
    </main>
  );
};
