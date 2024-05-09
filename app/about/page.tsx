import { AboutPage } from "@/components/AboutPage";
import { Experience } from "@/components/Experience";

export default function Page() {
  return (
    <div className="flex flex-col">
      <AboutPage />
      <Experience />
    </div>
  );
}
