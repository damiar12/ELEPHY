import React, { useRef } from 'react'
import { gsap, useGSAP } from '../gsapSetup'

const contactHref = 'mailto:elephysoftware@gmail.com?subject=Nuevo%20proyecto%20para%20Elephy&body=Hola%20Elephy%2C%0A%0ATengo%20un%20proyecto%20en%20mente%20y%20me%20gustar%C3%ADa%20que%20lo%20analizaseis.%0A%0AGracias.'

export default function CTA() {
  const containerRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
        once: true
      }
    })

    tl.from('.cta-title', {
      y: 40,
      autoAlpha: 0,
      duration: 0.7
    })
    .from('.cta-subtitle', {
      y: 25,
      autoAlpha: 0,
      duration: 0.5
    }, '-=0.3')
    .from('.cta-button', {
      scale: 0.85,
      autoAlpha: 0,
      duration: 0.5,
      ease: 'back.out(1.7)'
    }, '-=0.2')

    gsap.to('.cta-glow', {
      scale: 1.3,
      opacity: 0.25,
      duration: 2.5,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1
    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} style={{ background: 'transparent', padding: '4rem 2rem', textAlign: 'center', position: 'relative' }}>
      <div className="cta-glow" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '300px', height: '150px', background: 'var(--primary)', filter: 'blur(100px)', opacity: 0.1, zIndex: 0 }}></div>

      <div style={{ position: 'relative', zIndex: 2 }}>
        <h2 className="cta-title" style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>¿Tienes un proyecto en mente?</h2>
        <p className="cta-subtitle" style={{ fontSize: '1.1rem', marginBottom: '2rem', color: 'var(--text-gray)' }}>Déjanos analizar tus necesidades y proponerte una solución sin compromiso.</p>
        <a href={contactHref} className="btn-primary cta-button" style={{ display: 'inline-block', textDecoration: 'none' }}>Hablemos ahora</a>
      </div>
    </section>
  )
}
