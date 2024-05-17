'use client'
import { motion } from 'framer-motion';
import React from 'react';
import { NeueMontreal, FoundersGroteskXCond } from '@/lib/font/Fonts';

const Marquee = () => {
  return (
    <div className={` ${FoundersGroteskXCond.className} w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]`}>
        <div className="text border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap">
            <motion.h1 className='text-[24vw] leading-none py-4 uppercase font-FoundersGroteskXCond font-semibold pt-10 -mb-[7vw] '>we are ochi</motion.h1>
            <motion.h1 className='text-[24vw] leading-none py-4 uppercase font-FoundersGroteskXCond font-semibold pt-10 -mb-[7vw] '>we are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee