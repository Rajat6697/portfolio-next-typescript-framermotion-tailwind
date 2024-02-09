import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { HEADER_SECTIONS } from "@/lib/data";
import UseSectionInView from "@/lib/hooks/UseSectionInView";
import { motion } from "framer-motion";

type Props = {};

const Contact = (props: Props) => {
  const { ref } = UseSectionInView(HEADER_SECTIONS.CONTACT, 0.9);

  return (
    <motion.section
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      id="contact"
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      viewport={{ once: true }}
    >
      <SectionHeading classes="mb-2">Contact Me</SectionHeading>
      <p className="text-gray-700">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:rajatverma5338@gmail.com">
          rajatverma5338@gmail.com
        </a>{" "}
        or through this form
      </p>

      <form className="mt-10 flex flex-col">
        <input
          type="email"
          className="h-14 rounded-lg borderBlack p-4"
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          placeholder="Your message here"
        />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] text-white bg-gray-900 rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950"
        >
          Submit
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 " />{" "}
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
