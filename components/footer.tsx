import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='mb-10 px-4 text-center text-gray-500'>
        <small className='mb-2 text-xs block'>
        &copy; 2024 Rajat Verma. All rights reserved.
        </small>
        <p className='text-xs'>
            <span className='font-semibold'>About this website:</span>built with React, Next.js(App Router and Server Actions), Typescipt, Tailwind CSS, Framer Motion etc
        </p>
    </footer>
  )
}

export default Footer