import { useState } from "react";

export const useSwitch = (initialValue = false) => {
  const [checked, setChecked] = useState(initialValue);

  const onChange = () => {
    setChecked((prev) => !prev);
  };

  return {
    checked,
    onChange,
  };
};
