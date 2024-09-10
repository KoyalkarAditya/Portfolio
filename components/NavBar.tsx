"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { GithubIcon, LinkedInIcon, TwitterIcon } from "./Icons";
import { motion } from "framer-motion";

import React from "react";
import { Menu } from "lucide-react";
import PageLinks from "./PageLinks";
export function NavBar() {
  return (
    <div className="w-ful pt-8 font-medium ">
      <div className="w-full px-32 flex md:hidden justify-between items-center">
        <PageLinks />
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
        </nav>
      </div>
      <div className="hidden md:flex  justify-end px-10">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Menu />
          </DropdownMenuTrigger>
          <DropdownMenuContent className=" m-2 bg-white text-black flex flex-col gap-3">
            <PageLinks className="flex flex-col justify-center gap-2" />
            <DropdownMenuSeparator />
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
            </nav>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
