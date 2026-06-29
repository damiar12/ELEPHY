import React, { useRef } from 'react'
import { gsap, useGSAP } from '../gsapSetup'

/**
 * HandwrittenHighlight
 * Wraps a word or text span and draws a beautiful, organic handwritten SVG shape around or below it.
 * Sourced/inspired by 21st.dev/kokonutd components, built with GSAP for performance.
 *
 * Props:
 *   - children: React node to wrap
 *   - type: 'circle' | 'underline' | 'double-underline'
 *   - color: Stroke color (default: 'var(--primary)')
 *   - delay: Delay before drawing starts (in seconds)
 *   - strokeWidth: Thickness of the scribble line
 */
export default function HandwrittenHighlight({
  children,
  type = 'circle',
  color = 'var(--primary)',
  delay = 0.2,
  strokeWidth = 3.5
}) {
  const containerRef = useRef(null)
  const pathRef = useRef(null)

  useGSAP(() => {
    const path = pathRef.current
    if (!path) return

    // Get the exact SVG path length
    const length = path.getTotalLength()

    // Setup initial dash stroke to hide path
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
      stroke: color
    })

    // Animate the path drawing when in view
    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 1.6,
      delay: delay,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 88%',
        once: true
      }
    })
  }, { scope: containerRef, dependencies: [type, color, delay] })

  // Select path geometry based on type
  // Bounding box of SVG is set to 100x100 and stretched over the text container via preserveAspectRatio="none"
  let pathD = ''
  if (type === 'circle') {
    // A beautiful double-loop path that stays strictly on the outer perimeter to avoid crossing through the text
    pathD = 'M 15,20 C 45,10 85,12 90,40 C 95,60 92,82 80,85 C 50,90 20,88 12,60 C 8,30 25,18 55,15 C 75,12 92,18 85,45 C 80,65 65,80 50,82'
  } else if (type === 'underline') {
    // A slightly wavy, natural-looking underline
    pathD = 'M 2,91 C 32,96 72,87 98,90'
  } else if (type === 'double-underline') {
    // Two offset strokes simulating a double underline
    pathD = 'M 2,83 C 32,87 72,81 98,83 M 10,91 C 40,95 68,90 95,92'
  }

  return (
    <span
      ref={containerRef}
      className="handwritten-highlight"
      style={{
        position: 'relative',
        display: 'inline-block',
        padding: type === 'circle' ? '0.22em 0.45em' : '0 0.1em',
        marginLeft: type === 'circle' ? '0.05em' : '0',
        marginRight: type === 'circle' ? '0.05em' : '0',
        whiteSpace: 'nowrap'
      }}
    >
      <span style={{ position: 'relative', zIndex: 2 }}>{children}</span>
      <svg
        style={{
          position: 'absolute',
          top: type === 'circle' ? '-12%' : '5%',
          left: type === 'circle' ? '-12%' : '0%',
          width: type === 'circle' ? '124%' : '100%',
          height: type === 'circle' ? '124%' : '100%',
          pointerEvents: 'none',
          zIndex: 1,
          overflow: 'visible'
        }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          d={pathD}
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </span>
  )
}
