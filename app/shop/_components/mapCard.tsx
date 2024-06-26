import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";

function MapCard() {
  return (
    <div className="group">
      <div className="flex justify-center">
        <div className="text-[10rem] mt-8 lg:text-[16rem]">
          <FaMapMarkedAlt className="group-hover:scale-105 transition ease-linear" />
        </div>
      </div>
      <div className="flex-col mt-4 w-full text-center lg:px-10 xl:px-20">
        <h2 className="text-center text-3xl font-black capitalize md:mb-4 lg:text-4xl xl:text-6xl">
          store locator
        </h2>
        <p className="sm:hidden md:inline text-sm text-gray-500 p-2">
          Using mapping technology to find the closest store in your proximity.{" "}
          <span className="hidden md:inline text-sm text-gray-500">
            Done using in-built API&apos;s for supermarkets nationwide.
          </span>
        </p>
      </div>
    </div>
  );
}

export default MapCard;
