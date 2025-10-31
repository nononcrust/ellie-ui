"use client";

import { useState } from "react";

export const useSwitch = (initialValue = false) => {
  const [checked, setChecked] = useState(initialValue);

  const onCheckedChange = () => {
    setChecked((prev) => !prev);
  };

  const register = () => ({
    checked,
    onCheckedChange,
  });

  return {
    checked,
    onCheckedChange,
    register,
  };
};
