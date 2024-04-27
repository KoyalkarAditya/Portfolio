"use client";
import React, { useState } from "react";
import { data } from "./SkillImages";
import { animate, motion } from "framer-motion";
import Image from "next/image";

export function SkillsPage() {
  const [hoveredSkillIndex, setHoveredSkillIndex] = useState<null | number>(
    null
  );
  const AnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => {
      return {
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.05 * index,
        },
      };
    },
  };

  return (
    <div className="flex flex-col justify-center items-center px-72 py-28 xl:px-0 xl:py-10">
      <div className="font-bold text-3xl font-mono text-center xl:text-2xl">
        Tech Stack
      </div>
      <div className="mt-10 grid grid-cols-4 gap-x-10 gap-y-10 xl:grid-cols-2 xl:gap-x-5 xl:gap-y-2">
        {data.map((skill, index) => (
          <motion.div
            key={index}
            className=" flex flex-col items-center relative"
            onMouseEnter={() => setHoveredSkillIndex(index)}
            onMouseLeave={() => setHoveredSkillIndex(null)}
            variants={AnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            style={{ height: "170px" }}
          >
            <div className="rounded-2xl bg-slate-200 p-5 w-full flex justify-center dark:bg-slate-950">
              <Image
                alt={skill.name}
                src={skill.logo}
                width={100}
                height={100}
                className="mb-6 xl:w-30 xl:h-30"
              />
            </div>
            <motion.p
              className="absolute  font-serif font-medium text-lg bottom-2 xl:text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredSkillIndex === index ? 1 : 0 }}
            >
              {skill.name}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
