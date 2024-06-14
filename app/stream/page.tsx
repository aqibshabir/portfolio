import React from "react";
import Header from "./_components/header";
import Video from "./_components/video";
import Cards from "./_components/cards";
import LogoCarousel from "./_components/logoCarousel";
import Carousel from "./_components/carousel";
import LinkButtons from "./_components/linkButtons";

export default function Page() {
  return (
    <>
      <Header />
      <Video />
      <LogoCarousel />
      <LinkButtons />
      <Cards />
      <Carousel />
    </>
  );
}
