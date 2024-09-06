import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import MoreInfo from './components/MoreInfo'
import CelebrateSection from './components/CelebrateSection'
import Gallery from './components/Gallery'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Hero id="home" />
      <AboutUs id="about" />
      <CelebrateSection id="celebrate" />
      <MoreInfo id="more-info" />
      <Gallery id="gallery" />
      <Contact id="contact" />
      <FAQ id="faq" />
      <Footer />
    </>
  )
}

export default App
