"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/hooks/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  const {setActiveSection, setTimeOfLastClick} = useActiveSectionContext()

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
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
          <div className="rounded-full border-[0.5rem]  border-transparent/5 shadow-x">
            <Image
              src="https://avatar.iran.liara.run/public/41"
              alt="profile-picture"
              width="250"
              height="250"
              quality="95"
              priority={true}
              className="h-44 w-44 sm:h-60 sm:w-60 object-cover"
            />
          </div>
        </motion.div>

        <motion.span
          className="text-3xl sm:text-4xl absolute top-5 right-2/5 ml-40"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1.3 }}
          transition={{
            type: "spring",
            stiffness: 250,
            delay: 0.3,
            duration: 2,
          }}
        >
          👋🏼
        </motion.span>
      </div>

      <motion.h1
        className="sm:text-3xl text-xl sm:mt-14 mb-10 mt-10 px-4 font-medium !leading-[1.5]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hello,<span className="font-bold"> I'm Aqib.</span> I&apos;m a{" "}
        <span className="font-bold">full-stack developer.</span> I really enjoy
        building <span className="font-bold">websites</span> &{" "}
        <span className="font-bold">apps</span>. My focus is on front-end
        technologies like <span className="underline">React & Next.js</span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 font-medium space-y-2"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full hover:bg-gray-700 outline-none focus:scale-110 hover:scale-110 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact")
            setTimeOfLastClick(Date.now())
          }}
        >
          Contact{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/cv.pdf"
          download
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full hover:hover:bg-gray-200 outline-none focus:scale-110 hover:scale-110 active:scale-105 transition borderBlack hover:border-none"
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <div className="flex gap-4 sm:gap-8">
          <a
            href="https://www.linkedin.com/in/aqibshabir"
            target="_blank"
            className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full hover:bg-blue-500 hover:text-white outline-none focus:scale-110 hover:scale-110 active:scale-105 transition borderBlack hover:border-none"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://www.github.com/aqibshabir"
            target="_blank"
            className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full hover:bg-gray-700 hover:text-white outline-none focus:scale-110 hover:scale-110 active:scale-105 transition borderBlack hover:border-none"
          >
            <BsGithub />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
