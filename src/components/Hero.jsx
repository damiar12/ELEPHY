import React, { useRef } from 'react'
import { gsap, useGSAP } from '../gsapSetup'

export default function Hero() {
  const containerRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    // 1. Fade-in + slide-up the headline
    tl.from('.hero-content h1', {
      y: 60,
      autoAlpha: 0,
      duration: 0.9
    })
    // 2. Subtitle appears shortly after
    .from('.hero-content p', {
      y: 30,
      autoAlpha: 0,
      duration: 0.7
    }, '-=0.4')
    // 3. Button pops in
    .from('.hero-buttons', {
      y: 20,
      autoAlpha: 0,
      duration: 0.5
    }, '-=0.3')
    // 4. Roadmap card slides in from the right
    .from('.hero-roadmap', {
      x: 80,
      autoAlpha: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.5')
    // 5. Stagger each roadmap step
    .from('.roadmap-step', {
      x: 40,
      autoAlpha: 0,
      stagger: 0.15,
      duration: 0.6
    }, '-=0.4')
    // 6. Draw vertical connector
    .from('.roadmap-connector', {
      scaleY: 0,
      transformOrigin: 'top center',
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.6')

    // Floating loop on the card
    gsap.to('.hero-roadmap', {
      y: -15,
      duration: 3,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
      delay: 2 // Start after entrance animations
    })
  }, { scope: containerRef })

  return (
    <section className="hero" ref={containerRef}>
      <div className="hero-content">
        <h1>Transforma tus procesos y lidera el cambio digital.</h1>
        <p>
          Ayudamos a PYMEs a facturar más y trabajar menos mediante IA, automatización y estrategia digital.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => window.location.hash = '#contacto'}>Auditoría gratuita</button>
        </div>
      </div>
      <div className="hero-visual" style={{ background: 'transparent', boxShadow: 'none', padding: 0 }}>
        <div className="hero-roadmap" style={{ 
          background: 'var(--surface)', 
          backdropFilter: 'blur(20px)',
          borderRadius: '24px', 
          padding: '3rem 2.5rem', 
          boxShadow: 'var(--shadow-xl)', 
          border: '1px solid var(--border-color)',
          position: 'relative'
        }}>
          {/* Fondo decorativo sutil */}
          <div style={{position: 'absolute', top: -50, right: -50, width: 200, height: 200, background: 'var(--primary)', borderRadius: '50%', filter: 'blur(80px)', opacity: 0.15, zIndex: 0}}></div>

          <h3 style={{ fontSize: '1.4rem', marginBottom: '2.5rem', color: 'var(--text-dark)', textAlign: 'center', fontWeight: '800', letterSpacing: '-0.5px', position: 'relative', zIndex: 2 }}>
            Nuestra forma de trabajar
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative', zIndex: 2 }}>
            {/* Conector Vertical */}
            <div className="roadmap-connector" style={{ 
              position: 'absolute', left: '20px', top: '24px', bottom: '40px', width: '2px', 
              background: 'linear-gradient(to bottom, var(--primary) 0%, rgba(255,255,255,0.05) 100%)', zIndex: 0, opacity: 0.5
            }}></div>

            {[
              { id: 1, title: 'Cuéntanos tu necesidad', desc: 'Analizamos tus retos y definimos objetivos claros.' },
              { id: 2, title: 'Propuesta y planificación', desc: 'Diseñamos la solución, cronograma y presupuesto.' },
              { id: 3, title: 'Puesta en producción', desc: 'Desarrollo ágil, entrega y validación.' },
              { id: 4, title: 'Mejora continua', desc: 'Soporte activo y evolución de tu producto.' }
            ].map((step) => (
              <div key={step.id} className="roadmap-step" style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', position: 'relative' }}>
                 <div style={{ 
                   width: '42px', height: '42px', borderRadius: '12px', 
                   background: step.id === 1 ? 'var(--primary)' : 'rgba(255,255,255,0.03)', 
                   color: step.id === 1 ? '#000' : 'var(--text-gray)',
                   border: step.id === 1 ? 'none' : '1px solid rgba(255,255,255,0.1)',
                   boxShadow: step.id === 1 ? '0 0 15px rgba(79, 209, 197, 0.4)' : 'none',
                   display: 'flex', alignItems: 'center', justifyContent: 'center', 
                   fontSize: '1.1rem', fontWeight: '700',
                   flexShrink: 0, zIndex: 1, transition: '0.3s'
                 }}>
                   {step.id}
                 </div>
                 <div style={{ paddingTop: '0.25rem' }}>
                   <h4 style={{ fontSize: '1.05rem', marginBottom: '0.4rem', color: 'var(--text-dark)', fontWeight: '700' }}>{step.title}</h4>
                   <p style={{ fontSize: '0.92rem', color: 'var(--text-gray)', lineHeight: '1.5' }}>{step.desc}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
