"use client";

import chatEmoticon from "@/assets/images/chat-emoticon.webp";
import profileImage from "@/assets/images/nonon.png";
import { ChatMessage } from "@/components/chat/chat-message";
import { ChatMessageInput } from "@/components/chat/chat-message-input";
import { Tooltip } from "@/components/ui/tooltip";

export default function ChatPage() {
  return (
    <main className="mx-auto flex w-full max-w-xl flex-col gap-4 px-4 py-12">
      <Tooltip variant="outlined" content="ChatMessage.Avatar">
        <ChatMessage.Avatar src={profileImage.src} />
      </Tooltip>
      <Tooltip variant="outlined" content="ChatMessage.Name">
        <ChatMessage.Name name="노논" />
      </Tooltip>
      <Tooltip variant="outlined" content="ChatMessage.Time">
        <ChatMessage.Time time="2025-01-22T14:26:13Z" />
      </Tooltip>
      <Tooltip variant="outlined" content="ChatMessage.ReadIndicator">
        <ChatMessage.ReadIndicator />
      </Tooltip>
      <Tooltip variant="outlined" content="ChatMessage.Bubble">
        <ChatMessage.Bubble variant="primary" message="판매 중이신가요?" />
      </Tooltip>
      <Tooltip variant="outlined" content="ChatMessage.Emoticon">
        <ChatMessage.Emoticon src={chatEmoticon.src} />
      </Tooltip>
      <Tooltip variant="outlined" content="ChatMessage.Reaction">
        <div className="flex w-fit gap-1">
          <ChatMessage.Reaction type="love" count={1} />
          <ChatMessage.Reaction type="check" count={1} />
        </div>
      </Tooltip>
      <ChatMessageInput />
    </main>
  );
}
