import React from "react";

import LiveStreamCard from "./liveStreamCard";
import LiveChat from "./liveChat";
import OBSCard from "./obsCard";
import UserCard from "./userCard";

export default function Cards() {
  return (
    <div className="sm:flex sm:justify-center sm:items-center md:m-4 lg:m-4 sm:gap-8 mt-10 md:mt-16 lg:mt-20 xl:mt-20">
      <div className="group hidden sm:block mb-8 h-[600px] w-[320px] md:h-[750px] md:w-[405px] lg:h-[770px] lg:w-[550px] xl:w-[800px] p-4 text-gray-800 hover:text-gray-950  bg-white/20  border border-black/[0.1] rounded-2xl hover:bg-white dark:bg-opacity-5 dark:border-black/80 dark:bg-black/50 dark:hover:bg-black/40 dark:text-white/80 dark:hover:text-white">
        <LiveStreamCard />
      </div>
      <div className="flex-col">
        <div className="group relative sm:hidden h-[450px] w-[320px] mr-auto ml-auto sm:ml-0 sm:mr-0 mb-8 sm:mb-0 p-4 text-gray-800 hover:text-gray-950  bg-white/20  border border-black/[0.1] rounded-2xl hover:bg-white dark:bg-opacity-5 dark:border-black/80 dark:bg-black/50 dark:hover:bg-black/40 dark:text-white/80 dark:hover:text-white">
          <LiveStreamCard />
        </div>
        <div className="group h-[180px] w-[320px] sm:h-[178px] sm:w-[248px] md:h-[228px] md:w-[320px] lg:w-[380px] lg:h-[235px] xl:w-[460px]  mr-auto ml-auto sm:ml-0 sm:mr-0 mb-8 p-4 text-gray-800 hover:text-gray-950  bg-white/20  border border-black/[0.1] rounded-2xl hover:bg-white dark:bg-opacity-5 dark:border-black/80 dark:bg-black/50 dark:hover:bg-black/40 dark:text-white/80 dark:hover:text-white">
          <LiveChat />
        </div>
        <div className="group h-[180px] w-[320px] sm:h-[178px] sm:w-[248px] md:h-[228px] md:w-[320px] lg:w-[380px] lg:h-[235px] xl:w-[460px] mr-auto ml-auto sm:ml-0 sm:mr-0 mb-8 p-4 text-gray-800 hover:text-gray-950  bg-white/20  border border-black/[0.1] rounded-2xl hover:bg-white dark:bg-opacity-5 dark:border-black/80 dark:bg-black/50 dark:hover:bg-black/40 dark:text-white/80 dark:hover:text-white">
          <OBSCard />
        </div>
        <div className="group h-[180px] w-[320px] sm:h-[178px] sm:w-[248px] md:h-[228px] md:w-[320px] lg:w-[380px] lg:h-[235px] xl:w-[460px]  mr-auto ml-auto sm:ml-0 sm:mr-0 mb-8 p-4 text-gray-800 hover:text-gray-950  bg-white/20  border border-black/[0.1] rounded-2xl hover:bg-white dark:bg-opacity-5 dark:border-black/80 dark:bg-black/50 dark:hover:bg-black/40 dark:text-white/80 dark:hover:text-white">
          <UserCard />
        </div>
      </div>
    </div>
  );
}
