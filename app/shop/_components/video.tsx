import React from "react";

function Video() {
  return (
    <div className="mb-10 flex justify-center items-center h-[220px] xs:h-[270px] sm:h-[340px] md:h-[410px] lg:h-[576px] xl:h-[740px]">
      <div className="bg-black dark:bg-transparent/20 absolute top-[4%] w-[350px] h-[197px] xs:w-[500px] xs:h-[281px] sm:w-[640px] sm:h-[360px] md:w-[768px] md:h-[432px] lg:w-[1024px] lg:h-[576px] xl:w-[1290px] xl:h-[726px]">
        <iframe
          className="top-[4%] w-full h-full"
          src="https://player.vimeo.com/video/959139994?h=c5da17696c&background=1&loop=1&autoplay=1&mute=1"
          allowFullScreen
          loading="lazy"
          title="looping video of my website"
        ></iframe>
      </div>
    </div>
  );
}

export default Video;
