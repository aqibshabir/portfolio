"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { journeyData } from "@/lib/data";
import { useSectionInView } from "@/hooks/hooks";

export default function Journey() {
  const { ref } = useSectionInView("Journey");
  
  return (
    <section 
    ref={ref}
    id="journey"
    className="scroll-mt-28 mt-20 mb-28"
    >
      <SectionHeading>My journey</SectionHeading>
      <VerticalTimeline lineColor="">
        {
        journeyData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
            visible={true} 
            contentStyle={{
              background: "#f3f4f6",
              boxShadow: "none",
              border: "1px solid rgba(0,0,0,0.05)",
              borderRadius: "10px",
              textAlign: "left",
              padding: "1.3rem 2rem",
            }}
            contentArrowStyle={{
              borderRight: "0.5rem solid #A9A9A9"
            }}
            date={item.date}
            icon={item.icon}
            iconStyle={{
              background: "white",
              fontSize: "1.5rem"
            }}        
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700">{item.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))
        }
      </VerticalTimeline>
    </section>
  );
}
