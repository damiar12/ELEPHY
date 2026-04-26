/**
 * GSAP global setup — register all plugins once at app level.
 * Import this file once in main.jsx before any component renders.
 */
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

// Project-wide// Set global defaults for all animations
gsap.defaults({
  duration: 0.8,
  ease: 'expo.out'
})

export { gsap, ScrollTrigger, useGSAP }
