import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function LinkButtons() {
  return (
    <div className="mt-12 w-full h-full flex flex-wrap justify-evenly mb-10 gap-6 px-3 max-w-[1200px] mx-auto">
      <a
        href="https://github.com/aqibshabir/stash"
        target="_blank"
        className="flex justify-center items-center gap-2 bg-gray-900 text-white w-[300px] h-[60px] sm:px-12 sm:py-6 rounded-full  hover:bg-gray-700 outline-none focus:scale-110 hover:scale-110 active:scale-105 transition dark:bg-white/90 dark:hover:bg-white dark:text-gray-700 capitalize cursor-pointer font-semibold"
      >
        github repository
        <FaGithub size={25} />
      </a>
      <a
        href="/stash"
        className="flex justify-center items-center gap-2 w-[300px] h-[60px] sm:px-12 sm:py-6 capitalize rounded-full hover:bg-gray-200 outline-none focus:scale-110 hover:scale-110 transition borderBlack hover:border-none dark:bg-gray-950 dark:hover:bg-gray-700 dark:text-white dark:border-white/20 cursor-pointer"
      >
        live link
        <FaExternalLinkAlt size={16} />
      </a>
    </div>
  );
}
export default LinkButtons;
