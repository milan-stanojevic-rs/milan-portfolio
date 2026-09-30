import { useLayoutEffect, type RefObject } from 'react'
import { gsap, ScrollTrigger } from '../lib/gsap'

export function useAboutMotion(ref: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const root = ref.current
    if (!root) return
    const media = gsap.matchMedia()
    let mounted = true
    void document.fonts.ready.then(() => { if (mounted) ScrollTrigger.refresh() })

    media.add('(prefers-reduced-motion: no-preference)', () => {
      // Reveal whole ideas/index rows, never individual lines or technologies.
      root.querySelectorAll<HTMLElement>('[data-about-reveal]').forEach((group) => {
        gsap.from(group, {
          y: 16, opacity: 0.4, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: group, start: 'top 92%', once: true },
        })
      })
    }, root)

    media.add('(min-width: 64rem) and (prefers-reduced-motion: no-preference)', () => {
      gsap.to('[data-about-display]', {
        y: 20, ease: 'none',
        scrollTrigger: { trigger: root.querySelector('.about-intro'), start: 'top bottom', end: 'bottom top', scrub: 0.8 },
      })
      root.querySelectorAll<HTMLElement>('[data-about-number]').forEach((number) => {
        gsap.fromTo(number, { y: 10 }, {
          y: -14, ease: 'none',
          scrollTrigger: { trigger: number.parentElement, start: 'top bottom', end: 'bottom top', scrub: 0.8 },
        })
      })
    }, root)

    return () => { mounted = false; media.revert() }
  }, [ref])
}