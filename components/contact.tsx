"use client"
import React from "react";
import SectionHeading from "./section-heading";
import { HEADER_SECTIONS } from "@/lib/data";
import UseSectionInView from "@/lib/hooks/UseSectionInView";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/SendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

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

      <form className="mt-10 flex flex-col" action={async (formData)=> {
        console.log("Running on client")
        console.log(formData.get("senderEmail"))
        console.log(formData.get("message"))
       const {data, error} = await sendEmail(formData);
       if(error){
         toast.error(error);
         return
       }
       toast.success("Email send successfully!");
       
      }}>
        <input
          type="email"
          className="h-14 rounded-lg borderBlack p-4"
          placeholder="Your email"
          required
          maxLength={500}
          name="senderEmail"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          placeholder="Your message here"
          required
          maxLength={500}
          name="message"
        />
       <SubmitBtn/>
      </form>
    </motion.section>
  );
};

export default Contact;
