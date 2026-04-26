import React from 'react'

export default function Footer(){
  return (
    <footer id="contacto">
      <div className="footer-content">
        <p style={{marginBottom: '1rem', color: 'white', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}>
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
          <a href="mailto:elephysoftware@gmail.com" style={{color: 'var(--primary)', textDecoration: 'none'}}>elephysoftware@gmail.com</a>
        </p>
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
