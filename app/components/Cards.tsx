import Image from 'next/image'
import React from 'react'

export const Card = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 flex gap-5 items-center px-20'>
        <div className="classcontainer h-[50vh] w-1/2">
            <div className="card relative w-full h-full bg-[#004D43] rounded-xl flex items-center justify-center">
              <Image className='w-32' src={`https://ochi.design/wp-content/uploads/2022/04/logo001.svg`} alt='...' width={512} height={512} />
              <button className='absolute px-5 pt-1 rounded-full border-2 left-10 bottom-10'>&copy;2024</button>
            </div>
        </div>
        <div className="classcontainer flex gap-5 h-[50vh]  w-1/2">
            <div className="card relative w-1/2 h-full bg-[#004D43] rounded-xl flex items-center justify-center">
              <Image className='w-32' src={`https://ochi.design/wp-content/uploads/2022/04/logo002.svg`} alt='...' width={512} height={512} />
              <button className='absolute px-5 pt-1 rounded-full border-2 left-10 bottom-10'>&copy;2024</button>
            </div>
            <div className="card relative w-1/2 h-full bg-[#004D43] rounded-xl flex items-center justify-center">
              <Image className='w-32' src={`https://ochi.design/wp-content/uploads/2022/04/logo002.svg`} alt='...' width={512} height={512} />
              <button className='absolute px-5 pt-1 rounded-full border-2 left-10 bottom-10'>&copy;2024</button>
            </div>
        </div>
    </div>
  )
}
