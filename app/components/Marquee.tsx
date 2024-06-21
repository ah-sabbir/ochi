'use client'
import { motion } from 'framer-motion';
import React from 'react';
import { NeueMontreal, FoundersGroteskXCond } from '@/lib/font/Fonts';

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='.1' className={` ${FoundersGroteskXCond.className} w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]`}>
        <div className="text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap">
            <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{ repeat: Infinity, ease: 'linear', duration: 10 }} className='text-[24vw] leading-none py-4 pr-20 uppercase font-FoundersGroteskXCond font-semibold pt-10 -mb-[7vw] '>we are ochi</motion.h1>
            <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{ repeat: Infinity, ease: 'linear', duration: 10 }} className='text-[24vw] leading-none py-4 pr-20 uppercase font-FoundersGroteskXCond font-semibold pt-10 -mb-[7vw] '>we are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee