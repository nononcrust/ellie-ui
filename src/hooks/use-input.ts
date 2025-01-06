import { useState } from "react";

export const useInput = (defaultValue = "") => {
  const [value, setValue] = useState(defaultValue);

  const onChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    setValue(event.target.value);
  };

  const reset = () => {
    setValue(defaultValue);
  };

  const clear = () => {
    setValue("");
  };

  return {
    value,
    onChange,
    reset,
    clear,
    setValue,
  };
};
