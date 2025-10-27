"use client";

import { useState } from "react";
import { formatter, NumberFormatType } from "../lib/format";

export const useInput = (options?: { initialValue?: string; format?: NumberFormatType }) => {
  const [value, setValue] = useState(options?.initialValue ?? "");

  const onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    if (!options || !options.format) {
      setValue(event.target.value);
      return;
    }

    setValue(formatter[options.format](event.target.value));
  };

  const reset = () => {
    setValue(options?.initialValue ?? "");
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
