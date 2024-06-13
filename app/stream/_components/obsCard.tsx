import React from "react";
import { SiObsstudio } from "react-icons/si";

function OBSCard() {
  return (
    <>
      <div className="group-hover:scale-105 flex justify-center mb-1">
        <SiObsstudio className="h-[70px] w-[70px] md:h-[80px] md:w-[80px] lg:h-[100px] lg:w-[100px]" />
      </div>
      <h2 className="text-2xl font-bold capitalize text-center mb-0 sm:text-3xl sm:mt-2 md:text-2xl md:mt-4 lg:text-3xl xl:text-4xl">
        OBS studio connect
      </h2>
      <p className="text-sm text-center text-gray-500 sm:hidden md:block">
        Stream on your PC or console via OBS using RTMP and WHIP protocols.
      </p>
    </>
  );
}

export default OBSCard;
