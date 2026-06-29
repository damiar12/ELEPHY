import React, { useRef } from 'react'
import { gsap, ScrollTrigger, useGSAP } from '../gsapSetup'
import HandwrittenHighlight from './HandwrittenHighlight'

export default function Hero() {
  const containerRef = useRef(null)
  const contactHref = 'mailto:elephysoftware@gmail.com?subject=Solicitud%20de%20auditor%C3%ADa%20gratuita&body=Hola%20Elephy%2C%0A%0AMe%20gustar%C3%ADa%20contaros%20mi%20proyecto%20y%20solicitar%20una%20auditor%C3%ADa%20gratuita.%0A%0AGracias.'

  // 3D Tilt handlers for the roadmap card
  const handleRoadmapMouseMove = (e) => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const rotateY = ((e.clientX - cx) / (rect.width / 2)) * 12  // ±12°
    const rotateX = -((e.clientY - cy) / (rect.height / 2)) * 9  // ±9°

    gsap.to(card, {
      rotateX,
      rotateY,
      scale: 1.02,
      boxShadow: '0 30px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(79, 209, 197, 0.15)',
      duration: 0.35,
      ease: 'power2.out',
      transformPerspective: 1000,
      transformOrigin: 'center center'
    })

    // Tilt the inner numbers (pop out)
    const numbers = card.querySelectorAll('.roadmap-step-number-container')
    gsap.to(numbers, {
      z: 35,
      duration: 0.35,
      ease: 'power2.out'
    })

    // Shift text slightly (intermediate depth)
    const textLayers = card.querySelectorAll('.roadmap-step-text')
    gsap.to(textLayers, {
      z: 15,
      x: ((e.clientX - cx) / (rect.width / 2)) * 3,
      y: ((e.clientY - cy) / (rect.height / 2)) * 3,
      duration: 0.35,
      ease: 'power2.out'
    })

    // Shift the line connector (depth)
    const connector = card.querySelector('.roadmap-connector')
    if (connector) {
      gsap.to(connector, {
        z: 8,
        x: ((e.clientX - cx) / (rect.width / 2)) * 1.5,
        duration: 0.35,
        ease: 'power2.out'
      })
    }

    // Move internal highlight
    const glowEl = card.querySelector('.roadmap-glow')
    if (glowEl) {
      const gx = ((e.clientX - rect.left) / rect.width) * 100
      const gy = ((e.clientY - rect.top) / rect.height) * 100
      gsap.to(glowEl, {
        '--glow-x': `${gx}%`,
        '--glow-y': `${gy}%`,
        opacity: 1,
        duration: 0.25
      })
    }
  }

  const handleRoadmapMouseLeave = (e) => {
    const card = e.currentTarget
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      boxShadow: 'var(--shadow-xl)',
      duration: 0.6,
      ease: 'power2.out'
    })

    const numbers = card.querySelectorAll('.roadmap-step-number-container')
    gsap.to(numbers, {
      z: 0,
      duration: 0.6,
      ease: 'power2.out'
    })

    const textLayers = card.querySelectorAll('.roadmap-step-text')
    gsap.to(textLayers, {
      z: 0,
      x: 0,
      y: 0,
      duration: 0.6,
      ease: 'power2.out'
    })

    const connector = card.querySelector('.roadmap-connector')
    if (connector) {
      gsap.to(connector, {
        z: 0,
        x: 0,
        duration: 0.6,
        ease: 'power2.out'
      })
    }

    const glowEl = card.querySelector('.roadmap-glow')
    if (glowEl) {
      gsap.to(glowEl, {
        opacity: 0,
        duration: 0.4
      })
    }
  }

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    // --- Entrance sequence ---
    tl
      // Floating orbs first (behind content)
      .from('.hero-orb', {
        scale: 0,
        autoAlpha: 0,
        stagger: 0.2,
        duration: 1.4,
        ease: 'elastic.out(1, 0.5)'
      }, 0)
      // Badge label
      .from('.hero-badge', {
        y: -20,
        autoAlpha: 0,
        duration: 0.5
      }, 0.3)
      // Headline lines stagger in with staircase timing
      .from('.hero-word', {
        y: 60,
        autoAlpha: 0,
        stagger: 0.28,
        duration: 0.6
      }, 0.5)
      // Subtitle
      .from('.hero-content p', {
        y: 30,
        autoAlpha: 0,
        duration: 0.6
      }, '-=0.3')
      // CTA button
      .from('.hero-buttons', {
        y: 20,
        autoAlpha: 0,
        duration: 0.5
      }, '-=0.3')
      // Roadmap card
      .from('.hero-roadmap', {
        x: 100,
        autoAlpha: 0,
        duration: 0.9,
        ease: 'power2.out'
      }, '-=0.5')
      // Steps stagger in
      .from('.roadmap-step', {
        x: 40,
        autoAlpha: 0,
        stagger: 0.12,
        duration: 0.5
      }, '-=0.5')
      // Vertical connector draws down
      .from('.roadmap-connector', {
        scaleY: 0,
        transformOrigin: 'top center',
        duration: 0.7,
        ease: 'power2.out'
      }, '-=0.5')

    // --- Continuous float on the card wrapper ---
    gsap.to('.roadmap-float-wrapper', {
      y: -18,
      duration: 3.5,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
      delay: 2
    })

    // --- Orbs parallax on scroll ---
    gsap.to('.hero-orb-1', {
      y: -120,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5
      }
    })
    gsap.to('.hero-orb-2', {
      y: -60,
      x: 40,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 2
      }
    })
    gsap.to('.hero-orb-3', {
      y: -90,
      x: -30,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      }
    })

    // --- Magnetic CTA button ---
    const btn = containerRef.current?.querySelector('.btn-primary')
    if (btn && window.matchMedia('(pointer: fine)').matches) {
      const btnXTo = gsap.quickTo(btn, 'x', { duration: 0.4, ease: 'power3.out' })
      const btnYTo = gsap.quickTo(btn, 'y', { duration: 0.4, ease: 'power3.out' })

      btn.addEventListener('mousemove', (e) => {
        const r = btn.getBoundingClientRect()
        btnXTo((e.clientX - (r.left + r.width / 2)) * 0.35)
        btnYTo((e.clientY - (r.top + r.height / 2)) * 0.35)
      })
      btn.addEventListener('mouseleave', () => {
        btnXTo(0)
        btnYTo(0)
      })
    }
  }, { scope: containerRef })

  // Headline split into words for stagger animation, with some highlighted
  const headline = 'Transforma tus procesos y lidera el cambio digital.'
  const highlightWords = ['Transforma', 'procesos', 'digital.']

  return (
    <section className="hero" ref={containerRef}>
      {/* Decorative floating orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      <div className="hero-content">
        {/* Badge */}
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Consultoría tecnológica para PYMEs
        </div>

        <h1 style={{ overflow: 'hidden' }}>
          {headline.split(' ').map((word, i) => {
            const isHighlight = highlightWords.includes(word)
            const isLidera = word === 'lidera'
            return (
              <span
                key={i}
                className="hero-word"
                style={{
                  display: 'inline-block',
                  marginRight: '0.3em',
                  color: isHighlight ? '#fff' : 'var(--primary)',
                  fontWeight: isHighlight ? 900 : 800,
                  textShadow: isHighlight ? '0 0 30px rgba(255,255,255,0.12)' : 'none',
                }}
              >
                {isLidera ? (
                  <HandwrittenHighlight type="underline" color="var(--primary)" delay={1.4}>
                    {word}
                  </HandwrittenHighlight>
                ) : (
                  word
                )}
              </span>
            )
          })}
        </h1>

        <p>
          Ayudamos a PYMEs a <strong style={{ color: '#fff', fontWeight: 700 }}>facturar más</strong> y <strong style={{ color: '#fff', fontWeight: 700 }}>trabajar menos</strong> mediante IA, automatización y estrategia digital.
        </p>

        <div className="hero-buttons">
          <button
            className="btn-primary"
            onClick={() => window.location.href = contactHref}
          >
            Auditoría gratuita
          </button>
          <a
            href={contactHref}
            className="btn-secondary-hero"
          >
            Contáctanos →
          </a>
        </div>
      </div>

      <div className="hero-visual" style={{ background: 'transparent', boxShadow: 'none', padding: 0 }}>
        <div className="roadmap-float-wrapper" style={{ width: '100%' }}>
          <div
            className="hero-roadmap"
            onMouseMove={handleRoadmapMouseMove}
            onMouseLeave={handleRoadmapMouseLeave}
            style={{
              background: 'var(--surface)',
              backdropFilter: 'blur(20px)',
              borderRadius: '24px',
              padding: '3rem 2.5rem',
              boxShadow: 'var(--shadow-xl)',
              border: '1px solid var(--border-color)',
              position: 'relative',
              transformStyle: 'preserve-3d',
              transition: 'box-shadow 0.3s ease'
            }}
          >
            {/* Cursor-following internal glow */}
            <div
              className="roadmap-glow"
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: 'inherit',
                background: 'radial-gradient(circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(79,209,197,0.15) 0%, transparent 60%)',
                opacity: 0,
                transition: 'opacity 0.3s',
                pointerEvents: 'none',
                zIndex: 0
              }}
            />

            {/* Decorative top-right glow */}
            <div style={{
              position: 'absolute', top: -50, right: -50,
              width: 200, height: 200,
              background: 'var(--primary)',
              borderRadius: '50%',
              filter: 'blur(80px)',
              opacity: 0.15,
              zIndex: 0
            }} />

            <h3 style={{
              fontSize: '1.4rem', marginBottom: '2.5rem',
              color: 'var(--text-dark)', textAlign: 'center',
              fontWeight: '800', letterSpacing: '-0.5px',
              position: 'relative', zIndex: 2
            }}>
              Nuestra forma de trabajar
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative', zIndex: 2, transformStyle: 'preserve-3d' }}>
              {/* Vertical connector */}
              <div className="roadmap-connector" style={{
                position: 'absolute', left: '20px', top: '24px', bottom: '40px', width: '2px',
                background: 'linear-gradient(to bottom, var(--primary) 0%, rgba(255,255,255,0.05) 100%)',
                zIndex: 0, opacity: 0.5
              }} />

              {[
                { id: 1, title: 'Cuéntanos tu necesidad', desc: 'Analizamos tus retos y definimos objetivos claros.' },
                { id: 2, title: 'Propuesta y planificación', desc: 'Diseñamos la solución, cronograma y presupuesto.' },
                { id: 3, title: 'Puesta en producción', desc: 'Desarrollo ágil, entrega y validación.' },
                { id: 4, title: 'Mejora continua', desc: 'Soporte activo y evolución de tu producto.' }
              ].map((step) => (
                <div key={step.id} className="roadmap-step" style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', position: 'relative', transformStyle: 'preserve-3d' }}>
                  <div className="roadmap-step-number-container" style={{ transformStyle: 'preserve-3d', flexShrink: 0 }}>
                    <div style={{
                      width: '42px', height: '42px', borderRadius: '12px',
                      background: step.id === 1 ? 'var(--primary)' : 'rgba(255,255,255,0.03)',
                      color: step.id === 1 ? '#000' : 'var(--text-gray)',
                      border: step.id === 1 ? 'none' : '1px solid rgba(255,255,255,0.1)',
                      boxShadow: step.id === 1 ? '0 0 15px rgba(79, 209, 197, 0.4)' : 'none',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.1rem', fontWeight: '700',
                      zIndex: 1, transition: '0.3s'
                    }}>
                      {step.id}
                    </div>
                  </div>
                  <div className="roadmap-step-text" style={{ paddingTop: '0.25rem', transformStyle: 'preserve-3d' }}>
                    <h4 style={{ fontSize: '1.05rem', marginBottom: '0.4rem', color: 'var(--text-dark)', fontWeight: '700' }}>{step.title}</h4>
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-gray)', lineHeight: '1.5' }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

