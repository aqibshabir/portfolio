"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/hooks/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const [active, setActive] = useState(false);
  const { ref } = useSectionInView("Home", 0.5);

  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mt-2 sm:mt-16 mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <div
            className="rounded-full border-[0.75rem]  border-transparent/5 shadow-x-10 dark:border-transparent/20 sm:hover:dark:border-white/5 sm:hover:border-transparent/10"
            onMouseEnter={() => setActive(!active)}
            onMouseLeave={() => setActive(!active)}
          >
            <Image
              src="/profile.png"
              alt="profile-picture"
              width="250"
              height="250"
              quality="95"
              priority={true}
              className="object-cover rounded-full bg-transparent/5 dark:bg-transparent/20 sm:cursor-pointer"
            />
            {active && (
              <>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    bounce: 0.6,
                    duration: 0.4,
                  }}
                  className="hidden sm:flex absolute justify-center items-center top-[10%] left-[69%] sm:left-[69%] sm:h-[80px] h-[50px] sm:w-[150px] w-[70px] rounded-bl-none rounded-full shadow-x-10 bg-transparent/5 hover:bg-transparent/10 dark:bg-transparent/20 hover:dark:bg-transparent/40 cursor-pointer"
                >
                  <p className="font-bold sm:text-4xl tracking-wide text-xl text-transparent/60 dark:text-white">
                    Hi!
                  </p>
                </motion.div>
              </>
            )}
          </div>
        </motion.div>
      </div>

      <motion.h1
        className="sm:text-3xl text-xl sm:mt-14 mb-10 mt-10 px-4 font-medium !leading-[1.5]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hi,<span className="font-bold"> I&apos;m Aqib!</span> A{" "}
        <span className="font-bold">full-stack developer</span> from the UK. I{" "}
        <span className="font-bold">love</span> making websites look{" "}
        <span className="underline">awesome</span>. I mainly focus on{" "}
        <span className="font-bold">front-end</span> technologies like{" "}
        <span className="underline">React & Next.js</span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 font-medium space-y-2"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group mt-1 bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full hover:bg-gray-700 outline-none focus:scale-110 hover:scale-110 active:scale-105 transition dark:bg-white/90 dark:hover:bg-white dark:text-gray-700"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/cv.pdf"
          download
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full hover:bg-gray-200 outline-none focus:scale-110 hover:scale-110 active:scale-105 transition borderBlack hover:border-none dark:bg-gray-950 dark:hover:bg-gray-700 dark:text-white dark:border-white/20"
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <div className="flex gap-4 sm:gap-8">
          <a
            href="https://www.linkedin.com/in/aqibshabir"
            target="_blank"
            aria-label="go to linked-in profile"
            className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full hover:bg-blue-500 hover:text-white outline-none focus:scale-110 hover:scale-110 active:scale-105 transition borderBlack hover:border-none dark:bg-gray-950 dark:hover:bg-blue-500  dark:text-white dark:border-white/20"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://www.github.com/aqibshabir"
            target="_blank"
            aria-label="go to my github page"
            className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full hover:bg-gray-700 hover:text-white outline-none focus:scale-110 hover:scale-110 active:scale-105 transition borderBlack hover:border-none dark:bg-gray-950 dark:hover:bg-white
            dark:hover:text-black  dark:text-white dark:border-white/20"
          >
            <BsGithub />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
