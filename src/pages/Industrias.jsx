import React, { useRef } from 'react'
import { gsap, useGSAP } from '../gsapSetup'

const IndustryShowcase = ({ title, description, benefits, align = 'left', color = '#4F46E5', icon, image }) => {
  const isLeft = align === 'left';
  return (
    <div className="industry-showcase" style={{ 
      display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center', marginBottom: '8rem' 
    }}>
      <div style={{ order: isLeft ? 1 : 2, position: 'relative' }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-dark)', display: 'flex', alignItems: 'center', gap: '1.5rem', lineHeight: '1.2' }}>
          <div style={{ 
            width: '64px', height: '64px', borderRadius: '16px', background: `${color}15`, color: color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: `1px solid ${color}30`
          }}>
            {icon}
          </div>
          <span style={{flex: 1}}>{title}</span>
        </h3>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-gray)', margin: '1.5rem 0', lineHeight: '1.6' }}>{description}</p>
        <ul style={{ paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {benefits.map(b => (
            <li key={b} className="industry-benefit" style={{ fontSize: '1.05rem', fontWeight: '500', color: '#cbd5e1', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
               <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
               {b}
            </li>
          ))}
        </ul>
      </div>
      <div className="industry-img-wrapper" style={{ 
        order: isLeft ? 2 : 1, 
        background: `linear-gradient(135deg, ${color}11 0%, ${color}33 100%)`, 
        height: '380px', borderRadius: '24px', 
        border: `1px solid ${color}40`, backdropFilter: 'blur(10px)',
        position: 'relative', overflow: 'hidden',
        boxShadow: `0 20px 40px -10px ${color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer'
      }}>
        {image ? (
          <img className="industry-parallax-img" src={image} alt={title} style={{ width: '100%', height: '115%', objectFit: 'cover', borderRadius: '24px' }} />
        ) : (
          <div style={{ position: 'absolute', top: '15%', left: '15%', right: '15%', bottom: '-20px', background: 'var(--surface)', borderRadius: '12px 12px 0 0', boxShadow: '0 -10px 40px rgba(0,0,0,0.5)', padding: '1.5rem', backdropFilter: 'blur(10px)', border: '1px solid var(--border-color)' }}>
            <div style={{ width: '40%', height: '10px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', marginBottom: '20px' }}></div>
          </div>
        )}
      </div>
    </div>
  )
}

const industries = [
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>,
    title: "Gestorías y Asesorías",
    description: "Digitalizamos procesos administrativos: facturación automática, conciliación y gestión documental segura. Reduce tiempos y errores humanos.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "var(--primary)",
    features: [
      "Automatización de facturas y conciliaciones",
      "Gestión documental segura (cumplimiento RGPD)",
      "Integración con ERPs locales y la Agencia Tributaria"
    ]
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>,
    title: "Negocios tradicionales (Construcción, Fontanería, Carpintería)",
    description: "Soluciones para comercios locales: digitaliza reservas, gestión de clientes y presupuestos. Ahorra papel y tiempo, gana profesionalidad.",
    image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "#10B981",
    features: [
      "CRM sencillo para reservas y presupuestos",
      "Recordatorios automáticos por WhatsApp",
      "Cálculo rápido de costes y materiales"
    ]
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>,
    title: "Logística e Industria 4.0",
    description: "Automatizamos cadenas de suministro con IoT y dashboards en tiempo real. Reduce tiempos de entrega hasta un 30% y optimiza stock.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "#4F46E5",
    features: [
      "Trazabilidad end-to-end con RFID/IoT",
      "Gestión de flotas inteligente (geoloc + consumo)",
      "Integración con ERPs (SAP, Odoo, Microsoft Dynamics)"
    ]
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>,
    title: "Retail & E-commerce",
    description: "Experiencias de compra omnicanal. Unificamos tu tienda física y online para maximizar conversiones y fidelizar clientes.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "#EC4899",
    features: [
      "POS (Punto de Venta) personalizado y sincronizado",
      "Gestión de inventario unificada (no más sobreventa)",
      "Programas de lealtad y cupones automáticos"
    ]
  }
]

export default function Industrias() {
  const containerRef = useRef(null)

  useGSAP(() => {
    // Hero header entrance
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    heroTl
      .from('.industrias-label', { y: 20, autoAlpha: 0, duration: 0.5 })
      .from('.industrias-title', { y: 40, autoAlpha: 0, duration: 0.7 }, '-=0.2')
      .from('.industrias-subtitle', { y: 25, autoAlpha: 0, duration: 0.5 }, '-=0.3')

    // Each industry showcase slides in on scroll
    const showcases = gsap.utils.toArray('.industry-showcase')
    showcases.forEach((showcase, i) => {
      const isLeft = i % 2 === 0
      gsap.from(showcase, {
        x: isLeft ? -60 : 60,
        autoAlpha: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: showcase,
          start: 'top 80%',
          once: true
        }
      })
    })

    // Benefits stagger inside each showcase
    showcases.forEach(showcase => {
      const benefits = showcase.querySelectorAll('.industry-benefit')
      if (benefits.length) {
        gsap.from(benefits, {
          x: -20,
          autoAlpha: 0,
          stagger: 0.1,
          duration: 0.4,
          scrollTrigger: {
            trigger: showcase,
            start: 'top 70%',
            once: true
          }
        })
      }
    })

    // Bottom CTA
    gsap.from('.industrias-bottom-cta', {
      y: 40,
      autoAlpha: 0,
      duration: 0.7,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.industrias-bottom-cta',
        start: 'top 85%',
        once: true
      }
    })

    // Parallax effect on images
    gsap.utils.toArray('.industry-parallax-img').forEach(img => {
      gsap.to(img, {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: {
          trigger: img.closest('.industry-showcase'),
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })
    })

    // Floating animation for image wrappers
    gsap.to('.industry-img-wrapper', {
      y: -12,
      duration: 3,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
      stagger: 0.5
    })

    // Hover interactivity
    gsap.utils.toArray('.industry-img-wrapper').forEach(wrapper => {
      const img = wrapper.querySelector('img')
      if (img) {
        wrapper.addEventListener('mouseenter', () => {
          gsap.to(img, { scale: 1.05, duration: 0.4, ease: 'power2.out' })
          gsap.to(wrapper, { filter: 'brightness(1.1)', duration: 0.4 })
        })
        wrapper.addEventListener('mouseleave', () => {
          gsap.to(img, { scale: 1, duration: 0.4, ease: 'power2.out' })
          gsap.to(wrapper, { filter: 'brightness(1)', duration: 0.4 })
        })
      }
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef} style={{ paddingTop: '80px' }}>
      <section style={{ background: 'transparent', color: 'var(--text-dark)', padding: '6rem 2rem 4rem', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '400px', height: '400px', background: 'var(--primary)', filter: 'blur(200px)', opacity: 0.1, zIndex: 0 }}></div>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="industrias-label" style={{ 
            color: 'var(--accent)', fontWeight: 'bold', letterSpacing: '2px', 
            textTransform: 'uppercase', fontSize: '0.9rem', display: 'block', marginBottom: '1rem' 
          }}>
            Soluciones de nicho probadas
          </span>
          <h1 className="industrias-title" style={{ fontSize: '3.5rem', marginBottom: '1.5rem', maxWidth: '800px', marginInline: 'auto' }}>
            Rentabilidad medible en sectores clave
          </h1>
          <p className="industrias-subtitle" style={{ fontSize: '1.25rem', color: '#94A3B8', maxWidth: '600px', margin: '0 auto' }}>
            Ayudamos a PYMEs a facturar más mediante automatización y estrategia digital.
          </p>
        </div>
      </section>

      <section style={{ padding: '6rem 2rem' }}>
        <div className="container">
          {industries.map((ind, i) => (
            <IndustryShowcase 
              key={ind.title}
              title={ind.title}
              align={i % 2 === 0 ? 'left' : 'right'}
              color={ind.color}
              icon={ind.icon}
              description={ind.description}
              benefits={ind.features}
              image={ind.image}
            />
          ))}

          <div className="industrias-bottom-cta" style={{ 
            marginTop: '8rem', textAlign: 'center', background: 'var(--surface)', border: '1px solid var(--border-color)', backdropFilter: 'blur(10px)', padding: '4rem 2rem', borderRadius: '24px' 
          }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>¿Tu industria no está en la lista?</h3>
            <p style={{ color: 'var(--text-gray)', marginBottom: '2rem', maxWidth: '600px', marginInline: 'auto' }}>
              Nos encantan los nuevos retos. La tecnología es universal, nosotros la adaptamos a tu contexto.
            </p>
            <button className="btn-primary">Contáctanos para evaluar tu caso</button>
          </div>
        </div>
      </section>
    </div>
  )
}
