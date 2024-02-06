"use client";
import { useActiveSectionContext } from "@/context/active-section-context";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "../types";


const UseSectionInView = (sectionName : SectionName, threshold=0.75) => {
  const { ref, inView } = useInView({
    threshold: threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    console.log("inview projects", inView);
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick,sectionName]);
  return {ref};
};

export default UseSectionInView;
