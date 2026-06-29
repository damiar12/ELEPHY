import React, { useEffect, useRef, useState } from 'react'
import { gsap } from '../gsapSetup'

// The list of technologies to show in the 3D Sphere
const TECH_ITEMS = [
  { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Vue 3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', invert: true },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'FastAPI', logo: 'https://img.icons8.com/color/48/000000/api.png' },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  { name: 'Power BI', logo: 'https://img.icons8.com/color/48/000000/power-bi.png' },
  { name: 'Tableau', logo: 'https://img.icons8.com/color/48/000000/tableau-software.png' },
  { name: 'AWS', logo: 'https://img.icons8.com/color/48/000000/amazon-web-services.png' },
  { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
  { name: 'Google Cloud', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' }
]

export default function TechSphere3D() {
  const containerRef = useRef(null)
  const [items, setItems] = useState([])
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const velocityRef = useRef({ x: 0.005, y: 0.005 }) // Automatic spin speed
  const mouseRef = useRef({ x: 0, y: 0 })
  const isHoveredRef = useRef(false)

  // 1. Initialize coordinates on a unit sphere (Fibonacci Distribution)
  useEffect(() => {
    const N = TECH_ITEMS.length
    const sphereRadius = 180 // Radius in pixels
    const list = TECH_ITEMS.map((item, i) => {
      // Fibonacci sphere algorithm to distribute points evenly
      const phi = Math.acos(-1 + (2 * (i + 0.5)) / N)
      const theta = Math.sqrt(N * Math.PI) * phi

      return {
        ...item,
        x: Math.cos(theta) * Math.sin(phi) * sphereRadius,
        y: Math.sin(theta) * Math.sin(phi) * sphereRadius,
        z: Math.cos(phi) * sphereRadius
      }
    })
    setItems(list)
  }, [])

  // 2. Continuous rotation loop
  useEffect(() => {
    let animationFrameId
    const radius = 180
    const depth = 450 // Camera distance perspective

    const updateSphere = () => {
      // Rotate coordinates based on velocities
      let rx = velocityRef.current.x
      let ry = velocityRef.current.y

      // If hovered, adjust velocity smoothly toward mouse displacement
      if (isHoveredRef.current && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        // Speed up based on distance from center
        const targetRx = -((mouseRef.current.y - cy) / (rect.height / 2)) * 0.04
        const targetRy = ((mouseRef.current.x - cx) / (rect.width / 2)) * 0.04
        
        velocityRef.current.x += (targetRx - velocityRef.current.x) * 0.1
        velocityRef.current.y += (targetRy - velocityRef.current.y) * 0.1
      } else {
        // Slow down or return to base auto spin when mouse leaves
        velocityRef.current.x += (0.005 - velocityRef.current.x) * 0.05
        velocityRef.current.y += (0.006 - velocityRef.current.y) * 0.05
      }

      setItems(prevItems =>
        prevItems.map(item => {
          // Rotate around X-axis
          const cosX = Math.cos(rx)
          const sinX = Math.sin(rx)
          const y1 = item.y * cosX - item.z * sinX
          const z1 = item.z * cosX + item.y * sinX

          // Rotate around Y-axis
          const cosY = Math.cos(ry)
          const sinY = Math.sin(ry)
          const x2 = item.x * cosY - z1 * sinY
          const z2 = z1 * cosY + item.x * sinY

          return {
            ...item,
            x: x2,
            y: y1,
            z: z2
          }
        })
      )

      animationFrameId = requestAnimationFrame(updateSphere)
    }

    if (items.length > 0) {
      animationFrameId = requestAnimationFrame(updateSphere)
    }

    return () => cancelAnimationFrame(animationFrameId)
  }, [items.length])

  // Mouse handlers
  const handleMouseMove = (e) => {
    mouseRef.current = { x: e.clientX, y: e.clientY }
  }

  const handleMouseEnter = () => {
    isHoveredRef.current = true
  }

  const handleMouseLeave = () => {
    isHoveredRef.current = false
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        width: '320px',
        height: '320px',
        margin: '0 auto',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        perspective: '800px',
        cursor: 'grab',
        touchAction: 'none'
      }}
    >
      {/* Decorative center glow orb */}
      <div
        style={{
          position: 'absolute',
          width: '180px',
          height: '180px',
          background: 'radial-gradient(circle, rgba(79, 209, 197, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(30px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {items.map((item, idx) => {
        // Perspective projection calculation
        const cameraDistance = 380
        const scale = cameraDistance / (cameraDistance - item.z) // Projection scale factor
        const opacity = Math.max(0.15, (item.z + 180) / 360 * 0.85 + 0.15)
        const zIndex = Math.round(item.z + 200)

        // Project coordinates
        const posX = item.x * scale
        const posY = item.y * scale

        return (
          <div
            key={idx}
            style={{
              position: 'absolute',
              transform: `translate3d(${posX}px, ${posY}px, 0) scale(${scale})`,
              opacity: opacity,
              zIndex: zIndex,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.4rem',
              pointerEvents: 'none', // Allow mouse events to pass to parent container
              transition: 'opacity 0.1s ease',
              willChange: 'transform, opacity'
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'var(--surface)',
                border: '1px solid var(--border-color)',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'var(--shadow-md)',
                padding: '8px'
              }}
            >
              <img
                src={item.logo}
                alt={item.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  filter: item.invert ? 'invert(1) brightness(1.5)' : 'none'
                }}
              />
            </div>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: '700',
                color: 'var(--text-dark)',
                background: 'rgba(12, 18, 32, 0.65)',
                padding: '2px 6px',
                borderRadius: '6px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                whiteSpace: 'nowrap',
                textShadow: '0 1px 2px rgba(0,0,0,0.5)'
              }}
            >
              {item.name}
            </span>
          </div>
        )
      })}
    </div>
  )
}
