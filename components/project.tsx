"use client"

import { projectsData } from '@/lib/data'
import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

type ProjectProps = (typeof projectsData)[number] 

export default function Project({title, description, tags, imageUrl}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null)

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    })

   const scaleProgress = useTransform(scrollYProgress, [0,1], [0.8, 1])

   const opacityProgress = useTransform(scrollYProgress, [0,1], [0.6, 1])

  return (
    <motion.div
    style={{
        scale: scaleProgress,
        opacity: opacityProgress,
    }}
    ref={ref} 
    className='group mb-6 sm:mb-8 last:mb-0 mx-auto'
    >
        <section 
    className='bg-grey-100 max-w-[22rem] sm:max-w-[48rem] border border-black/5 overflow-hidden sm:pr-8 relative h-[30rem] sm:h-[28rem] md:h-[22rem] hover:bg-gray-100 transition rounded-2xl group-even:pl-8'>
        <div className='sm:group-even:ml-[20rem] md:group-even:ml-[22rem] py-4 pb-7 px-5 sm:pl-10 sm:pr-2 pt-10 sm:max-w-[50%] flex flex-col h-full'>
        <h3 className='text-xl font-semibold'>{title}</h3>
        <p className='mt-2 text-sm leading-relaxed text-gray-700 sm:mb-4 md:mb-0 z-20'>{description}</p>
        <ul className='flex flex-wrap gap-2 mt-auto z-20'>
            {tags.map((tag, index) => (
                <li className='bg-black/[0.7] px-3 py-1 space-y-3 text-[0.7rem] uppercase tracking-wider text-white rounded-full' key={index}>
                    {tag}
                </li>
            ))}
        </ul>
        </div>
        <div className=''>
        <Image 
        className='z-21 opacity-50 sm:opacity-100 absolute top-28 sm:top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40 
        group-even:group-hover:rotate-2
        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group:hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] transition'
        src={imageUrl}
        alt='project'
        quality={95}
        />
        </div>
        </section>
    </motion.div>
  )
}