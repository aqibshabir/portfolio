import React from "react";
import ScrapingCard from "./scrapingCard";
import BarcodeCard from "./barcodeCard";
import MapCard from "./mapCard";

export default function Cards() {
  return (
    <div className="sm:flex sm:justify-center sm:items-center flex-wrap lg:m-4">
      <div className="flex-col mt-10">
        <div className="h-[180px] w-[320px] sm:h-[139px] sm:w-[248px] md:h-[180px] md:w-[320px] lg:w-[380px] lg:h-[235px] xl:w-[460px] mr-auto ml-auto sm:ml-0 sm:mr-0 mb-8 p-4 text-gray-600 hover:text-gray-950  bg-white/20  border border-black/[0.1] rounded-2xl hover:bg-white dark:bg-opacity-5 dark:border-black/80 dark:bg-black/50 dark:hover:bg-black/10 dark:text-white/80 dark:hover:text-white">
          <ScrapingCard />
        </div>
        <div className="h-[350px] w-[320px] sm:hidden mr-auto ml-auto sm:ml-0 sm:mr-0 mb-8 p-4 text-gray-600 hover:text-gray-950  bg-white/20  border border-black/[0.1] rounded-2xl hover:bg-white dark:bg-opacity-5 dark:border-black/80 dark:bg-black/50 dark:hover:bg-black/10 dark:text-white/80 dark:hover:text-white">
          <MapCard />
        </div>
        <div className="h-[180px] w-[320px] sm:h-[139px] sm:w-[248px] md:h-[180px] md:w-[320px] lg:w-[380px] lg:h-[235px] xl:w-[460px] mr-auto ml-auto sm:ml-0 sm:mr-0 mb-8 p-4 text-gray-600 hover:text-gray-950  bg-white/20  border border-black/[0.1] rounded-2xl hover:bg-white dark:bg-opacity-5 dark:border-black/80 dark:bg-black/50 dark:hover:bg-black/10 dark:text-white/80 dark:hover:text-white">
          <BarcodeCard />
        </div>
        <div className="h-[350px] w-[320px] sm:hidden mr-auto ml-auto sm:ml-0 sm:mr-0 mb-8 p-4 text-gray-600 hover:text-gray-950  bg-white/20  border border-black/[0.1] rounded-2xl hover:bg-white dark:bg-opacity-5 dark:border-black/80 dark:bg-black/50 dark:hover:bg-black/10 dark:text-white/80 dark:hover:text-white"></div>
      </div>
      <div className="hidden sm:block h-[310px] w-[320px] md:h-[392px] md:w-[360px] lg:h-[500px] lg:w-[550px] xl:w-[730px] mt-10 ml-8 mr-0 mb-8 p-4 text-gray-600 hover:text-gray-950  bg-white/20  border border-black/[0.1] rounded-2xl hover:bg-white dark:bg-opacity-5 dark:border-black/80 dark:bg-black/50 dark:hover:bg-black/10 dark:text-white/80 dark:hover:text-white">
        <MapCard />
      </div>
      <div className="hidden sm:block mr-auto ml-auto h-[200px] w-[600px] md:h-[240px] md:w-[710px] lg:h-[400px] lg:w-[960px] xl:w-[1220px] mb-8 p-4 text-gray-600 hover:text-gray-950  bg-white/20  border border-black/[0.1] rounded-2xl hover:bg-white dark:bg-opacity-5 dark:border-black/80 dark:bg-black/50 dark:hover:bg-black/10 dark:text-white/80 dark:hover:text-white"></div>
    </div>
  );
}
