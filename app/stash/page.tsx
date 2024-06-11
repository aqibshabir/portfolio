import React from "react";
import Header from "./_components/header";
import Video from "./_components/video";
import LogoCarousel from "./_components/logoCarousel";
import Cards from "./_components/cards";
import Carousel from "./_components/carousel";
import LinkButtons from "./_components/linkButtons";

export default function Page() {
  return (
    <>
      <Header />
      <Video />
      <LogoCarousel />
      <Cards />
      <Carousel />
      <LinkButtons />
    </>
  );
}
