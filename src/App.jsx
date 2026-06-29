import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Cards from './components/Cards'
import Methodology from './components/Methodology'
import ProjectVideos from './components/ProjectVideos'

import CTA from './components/CTA'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import ScrollProgressBar from './components/ScrollProgressBar'
import Servicios from './pages/Servicios'
import Industrias from './pages/Industrias'
import Tecnologias from './pages/Tecnologias'
import AboutUs from './pages/AboutUs'

export default function App() {
  return (
    <div>
      {/* Global interactive overlays */}
      <CustomCursor />
      <ScrollProgressBar />

      <Header />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Cards />
              <Methodology />
              <ProjectVideos />
              <CTA />
            </>
          } />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/industrias" element={<Industrias />} />
          <Route path="/tecnologias" element={<Tecnologias />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
