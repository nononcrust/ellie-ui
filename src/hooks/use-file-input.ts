import { useState } from "react";

export const useFileInput = (defaultValue = null) => {
  const [value, setValue] = useState<File | null>(defaultValue);

  const onChange = (value: File | null) => {
    setValue(value);
  };

  return {
    value,
    onChange,
    setValue,
  };
};
