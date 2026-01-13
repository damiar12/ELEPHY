import React from 'react'
import { Link } from 'react-router-dom'

function Card({image, title, children, to}){
  return (
    <article className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '3rem 2rem' }}>
      <div style={{ height: '140px', width: '100%', marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={image} alt={title} style={{ width: 'auto', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }} />
      </div>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{title}</h3>
      <div style={{ fontSize: '1rem', lineHeight: '1.7', width: '100%', textAlign: 'left' }}>{children}</div>
      <Link className="card-link" to={to} style={{ marginTop: 'auto', fontSize: '1rem', paddingTop: '1rem' }}>Ver más →</Link>
    </article>
  )
}

export default function Cards(){
  const listStyle = { listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: 0 };
  
  return (
    <section className="main-nav-cards">
      <div className="container">
        <div className="grid-4">
          <Card image="/images/gemini-ordenador.png" title="Nuestros servicios" to="/servicios">
            <ul style={listStyle}>
              <li>Desarrollo de Software a medida</li>
              <li>Automatización de procesos</li>
              <li>Integración de Inteligencia Artificial</li>
            </ul>
          </Card>
          
          <Card image="/images/gemini-trandofrmoaciondigital.png" title="Sectores e Industrias" to="/industrias">
            <ul style={listStyle}>
              <li>Inmobiliaria & Construcción</li>
              <li>Salud & Clínicas</li>
              <li>Logística & industria</li>
              <li>Gestorias & Negocios tradicionales</li>
            </ul>
          </Card>
          
          <Card image="/images/gemini cloud.png" title="Stack tecnológico" to="/tecnologias">
            <ul style={listStyle}>
              <li>Python, React & Node.js</li>
              <li>Odoo ERP / CRM</li>
              <li>Infraestructura Cloud (AWS)</li>
            </ul>
          </Card>
          
          <Card image="/images/gemini-genereunida.png" title="Sobre nosotros" to="/about-us">
            <ul style={listStyle}>
              <li>Socios tecnológicos</li>
              <li>Metodología ágil y directa</li>
              <li>5 años experiencia</li>
              <li>Análisis y enfoque en el ROI</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  )
}
