"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

type CustomLinkType = {
  href: string;
  title: string;
  className: string;
  toggle: () => void;
};
export const CustomMobileLink = ({
  href,
  title,
  className,
  toggle,
}: CustomLinkType) => {
  const pathname = usePathname();
  const router = useRouter();
  const handleClick = () => {
    router.push(href);
    toggle();
  };
  return (
    <button
      onClick={handleClick}
      className={`${className} relative group pb-1`}
    >
      {title}
      <span
        className={`h-[1px] inline-block w-0 bg-white dark:bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300  ${
          pathname == href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};
