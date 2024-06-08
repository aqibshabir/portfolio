"use client";

import React from "react";

function TextCarousel() {
  return (
    <div className="group flex justify-center items-center w-full sm:rounded-3xl sm:w-[600px] md:w-[720px] lg:w-[960px] xl:w-[1220px] sm:ml-auto sm:mr-auto h-[600px] bg-[#00000008] dark:bg-transparent/15 mb-10 hover:bg-[#0000000f] dark:hover:bg-transparent/30 transition">
      <div className="w-[350px] text-center">
        <h2 className="mb-4 text-[3rem] font-bold capitalize">the brief</h2>
        <div className="m-2">
          <p className="mb-2">
            This was a start-up application with a limited time-frame of just{" "}
            <span className="underline">two weeks!</span>
          </p>
          <p className="mb-2">
            The task was given to myself and 7 other developers. My primary role
            was the <span className="underline">web scraping</span> feature
            using <span className="font-semibold">Puppeteer</span> and
            implementing a backend using{" "}
            <span className="font-semibold">Node</span> and a{" "}
            <span className="font-semibold">MySQL</span> database with a simple
            caching feature.
          </p>
          <p>
            After the app was deployed, I worked on{" "}
            <span className="underline">modernizing the front-end</span>, giving
            it a simple, yet modern user interface.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TextCarousel;
