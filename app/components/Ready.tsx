import React from 'react'
import { NeueMontreal, FoundersGroteskXCond } from '@/lib/font/Fonts';

export const Ready = () => {
  return (
    <div className='w-full h-screen bg-[#CDEA68] px-20 flex flex-col gap-5 items-center justify-center'>
        {
            ['ready', 'to start', 'the project?'].map((item, index)=>(
                <div key={index} className="w-full flex justify-center">
                <span className={`${FoundersGroteskXCond.className} uppercase text-center text-zinc-900 text-[18vw] leading-[11vw] font-FoundersGroteskXCond font-bold`}>{item}</span>{/* tracking-tighter */}
                </div>
            ))
        }
    </div>
  )
}
