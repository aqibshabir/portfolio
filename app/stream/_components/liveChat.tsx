import React from "react";
import { IoChatboxOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import "../animation.css";

function LiveChat() {
  return (
    <div>
      <div className="flex relative justify-between sm:justify-end">
        <h2 className="ml-1 text-2xl mt-10 font-bold capitalize sm:hidden">
          Real-time chat
        </h2>
        <div className="group-hover:scale-105">
          <IoChatboxOutline className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px]" />
          <GoDotFill className=" sm:w-[20px] sm:h-[20px] absolute right-4 top-6 sm:top-7 sm:right-[20px] group-hover:animate-bounce1 transition" />
          <GoDotFill className="sm:w-[20px] sm:h-[20px] absolute right-8 top-6 sm:top-7 sm:right-[36px]  group-hover:animate-bounce2 transition" />
          <GoDotFill className="sm:w-[20px] sm:h-[20px] absolute right-12 top-6 sm:top-7 sm:right-[52px] group-hover:animate-bounce3 transition" />
        </div>
        <h2 className="hidden absolute top-11 sm:block text-3xl mt-10 font-bold capitalize">
          Real-time chat
        </h2>
      </div>
      <p className="mr-24 text-sm text-center text-gray-500 sm:hidden md:block md:mt-8 md:ml-14 md:mr-0 md:text-right">
        Immersive chat experience in real-time.
      </p>
    </div>
  );
}

export default LiveChat;
