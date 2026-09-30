import { useEffect, useRef, useState } from 'react'

const navigationItems = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const sections = navigationItems.map((item) => document.querySelector(item.href))
    function updateActiveSection() {
      const readingLine = Math.min(window.innerHeight * 0.3, 240)
      let current = ''
      sections.forEach((section, index) => {
        if (section && section.getBoundingClientRect().top <= readingLine) {
          current = navigationItems[index].href
        }
      })
      setActiveSection(current)
    }
    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)
    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    const desktopQuery = window.matchMedia('(min-width: 48rem)')
    function handleBreakpointChange(event: MediaQueryListEvent) {
      if (event.matches) setIsMenuOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    desktopQuery.addEventListener('change', handleBreakpointChange)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      desktopQuery.removeEventListener('change', handleBreakpointChange)
    }
  }, [isMenuOpen])

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className="portfolio-nav sticky top-0 z-50 bg-canvas text-ink supports-backdrop-filter:bg-canvas/90 supports-backdrop-filter:backdrop-blur-sm">
      <div className="mx-auto flex h-18 max-w-[1200px] items-center justify-between px-4 sm:px-6 md:grid md:grid-cols-[1fr_auto_1fr] lg:px-8">
        <a
          href="#top"
          onClick={closeMenu}
          aria-label="Milan Stanojević portfolio — back to top"
          className="justify-self-start py-2 text-xl font-semibold tracking-tighter no-underline"
        >
          MS.
        </a>

        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navigationItems.map((navigationItem) => (
              <li key={navigationItem.href}>
                <a
                  href={navigationItem.href}
                  aria-current={activeSection === navigationItem.href ? 'location' : undefined}
                  className={`inline-block py-2 text-sm font-medium no-underline transition-colors duration-150 hover:text-ink ${activeSection === navigationItem.href ? 'text-ink' : 'text-muted'}`}
                >
                  {navigationItem.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 justify-self-end sm:gap-4 md:flex">
          <a
            href="https://github.com/milanNbg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link inline-flex min-h-11 items-center py-2 text-sm font-semibold whitespace-nowrap no-underline transition-colors duration-150 hover:text-muted"
          >
            GitHub ↗
          </a>
          <a
            href="/Milan_Stanojevic_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center px-3 py-2 text-sm font-semibold whitespace-nowrap no-underline transition-colors duration-150 hover:bg-surface"
          >
            CV ↓
          </a>
        </div>
        <button
          ref={menuButtonRef}
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex min-h-11 items-center px-3 py-2 text-sm font-semibold hover:bg-surface md:hidden"
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!isMenuOpen}
        className="absolute inset-x-0 top-full max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-y border-line bg-canvas px-4 py-4 sm:px-6 md:hidden"
      >
        <ul className="space-y-1">
          {navigationItems.map((navigationItem) => (
            <li key={navigationItem.href}>
              <a
                href={navigationItem.href}
                onClick={closeMenu}
                className="flex min-h-11 items-center py-2 text-sm font-medium text-muted no-underline hover:text-ink"
              >
                {navigationItem.label}
              </a>
            </li>
          ))}
        </ul>
        <ul className="mt-3 flex items-center gap-6 border-t border-line pt-3">
          <li>
            <a
              href="https://github.com/milanNbg"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="text-link inline-flex min-h-11 items-center py-2 text-sm font-semibold no-underline hover:text-muted"
            >
              GitHub ↗
            </a>
          </li>
          <li>
            <a
              href="/Milan_Stanojevic_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="inline-flex min-h-11 items-center px-3 py-2 text-sm font-semibold no-underline hover:bg-surface"
            >
              CV ↓
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
