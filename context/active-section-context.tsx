import React, { useState } from 'react';
import { HEADER_SECTIONS, links } from '@/lib/data';

type SectionName = (typeof links)[number]["name"];

const ActiveSectionContextProvider = ({children}) => {
  const [activeSection, setActiveSection] = useState<SectionName>(HEADER_SECTIONS.HOME)

  return children
}

export default ActiveSectionContextProvider