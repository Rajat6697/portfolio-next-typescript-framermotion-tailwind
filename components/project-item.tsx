// Import necessary dependencies from React, Next.js, framer-motion, and data file
"use client"
import React, { useRef } from "react";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";

// Define the type for the project props based on data structure
type ProjectProps = (typeof projectsData)[number];

// Define a functional component named ProjectItem to display project information
function ProjectItem({ title, description, tags, imageUrl }: ProjectProps) {
  
    // Create a reference to a DOM element
    const elRef = useRef<HTMLElement>(null);

    // Hook to track scroll progress
    const { scrollYProgress } = useScroll({
      target: elRef, // The element to track scrolling
      offset: ["0 1", "1.33 1"] // Offset for triggering scroll animations
    })

    // Define transformations based on scroll progress
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [.8, 1]); // Scale transformation based on scroll
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [.6, 1]); // Opacity transformation based on scroll
  
    // Render the project item with motion effects
    return (
      <motion.div
        style={{
          scale: scaleProgress, // Apply scale transformation based on scroll
          opacity: opacityProgress // Apply opacity transformation based on scroll
        }}
        className="group mb-3 sm:mb-8 last:mb-0"
      >
        {/* Render each project item */}
        <section
          ref={elRef} // Attach the reference to the section element for scroll tracking
          className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition group-even:pl-8"
        >
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm-pt-10 sm:w-[50%] flex flex-col h-full group-even:ml-[18rem]">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="mt-2 text-gray-700 leading-relaxed">
              {description}
            </p>
            {/* Render tags for the project */}
            <ul className="flex flex-wrap mt-4 gap-4 mt-auto">
              {tags.map((tag, indexOfTag) => (
                <li
                  key={indexOfTag}
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] text-white tracking-wider p-2 rounded-full"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          {/* Render project image */}
          <Image
            className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-hover:scale-105 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40"
            src={imageUrl}
            alt="project-image"
            quality={95}
          />
        </section>
      </motion.div>
    );
  }
  
// Export the ProjectItem component
export default ProjectItem;
