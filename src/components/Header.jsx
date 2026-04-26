import React, { useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { gsap, ScrollTrigger, useGSAP } from '../gsapSetup'

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const headerRef = useRef(null)

  useGSAP(() => {
    // 1. Drop down entrance when the site loads
    gsap.from(headerRef.current, {
      y: '-100%',
      duration: 0.8,
      ease: 'power3.out'
    })

    // 2. Shrink and blur increasing on scroll
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
          <img src="/images/logo-eleephy.png" alt="Elephy" />
        </Link>
        <ul className="nav-links">
          {!isHome && <li><Link to="/">Inicio</Link></li>}
          <li><Link to="/servicios">Servicios</Link></li>
          <li><Link to="/industrias">Industrias</Link></li>
          <li><Link to="/tecnologias">Tecnologías</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/#contacto" className="cta-btn-nav">Auditoría Gratuita</Link></li>
        </ul>
      </nav>
    </header>
  )
}
