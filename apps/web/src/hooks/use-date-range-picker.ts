import { useState } from "react";
import { DateRange } from "react-day-picker";

export const useDateRangePicker = (initialValue?: DateRange) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (dateRange?: DateRange) => {
    setValue(dateRange);
  };

  return {
    value,
    onChange,
  };
};
