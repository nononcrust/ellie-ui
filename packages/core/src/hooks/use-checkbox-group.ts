"use client";

import { useState } from "react";

export const useCheckboxGroup = (entries: string[], initialChecked?: string[]) => {
  const [checkedItems, setCheckedItems] = useState(initialChecked ?? []);

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

  return {
    checkedItems,
    isAllChecked,
    toggleAll,
    getCheckboxProps,
    checkAll,
    uncheckAll,
    setCheckedItems,
  };
};
