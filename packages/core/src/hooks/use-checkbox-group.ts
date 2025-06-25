"use client";

import { useState } from "react";

type CheckboxGroupValue = string[] | readonly string[];

export const useCheckboxGroup = ({
  entries,
  initialEntries,
}: {
  entries: CheckboxGroupValue;
  initialEntries?: CheckboxGroupValue;
}) => {
  const [checkedItems, setCheckedItems] = useState<CheckboxGroupValue>(initialEntries ?? []);

  const getCheckboxProps = (value: string) => {
    const checked = checkedItems.includes(value);

    const onChange = (checked: boolean) => {
      setCheckedItems((prev) =>
        checked ? [...prev, value] : prev.filter((item) => item !== value),
      );
    };

    return { checked, onChange };
  };

  const checkAll = () => {
    setCheckedItems(entries);
  };

  const uncheckAll = () => {
    setCheckedItems([]);
  };

  const toggleAll = () => {
    if (checkedItems.length === entries.length) {
      uncheckAll();
    } else {
      checkAll();
    }
  };

  const isAllChecked = checkedItems.length === entries.length;

  const value = checkedItems;
  const onChange = setCheckedItems;
  const allValues = entries;

  return {
    value,
    checkedItems,
    allValues,
    isAllChecked,
    toggleAll,
    getCheckboxProps,
    checkAll,
    uncheckAll,
    setCheckedItems,
    onChange,
  };
};
