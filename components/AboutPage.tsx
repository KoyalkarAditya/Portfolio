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
    <div className="px-72  pt-28 flex flex-col justify-center xl:px-5 xl:py-10">
      <div className=" text-dark w-full">
        <Layout>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center w-full">
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
              <div>
                <motion.div
                  className=" ml-10 font-mono text-lg font-semibold  dark:text-white xl:ml-2 xl:text-sm"
                  variants={quote}
                  initial="initial"
                  whileInView="animate"
                >
                  Hey, I&apos;m <span className="name text-2xl">Aditya</span>!
                  &#128075; , a Full Stack Developer from India. Currently
                  working with Technologies like MERN stack and Next.js .
                  <br />
                  I&apos;m currently an undergraduate,pursuing Computer Science
                  majors from AVN Institute of Engineering and Technology.
                  <br />
                </motion.div>
                <div className="mt-10 flex justify-center items-center">
                  <Link
                    href={"/"}
                    className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                  >
                    <span className="relative flex items-center justify-center px-4 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 xl:px-2 xl:py-2">
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
