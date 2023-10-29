import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'

type Props = {}

const Projects = (props: Props) => {
  return (
    <section className='flex '>
        <SectionHeading>Projects</SectionHeading>
        {
            projectsData.map((project, indexOfProject)=> (
                <React.Fragment key={indexOfProject}>
                <ProjectItem project={project} />
                </React.Fragment>
            ))
        }
    </section>
  )
}

export default Projects


function ProjectItem({project } : {project : any}){
return (

    <article>
        {project.title}
    </article>
        )
    }