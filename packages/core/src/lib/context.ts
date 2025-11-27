"use client";

import React from "react";

export const buildContext = <TContextValue>(name?: string) => {
  const Context = React.createContext<TContextValue | null>(null);

  const useContext = () => {
    const context = React.useContext(Context);

    if (!context) {
      throw new Error(`use${name}Context는 ${name}Context 안에서만 사용할 수 있습니다.`);
    }

    return context;
  };

  return [Context, useContext] as const;
};
