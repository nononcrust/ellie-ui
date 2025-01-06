import { useState } from "react";

export const useCheckbox = (defaultChecked = false) => {
  const [checked, setChecked] = useState(defaultChecked);

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
