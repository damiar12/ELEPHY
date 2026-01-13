import React from 'react'

export default function Methodology(){
  return (
    <section className="methodology">
      <div className="container">
        <h2 className="section-title">Mentalidad de Software as a Service</h2>
        <p className="section-subtitle">
          Transformamos tu empresa con la eficiencia, escalabilidad y automatización de un SaaS.
        </p>
        <div className="steps">
          <div className="step">
            <span className="step-number">01</span>
            <h4>Diagnóstico de Rentabilidad</h4>
            <p>No escribimos ni una línea de código sin saber cuánto dinero te va a ahorrar o generar.</p>
          </div>
          <div className="step">
            <span className="step-number">02</span>
            <h4>Despliegue Ágil</h4>
            <p>Nada de proyectos de 6 meses. Entregamos prototipos funcionales (MVPs) en semanas.</p>
          </div>
          <div className="step">
            <span className="step-number">03</span>
            <h4>Socio a Largo Plazo</h4>
            <p>Mantenimiento proactivo y evolución constante de tu IA para que nunca te quedes atrás.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
