"use client";

import useToast from "@/lib/zustand/useToast";
import { useEffect } from "react";

export default function Toaster() {
  const { state, hideToast } = useToast((state) => state);

  const { message, type, title } = state;

  useEffect(() => {
    if (!message) return;
    let t = setTimeout(() => {
      hideToast();
    }, 2000);

    return () => clearTimeout(t);
  }, [message, hideToast]);

  return (
    Boolean(message) && (
      <>
        <div>{message}</div>
        <div>{title}</div>
        <div>{type}</div>
      </>
    )
  );
}
