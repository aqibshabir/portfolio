"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/hooks/hooks";
import { motion } from "framer-motion";
import {clsx as cn} from "clsx";


const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 10,
    transition: {
      delay: 0.05 * index,
    },
  }),
};


export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mt-20 mb-20 max-w-[53rem] scroll-mt-28"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="group flex justify-center flex-wrap gap-4 text-[40px] sm:text-4xl sm:gap-4">
        {skillsData.map((skill, index) => (
          <motion.li
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            className={
              `flex justify-center items-center text-center p-2 text-gray-600 hover:text-gray-950  bg-white/20  border border-black/[0.1] rounded-2xl hover:bg-white dark:bg-opacity-5 dark:border-black/80 dark:bg-black/50 dark:hover:bg-black/10 dark:text-white/80 dark:hover:text-white`
            }
            key={index}
            title={skill.name}
          >
        {skill.icon}
        <ul className="text-xs pl-2 font-semibold">
          <li>{skill.name}</li>
        </ul>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
