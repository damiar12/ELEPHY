import React from 'react'

export default function Methodology(){
  return (
    <section className="methodology">
      <div className="container">
        <h2 className="section-title">¿Por qué elegir Elephy?</h2>
        <p className="section-subtitle">
          No vendemos humo. Aplicamos una metodología probada para garantizar resultados reales en tu negocio.
        </p>
        <div className="steps">
          <div className="step">
            <span className="step-number">01</span>
            <h4>Diagnóstico</h4>
            <p>Auditamos tus procesos actuales para detectar brechas de eficiencia y seguridad.</p>
          </div>
          <div className="step">
            <span className="step-number">02</span>
            <h4>Diseño a Medida</h4>
            <p>Creamos la arquitectura de software exacta, sin costes ocultos ni funciones innecesarias.</p>
          </div>
          <div className="step">
            <span className="step-number">03</span>
            <h4>Escudo Protector</h4>
            <p>Soporte continuo y ciberseguridad proactiva para que tu negocio nunca se detenga.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
