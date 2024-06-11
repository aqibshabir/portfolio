import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function LinkButtons() {
  return (
    <div className="mt-8 w-full h-full flex flex-wrap justify-evenly mb-10 gap-6 px-3 max-w-[1200px] mx-auto">
      <a
        href="https://github.com/aqibshabir/stash"
        target="_blank"
        className="flex justify-center items-center gap-2 dark:bg-white/90 dark:text-black w-[300px] h-[60px] sm:px-12 sm:py-6 rounded-xl dark:hover:bg-white bg-black text-white hover:bg-transparent/80 capitalize cursor-pointer font-semibold"
      >
        github repository
        <FaGithub size={25} />
      </a>
      <a className="flex justify-center items-center text-black/70 gap-2 dark:bg-black dark:hover:bg-transparent/40 dark:text-white w-[300px] h-[60px] sm:px-12 sm:py-6 rounded-xl capitalize hover:text-black bg-white/90 hover:bg-white font-semibold cursor-pointer">
        live link
        <FaExternalLinkAlt size={16} />
      </a>
    </div>
  );
}
export default LinkButtons;
