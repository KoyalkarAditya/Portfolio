"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { LinkArrow } from "./Icons";
import { Button } from "./ui/button";

const quote = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.2,
    },
  },
};
export function AboutPage() {
  return (
    <div className="px-72 sm:px-3  pt-28 flex flex-col  xl:px-5 xl:py-10">
      <div className="text-2xl sm:ml-5 font-mono text-[#64ffda]">
        Hello, I am
      </div>
      <div className="text-[70px] font-extrabold ml-10 mt-5 text-[#ccd6f6] ">
        Aditya.
      </div>
      <div className="flex items-center w-full gap-10 ml-16 sm:ml-0 font-mono">
        <div>
          <motion.div
            className=" ml-10  text-lg font-semibold  xl:ml-2  text-[#ccd6f6]"
            variants={quote}
            initial="initial"
            whileInView="animate"
          >
            I&apos;m a Full Stack Developer . I have Interned at{" "}
            <a
              href="https://al-connect.in"
              target="_blank"
              className="text-[#64ffda]"
            >
              Al-Connect
            </a>
            &nbsp;where I initially started as a front-end developer before
            transitioning into a full-stack role.
            <br />
            I&apos;m currently an undergraduate,pursuing Computer Science majors
            from AVN Institute of Engineering and Technology.
            <br />
          </motion.div>
          <div className="mt-10 flex justify-center items-center">
            <Button>
              Reach out
              <LinkArrow className="ml-2 max-w-3 h-3" />
            </Button>
          </div>
        </div>
        <div className=" relative ">
          <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative xl:hidden">
            <div className=" flex gap-3 translate-x-8">
              <div className=" w-32 h-32 rounded-2xl bg-blue-500 xl:w-20 xl:h-20"></div>
              <div className=" w-32 h-32 rounded-full bg-purple-500 xl:w-20 xl:h-20"></div>
            </div>
            <div className=" flex gap-3 -translate-x-8">
              <div className=" w-32 h-32 rounded-2xl bg-purple-500 xl:w-20 xl:h-20"></div>
              <div className=" w-32 h-32 rounded-full bg-blue-500 xl:w-20 xl:h-20"></div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
