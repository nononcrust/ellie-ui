"use client";

import { useState } from "react";

export const useTabs = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  const navigate = (value: string) => {
    setValue(value);
  };

  const onChange = navigate;

  return { value, onChange, navigate };
};
