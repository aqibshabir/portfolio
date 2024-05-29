"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { journeyData } from "@/lib/data";
import { useSectionInView } from "@/hooks/hooks";
import { useTheme } from "@/context/theme-context";

export default function Journey() {
  const { ref } = useSectionInView("Journey", 0.5);

  const { theme } = useTheme();

  return (
    <section ref={ref} id="journey" className="scroll-mt-28 mt-20 mb-28 mx-2 ">
      <SectionHeading>My journey</SectionHeading>
      <VerticalTimeline lineColor="">
        {journeyData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: theme === "light" ? "#f3f4f6" : "rgba(0,0,0,0.3)",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.05)",
                borderRadius: "10px",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.5rem solid #A9A9A9"
                    : "0.5rem solid rgba(255,255,255,0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === "light" ? "#f9fafb" : "#111827",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="mt-1 font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
