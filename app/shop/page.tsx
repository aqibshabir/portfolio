"use-client"

import React from "react";
import Header from "./_components/header";
import Video from "./_components/video";
import LogoScroller from "./_components/logoScroller";

export default function Page() {
  return (
    <div className="">
      <Header />
      <h1 className="text-center">Under Maintainance!</h1>
      <Video />
      <LogoScroller />
      <div className="flex-col">
        <div className="mt-10 h-[180px] w-[320px] dark:bg-transparent/40 hover:dark:bg-transparent/90 bg-white/60  border border-gray-200 dark:border-black rounded-3xl mr-auto ml-auto mb-8 hover:bg-white/100 hover:border-1.5 text-sm p-4 transition hover:scale-105">
          <p className="font-bold">default</p>
          <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur!</p>
          <p>hi</p>
            </div>
        <div className="h-[350px] w-[320px] dark:bg-transparent/40 hover:dark:bg-transparent/90 bg-white/60  border border-gray-200 dark:border-black rounded-3xl mr-auto ml-auto mb-8 hover:bg-white/100 hover:border-1.5 transition hover:scale-105"></div>
        <div className="h-[180px] w-[320px] dark:bg-transparent/40 hover:dark:bg-transparent/90 bg-white/60  border border-gray-200 dark:border-black rounded-3xl mr-auto ml-auto mb-8 hover:bg-white/100 hover:border-1.5 transition hover:scale-105"></div>
      </div>
      <div className="h-[1000px]"></div>
    </div>
  );
}
