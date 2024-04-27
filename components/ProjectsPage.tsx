import React from "react";
import Image from "next/image";
import Link from "next/link";
import Project1 from "./../public/images/project1.png";
import Project2 from "./../public/images/project2.png";
import PortfolioImage from "./../public/images/portfolioImg.png";
import { GithubIcon } from "./Icons";
export function ProjectsPage() {
  return (
    <div className=" px-72  pt-28 flex flex-col justify-center dark:text-black xl:px-0 xl:py-10 xl:w-full">
      <div className=" font-bold text-3xl font-mono text-center dark:text-white xl:text-xl">
        Projects
      </div>
      <div className=" w-full mb-16 flex flex-col items-center justify-center">
        <div className=" mt-10 grid grid-cols-2  gap-24 xl:gap-5">
          <div className="col-span-2">
            <ProjectOne
              title="Paisa Pal"
              summary="PaisaPal is a banking app which enables user to transfer money to other users.It also provides on-ramp and off-ramp functionalities for seamless bank integrations, allowing users to transfer funds in and out of their bank accounts with ease. Utilizes Turborepo for efficient build and deployment processes, enhancing development workflow and project scalability."
              img={Project1}
              link="https://github.com/KoyalkarAditya/PaisaPal"
              github="https://github.com/KoyalkarAditya/PaisaPal"
              type="Payment Application"
            />
          </div>
          <div className=" col-span-2">
            <ProjectTwo
              title="Blogging Website"
              summary="Medium is a blogging website which allows user to do CRUD operations on their blogs. Hono.js library of wrangler is used here for writing backend server which is hosted on cloudflare workers, connection-pooling is used for maintaining postgress requests."
              img={Project2}
              link="https://medium-blogging-website-5aahstc27-koyalkar-adityas-projects.vercel.app/signup"
              github="https://github.com/KoyalkarAditya/Blogging-Website1"
              type=""
            />
          </div>
          <div className=" col-span-2">
            <ProjectThree
              title="Portfolio"
              summary="The goal of this project is to design and develop a personal portfolio website that effectively highlights my skills, projects, and professional experience."
              img={PortfolioImage}
              link="https://github.com/KoyalkarAditya/PaisaPal"
              github="https://github.com/KoyalkarAditya/PaisaPal"
              type="Koyalkar Aditya"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

type ProjectType = {
  type: string;
  title: string;
  summary: string;
  img: any;
  link: string;
  github: string;
};
const ProjectOne = ({
  type,
  title,
  summary,
  img,
  link,
  github,
}: ProjectType) => {
  return (
    <div className=" p-8 w-full flex items-center justify-between  rounded-3xl border-2 border-dark  border-solid  bg-light shadow-2xl xl:p-5 xl:flex-col">
      <Link
        href={link}
        target={"_blank"}
        className=" w-1/2 cursor-pointer overflow-hidden rounded-lg xl:w-full"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className=" w-1/2 flex flex-col items-start justify-between pl-6 xl:w-full">
        <Link href={link} target={"_blank"}>
          <h2 className=" my-2 w-full  text-left text-4xl font-bold  xl:text-2xl">
            {title}
          </h2>
        </Link>
        <span className=" text-slate-500 font-medium text-xl xl:text-sm">
          {type}
        </span>
        <p className=" font-mono my-2 font-medium  xl:text-sm">{summary}</p>
        <div className=" mt-2 flex items-center ">
          <Link className=" mr-5" href={github} target={"_blank"}>
            <GithubIcon className="min-w-10 mb-1" />
          </Link>
          <Link
            href={link}
            target={"_blank"}
            className=" text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900 xl:px-0 xl:py-0 xl:w-20 xl:h-15"
          >
            Visit the Project
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-1 mt-2 xl:grid-cols-2">
          <Button text="NextJs" />
          <Button text="TailwindCSS" />
          <Button text="TypeScript" />
          <Button text="Postgres" />
          <Button text="Zod" />
          <Button text="Prisma" />
          <Button text="TurboRepo" />
          <Button text="Express" />
        </div>
      </div>
    </div>
  );
};
const ProjectTwo = ({
  type,
  title,
  summary,
  img,
  link,
  github,
}: ProjectType) => {
  return (
    <div className=" p-8 w-full flex items-center justify-between relative  rounded-3xl border-2 border-dark  border-solid  bg-light shadow-2xl xl:flex-col">
      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg xl:w-full"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className=" w-1/2 flex flex-col items-start justify-between pl-6 xl:w-full">
        <Link href={link} target={"_blank"}>
          <h2 className=" my-2 w-full  text-left text-4xl font-bold xl:text-2xl">
            {title}
          </h2>
        </Link>
        <span className=" text-slate-500 font-medium text-xl xl:text-sm">
          {type}
        </span>
        <p className=" font-mono my-2 font-medium xl:text-sm ">{summary}</p>
        <div className=" mt-2 flex items-center ">
          <Link className=" mr-5" href={github} target={"_blank"}>
            <GithubIcon className="min-w-10 mb-1" />
          </Link>
          <Link
            href={link}
            target={"_blank"}
            className=" text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900  xl:px-0 xl:py-0 xl:w-20 xl:h-15"
          >
            Visit the Project
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-1 mt-2 xl:grid-cols-2">
          <Button text="React" />
          <Button text="TailwindCSS" />
          <Button text="TypeScript" />
          <Button text="Postgres" />
          <Button text="Zod" />
          <Button text="Prisma" />
          <Button text="Cloudflare" />
          <Button text="Express" />
          <Button text="JWT" />
        </div>
      </div>
    </div>
  );
};
const ProjectThree = ({
  type,
  title,
  summary,
  img,
  link,
  github,
}: ProjectType) => {
  return (
    <div className=" p-8 w-full flex items-center justify-between relative  rounded-3xl border-2 border-dark  border-solid  bg-light shadow-2xl xl:flex-col">
      <Link
        href={link}
        target={"_blank"}
        className=" w-1/2 cursor-pointer overflow-hidden rounded-lg xl:w-full"
      >
        <Image src={img} alt={title} className="w-full h-auto xl:text-xl " />
      </Link>
      <div className=" w-1/2 flex flex-col items-start justify-between pl-6 xl:w-full">
        <Link href={link} target={"_blank"}>
          <h2 className=" my-2 w-full  text-left text-4xl font-bold xl:text-2xl ">
            {title}
          </h2>
        </Link>
        <span className=" text-slate-500 font-medium text-xl xl:text-sm">
          {type}
        </span>
        <p className=" font-mono my-2 font-medium  xl:text-sm">{summary}</p>
        <div className=" mt-2 flex items-center ">
          <Link className=" mr-5" href={github} target={"_blank"}>
            <GithubIcon className="min-w-10 mb-1" />
          </Link>
          <Link
            href={link}
            target={"_blank"}
            className=" text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900  xl:px-0 xl:py-0 xl:w-20 xl:h-15"
          >
            Visit the Project
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-1 mt-2 xl:grid-cols-2">
          <Button text="NextJs" />
          <Button text="TailwindCSS" />
          <Button text="TypeScript" />
        </div>
      </div>
    </div>
  );
};
function Button({ text }: { text: string }) {
  return (
    <button
      type="button"
      className="text-green-700  border border-green-700  focus:ring-4 focus:outline-none focus:ring-green-300 font-medium  rounded-lg xl:rounded-md text-xs px-3 py-2  xl:px-1 xl:py-1 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500  dark:focus:ring-green-800"
    >
      {text}
    </button>
  );
}
