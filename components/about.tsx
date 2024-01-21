"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section 
    className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-0 p-8 sm:p-0 scroll-mt-28'
    initial={{opacity: 0, y: 100}}
    animate={{opacity: 1, y: 0}}
    transition={{delay: 0.2}}
    id='about'
    >
        <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
        After an enriching period teaching abroad, I've shifted gears to pursue my passion for programming. I completed a <span className="font-medium">full-stack web development</span> bootcamp course at <span className='font-medium'>The Jump Digital School</span> , specializing in <span className='font-medium'>React, Express, Node, and MongoDB</span>. <span className="italic">My favorite part of programming</span> is the problem-solving aspect. I <span className="underline">love</span> the feeling of figuring out a solution to a problem.
      </p>

      <p className="mb-3">
      I'm proficient in <span className='font-medium'>JavaScript</span> and familiar with <span className='font-medium'>TypeScript</span>, I'm always eager to explore new technologies and languages. Currently on the lookout for a <span className='font-medium'>full-time front-end software developer role</span>.
      <span className="italic">When I'm not coding</span>, I love playing video games, watching movies, and travelling to unique destinations. I also enjoy <span className="font-medium">learning new things</span>, I'm currently learning more about <span className="font-medium">chess and meditation</span>. I'm also learning how to play the piano.
      </p>
    </motion.section>
  )
}
