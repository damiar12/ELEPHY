import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="header" style={{background: '#ffffff'}}>
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
