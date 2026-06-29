import React, { useRef } from 'react'
import { gsap, ScrollTrigger, useGSAP } from '../gsapSetup'

const stats = [
  { value: 50, suffix: '+', label: 'Proyectos entregados' },
  { value: 5,  suffix: 'x', label: 'ROI medio conseguido' },
  { value: 98, suffix: '%', label: 'Clientes satisfechos' },
  { value: 5,  suffix:' años', label: 'De experiencia' },
]

/**
 * StatsSection — Four bold animated counters that count up
 * when they scroll into view. Background has a subtle parallax glow.
 */
export default function StatsSection() {
  const containerRef = useRef(null)

  useGSAP(() => {
    // Section fade-in
    gsap.from('.stats-section', {
      autoAlpha: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: '.stats-section',
        start: 'top 85%',
        once: true
      }
    })

    // Stagger in each stat card
    gsap.from('.stat-card', {
      y: 60,
      autoAlpha: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.stats-section',
        start: 'top 80%',
        once: true
      }
    })

    // Count-up for each number
    gsap.utils.toArray('.stat-number').forEach((el) => {
      const target = parseFloat(el.dataset.target)
      const obj = { val: 0 }
      gsap.to(obj, {
        val: target,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          once: true
        },
        onUpdate() {
          el.textContent = Number.isInteger(target)
            ? Math.round(obj.val)
            : obj.val.toFixed(1)
        }
      })
    })

    // Parallax glow blob
    gsap.to('.stats-glow', {
      y: -60,
      ease: 'none',
      scrollTrigger: {
        trigger: '.stats-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    })
  }, { scope: containerRef })

  return (
    <section className="stats-section" ref={containerRef}>
      {/* Decorative glow blob */}
      <div className="stats-glow" />

      <div className="container">
        <div className="stats-grid">
          {stats.map(({ value, suffix, label }) => (
            <div key={label} className="stat-card">
              <p className="stat-value">
                <span className="stat-number" data-target={value}>0</span>
                <span className="stat-suffix">{suffix}</span>
              </p>
              <p className="stat-label">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
