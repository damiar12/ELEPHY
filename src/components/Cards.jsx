import React from 'react'
import { Link } from 'react-router-dom'

function Card({image, title, children, to}){
  return (
    <article className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '3rem 2rem' }}>
      <div style={{ height: '140px', width: '100%', marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={image} alt={title} style={{ width: 'auto', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }} />
      </div>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{title}</h3>
      <p style={{ fontSize: '1rem', lineHeight: '1.7' }}>{children}</p>
      <Link className="card-link" to={to} style={{ marginTop: 'auto', fontSize: '1rem' }}>Ver más →</Link>
    </article>
  )
}

export default function Cards(){
  return (
    <section className="main-nav-cards">
      <div className="container">
        <div className="grid-4">
          <Card image="/images/gemini-ordenador.png" title="Nuestros Servicios" to="/servicios">
            Desarrollo web, Apps a medida y migración al Cloud. Solucionamos "marrones" tecnológicos y digitalizamos tu gestión.
          </Card>
          
          <Card image="/images/gemini-trandofrmoaciondigital.png" title="Sectores e Industrias" to="/industrias">
            Llevamos la innovación a sectores críticos: <br/>
            <strong>Logística inteligente</strong> para optimizar costes, <br/>
            <strong>Salud digital</strong> bajo estricta normativa y <br/>
            <strong>Retail avanzado</strong> con integración total de stock. <br/>
            Hablamos el lenguaje de tu industria.
          </Card>
          
          <Card image="/images/gemini cloud.png" title="Stack Tecnológico" to="/tecnologias">
            Expertos en Python, React, Odoo ERP y Microsoft 365. Utilizamos herramientas escalables y seguras.
          </Card>
          
          <Card image="/images/gemini-genereunida.png" title="Sobre Elephy" to="/about-us">
            Más que proveedores, somos tu socio tecnológico. Nuestra metodología: Escuchar, Analizar y Proponer.
          </Card>
        </div>
      </div>
    </section>
  )
}
