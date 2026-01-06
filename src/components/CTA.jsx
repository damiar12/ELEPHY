import React from 'react'

export default function CTA(){
  return (
    <section style={{background: 'var(--secondary)', padding: '2.5rem 2rem 1.25rem', textAlign: 'center', color: 'white'}}>
      <h2 style={{fontSize: '2.5rem', marginBottom: '0.75rem'}}>¿Tienes un proyecto en mente?</h2>
      <p style={{marginBottom: '1rem', color: '#94A3B8'}}>Déjanos analizar tus necesidades y proponerte una solución sin compromiso.</p>
      <button className="btn-primary" style={{background: 'white', color: 'var(--primary)'}}>Hablemos Ahora</button>
    </section>
  )
}
