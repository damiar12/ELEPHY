import React from 'react'

export default function Footer(){
  return (
    <footer id="contacto">
      <div className="footer-content">
        <div style={{marginBottom: '1rem', display: 'flex', justifyContent: 'center'}}>
          <div style={{fontFamily: 'var(--font-heading)', color: '#5e24cc', fontWeight: 800, fontSize: '1.4rem'}}>
            Elephy
            <div style={{fontSize: '0.7rem', color: 'white', fontWeight: 600, letterSpacing: '1px'}}>DESARROLLO DE SOFTWARE</div>
          </div>
        </div>
        <p style={{marginBottom: '0.75rem', color: '#5e24cc'}}>Tu partner en transformación digital para Pymes y Startups.</p>
        <div className="footer-links" style={{marginBottom: '0.75rem'}}>
          <a href="#">Aviso Legal</a>
          <a href="#">Política de Privacidad</a>
          <a href="#">Cookies</a>
        </div>
        <p style={{fontSize: '0.8rem', color: '#94A3B8'}}>© 2024 Elephy Software. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
