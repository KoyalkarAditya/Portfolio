"use client";
import Project1 from "./../public/images/project1.png";
import Project2 from "./../public/images/project2.png";
import Project3 from "./../public/images/twitter.png";
import { GithubIcon } from "./Icons";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import _ from "lodash";
export const ProjectsPage = () => {
  const [hoveredProjectIndex, setHoveredProjectIndex] = useState<null | number>(
    null
  );
  const handleMouseLeave = useCallback(() => {
    setHoveredProjectIndex(null);
  }, [hoveredProjectIndex]);
  const handleMouseEnter = useCallback(
    (index: number) => {
      setHoveredProjectIndex(index);
    },
    [hoveredProjectIndex]
  );
  return (
    <div className="py-10 px-12 grid grid-cols-3 md:grid-cols-1 gap-5 text-black">
      {projects.map((project, index) => (
        <motion.div
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          className="bg-slate-200 min-h-80 rounded-xl p-3 relative cursor-pointer"
          key={index}
          whileHover={{ scale: 1.05 }}
        >
          <Link href={project.link} target="_blank">
            <AnimatePresence>
              {hoveredProjectIndex === index ? (
                <motion.div
                  key="summary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 p-2 text-base font-mono font-medium bg-slate-200 rounded-xl"
                >
                  {project.summary}
                  <Link href={project.github} target="_blank">
                    <GithubIcon key={"github"} className=" w-8 h-8 " />
                  </Link>
                </motion.div>
              ) : (
                <motion.div
                  key="details"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="h-fit w-full flex items-center justify-center">
                    <Image
                      src={project.image}
                      alt="Project Image"
                      height={600}
                      width={400}
                      className="w-full h-64 rounded-lg sm:h-full"
                    />
                  </div>
                  <div className="px-3">
                    <div>
                      <h2 className="my-2 w-full text-left font-semibold text-xl">
                        {project.title}
                        {" : "}
                        <span className="text-slate-700 text-lg">
                          {project.type}
                        </span>
                      </h2>
                    </div>
                  </div>
                  <div className="flex flex-wrap">
                    {project.stack.split(",").map((value, i) => (
                      <Button text={value} key={i} />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

const projects: Project[] = [
  {
    title: "Paisa Pal",
    summary:
      "PaisaPal is a banking app which enables user to transfer money to other users.It also provides on-ramp and off-ramp functionalities for seamless bank integrations, allowing users to transfer funds in and out of their bank accounts with ease. Utilizes Turborepo for efficient build and deployment processes, enhancing development workflow and project scalability.",
    image: Project1,
    link: "https://github.com/KoyalkarAditya/PaisaPal",
    github: "https://github.com/KoyalkarAditya/PaisaPal",
    type: "Payment Application",
    stack:
      "NextJS,TailwindCSS,TypeScript,Postgres,prisma,webSockets,TurboRepo,Zod,express",
  },
  {
    title: "Twitter/X Clone",
    summary:
      " Developed a Twitter clone that allows users to do CRUD operations on tweets, follow other users.Implemented a GraphQL API for efficient and flexible data querying, enhancing the performance and scalability of the application. Integrated Redis for caching frequently accessed data and implementing rate limiting to enhance performance andsecurity.Implemented a user recommendation system to suggest users to follow, enhancing user engagement and networkgrowth.Utilized AWS for deployment, used AWS S3 for storing user profile pictures securely.",
    image: Project3,
    link: "https://github.com/KoyalkarAditya/twitter-X",
    github: "https://github.com/KoyalkarAditya/twitter-X",
    type: "Social Media Application",
    stack: "NextJS,Graphql,TailwindCSS,TypeScript,Postgres,prisma,TurboRepo",
  },
  {
    title: "Medium",
    summary:
      "Medium is a blogging website which allows user to do CRUD operations on their blogs. Hono.js library of wrangler is used here for writing backend server which is hosted on cloudflare workers, connection-pooling is used for maintaining postgress requests.",
    image: Project2,
    link: "https://blogging-website.adityakoyalkar.online/",
    github: "https://github.com/KoyalkarAditya/Blogging-Website1",
    type: "Blogging Website",
    stack:
      "React,TailwindCSS,Typescript,postgres,zod,Cloudflare,Prisma,express",
  },
];

interface Project {
  title: string;
  image: any;
  description?: string;
  stack: string;
  summary: string;
  github: string;
  link: string;
  type: string;
}

function Button({ text }: { text: string }) {
  return (
    <button
      type="button"
      className="text-green-700 border border-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg xl:rounded-md text-xs px-2 py-1 xl:px-1 xl:py-1 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:focus:ring-green-800"
    >
      {text}
    </button>
  );
}
