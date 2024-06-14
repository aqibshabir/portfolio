import React from "react";
import Header from "./_components/header";
import Video from "./_components/video";
import Cards from "./_components/cards";
import Carousel from "./_components/carousel";
import LogoCarousel from "./_components/logoCarousel";
import LinkButtons from "./_components/linkButtons";

export default function Page() {
  return (
    <div>
      <Header />
      <Video />
      <LogoCarousel />
      <LinkButtons />
      <Cards />
      <Carousel />
    </div>
  );
}
