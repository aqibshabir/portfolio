'use client'

import React from 'react'
import SectionDivider from './section-divider'
import { MdInfoOutline } from 'react-icons/md'

function Information() {
  return (
    <div className="flex flex-col items-center">
      <SectionDivider />
      <div className="mt-10 sm:mt-20 w-[280px] sm:w-[320px]">
        <h3 className="text-6xl mb-10 text-center sm:text-8xl font-black">Brief</h3>
        <p className="text-center mb-10">
        This was a start-up application with a limited time-frame of just two weeks! The task was given to myself and 7 other developers. My primary role was the web scraping feature using Puppeteer and implementing a backend using Node and a MySQL database with a simple caching feature. After the app was deployed, I worked on modernizing the front-end, giving it a simple, yet modern user interface.
        </p>
        </div>
      <SectionDivider />
      <div className="w-[280px] sm:w-[320px]">
      <h3 className="flex justify-center text-6xl mt-10 sm:mt-20 mb-10 text-center sm:text-8xl font-black">Info<MdInfoOutline size={30}/> </h3>
      <p className="text-center mb-10">
      One thing to note is there is no live link, our deployment was unable to keep up with the demands that the puppeteer web-scraping required. We mitigated these constraints temporarily by using a private server but have since halted its deployment. The best way for you to run this application is locally on your own machine. You will need three terminals open; one for the web-scraper, one for the back-end and one for the front-end. One last note on running it locally, make sure you have the necessary backend dependencies installed, you can view how to run this locally on my GitHub.
      </p>
      </div>
      </div>
  )
}

export default Information