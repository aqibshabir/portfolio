"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/hooks/hooks";
import { motion } from "framer-motion";

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
      className="mt-20 mb-28 max-w-[53rem] scroll-mt-28"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex justify-center flex-wrap gap-4 text-gray-800 text-[40px] sm:text-4xl sm:gap-4">
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
              "p-3 sm:p-5 bg-white border border-black/[0.1] rounded-full hover:bg-black/5"
            }
            style={{ color: `${skill.color}` }}
            key={index}
            title={skill.name}
          >
            {skill.icon}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
