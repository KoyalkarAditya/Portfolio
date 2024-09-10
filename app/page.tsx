import { AboutPage } from "@/components/AboutPage";
import { Experience } from "@/components/Experience";
import { ProjectsPage } from "@/components/ProjectsPage";
import { SkillsPage } from "@/components/SkillsPage";

export default function Home() {
  return (
    <div>
      <div id="about">
        <AboutPage />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="skills">
        <SkillsPage />
      </div>
      <div id="projects">
        <ProjectsPage />
      </div>
    </div>
  );
}
