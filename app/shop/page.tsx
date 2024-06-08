"use-client";

import React from "react";
import Header from "./_components/header";
import Video from "./_components/video";
import Cards from "./_components/cards";
import TextCarousel from "./_components/textCarousel";
import LogoCarousel from "./_components/logoCarousel";

export default function Page() {
  return (
    <div className="">
      <Header />
      <Video />
      <LogoCarousel />
      <Cards />
      <TextCarousel />
    </div>
  );
}
