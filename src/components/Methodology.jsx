import React, { useRef } from 'react'
import { gsap, ScrollTrigger, useGSAP } from '../gsapSetup'

export default function Methodology() {
  const containerRef = useRef(null)

  useGSAP(() => {
    // Title and subtitle slide-up on scroll
    gsap.from('.methodology .section-title', {
      y: 40,
      autoAlpha: 0,
      duration: 0.7,
      scrollTrigger: {
        trigger: '.methodology',
        start: 'top 80%',
        once: true
      }
    })

    gsap.from('.methodology .section-subtitle', {
      y: 30,
      autoAlpha: 0,
      duration: 0.6,
      delay: 0.15,
      scrollTrigger: {
        trigger: '.methodology',
        start: 'top 80%',
        once: true
      }
    })

    // Steps stagger in with count-up on the step numbers
    gsap.from('.step', {
      y: 50,
      autoAlpha: 0,
      stagger: 0.2,
      duration: 0.7,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.steps',
        start: 'top 85%',
        once: true
      }
    })

    // Animate step-number scale for a subtle pop effect
    gsap.from('.step-number', {
      scale: 0.5,
      autoAlpha: 0,
      stagger: 0.2,
      duration: 0.5,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: '.steps',
        start: 'top 85%',
        once: true
      }
    })

    // Animate step-number count up
    gsap.utils.toArray('.step-number').forEach((el, index) => {
      const target = parseInt(el.dataset.target, 10);
      gsap.to(el, {
        textContent: target,
        duration: 1.5,
        delay: index * 0.2,
        ease: 'power2.out',
        snap: { textContent: 1 },
        onUpdate: function() {
          el.textContent = String(Math.floor(this.targets()[0].textContent)).padStart(2, '0');
        },
        scrollTrigger: {
          trigger: '.steps',
          start: 'top 85%',
          once: true
        }
      })
    })
  }, { scope: containerRef })

  return (
    <section className="methodology" ref={containerRef}>
      <div className="container">
        <h2 className="section-title">Mentalidad de Software as a Service</h2>
        <p className="section-subtitle">
          Transformamos tu empresa con la eficiencia, escalabilidad y automatización de un SaaS.
        </p>
        <div className="steps">
          <div className="step">
            <span className="step-number" data-target="1">00</span>
            <h4>Diagnóstico de Rentabilidad</h4>
            <p>No escribimos ni una línea de código sin saber cuánto dinero te va a ahorrar o generar.</p>
          </div>
          <div className="step">
            <span className="step-number" data-target="2">00</span>
            <h4>Despliegue Ágil</h4>
            <p>Nada de proyectos de 6 meses. Entregamos prototipos funcionales (MVPs) en semanas.</p>
          </div>
          <div className="step">
            <span className="step-number" data-target="3">00</span>
            <h4>Socio a Largo Plazo</h4>
            <p>Mantenimiento proactivo y evolución constante de tu IA para que nunca te quedes atrás.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
