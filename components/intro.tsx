'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import {BsArrowRight, BsGithub, BsLinkedin} from 'react-icons/bs'
import {HiDownload} from 'react-icons/hi'

type Props = {}

const Intro = (props: Props) => {
  return (
    <section id="home" className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-28'>
      <div className="flex items-center justify-center">
        <div className='relative'>
          <motion.div
          initial={{opacity : 0, scale: 0}}
          animate={{opacity : 1, scale : 1}}
          transition={{type: "tween", duration: .13}}
          >

          <Image src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?auto=format&fit=crop&q=80&w=870&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="person image"
          width="192"
          height="192"
          quality="95"
          priority={true}
          className='h-24 w-24 object-cover rounded-full border-[0.35rem] border-white shadow-xl'
          />
          </motion.div>

          <motion.span className='absolute bottom-0 right-0 text-4xl '
           initial={{opacity : 0, scale: 0}}
           animate={{opacity : 1, scale : 1}}
           transition={{type: "spring", 
           stiffness : 125,
           delay : .1,
           duration: .275}}

          >👋</motion.span>
        </div>
      </div>
      <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
      initial={{opacity : 0, y : 100}}
      animate={{opacity : 1, y : 0}}
      transition={{type: "tween" , duration : .1}}
      >
          <span>Hello, I am <span className='font-bold'>
          Rajat Verma.
            </span> I am a  <span className='font-bold'> front-end developer </span>with <span className='font-bold'> 3 years</span> of experience. I enjoy <span className='italic underline'>
              building websites and apps.  </span> My focus is  <span className='font-bold underline'> React, Next.js and Web3.</span></span>
        </motion.h1>

        <motion.div className='flex flex-col sm:flex-row items-center justify-center px-4 text-lg font-medium gap-4'
        initial={{opacity : 0,  y: 100}}
        animate={{opacity : 1,  y: 0}}
        transition={{delay: .3}}
        >
          <Link href="#contact" className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover-bg-gray-950 active:scale-105 transition' >Contact me here<BsArrowRight
          className='opacity-70 group-hover:translate-x-1 transition'
          /></Link>
          <a className='group bg-white text-gray-700 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110  hover:scale-110 hover-bg-white-950 active:scale-105 transition border border-black/10' href="/CV.pdf" download>Download CV <HiDownload
            className='opacity-70 group-hover:translate-x-1 transition'
          /></a>
          <a className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full hover:scale-110' href="https://www.linkedin.com/in/rajat-verma-1289031b6/" target="_blank">
            <BsLinkedin/>
          </a>
          <a className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full hover:scale-110' href="https://github.com/Rajat6697" target="_blank">
            <BsGithub/>
          </a>
        </motion.div>
          
    </section>
  )
}

export default Intro