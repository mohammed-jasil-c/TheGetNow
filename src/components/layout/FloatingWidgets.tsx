'use client'

import { useState, useEffect } from 'react'
import { FaWhatsapp } from 'react-icons/fa6'

export default function FloatingWidgets() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <a
      href="https://wa.me/919463407140"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-110 active:scale-95 group"
      style={{ background: '#25D366', animation: 'scale-in 0.4s ease' }}
    >
      <FaWhatsapp className="w-7 h-7 text-white" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
      <span className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 bg-black text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        Chat with us!
      </span>
    </a>
  )
}
