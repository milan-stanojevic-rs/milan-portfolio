import { useLayoutEffect, type RefObject } from 'react'
import { gsap, ScrollTrigger } from '../lib/gsap'

export function useSelectedWorkMotion(ref: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const root = ref.current
    if (!root) return
    const media = gsap.matchMedia()
    let mounted = true
    // Font metrics may settle after initial layout; refresh cached trigger positions once.
    void document.fonts.ready.then(() => { if (mounted) ScrollTrigger.refresh() })

    media.add('(prefers-reduced-motion: no-preference)', () => {
      const cleanups: (() => void)[] = []
      root.querySelectorAll<HTMLElement>('[data-work-project]').forEach((project) => {
        const copy = project.querySelector<HTMLElement>('[data-work-copy]')
        if (!copy) return
        const reveal = gsap.from(copy.children, {
          y: 18, opacity: 0, duration: 0.75, stagger: 0.07, ease: 'power2.out',
          scrollTrigger: { trigger: copy, start: 'top 90%', once: true },
        })
        const showOnFocus = () => { reveal.progress(1); reveal.scrollTrigger?.kill() }
        project.addEventListener('focusin', showOnFocus)
        cleanups.push(() => project.removeEventListener('focusin', showOnFocus))
      })
      root.querySelectorAll<HTMLElement>('[data-work-visual] .project-object').forEach((image) => {
        gsap.from(image, {
          opacity: 0.3, y: 16, scale: 0.985, duration: 1, ease: 'power2.out',
          scrollTrigger: { trigger: image, start: 'top 95%', once: true },
        })
      })
      return () => cleanups.forEach((cleanup) => cleanup())
    }, root)

    media.add('(min-width: 64rem) and (prefers-reduced-motion: no-preference)', () => {
      gsap.to('[data-work-heading]', {
        y: 24, stagger: 0.05, ease: 'none',
        scrollTrigger: { trigger: root.querySelector('.work-intro'), start: 'top bottom', end: 'bottom top', scrub: 0.8 },
      })
      root.querySelectorAll<HTMLElement>('[data-work-title]').forEach((title) => {
        gsap.to(title, { y: 18, ease: 'none', scrollTrigger: { trigger: title.parentElement, start: 'top bottom', end: 'bottom top', scrub: 0.8 } })
      })
      root.querySelectorAll<HTMLElement>('[data-work-drift]').forEach((layer) => {
        gsap.fromTo(layer, { y: 16 }, {
          y: Number(layer.dataset.workDrift), ease: 'none',
          scrollTrigger: { trigger: layer.parentElement, start: 'top bottom', end: 'bottom top', scrub: 0.8 },
        })
      })
    }, root)

    return () => { mounted = false; media.revert() }
  }, [ref])
}