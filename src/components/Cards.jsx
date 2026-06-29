import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap, ScrollTrigger, useGSAP } from '../gsapSetup'

function Card({ icon, title, children, to }) {
  const cardRef = useRef(null)

  // 3-D tilt on mouse move (desktop only)
  const handleMouseMove = (e) => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const rotateY = ((e.clientX - cx) / (rect.width / 2)) * 10  // ±10°
    const rotateX = -((e.clientY - cy) / (rect.height / 2)) * 7  // ±7°

    gsap.to(card, {
      rotateX,
      rotateY,
      scale: 1.03,
      duration: 0.35,
      ease: 'power2.out',
      transformPerspective: 800,
      transformOrigin: 'center center'
    })

    // Move the internal glow with the cursor
    const glowEl = card.querySelector('.card-glow')
    if (glowEl) {
      const gx = ((e.clientX - rect.left) / rect.width) * 100
      const gy = ((e.clientY - rect.top) / rect.height) * 100
      gsap.to(glowEl, {
        '--glow-x': `${gx}%`,
        '--glow-y': `${gy}%`,
        duration: 0.25
      })
    }
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)'
    })
  }

  return (
    <Link
      to={to}
      className="card"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '2.5rem 2rem',
        textDecoration: 'none',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Cursor-following inner glow */}
      <div
        className="card-glow"
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          background: 'radial-gradient(circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(79,209,197,0.14) 0%, transparent 60%)',
          opacity: 0,
          transition: 'opacity 0.3s',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div
        className="card-icon-wrapper"
        style={{
          height: '64px', width: '64px', marginBottom: '2rem',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'rgba(79, 209, 197, 0.1)', borderRadius: '16px',
          color: 'var(--primary)', transition: 'all 0.3s ease',
          position: 'relative', zIndex: 1
        }}
      >
        {icon}
      </div>

      <h3 style={{
        fontSize: '1.4rem', marginBottom: '1rem', textAlign: 'left',
        width: '100%', color: 'var(--text-dark)', position: 'relative', zIndex: 1
      }}>
        {title}
      </h3>

      <div
        className="card-list-wrapper"
        style={{
          fontSize: '0.95rem', lineHeight: '1.7', width: '100%',
          textAlign: 'left', color: 'var(--text-gray)', position: 'relative', zIndex: 1
        }}
      >
        {children}
      </div>

      <div
        className="card-link"
        style={{
          marginTop: 'auto', paddingTop: '1.5rem', display: 'flex',
          alignItems: 'center', gap: '0.5rem', alignSelf: 'flex-start',
          color: 'var(--primary)', fontWeight: '600', position: 'relative', zIndex: 1
        }}
      >
        Ver más <span className="arrow">→</span>
      </div>
    </Link>
  )
}

export default function Cards() {
  const containerRef = useRef(null)

  useGSAP(() => {
    // Pre-hide all cards
    gsap.set('.card', { autoAlpha: 0, y: 70 })

    // Reveal with stagger + ScrollTrigger batch
    ScrollTrigger.batch('.card', {
      onEnter: (elements) => {
        gsap.to(elements, {
          y: 0,
          autoAlpha: 1,
          stagger: 0.15,
          duration: 0.9,
          ease: 'power3.out',
          overwrite: true
        })
        // Show glow on enter
        elements.forEach(el => {
          const glow = el.querySelector('.card-glow')
          if (glow) gsap.to(glow, { opacity: 1, duration: 0.4 })
        })
      },
      start: 'top 90%',
      once: true
    })

    // Section title reveal
    gsap.from('.cards-section-label', {
      y: 20, autoAlpha: 0, duration: 0.6,
      scrollTrigger: { trigger: '.main-nav-cards', start: 'top 85%', once: true }
    })
  }, { scope: containerRef })

  return (
    <section className="main-nav-cards" ref={containerRef}>
      <div className="container">
        <div className="grid-4">
          <Card
            icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>}
            title="Nuestros servicios" to="/servicios"
          >
            <ul className="custom-card-list">
              <li>Desarrollo de Software a medida</li>
              <li>Automatización de procesos</li>
              <li>Integración de Inteligencia Artificial</li>
              <li>Business Intelligence &amp; Analítica</li>
            </ul>
          </Card>

          <Card
            icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"></path><path d="M9 8h1"></path><path d="M9 12h1"></path><path d="M9 16h1"></path><path d="M14 8h1"></path><path d="M14 12h1"></path><path d="M14 16h1"></path><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"></path></svg>}
            title="Sectores e Industrias" to="/industrias"
          >
            <ul className="custom-card-list">
              <li>Inmobiliaria &amp; Construcción</li>
              <li>Salud &amp; Clínicas</li>
              <li>Logística &amp; industria</li>
              <li>Gestorias &amp; negocios tradicionales</li>
            </ul>
          </Card>

          <Card
            icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>}
            title="Stack tecnológico" to="/tecnologias"
          >
            <ul className="custom-card-list">
              <li>Ecosistemas Next.js, React &amp; Vue</li>
              <li>Microservicios (Python &amp; Node.js)</li>
              <li>Power BI &amp; Modelado de Datos</li>
              <li>Cloud (AWS, Azure y Google Cloud)</li>
            </ul>
          </Card>

          <Card
            icon={<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>}
            title="Sobre nosotros" to="/about-us"
          >
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
