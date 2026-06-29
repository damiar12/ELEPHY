import React, { useRef, useState } from 'react'
import { gsap, useGSAP } from '../gsapSetup'

const projects = [
  {
    title: 'Aplicacion web para academia',
    tag: 'Frontend, backend y APIs',
    videoId: 'd6PFReHTL9k',
    description: 'Plataforma completa con formacion, calculadoras, scraping web y conexiones API con distintos servicios.'
  },
  {
    title: 'Gestion de partes y fichaje con Odoo',
    tag: 'ERP y operaciones',
    videoId: 'SC0RV49--k0',
    description: 'Sistema para partes de trabajo y control horario integrado con Odoo, pensado para centralizar procesos internos.'
  },
  {
    title: 'Web corporativa con video y contacto',
    tag: 'Web de empresa',
    videoId: 'Xdfo06fLC8Y',
    description: 'Pagina web orientada a captar contactos, presentar servicios y reforzar la confianza con contenido audiovisual.'
  },
  {
    title: 'Ecommerce conectado a stock',
    tag: 'Comercio online',
    videoId: '9VSmGo5C2pQ',
    description: 'Tienda online con integracion de stock para mantener productos, disponibilidad y venta bajo control.'
  }
]

// YouTube can return a valid grey placeholder for maxresdefault on new uploads,
// so sddefault is the most reliable first thumbnail while processing finishes.
const thumbnailQualities = ['sddefault', 'hqdefault', 'mqdefault']

function YouTubeThumbnail({ videoId }) {
  const [qualityIndex, setQualityIndex] = useState(0)

  return (
    <img
      src={`https://i.ytimg.com/vi/${videoId}/${thumbnailQualities[qualityIndex]}.jpg`}
      alt=""
      loading="lazy"
      onError={() => {
        setQualityIndex((currentIndex) => (
          Math.min(currentIndex + 1, thumbnailQualities.length - 1)
        ))
      }}
    />
  )
}

export default function ProjectVideos() {
  const sectionRef = useRef(null)
  const [activeVideo, setActiveVideo] = useState(null)

  useGSAP(() => {
    gsap.from('.project-video-card', {
      y: 40,
      autoAlpha: 0,
      duration: 0.65,
      stagger: 0.12,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        once: true
      }
    })
  }, { scope: sectionRef })

  return (
    <section className="project-videos" ref={sectionRef}>
      <div className="container">
        <div className="project-videos-header">
          <span className="section-kicker">Proyectos reales</span>
          <h2 className="section-title">Soluciones en funcionamiento</h2>
          <p className="section-subtitle">
            Casos de exito con desarrollos reales: webs, ecommerce, integraciones ERP y asistentes IA conectados a datos de negocio.
          </p>
        </div>

        <div className="project-video-grid">
          <article className="project-video-card featured-project-card">
            <div className="ai-odoo-preview" aria-hidden="true">
              <div className="ai-odoo-topbar">
                <div className="ai-odoo-avatar">N</div>
                <div>
                  <strong>Asistente IA Odoo</strong>
                  <span>Datos en tiempo real · tool calling · voz</span>
                </div>
                <em>Conectado</em>
              </div>
              <div className="ai-odoo-body">
                <div className="ai-odoo-user-msg">dime las ultimas compras</div>
                <div className="ai-odoo-result">
                  <span className="ai-tool-pill">odoo_compras</span>
                  <p>36 ordenes de compra por un total de <strong>4.811,39 €</strong></p>
                  <div className="ai-table">
                    <div>Orden</div><div>Proveedor</div><div>Total</div>
                    <div>P00098</div><div>Proveedor industrial SL</div><div>217,88 €</div>
                    <div>P00101</div><div>Materiales Castellon</div><div>178,52 €</div>
                    <div>P00106</div><div>Saturn S.A.</div><div>114,89 €</div>
                  </div>
                </div>
                <div className="ai-input-bar">Escribe o habla con tu ERP...</div>
              </div>
            </div>
            <div className="project-video-copy featured-project-copy">
              <span>IA + Odoo + MCP</span>
              <h3>MCP para Odoo: facturas por foto y chatbot operativo</h3>
              <p>
                Hemos desarrollado un MCP y un software conectado al ERP para enviar fotos de facturas y registrarlas automaticamente en Odoo.
                El mismo sistema incluye un chatbot con tool calling capaz de leer datos del ERP, generar graficos y escribir informacion tanto por texto como por voz.
              </p>
              <div className="featured-project-points">
                <span>Facturas por foto</span>
                <span>Lectura y escritura en ERP</span>
                <span>Consultas por voz</span>
                <span>Graficos en tiempo real</span>
              </div>
            </div>
          </article>

          {projects.map((project) => (
            <article className="project-video-card" key={project.videoId}>
              <div className="video-frame">
                {activeVideo === project.videoId ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${project.videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                    title={project.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <button
                    className="video-poster"
                    type="button"
                    onClick={() => setActiveVideo(project.videoId)}
                    aria-label={`Reproducir video: ${project.title}`}
                  >
                    <YouTubeThumbnail videoId={project.videoId} />
                    <span className="video-poster-overlay" />
                    <span className="video-play-button" aria-hidden="true">
                      <span />
                    </span>
                  </button>
                )}
              </div>
              <div className="project-video-copy">
                <span>{project.tag}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
