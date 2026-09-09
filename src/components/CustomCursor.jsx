import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only run on desktop devices with mouse pointer
    const mediaQuery = window.matchMedia('(pointer: fine)')
    if (!mediaQuery.matches) return

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)

      const target = e.target
      const isClickable = target.closest('a, button, input, select, textarea, [role="button"], .cursor-pointer')
      setIsPointer(!!isClickable)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', handleMouseMove)
    document.body.addEventListener('mouseleave', handleMouseLeave)
    document.body.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.body.removeEventListener('mouseleave', handleMouseLeave)
      document.body.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <motion.div
        className="fixed top-0 left-0"
        animate={{
          x: position.x - 14,
          y: position.y - 14,
          scale: isPointer ? 1.25 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 500, mass: 0.1 }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Top chevron */}
          <path
            d="M10 9L14 5L18 9"
            stroke={isPointer ? '#0d9488' : '#0f172a'}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-colors duration-200"
          />
          {/* Right chevron */}
          <path
            d="M19 10L23 14L19 18"
            stroke={isPointer ? '#0d9488' : '#0f172a'}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-colors duration-200"
          />
          {/* Bottom chevron */}
          <path
            d="M18 19L14 23L10 19"
            stroke={isPointer ? '#0d9488' : '#0f172a'}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-colors duration-200"
          />
          {/* Left chevron */}
          <path
            d="M9 18L5 14L9 10"
            stroke={isPointer ? '#0d9488' : '#0f172a'}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-colors duration-200"
          />
          {/* Center dot */}
          <circle
            cx="14"
            cy="14"
            r="1.8"
            fill={isPointer ? '#6366f1' : '#0f172a'}
            className="transition-colors duration-200"
          />
        </svg>
      </motion.div>
    </div>
  )
}
