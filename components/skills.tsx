"use client";
import React from 'react'
import SectionHeading from './section-heading'
import { HEADER_SECTIONS, skillsData } from '@/lib/data'
import UseSectionInView from '@/lib/hooks/UseSectionInView'

type Props = {}

const Skills = (props: Props) => {

    const {ref} = UseSectionInView(
        HEADER_SECTIONS.SKILLS,
          0.75
        )
    

  return (
    
  )
}

export default Skills