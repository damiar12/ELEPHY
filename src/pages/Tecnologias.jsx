import React from 'react'

const TechCategory = ({ title, techs }) => (
  <div style={{ marginBottom: '4rem' }}>
    <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', borderBottom: '2px solid #E2E8F0', paddingBottom: '0.5rem', display: 'inline-block' }}>
      {title}
    </h3>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1.5rem' }}>
      {techs.map((t) => (
        <div key={t.name} style={{ 
          background: 'white', padding: '1.5rem', borderRadius: '12px', 
          boxShadow: 'var(--shadow-sm)', border: '1px solid #F1F5F9',
          display: 'flex', alignItems: 'center', gap: '1rem',
          transition: '0.2s'
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <div style={{ fontSize: '1.5rem' }}>{t.icon}</div>
          <span style={{ fontWeight: '600', color: 'var(--secondary)' }}>{t.name}</span>
        </div>
      ))}
    </div>
  </div>
)

export default function Tecnologias() {
  const stack = {
    frontend: [
      { name: 'React.js', icon: '⚛️' },
      { name: 'Vue 3', icon: '🟢' },
      { name: 'Next.js', icon: '▲' },
      { name: 'Tailwind CSS', icon: '🎨' },
      { name: 'TypeScript', icon: '📘' }
    ],
    backend: [
      { name: 'Python', icon: '🐍' },
      { name: 'Node.js', icon: '🟢' },
      { name: 'FastAPI', icon: '⚡' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'GraphQL', icon: '◈' }
    ],
    cloud: [
      { name: 'AWS', icon: '☁️' },
      { name: 'Google Cloud', icon: '☁️' },
      { name: 'Docker', icon: '🐋' },
      { name: 'Kubernetes', icon: '☸️' }
    ],
    mobile: [
      { name: 'React Native', icon: '📱' },
      { name: 'Flutter', icon: '🐦' }
    ]
  }

  return (
    <div style={{ paddingTop: '80px' }}>
      <section style={{ background: 'var(--secondary)', color: 'white', padding: '6rem 2rem 4rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span style={{ 
            color: 'var(--accent)', fontWeight: 'bold', letterSpacing: '2px', 
            textTransform: 'uppercase', fontSize: '0.9rem', display: 'block', marginBottom: '1rem' 
          }}>
            Nuestro Stack
          </span>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', maxWidth: '800px', marginInline: 'auto' }}>
            Tecnologías modernas, rendimiento sólido
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#94A3B8', maxWidth: '600px', margin: '0 auto' }}>
            No nos casamos con ninguna herramienta, pero elegimos las mejores para cada problema.
          </p>
        </div>
      </section>

      <section style={{ padding: '6rem 2rem', background: '#F8FAFC' }}>
        <div className="container">
          <TechCategory title="Frontend & UI" techs={stack.frontend} />
          <TechCategory title="Backend & API" techs={stack.backend} />
          <TechCategory title="Cloud & DevOps" techs={stack.cloud} />
          <TechCategory title="Mobile Development" techs={stack.mobile} />
        </div>
      </section>
    </div>
  )
}
