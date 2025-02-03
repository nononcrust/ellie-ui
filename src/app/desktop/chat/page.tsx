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
    <main className="border-border mx-auto flex w-full max-w-xl flex-1 flex-col border-x px-4">
      <div className="flex flex-1 flex-col">
        <span className="text-subtle my-4 text-center text-sm">2025년 1월 22일</span>
        <ChatMessageList list={chatMessageGroups} />
        <div ref={scrollEndRef} />
      </div>
      <div className="bg-background sticky right-0 bottom-0 left-0 flex pt-1 pb-4">
        <ChatMessageInput onSend={onSendMessage} onInput={onInput} />
      </div>
    </main>
  );
};
