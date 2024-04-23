import React from "react";
import Image from "next/image";
import Profile from "../../public/images/profile2.jpg";
import { Layout } from "@/components/CustomLayout";
export default function () {
  return (
    <div className=" px-72 flex py-28 text-dark w-full min-h-screen">
      <Layout>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center w-full">
            <div>
              <Image
                src={Profile}
                alt="Profile Pic"
                className=" w-80  h-auto"
              />
            </div>
            <div className=" ml-10 font-mono text-lg font-semibold ">
              I'm Koyalkar Aditya a Full Stack Developer from India. Currently
              working with Technologies like MERN stack , Next.js
              <br />
              I'm currently an undergraduate,pursuing Computer Science majors
              from AVN Institute of Engineering and Technology.
              <br />
            </div>
            <div></div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
