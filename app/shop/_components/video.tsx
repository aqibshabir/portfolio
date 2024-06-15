import React from "react";

function Video() {
  return (
    <div className="sm:mb-10">
      <iframe
        className="h-[350px] sm:h-[440px] md:h-[570px] lg:h-[600px] xl:h-[720px]"
        src="https://player.vimeo.com/video/959139994?h=c5da17696c&background=1&loop=1&autoplay=1&mute=1"
        width="100%"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Video;
