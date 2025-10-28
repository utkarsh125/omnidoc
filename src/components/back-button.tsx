'use client'

import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import gsap from 'gsap'

interface BackButtonProps {
  text?: string
  href?: string
}

export default function BackButton({ text = 'Back', href }: BackButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const spanRef = useRef<HTMLSpanElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (!buttonRef.current || !spanRef.current) return

    const span = spanRef.current
    const tl = gsap.timeline({ paused: true })

    tl.to(span, { duration: 0.2, yPercent: -150, ease: "power2.in" })
    tl.set(span, { yPercent: 150 })
    tl.to(span, { duration: 0.2, yPercent: 0 })

    const button = buttonRef.current
    const handleMouseEnter = () => tl.play(0)

    button.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [])

  const handleClick = () => {
    if (href) {
      router.push(href)
    } else {
      router.back()
    }
  }

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className="inline-grid border border-theme-primary rounded-full px-6 py-2.5 sm:py-3 min-w-[120px] sm:min-w-[150px] text-theme-primary overflow-hidden text-center cursor-pointer hover:bg-theme-primary hover:text-theme-secondary transition-colors duration-200 text-sm sm:text-base font-medium"
    >
      <span ref={spanRef} className="inline-block">
        {text}
      </span>
    </button>
  )
}
