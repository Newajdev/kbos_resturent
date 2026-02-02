import React from 'react'
import Navbar from './Navbar'
import LandingContainer from './LandingContainer'
import HeroDesign from './HeroDesign'

export default function HeroSection() {
  return (
    <div className="bg-[url('/mobleVerssion.png')] lg:bg-[url('/otherVerssion.png')] h-screen bg-contain lg:bg-cover lg:bg-center bg-no-repeat">
      <LandingContainer>
        <Navbar/>
        <HeroDesign/>
      </LandingContainer>
    </div>
  )
}
