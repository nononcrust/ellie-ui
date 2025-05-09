"use client";

import { useEffect, useState } from "react";

export const useIsScrollTop = () => {
  const [isScrollTop, setIsScrollTop] = useState(true);

  const onScroll = () => {
    setIsScrollTop(window.scrollY === 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    onScroll();
  }, []);

  return { isScrollTop, onScroll };
};
