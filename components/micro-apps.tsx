"use client"

import { microAppData } from '@/lib/data';
import { motion } from 'framer-motion';
import React from 'react'

type MicroAppsProps = (typeof microAppData)[number];

export default function MicroApps({title, description, tags, icon}:MicroAppsProps) {

  return (
    <motion.div
    initial={{
        opacity: 0,
    }}
    whileInView={{
        opacity: 1
    }}
    transition={{
        duration: 1
    }}
    viewport={{
        once: true
    }}
    className='mb-6 sm:mb-8 mx-auto'>
    <section className='bg-grey-100 w-[14rem] h-[14rem] border border-black/5 relative hover:bg-gray-100 transition rounded-2xl dark:bg-black/30 dark:hover:bg-black/10 dark:text-white dark:border-white/10'>
        <div className='flex flex-col items-center p-5'>
            <p className=' text-[3rem] text-gray-700/20 dark:text-white/10 mb-2'>{icon}</p>
            <h3 className='text-sm font-semibold text-center'>{title}</h3>
            <p className='mt-2 text-xs leading-relaxed text-gray-700 z-20 dark:text-white/70 text-center mb-4'>{description}</p>
            <ul className='flex flex-wrap gap-2'>
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] font-semibold px-2 py-1 space-y-3 text-[0.4rem] uppercase tracking-wider text-white rounded-full dark:text-black dark:bg-white/90"
                key={index}
              >
                {tag}
              </li>
            ))}
            </ul>
        </div>
    </section>
    </motion.div>
  )
}
