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
      <p className="mb-10">
        After an amazing time teaching abroad, I've shifted gears to pursue my
        passion for programming. I've completed a{" "}
        <span className="font-medium">full-stack web development</span> bootcamp
        course at <span className="font-medium">The Jump Digital School</span>,
        specializing in{" "}
        <span className="font-medium">React, Express, Node, and MongoDB</span>.{" "}
        My favorite part of programming is the problem-solving aspect: I{" "}
        <span className="underline">love</span> the feeling of figuring out a
        solution to a tough problem!
      </p>

      <p className="mb-10">
        I'm currently using <span className="font-medium">JavaScript</span> and{" "}
        <span className="font-medium">TypeScript</span>, however, I'm always
        eager to explore new technologies and languages. Currently, I am
        actively seeking a full-time Front-End Software Developer role, where I
        can apply my skills and contribute to innovative projects.
      </p>
      <p>
        Outside the world of coding, I find joy in playing video games, making
        delicious meals in the kitchen, and exploring unique destinations
        through travel.
      </p>
    </motion.section>
  );
}
