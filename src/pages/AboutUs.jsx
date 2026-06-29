import React, { useRef } from 'react'
import { gsap, ScrollTrigger, useGSAP } from '../gsapSetup'
import HandwrittenHighlight from '../components/HandwrittenHighlight'

const Stat = ({ prefix = '', target, suffix = '', label }) => (
  <div className="about-stat" style={{ textAlign: 'center' }}>
    <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--primary)', lineHeight: 1 }}>
      {target !== undefined ? (
        <>{prefix}<span className="stat-number" data-target={target}>0</span>{suffix}</>
      ) : (
        <>{prefix}{suffix}</>
      )}
    </div>
    <div style={{ fontSize: '0.9rem', color: 'var(--text-gray)', marginTop: '0.5rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>{label}</div>
  </div>
)

const ValueCard = ({ svgIcon, title, desc, accentColor }) => (
  <div className="value-card" style={{
    padding: '2.5rem 2rem',
    background: 'linear-gradient(180deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.4) 100%)',
    borderRadius: '24px',
    border: '1px solid var(--border-color)',
    backdropFilter: 'blur(20px)',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden'
  }}>
    <div style={{ position: 'absolute', top: 0, left: 0, width: '120px', height: '120px', background: accentColor, filter: 'blur(60px)', opacity: 0.15, borderRadius: '50%' }}></div>

    <div className="value-card-icon" style={{
      width: '52px', height: '52px', borderRadius: '16px', background: `${accentColor}1A`,
      color: accentColor, border: `1px solid ${accentColor}33`, display: 'flex', alignItems: 'center', justifyContent: 'center',
      marginBottom: '1.5rem', position: 'relative', zIndex: 2
    }}>
      {svgIcon}
    </div>
    <h3 style={{ marginBottom: '1rem', fontSize: '1.35rem', color: '#f8fafc', fontWeight: '600', position: 'relative', zIndex: 2 }}>{title}</h3>
    <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: '1.6', position: 'relative', zIndex: 2 }}>{desc}</p>
  </div>
)

