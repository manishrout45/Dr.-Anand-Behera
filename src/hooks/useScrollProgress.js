import { useEffect, useState } from 'react'

/**
 * Tracks scroll progress (0 -> 1) of a pinned/sticky section.
 * progress = 0 when the top of containerRef reaches the top of the viewport,
 * progress = 1 when the bottom of containerRef reaches the bottom of the viewport.
 */
export default function useScrollProgress(containerRef) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let raf = null

    const compute = () => {
      const rect = el.getBoundingClientRect()
      const total = rect.height - window.innerHeight
      if (total <= 0) {
        setProgress(0)
        return
      }
      const scrolled = -rect.top
      const p = Math.min(1, Math.max(0, scrolled / total))
      setProgress(p)
    }

    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        compute()
        raf = null
      })
    }

    compute()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [containerRef])

  return progress
}
