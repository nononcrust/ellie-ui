"use client";

import { useState } from "react";

export const useTextField = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  const onChange = (value: string) => {
    setValue(value);
  };

  const reset = () => {
    setValue(initialValue);
  };

  const clear = () => {
    setValue("");
  };

  return {
    value,
    onChange,
    reset,
    clear,
    setValue,
  };
};
