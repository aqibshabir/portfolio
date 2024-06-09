import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function LinkButtons() {
  return (
    <div className="w-full h-full flex flex-wrap justify-evenly mb-10 gap-6">
      <button className="flex justify-center items-center gap-2 dark:bg-white/70 dark:text-black w-[300px] h-[60px] sm:px-12 sm:py-6 rounded-xl dark:hover:bg-white bg-black text-white hover:bg-transparent/80">
        github repo
        <FaGithub size={20} />
      </button>
      <button className="flex justify-center items-center gap-2 dark:bg-transparent/80 w-[300px] h-[60px] sm:px-12 sm:py-6 rounded-xl">
        live link
        <FaExternalLinkAlt size={20} />
      </button>
    </div>
  );
}
export default LinkButtons;
