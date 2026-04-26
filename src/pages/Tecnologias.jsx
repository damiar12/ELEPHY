import React, { useRef } from 'react'
import { gsap, ScrollTrigger, useGSAP } from '../gsapSetup'

const TechCategory = ({ title, techs, note }) => (
  <div className="tech-category" style={{ marginBottom: '4rem' }}>
    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', borderBottom: '2px solid #E2E8F0', paddingBottom: '0.5rem', display: 'inline-block' }}>
      {title}
    </h3>
    {note && <p style={{ color: 'var(--text-gray)', margin: '0.5rem 0 1rem', maxWidth: '720px' }}>{note}</p>}

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1.5rem' }}>
      {techs.map((t) => (
        <div
          key={t.name}
          className="tech-item"
          style={{
            background: 'var(--surface)',
            padding: '1.25rem',
            borderRadius: '12px',
            boxShadow: 'var(--shadow-sm)',
            border: '1px solid var(--border-color)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            minHeight: 56
          }}
        >
          <div style={{ width: 40, height: 40, flex: '0 0 40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {t.logo ? (
              <img src={t.logo} alt={t.name} style={{ width: 36, height: 36, objectFit: 'contain', filter: t.invert ? 'invert(1) brightness(1.5)' : 'none' }} loading="lazy" />
            ) : (
              <div style={{ fontSize: '1.35rem' }}>{t.icon}</div>
            )}
          </div>
          <span style={{
            fontWeight: 600,
            color: 'var(--text-dark)',
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
  const containerRef = useRef(null)

  const stack = {
    frontend: [
      { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Vue 3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
      { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'Streamlit', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/streamlit.svg', invert: true },
      { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' }
    ],
    backend: [
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'FastAPI', logo: 'https://img.icons8.com/color/48/000000/api.png' },
      { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'Oracle DB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
      { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
      { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' }
    ],
    businessIntelligence: [
      { name: 'Power BI', logo: 'https://img.icons8.com/color/48/000000/power-bi.png' },
      { name: 'Tableau', logo: 'https://img.icons8.com/color/48/000000/tableau-software.png' },
      { name: 'QlikView', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/qlik.svg', invert: true },
      { name: 'Chart.js', logo: 'https://img.icons8.com/color/48/000000/combo-chart.png' },
      { name: 'Looker', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/looker.svg', invert: true }
    ],
    cloud: [
      { name: 'AWS', logo: 'https://img.icons8.com/color/48/000000/amazon-web-services.png' },
      { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
      { name: 'Google Cloud', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
      { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' }
    ],
    marketing: [
      { name: 'Facebook / Meta Ads', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg' },
      { name: 'Google Ads', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
      { name: 'Market Analysis', logo: 'https://img.icons8.com/color/48/000000/combo-chart.png' },
      { name: 'Content creator', logo: 'https://img.icons8.com/color/48/000000/camera.png' }
    ]
  }

  useGSAP(() => {
    // Hero header entrance
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    heroTl
      .from('.tech-label', { y: 20, autoAlpha: 0, duration: 0.5 })
      .from('.tech-title', { y: 40, autoAlpha: 0, duration: 0.7 }, '-=0.2')
      .from('.tech-subtitle', { y: 25, autoAlpha: 0, duration: 0.5 }, '-=0.3')

    // Each tech category title slides in on scroll
    const categories = gsap.utils.toArray('.tech-category')
    categories.forEach(cat => {
      gsap.from(cat.querySelector('h3'), {
        x: -30,
        autoAlpha: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: cat,
          start: 'top 85%',
          once: true
        }
      })
    })

    // Pre-set tech items to invisible
    gsap.set('.tech-item', { autoAlpha: 0, y: 30 })

    // Tech items batch reveal
    ScrollTrigger.batch('.tech-item', {
      onEnter: (elements) => {
        gsap.to(elements, {
          y: 0,
          autoAlpha: 1,
          stagger: 0.05,
          duration: 0.5,
          ease: 'power2.out',
          overwrite: true
        })
      },
      start: 'top 90%',
      once: true
    })

    // Magnetic hover effect (desktop only)
    if (window.matchMedia("(min-width: 768px)").matches) {
      document.querySelectorAll('.tech-item').forEach(item => {
        const xTo = gsap.quickTo(item, "x", { duration: 0.4, ease: "power3" });
        const yTo = gsap.quickTo(item, "y", { duration: 0.4, ease: "power3" });

        item.addEventListener('mousemove', (e) => {
          const rect = item.getBoundingClientRect();
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;
          xTo((e.clientX - cx) * 0.15);
          yTo((e.clientY - cy) * 0.15);
        });

        item.addEventListener('mouseleave', () => {
          xTo(0);
          yTo(0);
        });
      });
    }
  }, { scope: containerRef })

  return (
    <div ref={containerRef} style={{ paddingTop: '80px' }}>
      <section style={{ background: 'transparent', color: 'var(--text-dark)', padding: '6rem 2rem 4rem', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '400px', height: '400px', background: 'var(--primary)', filter: 'blur(200px)', opacity: 0.1, zIndex: 0 }}></div>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="tech-label" style={{ 
            color: 'var(--accent)', fontWeight: 'bold', letterSpacing: '2px', 
            textTransform: 'uppercase', fontSize: '0.9rem', display: 'block', marginBottom: '1rem' 
          }}>
            Nuestro Stack
          </span>
          <h1 className="tech-title" style={{ fontSize: '3.5rem', marginBottom: '1.5rem', maxWidth: '800px', marginInline: 'auto' }}>
            Tecnologías modernas, rendimiento sólido
          </h1>
          <p className="tech-subtitle" style={{ fontSize: '1.25rem', color: '#94A3B8', maxWidth: '600px', margin: '0 auto' }}>
            No nos casamos con ninguna herramienta, pero elegimos las mejores para cada problema.
          </p>
        </div>
      </section>

      <section style={{ padding: '6rem 2rem', background: 'transparent' }}>
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
