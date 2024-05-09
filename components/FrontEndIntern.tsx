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
      <div className="flex flex-col gap-1 w-full max-w-[65%]">
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
            Leading frontend initiatives tailored for the startup, creating
            agile and user-centric interfaces.
          </li>
          <li>
            Empowering the startup with dynamic web experiences using React,MUI
            igniting growth and invocation
          </li>
          <li>
            Enhancing user experience by utilizing React Countup for animated
            numerical displays and React Syntax Highlighter for effective code
            presentation
          </li>
        </ul>
      </div>
    </li>
  );
};
