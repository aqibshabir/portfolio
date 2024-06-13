import React from "react";
import { FaFile } from "react-icons/fa6";

function FileCard() {
  return (
    <>
      <div className="flex justify-center">
        <FaFile className="h-[60px] w-[60px] sm:h-[80px] sm:w-[80px] md:h-[100px] md:w-[100px] lg:w-[130px] lg:h-[130px] lg:mt-4 group-hover:scale-105" />
      </div>
      <h2 className="text-center text-2xl font-black capitalize md:mb-4 lg:text-4xl xl:text-5xl mt-4">
        Various file types
      </h2>
      <p className="text-sm text-gray-500 px-2 text-center">
        Includes all major file types.
      </p>
    </>
  );
}

export default FileCard;
