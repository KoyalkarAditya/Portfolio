import React from "react";
import { Layout } from "./CustomLayout";
import Image from "next/image";
import Profile from "../public/images/dp.png";
export function HomePage() {
  return (
    <div className="flex justify-center items-center mt-24">
      <Layout>
        <div className="flex flex-col items-center justify-center w-full">
          <div className=" flex  justify-center flex-col items-center">
            <div>
              <Image
                src={Profile}
                alt="Profile Pic"
                className=" w-80  h-auto"
              />
            </div>
            <div className=" text-left">
              <div className=" ml-10 mb-2 font-bold font-mono text-3xl ">
                Hey, I'm Aditya! &#128075;
              </div>
              <div className="ml-10 text-gray-500 font-bold font-mono text-2xl">
                Software Engineer
              </div>
              <div className="ml-10 text-gray-500 font-semibold  font-mono text-2xl">
                Full Stack Developer
              </div>
            </div>
            <div className="mt-14 text-semibold font-mono text-lg font-semibold">
              Welcome to my personal portfolio!
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
