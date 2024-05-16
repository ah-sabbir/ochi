import React from 'react'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'

function Home() {
  return (
    <div className='w-full h-screen text-white'>
      <Navbar/>
      <LandingPage/>
    </div>
  )
}

export default Home