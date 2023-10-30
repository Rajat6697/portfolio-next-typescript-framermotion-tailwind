import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Image from "next/image";

type Props = {};

const Projects = (props: Props) => {
  return (
    <section className="flex flex-col items-center">
      <SectionHeading> My Projects</SectionHeading>
      <div >
        {projectsData.map((project, indexOfProject) => (
          <React.Fragment key={indexOfProject}>
            <ProjectItem project={project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;

function ProjectItem({ project }: { project: any }) {
  return (
    <article className="group bg-gray-100  max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 even:pl-8 hover:bg-gray-200 transition">
      <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm-pt-10 sm:w-[50%] flex flex-col h-full group-even:ml-[18rem]">
        <h2 className="text-2xl font-semibold">{project.title}</h2>
        <p className="mt-2 text-gray-700 leading-relaxed">
          {project.description}
        </p>
        <ul className="flex flex-wrap mt-4 gap-4 mt-auto">
          {project.tags.map((tag, indexOfTag) => (
            <li
              key={indexOfTag}
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem]  text-white tracking-wider p-2 rounded-full"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <Image
        className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl 
        group-hover:scale-105
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2
        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2
        group-even:right-[initial] 
        group-even:-left-40"
        src={project.imageUrl}
        alt="project-image"
        quality={95}
      />
    </article>
  );
}
