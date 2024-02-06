"use client"
import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { HEADER_SECTIONS, projectsData } from "@/lib/data";
import ProjectItem from "./project-item";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

type Props = {};

const Projects = (props: Props) => {

  const { ref, inView } = useInView({
    threshold : .4
  });
  const {setActiveSection} = useActiveSectionContext()
  
  useEffect(()=> {
    console.log("inview projects", inView)
    if(inView){
      setActiveSection(HEADER_SECTIONS.PROJECTS);
    }
  }, [inView, setActiveSection])
  return (
    <section ref={ref} className="flex flex-col items-center scroll-mt-28" id="projects">
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
