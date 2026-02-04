import React from 'react'
import Navbar from './Navbar'
import LandingContainer from './LandingContainer'
import HeroDesign from './HeroDesign'

export default function HeroSection() {
  return (
    <div className="relative">
      {/* Mobile Background */}
      <div 
        className="absolute inset-0 block lg:hidden -z-10 bg-contain bg-no-repeat"
        style={{ backgroundImage: "url('/mobleVerssion.png')" }}
      />
      {/* Desktop Background */}
      <div 
        className="absolute inset-0 hidden lg:block -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/otherVerssion.png')" }}
      />

      <LandingContainer>
        <Navbar/>
        <HeroDesign/>
      </LandingContainer>
    </div>
  )
}