export default function AboutUs() {
  const containerRef = useRef(null)

  useGSAP(() => {
    // Hero entrance
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    heroTl
      .from('.about-hero-title', { y: 50, autoAlpha: 0, duration: 0.8 })
      .from('.about-hero-desc', { y: 30, autoAlpha: 0, duration: 0.6 }, '-=0.3')

    // Stats pop in with stagger + count-up
    gsap.from('.about-stat', {
      y: 40,
      autoAlpha: 0,
      stagger: 0.12,
      duration: 0.6,
      ease: 'back.out(1.4)',
      scrollTrigger: {
        trigger: '.about-stats',
        start: 'top 80%',
        once: true
      }
    })

    gsap.utils.toArray('.stat-number').forEach((el) => {
      const target = parseFloat(el.dataset.target)
      gsap.to(el, {
        textContent: target,
        duration: 2,
        ease: 'power2.out',
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: '.about-stats',
          start: 'top 80%',
          once: true
        }
      })
    })

    // Story section slide-in
    gsap.from('.about-story-text', {
      x: -50,
      autoAlpha: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: '.about-story',
        start: 'top 75%',
        once: true
      }
    })

    gsap.from('.about-story-image', {
      x: 50,
      autoAlpha: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: '.about-story',
        start: 'top 75%',
        once: true
      }
    })

    // Pre-set value cards to invisible
    gsap.set('.value-card', { autoAlpha: 0, y: 50 })

    // Values cards batch reveal
    ScrollTrigger.batch('.value-card', {
      onEnter: (elements) => {
        gsap.to(elements, {
          y: 0,
          autoAlpha: 1,
          stagger: 0.15,
          duration: 0.7,
          ease: 'power2.out',
          overwrite: true
        })
      },
      start: 'top 90%',
      once: true
    })

    // Valores hover dynamics
    gsap.utils.toArray('.value-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.5)', borderColor: 'rgba(255,255,255,0.2)', duration: 0.4, ease: 'power2.out' })
        gsap.to(card.querySelector('.value-card-icon'), { scale: 1.15, duration: 0.4, ease: 'back.out(2)' })
      })
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { y: 0, boxShadow: 'none', borderColor: 'var(--border-color)', duration: 0.4, ease: 'power2.out' })
        gsap.to(card.querySelector('.value-card-icon'), { scale: 1, duration: 0.4, ease: 'power2.out' })
      })
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef} style={{ paddingTop: '80px' }}>
      {/* Hero */}
      <section style={{ background: 'transparent', color: 'var(--text-dark)', padding: '6rem 2rem 6rem', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '400px', height: '400px', background: 'var(--primary)', filter: 'blur(200px)', opacity: 0.1, zIndex: 0 }}></div>
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <h1 className="about-hero-title" style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>
            Más que código, creamos <HandwrittenHighlight type="circle" color="var(--primary)" delay={0.6}>valor</HandwrittenHighlight>.
          </h1>
          <p className="about-hero-desc" style={{ fontSize: '1.25rem', color: '#94A3B8', maxWidth: '700px', margin: '0 auto' }}>
            Nacimos con una misión clara: democratizar la tecnología de alto nivel para Pymes y Startups que quieren liderar sus mercados.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats" style={{ transform: 'translateY(-50px)' }}>
        <div className="container">
          <div style={{
            background: 'var(--surface)', padding: '3rem', borderRadius: '24px', boxShadow: '0 0 30px rgba(0,0,0,0.5)',
            border: '1px solid var(--border-color)', backdropFilter: 'blur(10px)',
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem'
          }}>
            <Stat prefix="+" target={50} label="Proyectos Entregados" />
            <Stat target={98} suffix="%" label="Retención de Clientes" />
            <Stat prefix="+" target={5} label="Años de Experiencia" />
            <Stat prefix="24/7" label="Soporte Crítico" />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="about-story" style={{ padding: '4rem 2rem 8rem' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div className="about-story-text">
            <span style={{ color: 'var(--primary)', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Nuestra Historia</span>
            <h2 className="section-title" style={{ textAlign: 'left', marginTop: '1rem' }}>Ingeniería con propósito humano</h2>
            <p style={{ color: 'var(--text-gray)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Elephy comenzó cuando notamos que las grandes consultoras ignoraban a las empresas medianas con gran potencial. Creemos que el software excelente no debería ser un lujo reservado para el Fortune 500.
            </p>
            <p style={{ color: 'var(--text-gray)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Hoy, somos un equipo distribuido de ingenieros, diseñadores y estrategas obsesionados con la calidad, la velocidad y, sobre todo, la honestidad técnica.
            </p>
          </div>
          <div className="about-story-image" style={{ minHeight: '400px', borderRadius: '24px', position: 'relative', overflow: 'hidden', border: '1px solid var(--border-color)', background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.92) 0%, rgba(30, 41, 59, 0.88) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
            <img
              src="/images/portadanegocio.jpg"
              alt="Equipo Elephy"
              style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '6rem 2rem', background: 'transparent' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem', color: 'var(--text-dark)' }}>Nuestros principios</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
            <ValueCard
              svgIcon={<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>}
              accentColor="#10B981"
              title="Resultados > Burocracia"
              desc="Evitamos las reuniones innecesarias. Nos centramos en entregar software que funcione y aporte valor desde la semana 1."
            />
            <ValueCard
              svgIcon={<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>}
              accentColor="#3B82F6"
              title="Transparencia Radical"
              desc="Sin letra pequeña. Te explicamos claramente qué arquitectura usamos, por qué la elegimos, y cuánto va a costar sin sorpresas."
            />
            <ValueCard
              svgIcon={<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>}
              accentColor="#F59E0B"
              title="Innovación Pragmática"
              desc="No implementamos la tecnología de moda por ego. Construimos infraestructuras robustas que tu negocio realmente necesita para escalar."
            />
          </div>
        </div>
      </section>
    </div>
  )
}
