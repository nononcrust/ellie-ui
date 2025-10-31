"use client";

import { useState } from "react";

export const useFileInput = (initialValue = null) => {
  const [value, setValue] = useState<File | null>(initialValue);

  const onValueChange = (value: File | null) => {
    setValue(value);
  };

  const register = () => ({
    value,
    onValueChange,
  });

  return {
    value,
    onValueChange,
    setValue,
    register,
  };
};
