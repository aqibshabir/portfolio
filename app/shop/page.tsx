"use-client";

import React from "react";
import Header from "./_components/header";
import Video from "./_components/video";
import LogoScroller from "./_components/logoScroller";
import Cards from "./_components/cards";
import Information from "./_components/information";

export default function Page() {
  return (
    <div className="">
      <Header />
      <h1 className="text-center">Under Maintainance!</h1>
      <Video />
      <LogoScroller />
      <Cards />
     < Information />
      <div className="h-[1000px]"></div>
    </div>
  );
}
