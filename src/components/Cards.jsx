import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap, ScrollTrigger, useGSAP } from '../gsapSetup'

function Card({ icon, title, children, to }) {
  return (
    <Link to={to} className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '2.5rem 2rem', textDecoration: 'none' }}>
      <div className="card-icon-wrapper" style={{ 
        height: '64px', width: '64px', marginBottom: '2rem', display: 'flex', alignItems: 'center', 
        justifyContent: 'center', background: 'rgba(79, 209, 197, 0.1)', borderRadius: '16px', 
        color: 'var(--primary)', transition: 'all 0.3s ease'
      }}>
        {icon}
      </div>
      <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', textAlign: 'left', width: '100%', color: 'var(--text-dark)' }}>{title}</h3>
      <div className="card-list-wrapper" style={{ fontSize: '0.95rem', lineHeight: '1.7', width: '100%', textAlign: 'left', color: 'var(--text-gray)' }}>{children}</div>
      <div className="card-link" style={{ marginTop: 'auto', paddingTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', alignSelf: 'flex-start', color: 'var(--primary)', fontWeight: '600' }}>Ver más <span className="arrow">→</span></div>
    </Link>
  )
}

export default function Cards() {
  const containerRef = useRef(null)

  useGSAP(() => {
    // Pre-set all cards to invisible
    gsap.set('.card', { autoAlpha: 0, y: 60 })

    // Reveal each card when it enters the viewport
    ScrollTrigger.batch('.card', {
      onEnter: (elements) => {
        gsap.to(elements, {
          y: 0,
          autoAlpha: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power2.out',
          overwrite: true
        })
      },
      start: 'top 90%',
      once: true
    })
  }, { scope: containerRef })

  return (
    <section className="main-nav-cards" ref={containerRef}>
      <div className="container">
        <div className="grid-4">
          <Card 
            icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>}
            title="Nuestros servicios" to="/servicios">
            <ul className="custom-card-list">
              <li>Desarrollo de Software a medida</li>
              <li>Automatización de procesos</li>
              <li>Integración de Inteligencia Artificial</li>
              <li>Business Intelligence & Analítica</li>
            </ul>
          </Card>
          
          <Card 
            icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"></path><path d="M9 8h1"></path><path d="M9 12h1"></path><path d="M9 16h1"></path><path d="M14 8h1"></path><path d="M14 12h1"></path><path d="M14 16h1"></path><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"></path></svg>}
            title="Sectores e Industrias" to="/industrias">
            <ul className="custom-card-list">
              <li>Inmobiliaria & Construcción</li>
              <li>Salud & Clínicas</li>
              <li>Logística & industria</li>
              <li>Gestorias & negocios tradicionales</li>
            </ul>
          </Card>
          
          <Card 
            icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>}
            title="Stack tecnológico" to="/tecnologias">
            <ul className="custom-card-list">
              <li>Ecosistemas Next.js, React & Vue</li>
              <li>Microservicios (Python & Node.js)</li>
              <li>Power BI & Modelado de Datos</li>
              <li>Cloud (AWS, Azure y Google Cloud)</li>
            </ul>
          </Card>
          
          <Card 
            icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>}
            title="Sobre nosotros" to="/about-us">
            <ul className="custom-card-list">
              <li>Socios tecnológicos</li>
              <li>Metodología ágil y directa</li>
              <li>5 años experiencia</li>
              <li>Análisis y enfoque en el ROI</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  )
}
