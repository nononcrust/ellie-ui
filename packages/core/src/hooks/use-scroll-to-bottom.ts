"use client";

import { useEffect, useRef } from "react";

type Options = {
  scrollOnMount?: boolean;
  offset?: number;
};

const defaultOptions = {
  scrollOnMount: false,
  offset: 0,
};

export const useScrollToBottom = (rawOptions?: Options) => {
  const options = {
    ...defaultOptions,
    ...rawOptions,
  };

  const scrollEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    scrollEndRef.current?.scrollIntoView();
  };

  const isAtBottom = () => {
    const scrollEnd = scrollEndRef.current;
    if (!scrollEnd) {
      return false;
    }

    const scrollEndRect = scrollEnd.getBoundingClientRect();
    return scrollEndRect.top <= window.innerHeight - options.offset;
  };

  useEffect(() => {
    if (options.scrollOnMount) {
      scrollToBottom();
    }
  }, [options.scrollOnMount]);

  return { scrollEndRef, scrollToBottom, isAtBottom };
};
