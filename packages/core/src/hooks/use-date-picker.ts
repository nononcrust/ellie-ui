"use client";

import { useState } from "react";

export const useDatePicker = (initialValue?: Date) => {
  const [value, setValue] = useState(initialValue);

  const onValueChange = (date?: Date) => {
    setValue(date);
  };

  const register = () => ({
    value,
    onValueChange,
  });

  return {
    value,
    onValueChange,
    register,
  };
};
