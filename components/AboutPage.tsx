"use client";
import React from "react";
import { Layout } from "./CustomLayout";
import { motion } from "framer-motion";
import Link from "next/link";
import { LinkArrow } from "./Icons";
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
    <div className=" px-72  pt-28 flex flex-col justify-center">
      <div className=" font-bold text-3xl font-mono text-center">About Me</div>
      <div className=" text-dark w-full">
        <Layout>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center w-full">
              <div className=" relative ">
                <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
                  <div className=" flex gap-3 translate-x-8">
                    <div className=" w-32 h-32 rounded-2xl bg-blue-500"></div>
                    <div className=" w-32 h-32 rounded-full bg-purple-500 "></div>
                  </div>
                  <div className=" flex gap-3 -translate-x-8">
                    <div className=" w-32 h-32 rounded-2xl bg-purple-500"></div>
                    <div className=" w-32 h-32 rounded-full bg-blue-500"></div>
                  </div>
                  <div></div>
                </div>
              </div>
              <div>
                <motion.div
                  className=" ml-10 font-mono text-lg font-semibold  dark:text-white"
                  variants={quote}
                  initial="initial"
                  whileInView="animate"
                >
                  I&apos;m Koyalkar Aditya a Full Stack Developer from India.
                  Currently working with Technologies like MERN stack and
                  Next.js .
                  <br />
                  I'm currently an undergraduate,pursuing Computer Science
                  majors from AVN Institute of Engineering and Technology.
                  <br />
                </motion.div>
                <div className="mt-10 flex justify-center items-center">
                  <Link
                    href={"/"}
                    className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                  >
                    <span className="relative flex items-center justify-center px-4 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Available to Work
                      <LinkArrow className="ml-2 max-w-3 h-3" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
}
