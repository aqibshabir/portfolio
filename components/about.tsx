"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-0 p-8 sm:p-0 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="mb-10 text-sm sm:text-lg tracking-wide">
        <p className="mb-4">
          <span className="">My first encounter with programming</span> began at
          the start of the pandemic. As an avid streamer on Twitch, I wanted to
          create a bespoke chat that could be displayed alongside my stream. I
          couldn&apos;t find any information on this, apart from an obsecure
          video in Portguese &ndash; the only problem?{" "}
          <a
            target="_blank"
            href="https://thebackpackerintern.com/_wpx/wp-content/uploads/2015/01/Schermafbeelding-2015-01-19-om-13.31.25.png"
            className="font-semibold hover:underline hover:text-[#9884fc] transition-all"
          >
            I don&apos;t speak Portguese&#33;
          </a>{" "}
          Naturally, my curiosity got the better of me and a few days later of
          tinkering around with the CSS styling, I had an amazing looking chat
          &ndash; that I'm still proud of to this day.
        </p>
        <p className="mb-4">
          Since then, I&apos;ve had an itch that wasn&apos;t quite scratched. I
          knew that I wanted to pursue a career in software development, so I
          took part in a 12 week bootcamp offered by{" "}
          <a
            href="https://www.thejump.tech/"
            target="_blank"
            className="font-semibold hover:text-[#9884fc] hover:underline transition-all"
          >
            The Jump Digital School
          </a>{" "}
          &ndash; they've helped me to understand the core concepts of{" "}
          <span className="underline">
            Javascript, React, Express, Node and MongoDB
          </span>{" "}
          - <span className="italic">and much more&#33;</span>
        </p>
        <p className="mb-4">
          When I&apos;m not coding, I&apos;m usually playing video games,{" "}
          <span className="italic">cooking a killer omlette for breakfast</span>{" "}
          and travelling to different parts of the world.
        </p>
        <p className="mb-4">
          <a
            href="#contact"
            className="font-semibold hover:text-[#9884fc] hover:underline transition-all"
          >
            If you are a recruiter and you like what you see - give this a click
            and say hi&#33;
          </a>
        </p>
      </div>
    </motion.section>
  );
}
