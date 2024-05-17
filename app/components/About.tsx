import React from 'react'
import { NeueMontreal, FoundersGroteskXCond } from '@/lib/font/Fonts';

const About = () => {
  return (
    <div className={` ${NeueMontreal.className} w-full p-20 rounded-tl-3xl rounded-tr-3xl bg-[#CDEA68] text-black font-NeueMontreal`}>
        <h1 className='text-[4vw] leading-[4.5vw] tracking-tight'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className="more-about w-full flex gap-5 border-t-[1px] border-[#77aa22] pt-10 mt-20">
            <div className='w-1/2'>
                <h1 className='text-7xl capitalize'>our approach:</h1>
                <button className='flex items-center gap-10 bg-black px-10 py-6 bg-zinc-900 text-white mt-10 rounded-full uppercase'>read more
                    <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
                </button>
            </div>
            <div className='w-1/2 h-[70vh] bg-red-500 rounded-3xl border-shadow-2'></div>
        </div>
    </div>
  )
}

export default About