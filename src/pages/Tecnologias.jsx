import React from 'react'

const TechCategory = ({ title, techs, note }) => (
  <div style={{ marginBottom: '4rem' }}>
    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', borderBottom: '2px solid #E2E8F0', paddingBottom: '0.5rem', display: 'inline-block' }}>
      {title}
    </h3>
    {note && <p style={{ color: 'var(--text-gray)', margin: '0.5rem 0 1rem', maxWidth: '720px' }}>{note}</p>}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1.5rem' }}>
        {techs.map((t) => (
          <div
            key={t.name}
            style={{
              background: 'white',
              padding: '1.25rem',
              borderRadius: '12px',
              boxShadow: 'var(--shadow-sm)',
              border: '1px solid #F1F5F9',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              transition: '0.18s',
              minHeight: 56
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{ width: 40, height: 40, flex: '0 0 40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {t.logo ? (
                <img src={t.logo} alt={t.name} style={{ width: 36, height: 36, objectFit: 'contain' }} loading="lazy" />
              ) : (
                <div style={{ fontSize: '1.35rem' }}>{t.icon}</div>
              )}
            </div>
            <span style={{
              fontWeight: 600,
              color: 'var(--secondary)',
              fontSize: '0.95rem',
              lineHeight: '1.15rem',
              flex: 1,
              wordBreak: 'break-word',
              overflowWrap: 'break-word'
            }}>{t.name}</span>
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
      { name: 'Postgre', icon: '🐘' },
      { name: 'MySQL', icon: '🛢️' },
      { name: 'Oracle DB', icon: '🗄️' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'Redis', icon: '🔁' },
      { name: 'GraphQL', icon: '◈' }
    ],
    businessIntelligence: [
      { name: 'Oracle BI', icon: '📊' },
      { name: 'Power BI', icon: '📈' },
      { name: 'Tableau', icon: '📉' },
      { name: 'Qlik', icon: '🧭' }
    ],
    cloud: [
      { name: 'AWS', icon: '☁️' },
      { name: 'Azure', icon: '🔷' },
      { name: 'Docker', icon: '🐋' },
      { name: 'Kubernetes', icon: '☸️' }
    ],
    marketing: [
      { name: 'Facebook / Meta Ads', icon: '📣' },
      { name: 'Google Ads', icon: '🔎' },
      { name: 'Market Analysis', icon: '📋' },
      { name: 'Content creator', icon: '🎬' }
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
          <TechCategory title="Business Intelligence" techs={stack.businessIntelligence} note="Soluciones de reporting, analítica y modelado dimensional para convertir datos en decisiones." />
          <TechCategory title="Cloud & DevOps" techs={stack.cloud} />
          <TechCategory title="Marketing Digital" techs={stack.marketing} note="Campañas pagadas, analítica y producción de video para impulsar tu adquisición." />
        </div>
      </section>
    </div>
  )
}
