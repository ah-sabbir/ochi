'use client'
import React, { useEffect, useState } from 'react'

const Eyes = () => {
    const [rotate, setRotate] = useState(0);

    useEffect(()=>{
        window.addEventListener("mousemove",(e:any)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;
            // console.log(mouseX, mouseY);

            let deltaX = mouseX - window.innerWidth /2 ;
            let deltaY = mouseY - window.innerHeight /2 ;

            let angel = Math.round(Math.atan2(deltaX, deltaY) * -(180 / Math.PI));
            // console.log(angel);
            setRotate(angel-90);
        })
    })
  return (
    <div className='eyes w-full h-screen overflow-hidden transition-all'>
        <div className="relative w-full h-full bg-cover bg-center bg-eyes_bg">
            <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                <div className=' flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
                    <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900 ">
                        <div style={{position:'absolute', top:'50%', left:'50%', transform:`translate(-50%, -50%) rotate(${rotate}deg)`, width:'100%', }} className={`line h-10`}>
                            <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100 '>
                    <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
                        <div style={{position:'absolute', top:'50%', left:'50%', transform:`translate(-50%, -50%) rotate(${rotate}deg)`, width:'100%', }} className={`line h-10`}>
                            <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default Eyes