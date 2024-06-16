import React from "react";
import { TbSquareNumber8Filled } from "react-icons/tb";
import { SiAsda } from "react-icons/si";
import { SiTesco } from "react-icons/si";
import { SiLidl } from "react-icons/si";
import { SiAldinord } from "react-icons/si";
import { SiCoop } from "react-icons/si";

function ScrapingCard() {
  return (
    <div className="group">
      <div className="flex items-center sm:justify-center mb-2 lg:p-2">
        <TbSquareNumber8Filled className="text-[5rem] mr-2 group-hover:scale-105 transition ease-linear sm:mt-3 md:mt-0" />
        <h2 className="text-xl sm:text-lg md:text-2xl font-black capitalize lg:text-[1.7rem] xl:text-[2rem] lg:ml-2 xl:ml-4">
          Supermarkets scraped
        </h2>
      </div>
      <div className="sm:hidden md:block">
        <p className="text-sm text-gray-500 p-2 text-center">
          Leveraging Puppeteer to efficiently scrape eight supermarkets.
          <span className="hidden lg:inline"> Supermarkets include:</span>
          <span className="hidden lg:flex lg:justify-center gap-2 mt-4 text-4xl gap-x-8 group-hover:text-black dark:group-hover:text-white transition">
            <SiAsda />
            <SiTesco />
            <SiLidl />
            <SiAldinord />
            <SiCoop />
          </span>
        </p>
      </div>
    </div>
  );
}

export default ScrapingCard;
