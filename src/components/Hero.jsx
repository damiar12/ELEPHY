import React from 'react'

export default function Hero(){
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Transforma tus procesos y lidera el cambio digital.</h1>
        <p>
          Desde el desarrollo de software a medida hasta la ciberseguridad integral. 
          Escuchamos, analizamos y proponemos la tecnología exacta que tu Pyme o Startup necesita para despegar.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => window.location.hash = '#contacto'}>Empezar Proyecto</button>
        </div>
      </div>
      <div className="hero-visual" style={{ background: 'transparent', boxShadow: 'none', padding: 0 }}>
        {/* Nuevo Diseño de Pasos: Roadmap Vertical Profesional */}
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.9)', 
          backdropFilter: 'blur(20px)',
          borderRadius: '24px', 
          padding: '3rem 2.5rem', 
          boxShadow: 'var(--shadow-xl)', 
          border: '1px solid rgba(255,255,255,0.6)',
          position: 'relative'
        }}>
          {/* Fondo decorativo sutil */}
          <div style={{position: 'absolute', top: -50, right: -50, width: 200, height: 200, background: 'var(--primary)', borderRadius: '50%', filter: 'blur(80px)', opacity: 0.1, zIndex: 0}}></div>

          <h3 style={{ fontSize: '1.4rem', marginBottom: '2.5rem', color: 'var(--secondary)', textAlign: 'center', fontWeight: '800', letterSpacing: '-0.5px', position: 'relative', zIndex: 2 }}>
            Nuestra forma de trabajar <span style={{display: 'inline-block', transform: 'translateY(2px)'}}></span>
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative', zIndex: 2 }}>
            {/* Conector Vertical */}
            <div style={{ 
              position: 'absolute', left: '20px', top: '24px', bottom: '40px', width: '2px', 
              background: 'linear-gradient(to bottom, var(--primary) 0%, #E2E8F0 100%)', zIndex: 0, opacity: 0.3
            }}></div>

            {[
              { id: 1, title: 'Cuéntanos tu necesidad', desc: 'Analizamos tus retos y definimos objetivos claros.' },
              { id: 2, title: 'Propuesta y planificación', desc: 'Diseñamos la solución, cronograma y presupuesto.' },
              { id: 3, title: 'Puesta en producción', desc: 'Desarrollo ágil, entrega y validación.' },
              { id: 4, title: 'Mejora continua', desc: 'Soporte activo y evolución de tu producto.' }
            ].map((step) => (
              <div key={step.id} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', position: 'relative' }}>
                 <div style={{ 
                   width: '42px', height: '42px', borderRadius: '12px', 
                   background: step.id === 1 ? 'var(--primary)' : 'white', 
                   color: step.id === 1 ? 'white' : 'var(--primary)',
                   border: step.id === 1 ? 'none' : '2px solid rgba(79, 70, 229, 0.15)',
                   boxShadow: step.id === 1 ? '0 10px 15px -3px rgba(79, 70, 229, 0.3)' : '0 2px 4px rgba(0,0,0,0.02)',
                   display: 'flex', alignItems: 'center', justifyContent: 'center', 
                   fontSize: '1.1rem', fontWeight: '700',
                   flexShrink: 0, zIndex: 1, transition: '0.3s'
                 }}>
                   {step.id}
                 </div>
                 <div style={{ paddingTop: '0.25rem' }}>
                   <h4 style={{ fontSize: '1.05rem', marginBottom: '0.4rem', color: 'var(--secondary)', fontWeight: '700' }}>{step.title}</h4>
                   <p style={{ fontSize: '0.92rem', color: 'var(--text-gray)', lineHeight: '1.5' }}>{step.desc}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
