import { AboutPage } from "@/components/AboutPage";
import { Experience } from "@/components/Experience";
import { HomePage } from "@/components/HomePage";
import { ProjectsPage } from "@/components/ProjectsPage";
import { SkillsPage } from "@/components/SkillsPage";

export default function Home() {
  return (
    <div>
      <div id="home">
        <HomePage />
      </div>
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
