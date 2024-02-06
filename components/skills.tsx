"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { HEADER_SECTIONS, skillsData } from "@/lib/data";
import UseSectionInView from "@/lib/hooks/UseSectionInView";
import { motion } from "framer-motion";

type Props = {};

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (indexOfSkill : number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * (indexOfSkill),
    },
  }),
};

const Skills = (props: Props) => {
  const { ref } = UseSectionInView(HEADER_SECTIONS.SKILLS, 0.75);

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      id="skills"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, indexOfSkill) => (
          <motion.li
            className="bg-white border border-black/[0.1] rounded-xl px-5 py-3"
            key={indexOfSkill}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={indexOfSkill}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
