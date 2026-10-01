import { useEffect, useState } from 'react'

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    function updateVisibility() { setIsVisible(window.scrollY >= 700) }
    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })
    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])

  function returnFocus() {
    // Keep keyboard focus in a visible place when this control disappears at the top.
    document.querySelector<HTMLAnchorElement>('header a[href="#top"]')?.focus({ preventScroll: true })
  }

  return (
    <a href="#top" aria-label="Back to top" onClick={returnFocus}
      tabIndex={isVisible ? undefined : -1} aria-hidden={!isVisible}
      className={`back-to-top editorial-top ${isVisible ? 'is-visible' : ''}`}>
      Top <span aria-hidden="true" className="motion-arrow arrow-up">↑</span>
    </a>
  )
}

export default BackToTop