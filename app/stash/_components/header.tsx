"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { clsx as cn } from "clsx";
import { TbArrowBarToLeft } from "react-icons/tb";

export default function Header() {
  return (
    <header className="group z-[999] relative ">
      <motion.div
        className="fixed border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] top-6 left-[100px] h-[3.25rem] w-[10rem] rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed -translate-x-1/2 top-[1.7rem] left-[100px] h-[initial] py-0">
        <ul className="flex w-[20rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5 ">
          <motion.li
            className="h-3/4 flex items-center justify-center relative"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Link
              className={cn(
                "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300"
              )}
              href="/"
            >
              <TbArrowBarToLeft className="group-hover:-translate-x-1 transition-all h-4 w-4" />
              <span className="pl-2"> Go back</span>
            </Link>
          </motion.li>
        </ul>
      </nav>
    </header>
  );
}
