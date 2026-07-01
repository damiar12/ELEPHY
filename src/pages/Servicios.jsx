import React, { useRef } from 'react'
import { gsap, ScrollTrigger, useGSAP } from '../gsapSetup'
import HandwrittenHighlight from '../components/HandwrittenHighlight'

const ServiceCard = ({ icon, title, description, tags }) => (
  <div className="card service-card" style={{ textAlign: 'left', padding: '2.5rem', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
    <div>
      <div style={{ 
        width: '60px', height: '60px', 
        background: 'rgba(79, 209, 197, 0.1)', borderRadius: '12px', 
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '2rem', marginBottom: '1.5rem',
        color: 'var(--primary)'
      }}>
        {icon}
      </div>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{title}</h3>
      <p style={{ color: 'var(--text-gray)', marginBottom: '1.5rem', lineHeight: '1.7' }}>{description}</p>
    </div>
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      {tags.map(tag => (
        <span key={tag} style={{ 
          fontSize: '0.75rem', 
          padding: '0.25rem 0.75rem', 
          borderRadius: '20px', 
          background: 'rgba(79, 209, 197, 0.1)', 
          color: 'var(--primary)',
          fontWeight: '600'
        }}>
          {tag}
        </span>
      ))}
    </div>
  </div>
)

export default function Servicios() {
  const containerRef = useRef(null)
  const contactHref = 'mailto:elephysoftware@gmail.com?subject=Consulta%20t%C3%A9cnica%20gratuita&body=Hola%20Elephy%2C%0A%0AMe%20gustar%C3%ADa%20reservar%20una%20consulta%20t%C3%A9cnica%20gratuita%20para%20valorar%20mi%20proyecto.%0A%0AGracias.'

  const servicios = [
    {
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>,
      title: "Service as a Software",
      description: "Desarrollo de software a medida adaptado a tus necesidades específicas. Creamos soluciones personalizadas que automatizan y optimizan tus procesos de negocio.",
      tags: ["Python", "React", "Node.js"]
    },
    {
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="16" y1="16" x2="16.01" y2="16"></line></svg>,
      title: "Automatización & IA",
      description: "Agentes inteligentes que atienden a tus clientes y gestionan tus datos 24/7. Chatbots, análisis predictivo y automatización de procesos complejos.",
      tags: ["Agentes IA", "ML" , "Computer Vision"]
    },
    {
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>,
      title: "Rescate Tecnológico",
      description: "¿Tu sistema actual falla? Auditamos, reparamos y eliminamos tu deuda técnica para que escales sin miedo. Refactoring y migración cloud.",
      tags: ["Refactoring", "Azure", "Google Cloud"]
    },
    {
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>,
      title: "Business Intelligence & Analítica",
      description: "Transformamos tus datos en decisiones: dashboards, reporting y modelos dimensionales para obtener insights accionables.",
      tags: ["Power BI", "Tableau", "Oracle BI"]
    },
    {
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>,
      title: "Marketing Digital & Facebook Ads",
      description: "Aumentamos tu visibilidad y ventas con campañas pagadas en Facebook/Meta, optimización de conversiones y seguimiento ROI.",
      tags: ["Facebook Ads", "Google Ads", "SEO"]
    },
    {
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>,
      title: "Diseño de Producto (UI/UX)",
      description: "No solo programamos, diseñamos experiencias. Prototipado, sistemas de diseño y testing con usuarios para asegurar la usabilidad.",
      tags: ["Figma", "Prototyping", "User Research"]
    }
    ,{
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"/></svg>,
      title: "Pentest As-A-Service",
      description: "Evaluaciones de seguridad continuas sobre tu infraestructura digital.Anticipamos vulnerabilidades mediante simulaciones de ataque autónomas.Análisis de exposición en tiempo real mediante panel de control.",
      tags: ["Red Team", "OWASP", "CVE Scanning"]
}
  ]

  useGSAP(() => {
    // Hero header entrance
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    heroTl
      .from('.servicios-label', { y: 20, autoAlpha: 0, duration: 0.5 })
      .from('.servicios-title', { y: 40, autoAlpha: 0, duration: 0.7 }, '-=0.2')
      .from('.servicios-subtitle', { y: 25, autoAlpha: 0, duration: 0.5 }, '-=0.3')

    // Pre-set service cards to invisible
    gsap.set('.service-card', { autoAlpha: 0, y: 60 })

    // Service cards batch reveal on scroll
    ScrollTrigger.batch('.service-card', {
      onEnter: (elements) => {
        gsap.to(elements, {
          y: 0,
          autoAlpha: 1,
          stagger: 0.12,
          duration: 0.7,
          ease: 'power2.out',
          overwrite: true
        })
      },
      start: 'top 90%',
      once: true
    })

    // Methodology section entrance
    gsap.from('.servicios-methodology', {
      y: 50,
      autoAlpha: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: '.servicios-methodology',
        start: 'top 80%',
        once: true
      }
    })

    // Checkmarks stagger
    gsap.from('.servicios-check', {
      x: -30,
      autoAlpha: 0,
      stagger: 0.15,
      duration: 0.5,
      scrollTrigger: {
        trigger: '.servicios-methodology',
        start: 'top 75%',
        once: true
      }
    })

    // CTA box scale-in
    gsap.from('.servicios-cta-box', {
      scale: 0.9,
      autoAlpha: 0,
      duration: 0.7,
      ease: 'back.out(1.4)',
      scrollTrigger: {
        trigger: '.servicios-cta-box',
        start: 'top 85%',
        once: true
      }
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef} style={{ paddingTop: '80px' }}>
      {/* Hero Header */}
      <section style={{ background: 'transparent', color: 'var(--text-dark)', padding: '6rem 2rem 4rem', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '400px', height: '400px', background: 'var(--primary)', filter: 'blur(200px)', opacity: 0.1, zIndex: 0 }}></div>
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <span className="servicios-label" style={{ 
            color: 'var(--primary)', fontWeight: 'bold', letterSpacing: '2px', 
            textTransform: 'uppercase', fontSize: '0.9rem', display: 'block', marginBottom: '1rem' 
          }}>
            Nuestros Servicios
          </span>
          <h1 className="servicios-title" style={{ fontSize: '3.5rem', marginBottom: '1.5rem', maxWidth: '800px', marginInline: 'auto' }}>
            Tu Ecosistema Digital <HandwrittenHighlight type="double-underline" color="var(--primary)" delay={0.6}>
              <span style={{ 
                background: 'var(--gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' 
              }}>360º</span>
            </HandwrittenHighlight>
          </h1>
          <p className="servicios-subtitle" style={{ fontSize: '1.25rem', color: '#94A3B8', maxWidth: '600px', margin: '0 auto' }}>
            Sistemas diseñados para vender, no solo para "estar en internet".
          </p>
        </div>
      </section>

      {/* Grid de Servicios */}
      <section style={{ padding: '6rem 2rem', background: 'transparent' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' 
          }}>
            {servicios.map((s, i) => <ServiceCard key={i} {...s} />)}
          </div>
        </div>
      </section>

      {/* Why Us / Tech Stack Preview */}
      <section style={{ padding: '6rem 2rem', background: 'transparent' }}>
        <div className="container servicios-methodology" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2 className="section-title" style={{ textAlign: 'left' }}>Metodología Ágil y Transparente</h2>
            <p className="section-subtitle" style={{ textAlign: 'left', margin: '0 0 2rem 0' }}>
              Olvídate del "caja negra". Entregamos MVPs en semanas, no en meses.
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {['Diagnóstico de rentabilidad antes de escribir código', 'Entregables funcionales cada 2 semanas', 'Soporte proactivo y evolución continua'].map(item => (
                <li key={item} className="servicios-check" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}>
                  <span style={{ color: 'var(--accent)' }}>✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="servicios-cta-box" style={{ 
            background: 'var(--surface)', border: '1px solid var(--border-color)', backdropFilter: 'blur(10px)', 
            borderRadius: '24px', padding: '3rem', position: 'relative', overflow: 'hidden'
          }}>
            <div style={{ position: 'absolute', top: -20, right: -20, width: 100, height: 100, background: 'var(--primary)', borderRadius: '50%', opacity: 0.1 }}></div>
            <div style={{ position: 'absolute', bottom: -40, left: -20, width: 150, height: 150, background: 'var(--accent)', borderRadius: '50%', opacity: 0.1 }}></div>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem', position: 'relative' }}>¿Listo para escalar?</h3>
            <p style={{ marginBottom: '2rem', color: 'var(--text-gray)', position: 'relative' }}>Agenda una consultoría técnica gratuita de 30 minutos.</p>
            <a href={contactHref} className="btn-primary" style={{ position: 'relative', width: '100%', display: 'inline-block', textAlign: 'center' }}>Reservar consulta</a>
          </div>
        </div>
      </section>
    </div>
  )
}
