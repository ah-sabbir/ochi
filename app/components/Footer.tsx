import React from 'react'
import { NeueMontreal, FoundersGroteskXCond } from '@/lib/font/Fonts';
import Link from 'next/link';

export const Footer = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 px-20 mt-20 pt-20 flex gap-5'>
        <div className="w-1/2">
            {
                ['eye-', 'opening'].map((item, index)=>(
                <div key={index} className="w-full">
                    <span className={`${FoundersGroteskXCond.className} uppercase text-center text-zinc-100 text-[9vw] leading-[7vw] font-FoundersGroteskXCond font-bold`}>{item}</span>{/* tracking-tighter */}
                </div>
                ))
            }
        </div>
        <div className="w-1/2">
            <span className={`${FoundersGroteskXCond.className} uppercase text-center text-zinc-100 text-[9vw] leading-[7vw] font-FoundersGroteskXCond font-bold`}>presentations</span>{/* tracking-tighter */}
            <div className="flex justify-between">
                <div className="w-1/2 flex gap-2 flex-col">
                    <h3 className='text-[2vw] leading-[1.5vw] my-4'>S:</h3>
                    {
                        ['Instagram', 'Behance', 'Facebook', 'Linkedin'].map((item, index)=>(
                            <div key={index} className='text-[1.5vw] leading-[2vw]'>
                                <Link href='#' className='hover:border-b-2 my-2'>{item}</Link>
                            </div>
                        ))
                    }
                    <h3 className='text-[2vw] leading-[1.5vw] my-4'>L:</h3>
                    {
                        [`202-1965 W 4th Ave Vancouver, Canada`,`30 Chukarina St Lviv, Ukraine`].map((item, index)=>(
                            <div key={index} className='text-[1.5vw] leading-[2vw]'>
                                <Link href='#' className='hover:border-b-2 my-2'>{item}</Link>
                            </div>
                        ))
                    }
                    <h3 className='text-[2vw] leading-[1.5vw] my-4'>E:</h3>
                    <div className='text-[1.5vw] leading-[2vw]'>
                        <Link href='#' className='hover:border-b-2 my-2'>hello@ochi.design</Link>
                    </div>
                </div>
                <div className="w-1/2">
                    <h3 className='text-[2vw] leading-[1.5vw] my-4'>M:</h3>
                    {
                        [ 'Home', 'Services', 'Our work', 'About us', 'Insights', 'Contact us'].map((item, index)=>(
                            <div key={index} className='text-[1.5vw] leading-[2vw]'>
                                <Link href='#' className='hover:border-b-2 my-2'>{item}</Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

