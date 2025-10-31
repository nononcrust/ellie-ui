"use client";

import { useState } from "react";
import { DateRange } from "react-day-picker";

export const useDateRangePicker = (initialValue?: DateRange) => {
  const [value, setValue] = useState(initialValue);

  const onValueChange = (dateRange?: DateRange) => {
    setValue(dateRange);
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
