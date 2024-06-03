import React from 'react'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Features from './components/Features'
import { Card } from './components/Cards'
import { Ready } from './components/Ready'
import { Footer } from './components/Footer'

function Home() {
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