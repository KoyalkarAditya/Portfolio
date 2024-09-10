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
    <div className="flex flex-col justify-center items-center  ">
      <div className="flex ml-5 items-center w-full mb-16">
        <div className="relative text-[#ccd6f6] font-bold text-[40px] mb-8 mx-44 sm:mx-5">
          Tech Stack
          <div className="absolute top-1/2 mx-60 sm:mx-0 w-full h-[1px] bg-[#ccd6f6] sm:hidden"></div>
        </div>
      </div>
      <div className=" grid grid-cols-5 px-40 sm:px-5  gap-x-10 gap-y-10 sm:grid-cols-3 xl:gap-x-5 xl:gap-y-2 xl:p-3">
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
            <div className="rounded-2xl bg-slate-200 p-5 w-full flex justify-center  border-2 ">
              <Image
                alt={skill.name}
                src={skill.logo}
                width={100}
                height={100}
                className="mb-6 sm:w-25 sm:h-25"
              />
            </div>
            <motion.p
              className="absolute  font-serif text-black font-medium text-lg bottom-2 xl:text-sm"
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
