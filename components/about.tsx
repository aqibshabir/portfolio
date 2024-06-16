"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/hooks";
import meme from "@/public/meme.png";
import omlette from "@/public/omlette.jpg";
import { BsArrowRight } from "react-icons/bs";

export default function About() {
  const [hover, setHover] = useState(false);
  const [omletteHover, setOmletteHover] = useState(false);

  const { ref } = useSectionInView("About");

  const onHover = () => {
    setHover(!hover);
  };

  const onOmletteHover = () => {
    setOmletteHover(!omletteHover);
  };

  return (
    <motion.section
      ref={ref}
      className="mb-10 max-w-[45rem] text-center leading-8 sm:mb-0 p-8 sm:p-0 scroll-mt-28"
      initial={{ opacity: 0.5, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="mb-10 text-sm sm:text-lg tracking-wide">
        {hover && (
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              duration: 0.25,
              ease: "linear",
            }}
            className="hidden md:block bg-inherit absolute top-[18%] right-[15%] sm:top-[17%] sm:right-[20%] md:right-[44%] w-[249px] h-[160px] sm:w-[498px] sm:h-[320px] rounded-3xl shadow-lg"
            src={meme.src}
          />
        )}
        {omletteHover && (
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              duration: 0.25,
              ease: "linear",
            }}
            className="hidden md:block bg-inherit absolute top-[14.6%] right-[15%] sm:top-[16%] sm:left-[45%] md:right-[50%] w-[249px] h-[160px] sm:w-[498px] sm:h-[320px] rounded-3xl shadow-lg"
            src={omlette.src}
          />
        )}
        <p className="mb-4">
          <span className="">My first encounter with programming</span> began at
          the start of the pandemic. As an avid streamer on Twitch and wanted to
          create a bespoke chat that could be displayed alongside my stream. I
          couldn&apos;t find any information on creating this feature, apart
          from one single, obsecure video in Portuguese &ndash; the only
          problem?{" "}
          <a
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            href="https://thebackpackerintern.com/_wpx/wp-content/uploads/2015/01/Schermafbeelding-2015-01-19-om-13.31.25.png"
            target="_blank"
            className="font-black hover:italic hover:underline hover:text-[#9884fc] transition-all cursor-pointer"
          >
            I don&apos;t speak Portuguese&#33;
          </a>{" "}
          Naturally, my curiosity got the better of me and a few days of
          tinkering around with the CSS &#10088;and a lot of translation from
          Portuguese to English!&#10089;, I had an amazing looking chat &ndash;
          that I&apos;m still proud of to this day.
        </p>
        <p className="mb-4">
          Since then, I&apos;ve had the itch to develop software. I knew I
          needed to pursue a career in software development, so I took part in a
          12 week bootcamp offered by{" "}
          <a
            href="https://www.thejump.tech/"
            target="_blank"
            className="font-black hover:italic hover:text-[#9884fc] hover:underline transition-all"
          >
            The Jump Digital School
          </a>{" "}
          &ndash; they&apos;ve helped me to understand the core concepts of{" "}
          <span className="italic">
            JavaScript, TypeScript React, Express, Node and MongoDB - and much
            more&#33;
          </span>
        </p>
        <p className="mb-4">
          When I&apos;m not coding, I casually play video games,{" "}
          <a
            className="font-black hover:italic hover:underline hover:text-[#9884fc] transition-all cursor-pointer"
            onMouseEnter={onOmletteHover}
            onMouseLeave={onOmletteHover}
            target="_blank"
            href="https://www.bonappetit.com/test-kitchen/how-to/article/perfect-french-omelet-hint-will-butter"
          >
            cook killer omlettes for breakfast
          </a>{" "}
          and travel the world.
        </p>
        <p className="mt-[4rem] mb-4"></p>
        <div className="flex justify-center items-center mt-6">
          <a
            href="#contact"
            className="group w-[320px] font-bold bg-gray-900 text-white py-3 flex items-center justify-center gap-2 rounded-full hover:bg-gray-700 outline-none focus:scale-110 hover:scale-110 active:scale-105 transition dark:bg-white/90 dark:hover:bg-white dark:text-gray-900"
          >
            Recruiters get in touch&#33;
            <BsArrowRight className="opacity-70 group-hover:translate-x-4 transition" />
          </a>
        </div>
      </div>
    </motion.section>
  );
}
