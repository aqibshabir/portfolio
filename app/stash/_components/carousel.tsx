"use client";

import React from "react";
import { carouselDataStash } from "@/lib/data";
import Slider from "./slider";

function Carousel() {
  return (
    <div className="group flex justify-center items-center w-full sm:rounded-3xl sm:w-[600px] md:w-[720px] lg:w-[960px] xl:w-[1220px] sm:ml-auto sm:mr-auto h-[600px] bg-[#00000008] dark:bg-transparent/15 mb-10 hover:bg-[#0000000f] dark:hover:bg-transparent/30 transition">
      <Slider carouselData={carouselDataStash} />
    </div>
  );
}

export default Carousel;
