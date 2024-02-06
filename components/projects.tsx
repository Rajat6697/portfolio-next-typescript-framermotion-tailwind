"use client"
import React from "react";
import SectionHeading from "./section-heading";
import { HEADER_SECTIONS, projectsData } from "@/lib/data";
import ProjectItem from "./project-item";
import UseSectionInView from "@/lib/hooks/UseSectionInView";

type Props = {};

const Projects = (props: Props) => {

  const {ref} = UseSectionInView(
  HEADER_SECTIONS.PROJECTS,
    0.4
  )

  return (
    <section ref={ref} className="flex flex-col items-center mb-28 scroll-mt-28" id="projects">
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
