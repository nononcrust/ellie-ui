import { useState } from "react";

export const useSwitch = (defaultValue = false) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = () => {
    setValue((prev) => !prev);
  };

  return {
    value,
    onChange,
  };
};
