import React from 'react'

const Stat = ({ number, label }) => (
  <div style={{ textAlign: 'center' }}>
    <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--primary)', lineHeight: 1 }}>{number}</div>
    <div style={{ fontSize: '0.9rem', color: 'var(--text-gray)', marginTop: '0.5rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>{label}</div>
  </div>
)

const ValueCard = ({ emoji, title, desc }) => (
  <div style={{ padding: '2rem', background: '#F8FAFC', borderRadius: '16px' }}>
    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{emoji}</div>
    <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem' }}>{title}</h3>
    <p style={{ color: 'var(--text-gray)', fontSize: '0.95rem' }}>{desc}</p>
  </div>
)

export default function AboutUs() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero */}
      <section style={{ background: 'var(--secondary)', color: 'white', padding: '6rem 2rem 6rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Más que código, creamos <span style={{ color: 'var(--accent)' }}>valor</span>.</h1>
          <p style={{ fontSize: '1.25rem', color: '#94A3B8', maxWidth: '700px', margin: '0 auto' }}>
            Nacimos con una misión clara: democratizar la tecnología de alto nivel para Pymes y Startups que quieren liderar sus mercados.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ transform: 'translateY(-50px)' }}>
        <div className="container">
          <div style={{ 
            background: 'white', padding: '3rem', borderRadius: '24px', boxShadow: 'var(--shadow-xl)',
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem'
          }}>
            <Stat number="+50" label="Proyectos Entregados" />
            <Stat number="98%" label="Retención de Clientes" />
            <Stat number="+5" label="Años de Experiencia" />
            <Stat number="24/7" label="Soporte Crítico" />
          </div>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: '4rem 2rem 8rem' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <span style={{ color: 'var(--primary)', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Nuestra Historia</span>
            <h2 className="section-title" style={{ textAlign: 'left', marginTop: '1rem' }}>Ingeniería con propósito humano</h2>
            <p style={{ color: 'var(--text-gray)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Elephy comenzó cuando notamos que las grandes consultoras ignoraban a las empresas medianas con gran potencial. Creemos que el software excelente no debería ser un lujo reservado para el Fortune 500.
            </p>
            <p style={{ color: 'var(--text-gray)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Hoy, somos un equipo distribuido de ingenieros, diseñadores y estrategas obsesionados con la calidad, la velocidad y, sobre todo, la honestidad técnica.
            </p>
          </div>
          <div style={{ height: '400px', background: '#EEF2FF', borderRadius: '24px', position: 'relative' }}>
             {/* Placeholder for Team Image */}
             <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontWeight: 'bold', fontSize: '1.5rem', opacity: 0.3 }}>
                [Foto de Equipo / Oficina Moderna]
             </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '6rem 2rem', background: 'white' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Nuestros Principios</h2>
          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <ValueCard emoji="🎯" title="Resultados > Burocracia" desc="Evitamos las reuniones innecesarias. Nos centramos en entregar software que funcione y aporte valor desde la semana 1." />
            <ValueCard emoji="🔍" title="Transparencia Radical" desc="Sin letra pequeña. Te explicamos qué tecnología usamos, por qué, y cuánto costará exactamente." />
            <ValueCard emoji="🚀" title="Innovación Pragmática" desc="No usamos la tecnología de moda porque sí. Usamos lo que tu negocio necesita para escalar de forma estable." />
          </div>
        </div>
      </section>
    </div>
  )
}
