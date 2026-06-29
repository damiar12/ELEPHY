import React, { useEffect, useState, useRef } from 'react'
import { gsap } from '../gsapSetup'
import HandwrittenHighlight from './HandwrittenHighlight'

export default function InteractiveRobot() {
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const containerRef = useRef(null)
  const viewerRef = useRef(null)
  const contactHref = 'mailto:elephysoftware@gmail.com?subject=Proyecto%20web%20interactivo&body=Hola%20Elephy%2C%0A%0AQuiero%20hablar%20con%20vosotros%20sobre%20un%20proyecto%20web%20o%20interactivo.%0A%0AGracias.'

  useEffect(() => {
    // 1. Dynamic Script Injection for Spline Viewer
    const scriptId = 'spline-viewer-script'
    let script = document.getElementById(scriptId)

    if (!script) {
      script = document.createElement('script')
      script.id = scriptId
      script.type = 'module'
      script.src = 'https://unpkg.com/@splinetool/viewer@1.9.5/build/spline-viewer.js'
      script.async = true
      script.onload = () => setScriptLoaded(true)
      document.head.appendChild(script)
    } else {
      setScriptLoaded(true)
    }

    // 2. Poll and remove Spline Watermark Logo inside the Shadow DOM
    const removeWatermark = () => {
      const viewer = viewerRef.current || document.querySelector('spline-viewer')
      if (viewer && viewer.shadowRoot) {
        const logo = viewer.shadowRoot.getElementById('logo')
        if (logo) {
          logo.style.display = 'none'
          logo.style.opacity = '0'
          logo.style.pointerEvents = 'none'
        }
      }
    }

    const interval = setInterval(removeWatermark, 300)

    // 3. GSAP Entrance Animation on Scroll
    const container = containerRef.current
    if (container) {
      gsap.fromTo(
        container.querySelectorAll('.robot-content-animate'),
        { y: 50, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 75%',
            once: true
          }
        }
      )
    }

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <section 
      ref={containerRef} 
      className="interactive-robot-section" 
      style={{
        padding: '6rem 2rem',
        background: 'transparent',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative ambient background glow */}
      <div 
        style={{
          position: 'absolute',
          top: '50%',
          left: '70%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '500px',
          background: 'var(--primary)',
          borderRadius: '50%',
          filter: 'blur(160px)',
          opacity: 0.08,
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      <div className="container">
        <div 
          className="robot-card"
          style={{
            background: 'var(--surface)',
            backdropFilter: 'blur(24px)',
            borderRadius: '24px',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-xl)',
            padding: '3rem',
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            gap: '3rem',
            minHeight: '520px',
            overflow: 'hidden'
          }}
        >
          {/* Left Column: Copy */}
          <div 
            className="robot-info"
            style={{
              flex: 1.2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              textAlign: 'left'
            }}
          >
            <span 
              className="robot-badge robot-content-animate"
              style={{
                color: 'var(--primary)',
                fontWeight: 'bold',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontSize: '0.85rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1.25rem',
                background: 'rgba(79, 209, 197, 0.1)',
                padding: '0.5rem 1rem',
                borderRadius: '50px',
                border: '1px solid rgba(79, 209, 197, 0.15)'
              }}
            >
              <span 
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'var(--primary)',
                  display: 'inline-block',
                  animation: 'pulse 1.5s infinite ease-in-out'
                }}
              />
              Innovación 3D
            </span>

            <h2 
              className="robot-title robot-content-animate"
              style={{
                fontSize: '2.5rem',
                fontWeight: '800',
                lineHeight: '1.2',
                color: 'var(--text-dark)',
                marginBottom: '1.5rem',
                letterSpacing: '-0.5px'
              }}
            >
              Diseñamos interfaces que{' '}
              <HandwrittenHighlight type="underline" color="var(--primary)" delay={0.6}>
                cobran vida
              </HandwrittenHighlight>
            </h2>

            <p 
              className="robot-desc robot-content-animate"
              style={{
                fontSize: '1.1rem',
                color: 'var(--text-gray)',
                lineHeight: '1.6',
                marginBottom: '2rem',
                maxWidth: '480px'
              }}
            >
              Llevamos el diseño web al siguiente nivel técnico. Incorporamos experiencias tridimensionales interactivas que cautivan a tus clientes y diferencian tu marca de forma inmediata.
            </p>

            <div className="robot-content-animate">
              <button 
                className="btn-primary"
                onClick={() => window.location.href = contactHref}
                style={{
                  padding: '0.85rem 2rem',
                  fontSize: '1rem'
                }}
              >
                Hablemos de tu proyecto
              </button>
            </div>
          </div>

          {/* Right Column: 3D Robot Viewer */}
          <div 
            className="robot-viewer-container"
            style={{
              flex: 1.5,
              height: '460px',
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              background: 'rgba(0, 0, 0, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.03)'
            }}
          >
            {scriptLoaded ? (
              <spline-viewer
                ref={viewerRef}
                url="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'block'
                }}
              />
            ) : (
              <div 
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: '1rem',
                  color: 'var(--text-gray)'
                }}
              >
                <div 
                  className="loading-spinner"
                  style={{
                    width: '32px',
                    height: '32px',
                    border: '3px solid rgba(79, 209, 197, 0.1)',
                    borderTop: '3px solid var(--primary)',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                  }}
                />
                <span style={{ fontSize: '0.9rem', letterSpacing: '0.5px' }}>
                  Cargando entorno 3D...
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
