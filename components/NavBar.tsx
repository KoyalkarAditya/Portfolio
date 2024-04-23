import Link from "next/link";
import { CustomLink } from "./CustomLink";
import { GithubIcon, LinkedInIcon, SunIcon, TwitterIcon } from "./Icons";
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
        <a href={"/"} target={"_blank"}>
          <TwitterIcon className=" w-7 mx-4 transform hover:-translate-y-1" />
        </a>
        <a href={"/"} target={"_blank"}>
          <GithubIcon className="w-7 mx-4 transform hover:-translate-y-1" />
        </a>
        <a href={"/"} target={"_blank"}>
          <LinkedInIcon className="w-7 mx-4 transform hover:-translate-y-1" />
        </a>
        <a href={"/"} target={"_blank"}>
          <SunIcon className="w-7 mx-4 transform hover:-translate-y-1" />
        </a>
      </nav>
    </div>
  );
}
