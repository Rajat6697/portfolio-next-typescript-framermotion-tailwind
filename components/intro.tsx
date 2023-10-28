'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const Intro = (props: Props) => {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className='relative'>
          <motion.div
          initial={{opacity : 0, scale: 0}}
          animate={{opacity : 1, scale : 1}}
          transition={{type: "tween", duration: .25}}
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
           duration: .8}}

          >👋</motion.span>
        </div>
          
      </div>

    </section>
  )
}

export default Intro