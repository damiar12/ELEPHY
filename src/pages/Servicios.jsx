import React from 'react'

const ServiceCard = ({ icon, title, description, tags }) => (
  <div className="card" style={{ textAlign: 'left', padding: '2.5rem', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
    <div>
      <div style={{ 
        width: '60px', height: '60px', 
        background: 'var(--light)', borderRadius: '12px', 
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
          background: '#EEF2FF', 
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
  const servicios = [
    {
      icon: "💻",
      title: "Desarrollo Web Full-Stack",
      description: "Creamos plataformas web progresivas (PWA) y sistemas de gestión complejos. Nos enfocamos en la velocidad, SEO y escalabilidad desde el primer día.",
      tags: ["React", "Next.js", "Node.js"]
    },
    {
      icon: "📱",
      title: "Marketing Digital & Facebook Ads",
      description: "Aumentamos tu visibilidad y ventas con campañas pagadas en Facebook/Meta, optimización de conversiones y seguimiento ROI.",
      tags: ["Facebook Ads", "Google Ads", "SEO"]
    },
    {
      icon: "☁️",
      title: "Arquitectura Cloud & DevOps",
      description: "Infraestructura como código. Diseñamos arquitecturas resilientes en AWS o Azure que escalan automáticamente según tu demanda.",
      tags: ["AWS", "Docker", "Kubernetes"]
    },
    {
      icon: "🧠",
      title: "Inteligencia Artificial & Datos",
      description: "Integramos modelos de ML para análisis predictivo, chatbots inteligentes y automatización de procesos complejos.",
      tags: ["Python", "TensorFlow", "OpenAI API"]
    },
    {
      icon: "🎨",
      title: "Diseño de Producto (UI/UX)",
      description: "No solo programamos, diseñamos experiencias. Prototipado, sistemas de diseño y testing con usuarios para asegurar la usabilidad.",
      tags: ["Figma", "Prototyping", "User Research"]
    },
    {
      icon: "📊",
      title: "Business Intelligence & Analytics",
      description: "Transformamos tus datos en decisiones: dashboards, reporting y modelos dimensionales para obtener insights accionables.",
      tags: ["Power BI", "Tableau", "Oracle BI"]
    }
  ]

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Header */}
      <section style={{ background: 'var(--secondary)', color: 'white', padding: '6rem 2rem 4rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span style={{ 
            color: 'var(--accent)', fontWeight: 'bold', letterSpacing: '2px', 
            textTransform: 'uppercase', fontSize: '0.9rem', display: 'block', marginBottom: '1rem' 
          }}>
            Nuestros Servicios
          </span>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', maxWidth: '800px', marginInline: 'auto' }}>
            Ingeniería de software de <span style={{ 
              background: 'var(--gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' 
            }}>clase mundial</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#94A3B8', maxWidth: '600px', margin: '0 auto' }}>
            Ayudamos a equipos ambiciosos a construir productos digitales que definen el futuro.
          </p>
        </div>
      </section>

      {/* Grid de Servicios */}
      <section style={{ padding: '6rem 2rem', background: 'var(--light)' }}>
        <div className="container">
          <div className="grid-3" style={{ 
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' 
          }}>
            {servicios.map((s, i) => <ServiceCard key={i} {...s} />)}
          </div>
        </div>
      </section>

      {/* Why Us / Tech Stack Preview */}
      <section style={{ padding: '6rem 2rem', background: 'white' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2 className="section-title" style={{ textAlign: 'left' }}>Metodología Ágil y Transparente</h2>
            <p className="section-subtitle" style={{ textAlign: 'left', margin: '0 0 2rem 0' }}>
              Olvídate del "caja negra". Trabajamos con sprints semanales, demos continuas y código limpio que tu equipo podrá mantener.
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {['Comunicación diaria vía Slack/Teams', 'Entregables cada 2 semanas', 'QA y Testing automatizado'].map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}>
                  <span style={{ color: 'var(--accent)' }}>✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ 
            background: 'linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 100%)', 
            borderRadius: '24px', padding: '3rem', position: 'relative', overflow: 'hidden'
          }}>
            {/* Abstract visuals */}
            <div style={{ position: 'absolute', top: -20, right: -20, width: 100, height: 100, background: 'var(--primary)', borderRadius: '50%', opacity: 0.1 }}></div>
            <div style={{ position: 'absolute', bottom: -40, left: -20, width: 150, height: 150, background: 'var(--accent)', borderRadius: '50%', opacity: 0.1 }}></div>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem', position: 'relative' }}>¿Listo para escalar?</h3>
            <p style={{ marginBottom: '2rem', color: 'var(--text-gray)', position: 'relative' }}>Agenda una consultoría técnica gratuita de 30 minutos.</p>
            <button className="btn-primary" style={{ position: 'relative', width: '100%' }}>Reservar Llamada</button>
          </div>
        </div>
      </section>
    </div>
  )
}
