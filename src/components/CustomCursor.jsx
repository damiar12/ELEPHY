import React, { useEffect, useRef } from 'react'
import { gsap } from '../gsapSetup'

/**
 * CustomCursor — A two-layer magnetic cursor:
 *   · dot: tiny, instant-tracking inner dot
 *   · ring: larger ring that follows with a smooth lag
 *
 * Both hide on mobile (pointer: coarse). On interactive elements
 * the ring expands and blends to give a "magnetic" feel.
 */
export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    // Only show on desktop
    const isFine = window.matchMedia('(pointer: fine)').matches
    if (!isFine) return

    dot.style.display = 'block'
    ring.style.display = 'block'

    // Hide the default system cursor site-wide
    document.documentElement.style.cursor = 'none'


    // Use quickTo for buttery-smooth performance (no layout thrashing)
    const moveDotX = gsap.quickTo(dot, 'x', { duration: 0.05, ease: 'power3.out' })
    const moveDotY = gsap.quickTo(dot, 'y', { duration: 0.05, ease: 'power3.out' })
    const moveRingX = gsap.quickTo(ring, 'x', { duration: 0.4, ease: 'power3.out' })
    const moveRingY = gsap.quickTo(ring, 'y', { duration: 0.4, ease: 'power3.out' })

    const onMouseMove = (e) => {
      moveDotX(e.clientX)
      moveDotY(e.clientY)
      moveRingX(e.clientX)
      moveRingY(e.clientY)
    }

    // Infinite slow rotation on the outer target box
    const rotationTween = gsap.to(ring, {
      rotation: 360,
      duration: 10,
      repeat: -1,
      ease: 'none'
    })

    // Expand target box and speed up rotation over links / buttons
    const onMouseEnterInteractive = () => {
      gsap.to(ring, {
        scale: 1.8,
        opacity: 0.9,
        duration: 0.3,
        ease: 'power2.out'
      })
      gsap.to(dot, { scale: 0.6, opacity: 0.5, duration: 0.2 })
      gsap.to(rotationTween, { timeScale: 4, duration: 0.4 })
    }
    const onMouseLeaveInteractive = () => {
      gsap.to(ring, {
        scale: 1,
        opacity: 0.7,
        duration: 0.4,
        ease: 'power2.out'
      })
      gsap.to(dot, { scale: 1, opacity: 1, duration: 0.3 })
      gsap.to(rotationTween, { timeScale: 1, duration: 0.6 })
    }

    const interactiveEls = document.querySelectorAll('a, button, [role="button"], .card, .tech-item')
    interactiveEls.forEach((el) => {
      el.style.cursor = 'none'
      el.addEventListener('mouseenter', onMouseEnterInteractive)
      el.addEventListener('mouseleave', onMouseLeaveInteractive)
    })

    window.addEventListener('mousemove', onMouseMove)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.documentElement.style.cursor = ''
      interactiveEls.forEach((el) => {
        el.style.cursor = ''
        el.removeEventListener('mouseenter', onMouseEnterInteractive)
        el.removeEventListener('mouseleave', onMouseLeaveInteractive)
      })
      rotationTween.kill()
    }
  }, [])

  return (
    <>
      {/* Inner dot (Diamond) */}
      <div
        ref={dotRef}
        style={{
          display: 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          width: 7,
          height: 7,
          background: 'var(--primary)',
          pointerEvents: 'none',
          zIndex: 99999,
          transform: 'translate(-50%, -50%) rotate(45deg)',
          boxShadow: '0 0 6px var(--primary)',
          willChange: 'transform'
        }}
      />
      {/* Outer target box (Rounded Square) */}
      <div
        ref={ringRef}
        style={{
          display: 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          width: 26,
          height: 26,
          borderRadius: '6px',
          border: '1.2px solid var(--primary)',
          pointerEvents: 'none',
          zIndex: 99998,
          opacity: 0.7,
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
          boxShadow: '0 0 8px rgba(79, 209, 197, 0.2)'
        }}
      />
    </>
  )
}
