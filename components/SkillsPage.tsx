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
    <div className="flex flex-col justify-center items-center px-72 py-28">
      <div className="font-bold text-3xl font-mono text-center">Tech Stack</div>
      <div className="mt-10 grid grid-cols-4 gap-x-10 gap-y-10">
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
                className="mb-6"
              />
            </div>
            <motion.p
              className="absolute  font-serif font-medium text-lg bottom-2"
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
