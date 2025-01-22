"use client";

import { ChatMessageInput } from "@/app/desktop/chat/_components/chat-message-input";
import chatEmoticon from "@/assets/images/chat-emoticon.webp";
import chatImage from "@/assets/images/chat-image.jpeg";
import profileImage from "@/assets/images/nonon.png";
import { ChatMessage } from "@/components/chat/chat-message";

export default function ChatPage() {
  return (
    <main className="mx-auto flex w-full max-w-xl flex-col gap-4 px-4">
      <ChatMessage.Avatar src={profileImage.src} />
      <ChatMessage.Name name="노논" />
      <ChatMessage.Time time="2025-01-22T14:26:13Z" />
      <ChatMessage.ReadIndicator />
      <ChatMessage.Bubble variant="primary" message="판매 중이신가요?" />
      <ChatMessage.Emoticon src={chatEmoticon.src} />
      <div className="flex gap-1">
        <ChatMessage.Reaction reaction="love" count={1} />
        <ChatMessage.Reaction reaction="check" count={1} />
      </div>
      <ChatMessageInput />
      <ChatMessage.Image src={chatImage.src} width={1290} height={2211} />
    </main>
  );
}
