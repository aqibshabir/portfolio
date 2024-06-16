"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { clsx as cn } from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { GoKebabHorizontal } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";

export default function Header() {
  const [bool, setBool] = useState(true);
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const onHandleClick = () => {
    setBool(!bool);
  };

  return (
    <header className="z-[999] relative">
      <button
        id="toggle-nav-menu"
        aria-label="toggle nav menu"
        className="sm:hidden z-[1000] flex justify-center items-center fixed top-[5rem] right-[1.5rem] h-[2.75rem] w-[2.75rem] shadow-lg bg-white opacity-90 backdrop-blur-[0.5rem] border borderBlack border-opacity-40 rounded-full hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 dark:border-white/20 cursor-pointer"
        onClick={() => onHandleClick()}
      >
        {bool ? <GoKebabHorizontal size={25} /> : <RxCross2 size={25} />}
      </button>
      {!bool && (
        <motion.div
          className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-3xl border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 cursor-pointer"
          initial={{ y: -100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
        ></motion.div>
      )}
      <motion.div
        className="hidden sm:block fixed top-0 left-1/2 h-[4.5rem] w-full rounded-3xl border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 cursor-pointer"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex w-auto fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="mt-6 gap-1 sm: sm:mt-0 flex w-[20rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5 ">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                aria-label={link.name}
                className={cn(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-gray-100":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                <span className="hidden sm:block">{link.name}</span>
                {!bool && (
                  <span className="block sm:hidden hover:scale-[1.3]">
                    {link.icon}
                  </span>
                )}

                {link.name === activeSection && (
                  <motion.span
                    className="sm:bg-gray-200 bg:none rounded-full absolute inset-0 -z-10  sm:dark:bg-gray-900"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
