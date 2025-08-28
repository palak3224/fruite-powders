import React from 'react'
import HeroSection from './Components/Hero'
import AboutSection from './Components/AboutSection'
import ProductsSection from './Components/ProductsSection'
import BenefitsSection from './Components/BenefitsSection'
import CTAClosingSection from './Components/CTAClosingSection'


function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <BenefitsSection />
      <CTAClosingSection />
    </div>
  )
}

export default Home