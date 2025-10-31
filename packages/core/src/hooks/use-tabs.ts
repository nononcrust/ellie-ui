"use client";

import { useState } from "react";

export const useTabs = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  const onValueChange = (value: string) => {
    setValue(value);
  };

  const register = () => ({
    value,
    onValueChange,
  });

  return { value, setValue, onValueChange, register };
};
