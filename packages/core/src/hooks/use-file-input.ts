"use client";

import { useState } from "react";

export const useFileInput = (initialValue = null) => {
  const [value, setValue] = useState<File | null>(initialValue);

  const onChange = (value: File | null) => {
    setValue(value);
  };

  return {
    value,
    onChange,
    setValue,
  };
};
