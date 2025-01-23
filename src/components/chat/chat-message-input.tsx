"use client";

import { ChatMessage } from "@/components/chat/chat-message";
import { useInput } from "@/hooks/use-input";
import { cn, noop } from "@/lib/utils";
import { isMobile } from "is-mobile";
import { SendHorizontalIcon } from "lucide-react";
import { nanoid } from "nanoid";
import React, { useRef } from "react";

type ChatMessageInputProps = {
  onSend?: (chatMessage: ChatMessage) => void;
  onInput?: () => void;
};

export const ChatMessageInput = ({ onSend = noop, onInput = noop }: ChatMessageInputProps) => {
  const input = useInput();
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const resizeInput = () => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  };

  const sendChatMessage = () => {
    if (input.value.length === 0) return;

    onSend({
      id: nanoid(),
      type: "text",
      content: input.value,
    });

    input.clear();
    setTimeout(resizeInput, 0);
  };

  const onInputChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    input.onChange(event);
    resizeInput();
    onInput();
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement> = (event) => {
    if (event.nativeEvent.isComposing) return;

    if (!isMobile() && event.key === "Enter") {
      if (!event.shiftKey) {
        event.preventDefault();
        sendChatMessage();
      }
    }
  };

  return (
    <div className="relative w-full">
      <textarea
        ref={inputRef}
        placeholder="메시지 보내기"
        className="flex w-full resize-none rounded-3xl bg-background-100 py-3 pl-4 pr-12 text-sm font-medium outline-none placeholder:text-placeholder"
        rows={1}
        value={input.value}
        onChange={onInputChange}
        onKeyDown={onKeyDown}
      />
      <button
        className={cn(
          "absolute bottom-2 right-2 flex size-7 items-center justify-center rounded-full bg-primary text-white transition-colors",
          "md:hover-bg-primary",
          "disabled:opacity-50",
        )}
        onClick={sendChatMessage}
        disabled={input.value.length === 0}
      >
        <SendHorizontalIcon size={14} />
      </button>
    </div>
  );
};
