import React from 'react'
import Navbar from './Navbar'
import LandingContainer from './LandingContainer'

export default function HeroSection() {
  return (
    <div className="bg-[url('/mobleVerssion.png')] lg:bg-[url('/otherVerssion.png')] h-screen bg-contain lg:bg-cover lg:bg-center bg-no-repeat">
      <LandingContainer>
        <Navbar/>
      </LandingContainer>
    </div>
  )
}
