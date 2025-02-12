import { useState } from "react";

export const useTabs = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  const onValueChange = (value: string) => {
    setValue(value);
  };

  return { value, onValueChange };
};
