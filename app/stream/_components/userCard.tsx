import React from "react";
import { FaUser } from "react-icons/fa6";
import { RiNumber0 } from "react-icons/ri";
import { RiNumber1 } from "react-icons/ri";

function UserCard() {
  return (
    <div className="">
      <div className="relative flex ml-2 sm:ml-0">
        <div className="group-hover:scale-105 flex">
          <FaUser className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px]" />
          <RiNumber0 className="group-hover:hidden w-[40px] h-[40px] sm:w-[60px] sm:h-[60px]" />
          <RiNumber1 className="hidden group-hover:block w-[40px] h-[40px] sm:w-[60px] sm:h-[60px]" />
        </div>
        <h2 className="ml-1 mb-4 mt-2 text-2xl font-bold capitalize sm:absolute sm:top-16 sm:text-3xl sm:left-20 md:left-0 md:ml-0">
          instant updates
        </h2>
      </div>
      <p className="ml-20 text-sm text-center text-gray-500 sm:hidden md:block md:ml-0 md:mt-12 md:mr-10 md:text-left">
        Everything updates effortlessly in real-time, allowing for great user
        experience.
      </p>
    </div>
  );
}

export default UserCard;
