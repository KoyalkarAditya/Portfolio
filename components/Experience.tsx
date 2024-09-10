"use client";
import { Layout } from "./CustomLayout";
import { ExperienceInfo } from "./ExperienceInfo";
export const Experience = () => {
  return (
    <Layout>
      <div className="mt-10 sm:mt-0 mx-40  sm:mx-0 relative">
        <div className="flex items-center w-full mb-16">
          <div className="relative text-[#ccd6f6] font-bold text-[40px] mb-8">
            Experience
            <div className="absolute top-1/2 mx-60 sm:mx-0 w-full h-[1px] bg-[#ccd6f6]"></div>
          </div>
        </div>
        <div className="mx-20 sm:mx-0 flex font-mono flex-col gap-10">
          {ExperienceInfo.map((ex, index) => (
            <div key={index}>
              <div className="flex">
                <div className=" text-xl sm:text-lg font-bold text-[#ccd6f6]">
                  {ex.role}
                </div>
                <div className="text-xl sm:text-sm font-bold text-[#64ffda]">
                  &nbsp;@ {ex.company}
                </div>
              </div>
              <div className="text-[#ccd6f6]">{ex.timeline}</div>
              <div className="flex flex-col gap-2 mt-5">
                <ul className="list-disc pl-5">
                  {ex.points.map((point, index) => (
                    <div
                      key={index}
                      className="text-[#ccd6f6] before:content-['\2022'] before:text-[#64ffda] before:mr-2 text-[17px]"
                    >
                      {point}
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
