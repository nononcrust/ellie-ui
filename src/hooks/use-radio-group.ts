import { useState } from "react";

export const useRadioGroup = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: setValue,
  };
};
