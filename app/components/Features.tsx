import React from 'react';
import { NeueMontreal, FoundersGroteskXCond } from '@/lib/font/Fonts';
import Image from 'next/image';

const Features = () => {
  return (
    <div className='w-full py-20'>
        <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
            <h1 className={`text-7xl ${NeueMontreal.className} tracking-tight`}>
                Featured Projects
            </h1>
        </div>
        <div className="px-20">
            <div className="cards w-full flex gap-10 mt-10">
                <div className="cardcontainer w-1/2 h-[75vh] relative">
                    {/* <h1 className={`${NeueMontreal.className} absolute left-full -translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] leading-none tracking-tighter text-[#CDEA68] text-8xl`}>FEED</h1> */}
                    <div className="card w-full h-full rounded-xl overflow-hidden">
                    <h1 className={`${NeueMontreal.className} absolute left-full -translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] leading-none tracking-tighter text-[#CDEA68] text-8xl`}>
                            {"VISE".split('').map((sym,i)=>(
                                <span key={i}>
                                    {sym}
                                </span>
                            ))}
                        </h1>
                        <Image src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" className='w-full h-full bg-cover' width={663} height={551} alt='...'/>
                    </div>
                </div>
                <div className="cardcontainer w-1/2 h-[75vh] relative">
                    <div className="card w-full h-full rounded-xl overflow-hidden">
                        <h1 className={`${NeueMontreal.className} absolute right-full translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] leading-none tracking-tighter text-[#CDEA68] text-8xl`}>
                            {"VISE".split('').map((sym,i)=>(
                                <span key={i}>
                                    {sym}
                                </span>
                            ))}
                        </h1>
                        <Image src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" className='w-full h-full bg-cover' width={663} height={551} alt='...'/>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Features