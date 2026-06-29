import React, { useRef } from 'react'
import { gsap, ScrollTrigger, useGSAP } from '../gsapSetup'

/**
 * ScrollProgressBar — A thin teal line at the very top of the viewport
 * that fills left-to-right as the user scrolls the page.
 * Uses ScrollTrigger's scrub + scaleX approach for silky smoothness.
 */
export default function ScrollProgressBar() {
  const barRef = useRef(null)

  useGSAP(() => {
    gsap.set(barRef.current, { scaleX: 0, transformOrigin: 'left center' })

    gsap.to(barRef.current, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3
      }
    })
  })

  return (
    <div
      ref={barRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '3px',
        background: 'linear-gradient(90deg, var(--primary) 0%, #10B981 50%, #818CF8 100%)',
        zIndex: 99999,
        pointerEvents: 'none',
        transformOrigin: 'left center',
        boxShadow: '0 0 12px rgba(79,209,197,0.8)'
      }}
    />
  )
}
