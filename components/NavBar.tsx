"use client";
import Link from "next/link";
import { CustomLink } from "./CustomLink";
import { GithubIcon, LinkedInIcon, SunIcon, TwitterIcon } from "./Icons";
import { motion } from "framer-motion";
export function NavBar() {
  return (
    <div className="font-mono w-full px-32 pt-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="<Home/>" className=" mr-10" />
        <CustomLink href="/about" title="<About/>" className=" mr-10" />
        <CustomLink href="/skills" title="<Skills/>" className=" mr-10" />
        <CustomLink href="/projects" title="<Projects/>" className=" mr-10" />
      </nav>
      <nav className="flex  items-center justify-center flex-wrap">
        <motion.a
          href={"/"}
          target={"_blank"}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <TwitterIcon className=" w-8 mx-4" />
        </motion.a>
        <motion.a
          href={"/"}
          target={"_blank"}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <GithubIcon className="w-8 mx-4" />
        </motion.a>
        <motion.a
          href={"/"}
          target={"_blank"}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <LinkedInIcon className="w-8 mx-4" />
        </motion.a>
        <motion.a
          href={"/"}
          target={"_blank"}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <SunIcon className="w-8 mx-4" />
        </motion.a>
      </nav>
    </div>
  );
}
