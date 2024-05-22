type DetailsType = {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
};
export const DetailsOfFrontEndIntern = ({
  position,
  company,
  companyLink,
  time,
  address,
}: DetailsType) => {
  return (
    <li className="w-full flex flex-col items-center justify-center">
      <div className="flex flex-col gap-1 w-full max-w-[65%] xl:min-w-[80%]">
        <h3 className="capitalize font-bold text-2xl">
          {position} &nbsp;
          <a
            target="__blank"
            href={companyLink}
            className="text-sky-500 dark:text-sky-300"
          >
            @{company}
          </a>
        </h3>
        <span className="dark:text-slate-300 capitalize font-medium text-dark/75">
          {time} {address && `| ${address}`}
        </span>

        <ul className="list-disc list-inside font-mono text-lg text-left font-medium">
          <li>
            Led frontend initiatives tailored for the startup, creating agile
            and user-centric interfaces.
          </li>
          <li>
            Worked with RESTful APIs to fetch and display data dynamically,
            enhancing the interactivity and functionality of web applications.
          </li>
          <li>
            Implemented responsive design principles to optimize web
            applications for various devices and screen sizes, significantly
            improving mobile user engagement.
          </li>
        </ul>
      </div>
    </li>
  );
};
