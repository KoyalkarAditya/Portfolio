"use client";
import Link from "next/link";
import { CustomLink } from "./CustomLink";
import {
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
import { motion } from "framer-motion";
import { useThemeSwitcher } from "./hooks/useThemeSwitcher";
import React, { useState } from "react";
import { CustomMobileLink } from "./CustomMobileLink";
import { useSwitcher } from "./hooks/useSwitcher";
export function NavBar() {
  let { theme, setTheme } = useThemeSwitcher();
  const { isOpen, setIsOpen } = useSwitcher();
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="font-mono w-full px-32 pt-8 font-medium flex items-center justify-between relative">
      <button
        className=" flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark transition-all delay-200 ease-out dark:bg-light h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark transition-all delay-200 ease-out dark:bg-light h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark transition-all delay-200 ease-out dark:bg-light h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <div className=" w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="<Home/>" className=" mr-10" />
          <CustomLink href="/about" title="<About/>" className=" mr-10" />
          <CustomLink href="/skills" title="<Skills/>" className=" mr-10" />
          <CustomLink href="/projects" title="<Projects/>" className=" mr-10" />
        </nav>
        <nav className="flex  gap-3 items-center justify-center flex-wrap">
          <motion.a
            href={"/"}
            target={"_blank"}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <TwitterIcon className="min-w-8 max-w-8" />
          </motion.a>
          <motion.a
            href={"/"}
            target={"_blank"}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon className="min-w-8 max-w-8" />
          </motion.a>
          <motion.a
            href={"/"}
            target={"_blank"}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon className="min-w-8 max-w-8" />
          </motion.a>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <button
              onClick={() => {
                setTheme(theme == "dark" ? "light" : "dark");
              }}
            >
              {theme === "dark" ? (
                <MoonIcon className={"fill-dark min-w-8 max-w-8"} />
              ) : (
                <SunIcon className={"fill-dark min-w-8 max-w-8"} />
              )}
            </button>
          </motion.div>
        </nav>
      </div>
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="z-10  min-w-[30vw]   text-white flex flex-col justify-between  items-center  fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-dark/90 dark:bg-light/75 backdrop-blur-md py-32 px-10  rounded-3xl   dark:text-black"
        >
          <nav className=" flex flex-col text-center gap-10 justify-center items-center">
            <CustomMobileLink
              href="/"
              title="<Home/>"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="<About/>"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/skills"
              title="<Skills/>"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="<Projects/>"
              className=""
              toggle={handleClick}
            />
          </nav>
          <nav className="flex mt-3  gap-5 items-center justify-center  flex-wrap">
            <motion.a
              href={"/"}
              target={"_blank"}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <TwitterIcon className="min-w-8 max-w-8" />
            </motion.a>
            <motion.a
              href={"/"}
              target={"_blank"}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon className="min-w-8 max-w-8" />
            </motion.a>
            <motion.a
              href={"/"}
              target={"_blank"}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedInIcon className="min-w-8 max-w-8" />
            </motion.a>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <button
                onClick={() => {
                  setTheme(theme == "dark" ? "light" : "dark");
                }}
              >
                {theme === "dark" ? (
                  <MoonIcon className={"fill-dark min-w-8 max-w-8"} />
                ) : (
                  <SunIcon className={"fill-dark min-w-8 max-w-8"} />
                )}
              </button>
            </motion.div>
          </nav>
        </motion.div>
      ) : null}
    </div>
  );
}
