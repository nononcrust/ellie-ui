"use client";

import { useState } from "react";

export const useTextField = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  const onValueChange = (value: string) => {
    setValue(value);
  };

  const reset = () => {
    setValue(initialValue);
  };

  const clear = () => {
    setValue("");
  };

  const register = () => ({
    value,
    onValueChange,
  });

  return {
    value,
    onValueChange,
    reset,
    clear,
    setValue,
    register,
  };
};
