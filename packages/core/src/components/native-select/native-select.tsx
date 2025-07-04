import React from "react";
import { cn } from "../../lib/utils";
import { SelectChevronDownIcon, selectStyle } from "../select";

type NativeSelectProps = React.ComponentPropsWithRef<"select"> & {
  placeholder?: string;
};

const NativeSelect = ({
  className,
  children,
  "aria-invalid": ariaInvalid,
  placeholder,
  ...props
}: NativeSelectProps) => {
  return (
    <div className="relative">
      <select
        className={cn(
          selectStyle.base,
          ariaInvalid && selectStyle.invalid,
          "has-[option[disabled]:checked]:text-placeholder peer cursor-pointer appearance-none",
          className,
        )}
        aria-invalid={ariaInvalid}
        {...props}
      >
        {placeholder && (
          <option value="" disabled selected>
            {placeholder}
          </option>
        )}
        {children}
      </select>
      <SelectChevronDownIcon className="peer-disabled:opacity-50" />
    </div>
  );
};

export { NativeSelect };
