import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";

type Props = {};

const Experience = (props: Props) => {
  return (
    <section 
    className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
   
    id="experience">
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
            contentStyle={{
              background : "#f3f4f6",
              boxShadow : "none",
              border : "1px solid rgba(0,0,0, 0.05)",
              textAlign: "left",
              padding : "1.3rem 2rem"
            }}
            contentArrowStyle={{
              borderRight : "0.4rem solid"
            }}
            date={item.date}
            icon={item.icon}
            iconStyle={{
              background : "white",
              fontSize : "1.5rem",
            }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 font-normal text-gray-700">{item.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
