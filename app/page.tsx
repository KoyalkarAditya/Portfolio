import { AboutPage } from "@/components/AboutPage";
import { Experience } from "@/components/Experience";
import { HomePage } from "@/components/HomePage";
import { ProjectsPage } from "@/components/ProjectsPage";
import { SkillsPage } from "@/components/SkillsPage";

export default function Home() {
  return (
    <div>
      <AboutPage />
      <Experience />
      <SkillsPage />
      <ProjectsPage />
    </div>
  );
}
