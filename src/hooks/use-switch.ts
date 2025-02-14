import { useState } from "react";

export const useSwitch = (initialValue = false) => {
  const [checked, setChecked] = useState(initialValue);

  const onCheckedChange = () => {
    setChecked((prev) => !prev);
  };

  return {
    checked,
    onCheckedChange,
  };
};
