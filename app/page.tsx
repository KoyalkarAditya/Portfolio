import { AboutPage } from "@/components/AboutPage";
import { HomePage } from "@/components/HomePage";
import { ProjectsPage } from "@/components/ProjectsPage";
import { SkillsPage } from "@/components/SkillsPage";

export default function Home() {
  return (
    <div>
      <HomePage />
      <AboutPage />
      <SkillsPage />
      <ProjectsPage />
    </div>
  );
}
