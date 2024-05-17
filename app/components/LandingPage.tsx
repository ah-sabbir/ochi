import React from 'react'
import { NeueMontreal, FoundersGroteskXCond } from '@/lib/font/Fonts';
import { FaArrowUpLong } from 'react-icons/fa6';

const LandingPage = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
        <div className="textStructure mt-52 px-20">
          {["We Create", "eye opening", "presentations"].map((item, index)=>(
            <div key={index} className="masker over">
              <div className="w-fit flex">
                {index===1 && (<div className='w-[9vw] h-[6vw] relative -top-[1vw] bg-red-500'></div>)}
                <h1 className={`${FoundersGroteskXCond.className} uppercase text-[9vw] leading-[7vw] h-full font-FoundersGroteskXCond font-bold`}>{item}</h1>{/* tracking-tighter */}
              </div>
            </div>
          ))}
        </div>
        <div className={`${NeueMontreal.className} border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20`}>
          {["For public and private companies", "From the first pitch to IPO"].map((item, index)=><p key={index} className='text-md font-light tracking-tight leading-none'>{item}</p>)}
          <div className="start flex items-center gap-5">
            <div className='px-4 py-2 border-2 border-zinc-400 font-light text-sm uppercase rounded-full'>start the project</div>
            <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full ">
                <span className='rotate-[45deg]'>
                    <FaArrowUpLong/>
                </span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default LandingPage