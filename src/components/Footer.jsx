import React from 'react'

export default function Footer(){
  return (
    <footer id="contacto">
      <div className="footer-content">
        <p style={{marginBottom: '1rem', color: 'white', fontSize: '1rem'}}>
          ✉️ <a href="mailto:elephysoftware@gmail.com" style={{color: 'var(--accent)', textDecoration: 'none'}}>elephysoftware@gmail.com</a>
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
