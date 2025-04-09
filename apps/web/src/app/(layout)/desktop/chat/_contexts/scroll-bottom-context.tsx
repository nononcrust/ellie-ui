import { useScrollToBottom } from "@/hooks/use-scroll-to-bottom";
import { createContextFactory } from "@/lib/context";
import { useEffect } from "react";

type ScrollBottomContextValue = {
  scrollEndRef: React.RefObject<HTMLDivElement | null>;
  keepScrollAtBottomAsync: () => void;
  scrollToBottomAsync: () => void;
};
const [ScrollBottomContext, useScrollBottom] =
  createContextFactory<ScrollBottomContextValue>("ScrollBottom");
export { useScrollBottom };

export const ScrollBottomContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { scrollEndRef, isAtBottom, scrollToBottom } = useScrollToBottom({
    offset: 64,
  });

  const keepScrollAtBottomAsync = () => {
    if (isAtBottom()) {
      setTimeout(scrollToBottom, 0);
    }
  };

  const scrollToBottomAsync = () => {
    setTimeout(scrollToBottom, 0);
  };

  useEffect(() => {
    scrollToBottomAsync();
  });

  return (
    <ScrollBottomContext
      value={{
        scrollEndRef,
        keepScrollAtBottomAsync,
        scrollToBottomAsync,
      }}
    >
      {children}
    </ScrollBottomContext>
  );
};
