import React, { useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { gsap, ScrollTrigger, useGSAP } from '../gsapSetup'

const contactHref = 'mailto:elephysoftware@gmail.com?subject=Solicitud%20de%20auditor%C3%ADa%20gratuita&body=Hola%20Elephy%2C%0A%0AQuiero%20solicitar%20una%20auditor%C3%ADa%20gratuita%20para%20mi%20proyecto.%0A%0AGracias.'

export default function Header() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const headerRef = useRef(null)

  useGSAP(() => {
    gsap.from(headerRef.current, {
      y: '-100%',
      duration: 0.8,
      ease: 'power3.out'
    })

    ScrollTrigger.create({
      start: 'top -50',
      end: 99999,
      toggleClass: {
        className: 'header-scrolled',
        targets: headerRef.current
      }
    })
  }, { scope: headerRef })

  return (
    <header className="header" ref={headerRef}>
      <nav>
        <Link to="/" className="logo header-logo">
          <img src="/images/logoelephy.png" alt="Elephy Desarrollo de Software" />
        </Link>
        <ul className="nav-links">
          {!isHome && <li><Link to="/">Inicio</Link></li>}
          <li><Link to="/servicios">Servicios</Link></li>
          <li><Link to="/industrias">Industrias</Link></li>
          <li><Link to="/tecnologias">Tecnologías</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><a href={contactHref} className="cta-btn-nav">Auditoría Gratuita</a></li>
        </ul>
      </nav>
    </header>
  )
}
