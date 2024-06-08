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
      <Video />
      <LogoScroller />
      <Cards />
      <Information />
    </div>
  );
}
