"use client";

import { useState } from "react";

export const usePopover = (initialIsOpen = false) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  const onOpenChange = (isOpen: boolean) => {
    setIsOpen(isOpen);
  };

  const register = () => ({
    open: isOpen,
    onOpenChange,
  });

  return {
    isOpen,
    open,
    close,
    toggle,
    onOpenChange,
    register,
  };
};
