"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { microAppData, projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/hooks/hooks";
import MicroApps from "./micro-apps";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.1);

  return (
    <>
      <section ref={ref} className="scroll-mt-28" id="projects">
        <div className="flex flex-col justify-center items-center">
          <SectionHeading>Featured projects</SectionHeading>
          <div>
            {projectsData.map((project, index) => (
              <React.Fragment key={index}>
                <Project {...project} />
              </React.Fragment>
            ))}
          </div>
          <div className="mt-10">
            <SectionHeading>noteworthy projects</SectionHeading>
          </div>
          <div className="grid grid-cols-1 sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-x-[2.5rem] min-w-[50%] m-2">
            {microAppData.map((microApp, index) => (
              <React.Fragment key={index}>
                <MicroApps {...microApp} />
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
