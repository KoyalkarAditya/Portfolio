export const ExperienceInfo: ExperienceInfoType = [
  {
    company: "Al-Connect",
    role: "Full Stack Developer Intern",
    timeline: "Aug 2024 to Sep-2024",
    points: [
      "Architected and implemented the  dashboard to fetch consultant profiles , enabling users to seamlessly browse available consultants for managing and booking  their appointments",
      "Integrated payment gateway(phonepe), ensuring secure and seamless transactions for users",
      " Developed an AI-powered resume enhancement application that to analyze and optimize resumes",
    ],
    link: "https://al-connect.in",
  },
  {
    company: "Al-Connect",
    role: "Frontend Developer Intern",
    timeline: "May 2024 to July-2024",
    points: [
      "Developed and Maintained code for Al-Connect primarily using JavaScript, and React.js",
      "Introduced and implemented a CI/CD pipeline, reducing deployment times and minimizing downtime.",
      "Integrated an analytics tool (Google Analytics) to track user behavior and gather actionable insights",
    ],
    link: "https://al-connect.in",
  },
];

type ExperienceInfoType = {
  company: string;
  role: string;
  timeline: string;
  points: string[];
  link: string;
}[];
