import React from 'react'

const IndustryShowcase = ({ title, description, benefits, align = 'left', color = '#4F46E5', icon, image }) => {
  const isLeft = align === 'left';
  return (
    <div style={{ 
      display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center', marginBottom: '6rem' 
    }}>
      <div style={{ order: isLeft ? 1 : 2, position: 'relative' }}>
        <div style={{ 
          width: '50px', height: '50px', borderRadius: '50%', background: color, opacity: 0.1, position: 'absolute', top: '-10px', left: '-10px'
        }}></div>
        <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--secondary)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontSize: '2.5rem' }}>{icon}</span> {title}
        </h3>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-gray)', marginBottom: '1.5rem' }}>{description}</p>
        <ul style={{ borderLeft: `3px solid ${color}`, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          {benefits.map(b => (
            <li key={b} style={{ fontSize: '0.95rem', fontWeight: '500' }}>{b}</li>
          ))}
        </ul>
      </div>
      <div style={{ 
        order: isLeft ? 2 : 1, 
        background: `linear-gradient(135deg, ${color}11 0%, ${color}33 100%)`, 
        height: '300px', borderRadius: '24px', 
        position: 'relative', overflow: 'hidden',
        boxShadow: 'var(--shadow-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        {image ? (
          <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px' }} />
        ) : (
          <div style={{ position: 'absolute', top: '15%', left: '15%', right: '15%', bottom: '-20px', background: 'white', borderRadius: '12px 12px 0 0', boxShadow: '0 -10px 40px rgba(0,0,0,0.1)', padding: '1.5rem' }}>
            <div style={{ width: '40%', height: '10px', background: '#E2E8F0', borderRadius: '10px', marginBottom: '20px' }}></div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Industrias() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <section style={{ background: 'var(--secondary)', color: 'white', padding: '6rem 2rem 4rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span style={{ 
            color: 'var(--accent)', fontWeight: 'bold', letterSpacing: '2px', 
            textTransform: 'uppercase', fontSize: '0.9rem', display: 'block', marginBottom: '1rem' 
          }}>
            Soluciones de nicho probadas
          </span>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', maxWidth: '800px', marginInline: 'auto' }}>
            Rentabilidad medible en sectores clave
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#94A3B8', maxWidth: '600px', margin: '0 auto' }}>
            Ayudamos a PYMEs a facturar más mediante automatización y estrategia digital.
          </p>
        </div>
      </section>

      <section style={{ padding: '6rem 2rem' }}>
        <div className="container">
          <IndustryShowcase 
            title="Gestorías y Asesorías"
            align="left"
            color="#4F46E5"
            icon="📁"
            description="Digitalizamos procesos administrativos: facturación automática, conciliación y gestión documental segura. Reduce tiempos y errores humanos."
            benefits={["Automatización de facturas y conciliaciones", "Gestión documental segura (cumplimiento RGPD)", "Integración con ERPs locales y la Agencia Tributaria"]}
            image={'/images/jambosenmesacongrafico.png'}
          />

          <IndustryShowcase 
            title="Negocios tradicionales (Construcción, Fontanería, Carpintería)"
            align="right"
            color="#10B981"
            icon="🔨"
            description="Soluciones para comercios locales: digitaliza reservas, gestión de clientes y presupuestos. Ahorra papel y tiempo, gana profesionalidad."
            benefits={["Presupuestos y órdenes digitales con firma electrónica", "Agenda y recordatorios automáticos", "Catálogo digital y pedidos simples"]}
            image={'/images/bakery.png'}
          />

          <IndustryShowcase 
            title="Logística e Industria 4.0" 
            align="left"
            color="#4F46E5"
            icon="🏭"
            description="Automatizamos cadenas de suministro con IoT y dashboards en tiempo real. Reduce tiempos de entrega hasta un 30% y optimiza stock."
            benefits={["Trazabilidad end-to-end con RFID/IoT", "Gestión de flotas inteligente (geoloc + consumo)", "Integración con ERPs (SAP, Odoo, Microsoft Dynamics)"]}
            image={'/images/carreteriaslogisitca.png'}
          />

          <IndustryShowcase 
            title="Retail & E-commerce" 
            align="right"
            color="#EC4899"
            icon="🛍️"
            description="Experiencias de compra omnicanal. Unificamos tu tienda física y online para maximizar conversiones y fidelizar clientes."
            benefits={["POS (Punto de Venta) personalizado y sincronizado", "Gestión de inventario unificada (no más sobreventa)", "Programas de lealtad y cupones automáticos"]}
            image={'/images/Shooping-compras.png'}
          />

          <div style={{ 
            marginTop: '8rem', textAlign: 'center', background: '#F8FAFC', padding: '4rem 2rem', borderRadius: '24px' 
          }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>¿Tu industria no está en la lista?</h3>
            <p style={{ color: 'var(--text-gray)', marginBottom: '2rem', maxWidth: '600px', marginInline: 'auto' }}>
              Nos encantan los nuevos retos. La tecnología es universal, nosotros la adaptamos a tu contexto.
            </p>
            <button className="btn-primary">Contáctanos para evaluar tu caso</button>
          </div>
        </div>
      </section>
    </div>
  )
}
