"use client";

import React from "react";

function Information() {
  return (
    <div className="group flex justify-center items-center w-full xl:rounded-3xl xl:w-[1220px] xl:ml-auto xl:mr-auto h-[600px] bg-transparent/5 dark:bg-transparent/15 mb-10">
      <div className="w-[350px] text-center">
        <h2 className="mb-4 text-[3rem] font-bold capitalize group-hover:scale-110 transition ease-in-out">
          the brief
        </h2>
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

export default Information;
