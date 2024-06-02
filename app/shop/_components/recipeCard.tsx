import React from "react";
import { PiChefHatBold } from "react-icons/pi";

function RecipeCard() {
  return (
    <div className="group">
      <div className="flex justify-center sm:justify-start sm:ml-10 md:ml-0">
        <h2 className="text-[10rem] mt-8 sm:mt-2 md:text-[12rem] lg:text-[20rem] lg:px-4">
          <PiChefHatBold />
        </h2>
        <div className="hidden sm:block p-8 md:p-10 lg:p-0 lg:mt-16 lg:ml-4 xl:ml-12">
          <p className="mt-10 text-3xl lg:mb-6 xl:mb-8 font-black capitalize md:text-4xl lg:text-[3.3rem] lg:mt-8 xl:text-[4.5rem]">
            recipe generator
          </p>
          <p className="hidden md:inline text-sm text-gray-500 py-2 lg:mt-6 lg:w-[500px] xl:mt-10 xl:w-[600px]">
            Generating recipes using API.{" "}
            <span className="hidden md:inline text-sm text-gray-500">
              The generation of recipes uses the data created in the shopping
              list.
            </span>{" "}
            <span className="hidden lg:inline text-sm text-gray-500">
              I recommend you give it a go, you might just become a culinary
              master!
            </span>
          </p>
        </div>
      </div>
      <div className="sm:hidden flex-col mt-4 w-full text-center lg:px-10 xl:px-20">
        <p className="text-center text-3xl font-black capitalize md:mb-4 lg:text-4xl xl:text-6xl">
          recipe generator
        </p>
        <p className="sm:hidden md:inline text-sm text-gray-500 p-2">
          Generating recipes using API.{" "}
          <span className="hidden md:inline text-sm text-gray-500">
            The generation of recipes uses the data created in the shopping
            list.
          </span>
        </p>
      </div>
    </div>
  );
}

export default RecipeCard;
