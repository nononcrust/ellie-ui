"use client";

import { ChatMessage, ChatMessageGroup } from "@/components/chat/chat-message";
import { useScrollToBottom } from "@/hooks/use-scroll-to-bottom";
import { useState } from "react";
import { ChatMessageInput } from "../../../components/chat/chat-message-input";
import { ChatMessageList } from "./_components/chat-message-list";
import {
  ChatMessageGroupsContextProvider,
  initialChatMessageGroups,
} from "./_contexts/chat-message-group-context";
import { useChatMessageGroups } from "./_hooks/use-chat-message-groups";

export const dynamic = "force-dynamic";

export default function ChatPage() {
  const [chatMessageGroups, setChatMessageGroups] =
    useState<ChatMessageGroup[]>(initialChatMessageGroups);

  return (
    <ChatMessageGroupsContextProvider value={{ chatMessageGroups, setChatMessageGroups }}>
      <Chat />
    </ChatMessageGroupsContextProvider>
  );
}

const Chat = () => {
  const { scrollEndRef, scrollToBottom } = useScrollToBottom({
    scrollOnMount: true,
  });

  const { chatMessageGroups, chat } = useChatMessageGroups();

  const onSendMessage = (chatMessage: ChatMessage) => {
    chat(chatMessage);
    setTimeout(scrollToBottom, 0);
  };

  return (
    <main className="mx-auto flex w-full max-w-xl flex-1 flex-col border-x px-4">
      <div className="flex flex-1 flex-col">
        <span className="my-4 text-center text-sm text-subtle">2025년 1월 22일</span>
        <ChatMessageList list={chatMessageGroups} />
        <div ref={scrollEndRef} />
      </div>
      <div className="sticky bottom-0 left-0 right-0 flex bg-background pb-4 pt-1">
        <ChatMessageInput
          onSend={onSendMessage}
          onLineBreak={() => setTimeout(scrollToBottom, 0)}
        />
      </div>
    </main>
  );
};
