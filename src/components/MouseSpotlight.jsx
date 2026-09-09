import { useEffect, useState } from 'react'

export default function MouseSpotlight() {
  const [position, setPosition] = useState({ x: -1000, y: -1000 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isHovered) setIsHovered(true)
    }

    const handleMouseLeave = () => {
      setIsHovered(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.body.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.body.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isHovered])

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-20 transition-opacity duration-500 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        background: `radial-gradient(550px circle at ${position.x}px ${position.y}px, rgba(139, 92, 246, 0.15) 0%, rgba(99, 102, 241, 0.08) 45%, rgba(255, 255, 255, 0) 100%)`,
      }}
    />
  )
}
