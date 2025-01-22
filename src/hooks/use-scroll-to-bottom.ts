import { useEffect, useRef } from "react";

type Options = {
  scrollOnMount?: boolean;
};

const defaultOptions: Options = {
  scrollOnMount: false,
};

export const useScrollToBottom = (options: Options = defaultOptions) => {
  const scrollEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    scrollEndRef.current?.scrollIntoView();
  };

  useEffect(() => {
    if (options.scrollOnMount) {
      scrollToBottom();
    }
  }, [options.scrollOnMount]);

  return { scrollEndRef, scrollToBottom };
};
