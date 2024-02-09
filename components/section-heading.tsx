import React from 'react'

type SectionHeadingProps = {
    children: React.ReactNode
    classes?: string 
}

const SectionHeading = ({children, classes=""} : SectionHeadingProps) => {
  return (
    <h2 className={`text-3xl font-medium capitalize mb-8 ${classes}`}>{children}</h2>
  )
}

export default SectionHeading