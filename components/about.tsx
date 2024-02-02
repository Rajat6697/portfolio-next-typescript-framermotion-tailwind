"use client";
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'

type Props = {}

const About = (props: Props) => {
  return (
    <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
    initial={{opacity: 0, y:100}}
    animate={{opacity: 1, y:0}}
    transition={{delay: .275}}
    id="about"
    >
        <SectionHeading >About me</SectionHeading>
        <p className='mb-3'>Hi, I'm Rajat Verma, a <span className='font-bold'> Computer Science Engineer</span>  with a passion for crafting engaging digital experiences. With three years of front-end development expertise under my belt, I specialize in <span className='font-bold underline'>React, Next.js, and Web3 technologies.</span>  I thrive on the thrill of continuous learning, always seeking out new challenges to broaden my skillset. My journey is an ever-evolving adventure, and I'm excited to keep pushing the boundaries of what's possible in the world of web development.</p>
        <p>Beyond the code, I find joy in life's simple pleasures. When I'm not immersed in the world of technology, you can catch me gaming, binge-watching TV series, or <span className='italic'> cherishing quality time with my family.</span> These moments of relaxation and connection fuel my creativity and keep me balanced in this dynamic digital landscape.</p>
    </motion.section>
  )
}

export default About