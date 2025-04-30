"use client";

import { ChatMessage } from "@/components/chat/chat-message";
import { cn, noop } from "@/lib/utils";
import { useInput } from "@ellie-ui/core/hooks";
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
        className="bg-background-100 outline-hidden placeholder:text-placeholder flex w-full resize-none rounded-3xl py-3 pl-4 pr-12 text-sm font-medium"
        rows={1}
        value={input.value}
        onChange={onInputChange}
        onKeyDown={onKeyDown}
      />
      <button
        className={cn(
          "bg-primary absolute bottom-2 right-2 flex size-7 items-center justify-center rounded-full text-white transition-colors",
          "md:hover-bg-primary",
          "disabled:opacity-50",
        )}
        onClick={sendChatMessage}
        disabled={input.value.length === 0}
        aria-label="메시지 전송"
      >
        <SendHorizontalIcon className="size-[0.875rem]" />
      </button>
    </div>
  );
};
