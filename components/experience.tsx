import React from 'react'
import SectionHeading from './section-heading'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';

type Props = {}

const Experience = (props: Props) => {
  return (
    <section
    id="experience"
    > 
      <SectionHeading>
        My Experience
      </SectionHeading>

      <VerticalTimeline>
        {
          experiencesData.map((experience, index) =>(
            <React.Fragment key={index}>
              <VerticalTimelineElement>
                
              </VerticalTimelineElement>
            </React.Fragment>
          ))
        }
      </VerticalTimeline>
    </section>
  )
}

export default Experience