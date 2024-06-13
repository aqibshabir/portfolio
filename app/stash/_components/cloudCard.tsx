import React from "react";
import { IoIosCloudUpload } from "react-icons/io";

function CloudCard() {
  return (
    <>
      <div className="flex justify-center">
        <IoIosCloudUpload className="h-[70px] w-[70px] sm:h-[100px] sm:w-[100px] md:h-[120px] md:w-[120px] lg:w-[140px] lg:h-[140px] lg:mt-4 group-hover:scale-105" />
      </div>
      <h2 className="text-center text-2xl font-black capitalize md:mb-4 lg:text-4xl xl:text-5xl mt-2">
        cloud storage
      </h2>
      <p className="text-sm text-gray-500 px-2 text-center">
        Utlising firebase for cloud storage solutions.
      </p>
    </>
  );
}

export default CloudCard;
