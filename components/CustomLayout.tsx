import React from "react";

export function Layout({ children }: { children: JSX.Element }) {
  return <div className="my-20 mx-10 sm:mx-5">{children}</div>;
}
