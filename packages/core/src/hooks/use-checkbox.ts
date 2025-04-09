import { useState } from "react";

export const useCheckbox = (initialChecked = false) => {
  const [checked, setChecked] = useState(initialChecked);

  const toggle = () => {
    setChecked((prev) => !prev);
  };

  const onChange = () => {
    toggle();
  };

  return {
    checked,
    toggle,
    onChange,
  };
};
