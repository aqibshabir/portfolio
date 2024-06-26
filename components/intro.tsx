"use client";

import React, { useEffect, useState } from "react";
import IntroDesktop from "./intro-desktop";
import IntroMobile from "./intro-mobile";
import { useIsDesktop } from "@/hooks/hooks";
import { GoDotFill } from "react-icons/go";

export default function Intro() {
  const [hasMounted, setHasMounted] = useState(false);
  const isDesktop = useIsDesktop();

  useEffect(() => {
    setHasMounted(true);
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
  }, []);

  if (!hasMounted) {
    return (
      <div className="h-[100vh]">
        <div>
          <h1 className=" mt-40 mb-10 text-6xl text-center font-black text-gray-800/40 dark:text-white/70">
            Loading
          </h1>
        </div>
        <div className="flex text-gray-800/40 dark:text-white/70">
          <GoDotFill className="w-20 h-20 animate-bounce [animation-delay:-0.3s]" />
          <GoDotFill className="w-20 h-20 animate-bounce [animation-delay:-0.15s]" />
          <GoDotFill className="w-20 h-20 animate-bounce" />
        </div>
      </div>
    );
  }

  return isDesktop ? <IntroDesktop /> : <IntroMobile />;
}
