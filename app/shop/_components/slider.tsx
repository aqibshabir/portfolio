import React, { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FaCircle } from "react-icons/fa";

interface SliderProps {
  carouselData: {
    index: number;
    title: string;
    paragraph: string;
  }[];
}

function Slider({ carouselData }: SliderProps) {
  const [textIndex, setTextIndex] = useState(0);

  const showNext = () => {
    setTextIndex((prevIndex) =>
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const showPrev = () => {
    setTextIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
    <div className="w-full h-full relative">
      {carouselData[textIndex] && (
        <div className="object-cover w-full h-full flex-col justify-content-center content-evenly relative px-14">
          <h2 className="mb-6 text-4xl font-semibold text-center capitalize w-[240px] mx-auto sm:text-5xl md:text-6xl sm:mb-8 sm:w-[400px] md:w-[600px] xl:w-[800px] xl:text-8xl ">
            {carouselData[textIndex].title}
          </h2>
          <p className="text-sm text-center w-[245px] mx-auto sm:text-base sm:w-[460px] md:w-[600px] xl:w-[800px] xl:text-lg text-balanced group">
            {carouselData[textIndex].paragraph}
          </p>
        </div>
      )}
      <button
        onClick={showPrev}
        className="absolute h-full top-1/2 left-0 transform -translate-y-1/2 px-4 hover:bg-transparent/5 rounded-3xl transition ease-in-out hover:animate-pulse"
      >
        <GrFormPrevious className="stroke-black dark:stroke-white fill-black" size={20} />
      </button>
      <button
        onClick={showNext}
        className="absolute h-full top-1/2 right-0 transform -translate-y-1/2 px-4 hover:bg-transparent/5 rounded-3xl transition ease-in-out hover:animate-pulse"
      >
        <GrFormNext className="stroke-black dark:stroke-white fill-black " size={20} />
      </button>
      <div className="absolute flex gap-4 bottom-8 left-[44%] md:left-[48%] transition"> 
      {carouselData.map((_, index) => (
    <button className="" key={index} onClick={() => setTextIndex(index)}>{index === textIndex ? (<FaCircle className=" text-transparent/70 dark:text-white" size={12}/>) : (<FaCircle className="text-transparent/20 dark:text-white/60" size={8}/>)} </button>
  ))}
  </div>
    </div>
    </>
  );
}

export default Slider;
