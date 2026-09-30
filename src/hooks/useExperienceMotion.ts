import { useLayoutEffect, type RefObject } from 'react'
import { gsap, ScrollTrigger } from '../lib/gsap'

export function useExperienceMotion(ref: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const root = ref.current
    if (!root) return
    const media = gsap.matchMedia()
    let mounted = true
    void document.fonts.ready.then(() => { if (mounted) ScrollTrigger.refresh() })

    media.add('(prefers-reduced-motion: no-preference)', () => {
      const cleanups: (() => void)[] = []
      root.querySelectorAll<HTMLElement>('[data-experience-chapter]').forEach((chapter) => {
        const reveal = gsap.from(chapter.querySelectorAll('[data-experience-reveal]'), {
          y: 18, opacity: 0.35, duration: 0.8, stagger: 0.12, ease: 'power2.out',
          scrollTrigger: { trigger: chapter, start: 'top 88%', once: true },
        })
        ScrollTrigger.create({
          trigger: chapter, start: 'top 65%', end: 'bottom 25%',
          toggleClass: { targets: chapter, className: 'experience-chapter-active' },
        })
        const finish = () => { reveal.progress(1); reveal.scrollTrigger?.kill() }
        chapter.addEventListener('focusin', finish)
        cleanups.push(() => chapter.removeEventListener('focusin', finish))
      })
      return () => {
        cleanups.forEach((cleanup) => cleanup())
        root.querySelectorAll('.experience-chapter-active').forEach((chapter) => chapter.classList.remove('experience-chapter-active'))
      }
    }, root)

    media.add('(min-width: 64rem) and (prefers-reduced-motion: no-preference)', () => {
      gsap.to('[data-experience-display]', {
        y: 22, ease: 'none',
        scrollTrigger: { trigger: root.querySelector('.experience-intro'), start: 'top bottom', end: 'bottom top', scrub: 0.8 },
      })
    }, root)

    return () => { mounted = false; media.revert() }
  }, [ref])
}