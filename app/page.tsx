'use client'
import React, {useState, useEffect} from 'react'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Features from './components/Features'
import { Card } from './components/Cards'
import { Ready } from './components/Ready'
import { Footer } from './components/Footer'

//const DynamicHeader = dynamic(() => import('../components/header'), {
//  ssr: false,
//})


function Home() {
  const [isWindow, setIsWindow] = useState(false);

  useEffect(() => {
	let scroll:any;
        import("locomotive-scroll").then((locomotiveModule) => {
            scroll = new locomotiveModule.default({
              destroyCustomTicker:()=> {return 300}
            });
        });
        // `useEffect`'s cleanup phase
      //   return () => {
      //      if (scroll) scroll.destroy();
      //  }
      setTimeout(function () {
        if (scroll) scroll.destroy();
    }, 800);
  }, [])
  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Features/>
      <Card/>
      <Ready/>
      <Footer/>
    </div>
  )
}

export default Home