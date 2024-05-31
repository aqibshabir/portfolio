import React from "react";
import { skillsData } from "../../../lib/data";

function LogoScroller() {
  return (
    <>
      <div
        className="group ml-auto mr-auto flex justify-center max-w-[90%] sm:-w-[90%] md:-w-[90%]  lg:max-w-[1400px] h-[200px] overflow-hidden mb-10"
        style={{
          WebkitMask:
            "linear-gradient(90deg, transparent, white 20%, white 50%, transparent)",
          mask: "linear-gradient(90deg, transparent, white 20%, white 90%, transparent)",
        }}
      >
        <div className="flex justify-center animate-loop-scroll group-hover:paused ml-[1000px] md:ml-[1500px]">
          <ul className="flex p-[2rem] sm:p-[3rem] md:p-[4rem] gap-[2.5rem] sm:gap-[4rem] md:gap-[6rem] text-4xl sm:text-6xl md:text-8xl">
            <li>{skillsData[3].icon}</li>
            <li>{skillsData[4].icon}</li>
            <li>{skillsData[6].icon}</li>
            <li>{skillsData[7].icon}</li>
            <li>{skillsData[9].icon}</li>
            <li>{skillsData[16].icon}</li>
            <li>{skillsData[3].icon}</li>
            <li>{skillsData[4].icon}</li>
            <li>{skillsData[6].icon}</li>
            <li>{skillsData[7].icon}</li>
            <li>{skillsData[9].icon}</li>
            <li>{skillsData[16].icon}</li>
          </ul>
        </div>

        <div
          aria-hidden="true"
          className="flex justify-center animate-loop-scroll group-hover:paused"
        >
          <ul className="flex p-[2rem] sm:p-[3rem] md:p-[4rem] gap-[2.5rem] sm:gap-[4rem] md:gap-[6rem] text-4xl sm:text-6xl md:text-8xl">
            <li>{skillsData[3].icon}</li>
            <li>{skillsData[4].icon}</li>
            <li>{skillsData[6].icon}</li>
            <li>{skillsData[7].icon}</li>
            <li>{skillsData[9].icon}</li>
            <li>{skillsData[16].icon}</li>
            <li>{skillsData[3].icon}</li>
            <li>{skillsData[4].icon}</li>
            <li>{skillsData[6].icon}</li>
            <li>{skillsData[7].icon}</li>
            <li>{skillsData[9].icon}</li>
            <li>{skillsData[16].icon}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default LogoScroller;
