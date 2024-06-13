import React from "react";
import CloudCard from "./cloudCard";
import FileCard from "./fileCard";

export default function Cards() {
  return (
    <div className="sm:flex sm:justify-center sm:items-center">
      <div className="flex-col mt-10">
        <div className="group h-[180px] w-[320px] sm:h-[220px] sm:w-[600px] md:h-[240px] md:w-[700px] lg:w-[1000px] lg:h-[320px] xl:w-[1280px] mr-auto ml-auto sm:ml-0 sm:mr-0 mb-8 p-4 text-gray-600 hover:text-gray-950  bg-white/20  border border-black/[0.1] rounded-2xl hover:bg-white dark:bg-opacity-5 dark:border-black/80 dark:bg-black/50 dark:hover:bg-black/40 dark:text-white/80 dark:hover:text-white">
          <CloudCard />
        </div>
        <div className="group h-[180px] w-[320px] sm:h-[220px] sm:w-[600px] md:h-[240px] md:w-[700px] lg:w-[1000px] lg:h-[320px] xl:w-[1280px] mr-auto ml-auto sm:ml-0 sm:mr-0 mb-8 p-4 text-gray-600 hover:text-gray-950  bg-white/20  border border-black/[0.1] rounded-2xl hover:bg-white dark:bg-opacity-5 dark:border-black/80 dark:bg-black/50 dark:hover:bg-black/40 dark:text-white/80 dark:hover:text-white">
          <FileCard />
        </div>
      </div>
    </div>
  );
}
