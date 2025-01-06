import { useState } from "react";

export const useRadioGroup = (defaultValue = "") => {
  const [value, setValue] = useState(defaultValue);

  return {
    value,
    onChange: setValue,
  };
};
