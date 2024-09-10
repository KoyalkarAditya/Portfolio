"use client";
import Link from "next/link";

type CustomLinkType = {
  href: string;
  title: string;
  className?: string;
};

export const CustomLink = ({ href, title, className }: CustomLinkType) => {
  return (
    <Link href={href} className={`${className} relative group pb-1`}>
      {title}
      <span
        className={`h-[1px] inline-block w-0 bg-foreground absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300`}
      >
        &nbsp;
      </span>
    </Link>
  );
};
