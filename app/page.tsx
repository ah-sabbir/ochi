import React from 'react'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Features from './components/Features'

function Home() {
  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Features/>
    </div>
  )
}

export default Home