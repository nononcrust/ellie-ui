"use client";

import { useState } from "react";

export const useDatePicker = (initialValue?: Date) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (date?: Date) => {
    setValue(date);
  };

  return {
    value,
    onChange,
  };
};
