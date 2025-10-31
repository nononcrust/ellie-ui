"use client";

import { useState } from "react";

export const useCheckbox = (initialChecked = false) => {
  const [checked, setChecked] = useState(initialChecked);

  const toggle = () => {
    setChecked((prev) => !prev);
  };

  const onCheckedChange = () => {
    toggle();
  };

  const register = () => ({
    checked,
    onCheckedChange,
  });

  return {
    checked,
    toggle,
    onCheckedChange,
    register,
  };
};
