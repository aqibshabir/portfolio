import React from "react";
import { skillsData } from "../../../lib/data";

function LogoCarousel() {
  return (
    <>
      <div
        className="group ml-auto mr-auto flex justify-center max-w-[90%] sm:-w-[90%] md:-w-[90%]  lg:max-w-[1400px] overflow-hiddenn"
        style={{
          WebkitMask:
            "linear-gradient(90deg, transparent, white 20%, white 50%, transparent)",
          mask: "linear-gradient(90deg, transparent, white 20%, white 90%, transparent)",
        }}
      >
        <div className="flex justify-center animate-loop-scroll ease-in-out transition ml-[800px] md:ml-[1500px]">
          <ul className="flex p-[1rem] gap-[2.5rem] sm:gap-[4rem] md:gap-[6rem] text-4xl sm:text-6xl md:text-8xl h-[10px]">
            <li className="ml-[0.5rem] sm:ml-[2.7rem] md:ml-[4rem] hover:scale-105 ease-in-out transition">
              {skillsData[3].icon}
            </li>
            <li className="hover:scale-105 ease-in-out transition">
              {skillsData[4].icon}
            </li>
            <li className="hover:scale-105 ease-in-out transition">
              {skillsData[6].icon}
            </li>
            <li className="hover:scale-105 ease-in-out transition">
              {skillsData[7].icon}
            </li>
            <li className="hover:scale-105 ease-in-out transition">
              {skillsData[9].icon}
            </li>
            <li className="hover:scale-105 ease-in-out transition">
              {skillsData[13].icon}
            </li>
            <li className="hover:scale-105 ease-in-out transition">
              {skillsData[14].icon}
            </li>
            <li className="hover:scale-105 ease-in-out transition">
              {skillsData[3].icon}
            </li>
            <li className="hover:scale-105 ease-in-out transition">
              {skillsData[4].icon}
            </li>
            <li className="hover:scale-105 ease-in-out transition">
              {skillsData[6].icon}
            </li>
            <li className="hover:scale-105 ease-in-out transition">
              {skillsData[7].icon}
            </li>
            <li className="hover:scale-105 ease-in-out transition">
              {skillsData[9].icon}
            </li>
            <li className="hover:scale-105 ease-in-out transition">
              {skillsData[13].icon}
            </li>
            <li className="hover:scale-105 ease-in-out transition">
              {skillsData[14].icon}
            </li>
          </ul>
        </div>

        <div
          aria-hidden="true"
          className="flex justify-center animate-loop-scroll"
        >
          <ul className="flex p-[1rem] gap-[2.5rem] sm:gap-[4rem] md:gap-[6rem] text-4xl sm:text-6xl md:text-8xl">
            <li className="ml-[0.5rem] sm:ml-[2.7rem] md:ml-[4rem] hover:scale-105 ease-in-out transition">
              {skillsData[3].icon}
            </li>
            <li className="hover:scale-105 ease-in-out transition">
              {skillsData[4].icon}
            </li>
            <li className="hover:scale-105 ease-in-out transition">
              {skillsData[6].icon}
            </li>
            <li className="hover:scale-105 ease-in-out transition">
              {skillsData[7].icon}
            </li>
            <li className="hover:scale-105 ease-in-out transition">
              {skillsData[9].icon}
            </li>
            <li className="hover:scale-105 ease-in-out transition">
              {skillsData[13].icon}
            </li>
            <li className="hover:scale-105 ease-in-out transition">
              {skillsData[14].icon}
            </li>
            <li className="hover:scale-105 ease-in-out transition">
              {skillsData[3].icon}
            </li>
            <li className="hover:scale-105 ease-in-out transition">
              {skillsData[4].icon}
            </li>
            <li className="hover:scale-105 ease-in-out transition">
              {skillsData[6].icon}
            </li>
            <li className="hover:scale-105 ease-in-out transition">
              {skillsData[7].icon}
            </li>
            <li className="hover:scale-105 ease-in-out transition">
              {skillsData[9].icon}
            </li>
            <li className="hover:scale-105 ease-in-out transition">
              {skillsData[13].icon}
            </li>
            <li className="hover:scale-105 ease-in-out transition">
              {skillsData[14].icon}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default LogoCarousel;
