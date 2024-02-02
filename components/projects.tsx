import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import ProjectItem from "./project-item";

type Props = {};

const Projects = (props: Props) => {
  return (
    <section className="flex flex-col items-center scroll-mt-28" id="projects">
      <SectionHeading> My Projects</SectionHeading>
      <div >
        {projectsData.map((project, indexOfProject) => (
          <React.Fragment key={indexOfProject}>
            <ProjectItem 
            {...project}
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
