import { useLayoutEffect, type RefObject } from 'react'
import { gsap, ScrollTrigger } from '../lib/gsap'

export function useContactMotion(ref: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const root = ref.current
    if (!root) return
    const media = gsap.matchMedia()
    let mounted = true
    void document.fonts.ready.then(() => { if (mounted) ScrollTrigger.refresh() })

    media.add('(prefers-reduced-motion: no-preference)', () => {
      const reveal = gsap.from('[data-contact-reveal]', {
        y: 16, opacity: 0.4, duration: 0.8, stagger: 0.12, ease: 'power2.out',
        scrollTrigger: { trigger: root.querySelector('.contact-invitation'), start: 'top 95%', once: true },
      })
      const finish = () => { reveal.progress(1); reveal.scrollTrigger?.kill() }
      root.addEventListener('focusin', finish)
      return () => root.removeEventListener('focusin', finish)
    }, root)
    media.add('(min-width: 64rem) and (prefers-reduced-motion: no-preference)', () => {
      gsap.to('[data-contact-display]', {
        y: 6, ease: 'none',
        scrollTrigger: { trigger: root, start: 'top bottom', end: 'bottom bottom', scrub: 0.8 },
      })
    }, root)
    return () => { mounted = false; media.revert() }
  }, [ref])
}