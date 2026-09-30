import { useLayoutEffect, type RefObject } from 'react'
import { gsap, ScrollTrigger } from '../lib/gsap'

export function useHeroMotion(ref: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const root = ref.current
    if (!root) return
    const media = gsap.matchMedia()
    let mounted = true
    // Font metrics may settle after initial layout; refresh cached trigger positions once.
    void document.fonts.ready.then(() => { if (mounted) ScrollTrigger.refresh() })

    media.add('(prefers-reduced-motion: no-preference)', () => {
      const entrance = gsap.timeline({ defaults: { ease: 'power3.out' } })
        .from('[data-hero-identity]', { y: 12, opacity: 0, duration: 0.6 })
        .from('[data-hero-name]', { y: 18, opacity: 0, duration: 0.85 }, 0.08)
        .from('[data-hero-line]', { y: 36, opacity: 0, duration: 0.9, stagger: 0.1 }, 0.12)
        .from('[data-hero-detail]', { y: 18, opacity: 0, duration: 0.7, stagger: 0.08 }, 0.4)

      // Keyboard users should never wait for a link to become visible.
      const showOnFocus = () => { entrance.progress(1) }
      root.addEventListener('focusin', showOnFocus)
      return () => root.removeEventListener('focusin', showOnFocus)
    }, root)

    // Separate element from the entrance tween so transforms never compete.
    media.add('(min-width: 64rem) and (prefers-reduced-motion: no-preference)', () => {
      gsap.to('[data-hero-drift]', {
        y: -32,
        ease: 'none',
        scrollTrigger: {
          trigger: root,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.6,
        },
      })
    }, root)

    // Reverts inline styles, timelines, triggers and media-query listeners,
    // including React StrictMode's setup / cleanup cycle.
    return () => { mounted = false; media.revert() }
  }, [ref])
}