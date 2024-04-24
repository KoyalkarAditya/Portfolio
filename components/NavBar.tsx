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
export function NavBar() {
  let { theme, setTheme } = useThemeSwitcher();
  return (
    <div className="font-mono w-full px-32 pt-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="<Home/>" className=" mr-10" />
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
  );
}
