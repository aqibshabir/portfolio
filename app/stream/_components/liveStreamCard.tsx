import React from "react";

import { RiLiveLine } from "react-icons/ri";
import { FaCircle } from "react-icons/fa6";

function LiveStreamCard() {
  return (
    <>
      <div className="flex justify-center mt-14 group-hover:scale-105 transition ml-8 sm:ml-4 sm:mt-24 md:ml-16 lg:ml-18 lg:mt-28">
        <RiLiveLine className=" w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[240px] md:h-[240px] lg:w-[280px] lg:h-[280px]" />
        <FaCircle className=" w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] md:w-[34px] md:h-[34px] group-hover:text-red-400 dark:group-hover:text-red-700 group-hover:animate-pulse transition-colors" />
      </div>
      <h2 className="mt-6 text-3xl font-black capitalize text-center sm:text-5xl sm:text-left sm:ml-6 md:ml-0 md:mt-12 md:text-5xl md:text-center lg:text-6xl">
        live streaming{" "}
        <span className="hidden sm:block md:hidden"> feature</span>
      </h2>
      <p className="mt-2 text-sm md:mt-2 md:p-2 text-center text-gray-500 sm:hidden md:block xl:px-20 xl:mt-8">
        Utilising LiveKit in order to create real-time live streams.{" "}
        <span className="hidden md:inline">
          Streaming is done in full HD with fullscreen and volume controls. Live
          stream settings include follower-mode, as well as blocking, which
          unables bad-actors from viweing the stream.
        </span>
      </p>
    </>
  );
}

export default LiveStreamCard;
