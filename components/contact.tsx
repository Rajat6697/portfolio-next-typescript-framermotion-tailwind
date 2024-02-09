import React from 'react'
import SectionHeading from './section-heading'

type Props = {}

const Contact = (props: Props) => {
  return (
    <section
    className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    id="contact">
        <SectionHeading>
            Contact Me
        </SectionHeading>
    <p>Please contact me directly at <a className='underline' href="mailto:rajatverma5338@gmail.com">rajatverma5338@gmail.com</a> or through this form</p>
    </section>
  )
}

export default Contact