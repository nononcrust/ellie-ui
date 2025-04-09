"use client";

import { Suspense, SuspenseProps, useEffect, useState } from "react";

type ClientSideSuspenseProps = SuspenseProps;

export const ClientSideSuspense = ({ fallback, children, ...props }: ClientSideSuspenseProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return fallback;

  return (
    <Suspense fallback={fallback} {...props}>
      {children}
    </Suspense>
  );
};
