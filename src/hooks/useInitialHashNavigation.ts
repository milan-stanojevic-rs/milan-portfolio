import { useEffect } from 'react'
import { ScrollTrigger } from '../lib/gsap'

// React mounts fragment targets after the browser's initial anchor lookup.
export function useInitialHashNavigation() {
  useEffect(() => {
    const hash = window.location.hash
    if (!hash) return
    let cancelled = false
    let frame = 0
    let removeLoadListener = () => {}
    const loaded = new Promise<void>((resolve) => {
      if (document.readyState === 'complete') resolve()
      else {
        window.addEventListener('load', resolveLoad, { once: true })
        removeLoadListener = () => window.removeEventListener('load', resolveLoad)
      }
      function resolveLoad() { resolve() }
    })
    // Never pull users back after they start navigating or scrolling themselves.
    const cancel = () => { cancelled = true; cancelAnimationFrame(frame) }
    window.addEventListener('wheel', cancel, { passive: true })
    window.addEventListener('touchstart', cancel, { passive: true })
    window.addEventListener('keydown', cancel)
    window.addEventListener('hashchange', cancel)

    void Promise.all([loaded, document.fonts.ready]).then(() => {
      if (cancelled) return
      // Run after section hooks' font callbacks; refresh before resolving geometry.
      frame = requestAnimationFrame(() => {
        if (cancelled || window.location.hash !== hash) return
        let id: string
        try { id = decodeURIComponent(hash.slice(1)) } catch { return }
        const target = document.getElementById(id)
        if (!target) return
        ScrollTrigger.refresh()
        target.scrollIntoView({ behavior: 'instant', block: 'start' })
        ScrollTrigger.update()
      })
    })
    return () => {
      cancel()
      removeLoadListener()
      window.removeEventListener('wheel', cancel)
      window.removeEventListener('touchstart', cancel)
      window.removeEventListener('keydown', cancel)
      window.removeEventListener('hashchange', cancel)
    }
  }, [])
}
