import { DetailsOfFrontEndIntern } from "./FrontEndIntern";
import { Details } from "./WorkDetails";

export const Experience = () => {
  return (
    <div className=" mt-10 relative ">
      <div className="  font-bold text-3xl mb-16 w-full text-center">
        Experience
      </div>
      <div className=" absolute left-[15%] xl:left-[5%] h-full w-[4px] dark:bg-white bg-dark origin-top "></div>

      <ul className=" w-full flex flex-col items-center justify-center gap-5">
        <DetailsOfFrontEndIntern
          position="Front-end Developer Intern"
          time="may-2024 to present"
          company="Al-connect"
          companyLink="https://al-connect.in/"
          address="remote"
        />
        <Details
          position="Computer Science Student"
          time="2021 to 2025"
          company="AVNIET"
          companyLink="/"
          work="Pursuing a Bachelor's degree in Computer Science at AVNIET"
          address=""
        />
      </ul>
    </div>
  );
};
