type DetailsType = {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
};
export const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
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
        <p className="font-mono text-lg text-left font-medium">{work}</p>
      </div>
    </li>
  );
};
