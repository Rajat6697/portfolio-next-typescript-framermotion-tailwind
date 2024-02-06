"use client"
import React, { createContext, useContext, useState } from 'react';
import { HEADER_SECTIONS, links } from '@/lib/data';

type SectionName = (typeof links)[number]["name"];

type ActiveSectionContextProviderProps = {
    children : React.ReactNode;
}

type ActiveSectionContextType ={
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick : number;
  setTimeOfLastClick : React.Dispatch<React.SetStateAction<number>>;
}

 const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

const ActiveSectionContextProvider = ({children} :ActiveSectionContextProviderProps) => {
  const [activeSection, setActiveSection] = useState<SectionName>(HEADER_SECTIONS.HOME)
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);
  return (
    <ActiveSectionContext.Provider
    value={{
      activeSection,
      setActiveSection,
      timeOfLastClick,
      setTimeOfLastClick,
    }}
    
    >
      {children}
    </ActiveSectionContext.Provider>
  )
}

export default ActiveSectionContextProvider


export const useActiveSectionContext =()=> {
  const context = useContext(ActiveSectionContext);
  if(context === null){
    throw new Error("useActiveSectionContext must be used within a ActiveSectionContextProvider")
  }
  else return context
}